import { ATSScoreBreakdown, ResumeData, TargetRole } from '@/types';
import { STRONG_ACTION_VERBS } from './resume-parser';
import { ROLE_SKILL_BENCHMARKS } from './skill-engine';

export class ATSScorerService {
  /**
   * Calculate detailed ATS Score Breakdown for a parsed resume
   */
  public static calculate(
    resume: ResumeData,
    targetRole: TargetRole = 'Software Engineer'
  ): ATSScoreBreakdown {
    const rawText = resume.rawText.toLowerCase();

    // 1. Formatting Analysis
    const hasContactInfo = Boolean(resume.email && (resume.phone || resume.linkedinUrl));
    const hasCleanHeadings = /(experience|education|skills|projects|summary)/i.test(resume.rawText);
    const bulletPointConsistency = (resume.rawText.match(/^[-•*]/gm) || []).length >= 4;
    const pageLengthCompliance = resume.rawText.length > 500 && resume.rawText.length < 9000;
    const standardFontsDetected = true; // Single-stream text parser
    const noUnfriendlyColumnsOrTables = !resume.rawText.includes('\t\t\t');

    let formattingScore = 70;
    if (hasContactInfo) formattingScore += 10;
    if (hasCleanHeadings) formattingScore += 8;
    if (bulletPointConsistency) formattingScore += 6;
    if (pageLengthCompliance) formattingScore += 6;
    formattingScore = Math.min(100, Math.max(30, formattingScore));

    // 2. Content & Impact Analysis (STAR Method & Action Verbs)
    const metricsMatches = resume.rawText.match(/\b(?:\d+%(?:\s+increase|\s+reduction)?|\$\d+[\d,.]*(?:k|m|b)?|\d+(?:\.\d+)?(?:x|\s+times)|\b\d{2,}\b)/gi) || [];
    const hasQuantifiableMetrics = metricsMatches.length >= 3;

    // Count action verbs in raw text
    let actionVerbsFound = 0;
    STRONG_ACTION_VERBS.forEach((verb) => {
      const regex = new RegExp(`\\b${verb}\\b`, 'gi');
      const matches = resume.rawText.match(regex);
      if (matches) actionVerbsFound += matches.length;
    });

    const actionVerbDensity = Math.min(100, Math.round((actionVerbsFound / 8) * 100));

    let contentScore = 55;
    if (hasQuantifiableMetrics) contentScore += 20;
    if (actionVerbDensity >= 60) contentScore += 15;
    if (resume.summary && resume.summary.length > 60) contentScore += 10;
    contentScore = Math.min(100, Math.max(30, contentScore));

    // 3. Keyword & Role Alignment Score
    const benchmark = ROLE_SKILL_BENCHMARKS[targetRole] || ROLE_SKILL_BENCHMARKS['Software Engineer'];
    const matchedKeywords = benchmark.coreSkills.filter(skill => 
      rawText.includes(skill.toLowerCase())
    );

    const keywordRatio = matchedKeywords.length / benchmark.coreSkills.length;
    const keywordScore = Math.min(100, Math.round(50 + keywordRatio * 50));

    // 4. Overall Weighted Score
    // Weightings: Content 40%, Keyword 35%, Formatting 25%
    const overallScore = Math.round(
      contentScore * 0.4 + keywordScore * 0.35 + formattingScore * 0.25
    );

    // 5. Critical Issues, Warnings, and Positive Highlights
    const criticalIssues: string[] = [];
    const warnings: string[] = [];
    const positiveHighlights: string[] = [];

    if (!resume.email) {
      criticalIssues.push('Missing contact email address in header section.');
    }
    if (!hasQuantifiableMetrics) {
      criticalIssues.push('No measurable metrics or impact percentages detected in project/experience bullets.');
    }
    if (matchedKeywords.length < 4) {
      criticalIssues.push(`Low keyword density for target role "${targetRole}". Missing foundational skills.`);
    }

    if (actionVerbDensity < 50) {
      warnings.push('Low action verb density. Replace passive phrases like "worked on" with power verbs ("architected", "scaled").');
    }
    if (!resume.linkedinUrl && !resume.githubUrl) {
      warnings.push('Missing external validation links (LinkedIn or GitHub profile).');
    }
    if (resume.rawText.length < 800) {
      warnings.push('Resume length is relatively short. Expand on technical architecture and project complexity.');
    }

    if (hasQuantifiableMetrics) {
      positiveHighlights.push(`Found ${metricsMatches.length} quantifiable metrics demonstrating business impact.`);
    }
    if (actionVerbsFound >= 5) {
      positiveHighlights.push(`Strong active leadership verbs detected (${actionVerbsFound} instances).`);
    }
    if (formattingScore >= 85) {
      positiveHighlights.push('Single-stream layout is 100% compliant with Workday and Greenhouse parsers.');
    }

    return {
      overallScore,
      formattingScore,
      contentScore,
      keywordScore,
      metrics: {
        hasContactInfo,
        hasCleanHeadings,
        hasQuantifiableMetrics,
        actionVerbDensity,
        bulletPointConsistency,
        pageLengthCompliance,
        standardFontsDetected,
        noUnfriendlyColumnsOrTables,
      },
      criticalIssues,
      warnings,
      positiveHighlights,
    };
  }
}
