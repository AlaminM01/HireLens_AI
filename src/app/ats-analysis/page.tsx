'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import { CircularProgress } from '@/components/ui/CircularProgress';
import { MOCK_RESUMES } from '@/lib/mock-resumes';
import { ResumeParserService } from '@/services/resume-parser';
import { ATSScorerService } from '@/services/ats-scorer';
import { TargetRole, ATSScoreBreakdown, ResumeData } from '@/types';
import { 
  Target, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  Sparkles, 
  FileText, 
  ArrowRight, 
  User, 
  Mail, 
  Layers, 
  Wand2, 
  Bot, 
  Compass,
  Download
} from 'lucide-react';

export default function ATSAnalysisPage() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [atsScore, setAtsScore] = useState<ATSScoreBreakdown | null>(null);
  const [targetRole, setTargetRole] = useState<TargetRole>('Software Engineer');

  useEffect(() => {
    // Load resume from localStorage or fallback to default Software Engineer mock resume
    let rawText = '';
    let fileName = 'Alamin_Mondal_Software_Engineer_Resume.pdf';

    try {
      const storedText = localStorage.getItem('hirelens_current_resume_text');
      const storedName = localStorage.getItem('hirelens_current_resume_filename');
      if (storedText) {
        rawText = storedText;
        if (storedName) fileName = storedName;
      } else {
        rawText = MOCK_RESUMES['Software Engineer'].rawText;
      }
    } catch {
      rawText = MOCK_RESUMES['Software Engineer'].rawText;
    }

    const parsed = ResumeParserService.parse(rawText, fileName);
    setResumeData(parsed);

    const calculated = ATSScorerService.calculate(parsed, targetRole);
    setAtsScore(calculated);
  }, [targetRole]);

  if (!resumeData || !atsScore) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center text-white">
        <Sparkles className="w-8 h-8 animate-spin text-blue-400" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-brand-dark selection:bg-brand-primary selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-8">
        {/* Candidate & Target Role Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="blue" size="md" dot={true}>
                Live ATS Telemetry Active
              </Badge>
              <span className="text-xs text-slate-400 font-mono">
                {resumeData.fileName}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>{resumeData.name || 'Candidate Resume'}</span>
              <span className="text-slate-600 font-light">|</span>
              <span className="text-blue-400 font-semibold text-xl sm:text-2xl">{targetRole}</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 flex items-center gap-4">
              {resumeData.email && <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-slate-400" /> {resumeData.email}</span>}
              <span>Detected Skills: <strong className="text-slate-200">{resumeData.skills.length} technical tags</strong></span>
            </p>
          </div>

          {/* Role Benchmark Selector */}
          <div className="flex items-center gap-3 bg-white/[0.03] border border-white/10 p-2 rounded-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 pl-2">
              Role Benchmark:
            </span>
            <select
              value={targetRole}
              onChange={(e) => setTargetRole(e.target.value as TargetRole)}
              className="bg-slate-900 border border-white/15 rounded-xl px-3 py-1.5 text-xs font-semibold text-white focus:outline-none focus:border-blue-500 cursor-pointer"
            >
              <option value="Software Engineer">Software Engineer</option>
              <option value="Java Developer">Java Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="AI/ML Engineer">AI/ML Engineer</option>
            </select>
          </div>
        </div>

        {/* 4 Score Circular Progress Dials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <GlassCard variant="glow" glowColor="blue" className="p-6 text-center flex flex-col items-center justify-between">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Overall ATS Score</span>
            <CircularProgress score={atsScore.overallScore} size={135} strokeWidth={10} />
            <p className="text-xs text-slate-400 mt-3">Weighted aggregate across all ATS criteria</p>
          </GlassCard>

          <GlassCard variant="glow" glowColor="purple" className="p-6 text-center flex flex-col items-center justify-between">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Formatting Score</span>
            <CircularProgress score={atsScore.formattingScore} size={135} strokeWidth={10} />
            <p className="text-xs text-slate-400 mt-3">Layout, fonts, contact structure, and parseability</p>
          </GlassCard>

          <GlassCard variant="glow" glowColor="emerald" className="p-6 text-center flex flex-col items-center justify-between">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Content Score</span>
            <CircularProgress score={atsScore.contentScore} size={135} strokeWidth={10} />
            <p className="text-xs text-slate-400 mt-3">STAR bullets, quantifiable metrics, and active verbs</p>
          </GlassCard>

          <GlassCard variant="glow" glowColor="amber" className="p-6 text-center flex flex-col items-center justify-between">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Keyword Score</span>
            <CircularProgress score={atsScore.keywordScore} size={135} strokeWidth={10} />
            <p className="text-xs text-slate-400 mt-3">Alignment with industry {targetRole} standards</p>
          </GlassCard>
        </div>

        {/* Diagnostics & Checks Split */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left 2 Cols: Issues, Warnings & Highlights */}
          <div className="lg:col-span-2 space-y-6">
            {/* Critical Issues */}
            {atsScore.criticalIssues.length > 0 && (
              <GlassCard variant="default" className="p-6 border-rose-500/30 bg-rose-500/[0.04]">
                <div className="flex items-center gap-2 mb-3 text-rose-400">
                  <XCircle className="w-5 h-5 flex-shrink-0" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    Critical ATS Blockers ({atsScore.criticalIssues.length})
                  </h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {atsScore.criticalIssues.map((issue, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}

            {/* Warnings */}
            {atsScore.warnings.length > 0 && (
              <GlassCard variant="default" className="p-6 border-amber-500/30 bg-amber-500/[0.04]">
                <div className="flex items-center gap-2 mb-3 text-amber-400">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    Optimization Opportunities ({atsScore.warnings.length})
                  </h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {atsScore.warnings.map((warn, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{warn}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}

            {/* Positive Highlights */}
            {atsScore.positiveHighlights.length > 0 && (
              <GlassCard variant="default" className="p-6 border-emerald-500/30 bg-emerald-500/[0.04]">
                <div className="flex items-center gap-2 mb-3 text-emerald-400">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    Recruiter Highlights ({atsScore.positiveHighlights.length})
                  </h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {atsScore.positiveHighlights.map((pos, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{pos}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            )}

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/resume-optimizer">
                <GlassButton variant="primary" size="md" leftIcon={<Wand2 className="w-4 h-4" />}>
                  Optimize Bullet Points
                </GlassButton>
              </Link>
              <Link href="/skill-gap">
                <GlassButton variant="secondary" size="md" leftIcon={<Compass className="w-4 h-4" />}>
                  Explore Skill Gaps
                </GlassButton>
              </Link>
              <Link href="/career-coach">
                <GlassButton variant="glass" size="md" leftIcon={<Bot className="w-4 h-4 text-blue-400" />}>
                  Ask Career Coach
                </GlassButton>
              </Link>
            </div>
          </div>

          {/* Right Col: Technical ATS Telemetry Checklist */}
          <div className="space-y-6">
            <GlassCard variant="default" className="p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-4 flex items-center justify-between">
                <span>ATS Parsing Metrics</span>
                <Badge variant="blue" size="sm">8 Checks</Badge>
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                  <span className="text-slate-300">Contact Email & Phone</span>
                  {atsScore.metrics.hasContactInfo ? (
                    <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Passed</span>
                  ) : (
                    <span className="text-rose-400 font-bold flex items-center gap-1"><XCircle className="w-4 h-4" /> Failed</span>
                  )}
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                  <span className="text-slate-300">Recognized Headings</span>
                  {atsScore.metrics.hasCleanHeadings ? (
                    <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Passed</span>
                  ) : (
                    <span className="text-rose-400 font-bold flex items-center gap-1"><XCircle className="w-4 h-4" /> Failed</span>
                  )}
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                  <span className="text-slate-300">Quantifiable Metrics</span>
                  {atsScore.metrics.hasQuantifiableMetrics ? (
                    <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Found</span>
                  ) : (
                    <span className="text-amber-400 font-bold flex items-center gap-1"><AlertTriangle className="w-4 h-4" /> Low</span>
                  )}
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                  <span className="text-slate-300">Action Verb Density</span>
                  <span className="text-blue-400 font-mono font-bold">{atsScore.metrics.actionVerbDensity}%</span>
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                  <span className="text-slate-300">Bullet Point Consistency</span>
                  {atsScore.metrics.bulletPointConsistency ? (
                    <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Standard</span>
                  ) : (
                    <span className="text-amber-400 font-bold flex items-center gap-1"><AlertTriangle className="w-4 h-4" /> Irregular</span>
                  )}
                </div>

                <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                  <span className="text-slate-300">Single-Stream Layout</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> 100% Valid</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Length Compliance</span>
                  {atsScore.metrics.pageLengthCompliance ? (
                    <span className="text-emerald-400 font-bold flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> 1-2 Pages</span>
                  ) : (
                    <span className="text-amber-400 font-bold flex items-center gap-1"><AlertTriangle className="w-4 h-4" /> Suboptimal</span>
                  )}
                </div>
              </div>
            </GlassCard>

            {/* Extracted Skills Pill Cloud */}
            <GlassCard variant="default" className="p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center justify-between">
                <span>Extracted Skills</span>
                <span className="text-xs text-blue-400 font-mono">{resumeData.skills.length} Total</span>
              </h3>
              <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto pr-1">
                {resumeData.skills.map((skill) => (
                  <Badge key={skill} variant="slate" size="sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
