// HireLens AI - Universal Domain Types

export type TargetRole = 
  | 'Software Engineer'
  | 'Java Developer'
  | 'Full Stack Developer'
  | 'Data Analyst'
  | 'AI/ML Engineer';

export interface ResumeData {
  id: string;
  fileName: string;
  fileSize: number;
  uploadedAt: string;
  rawText: string;
  name?: string;
  email?: string;
  phone?: string;
  location?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  portfolioUrl?: string;
  summary?: string;
  skills: string[];
  experience: WorkExperience[];
  education: Education[];
  projects: ProjectItem[];
  certifications: string[];
}

export interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  location?: string;
  bullets: string[];
}

export interface Education {
  institution: string;
  degree: string;
  graduationYear: string;
  gpa?: string;
}

export interface ProjectItem {
  name: string;
  techStack: string[];
  description: string;
  bullets: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ATSScoreBreakdown {
  overallScore: number;       // 0-100
  formattingScore: number;    // 0-100
  contentScore: number;       // 0-100
  keywordScore: number;       // 0-100
  metrics: {
    hasContactInfo: boolean;
    hasCleanHeadings: boolean;
    hasQuantifiableMetrics: boolean;
    actionVerbDensity: number; // 0-100
    bulletPointConsistency: boolean;
    pageLengthCompliance: boolean;
    standardFontsDetected: boolean;
    noUnfriendlyColumnsOrTables: boolean;
  };
  criticalIssues: string[];
  warnings: string[];
  positiveHighlights: string[];
}

export interface SkillGapAnalysisResult {
  targetRole: TargetRole;
  matchPercentage: number;
  currentSkills: string[];
  missingSkills: string[];
  recommendedSkills: {
    skill: string;
    priority: 'Critical' | 'High' | 'Medium' | 'Nice-to-have';
    learningCurve: 'Quick Win' | 'Moderate' | 'Advanced';
    resourceRecommendation: string;
  }[];
  domainReadinessScore: number;
}

export interface ResumeImprovementSuggestion {
  category: 'Summary' | 'Projects' | 'Achievements' | 'Technical Skills';
  title: string;
  before: string;
  after: string;
  rationale: string;
  impactScoreIncrease: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  suggestedPrompts?: string[];
  actionLink?: string;
}

export interface InterviewReadinessData {
  resumeStrengthScore: number;      // 0-100
  technicalReadinessScore: number;  // 0-100
  interviewReadinessScore: number;  // 0-100
  radarMetrics: {
    category: string;
    score: number;
    fullMark: number;
  }[];
  strengths: string[];
  weakAreas: string[];
  recommendedNextSteps: string[];
}

export interface JobMatchResult {
  jobTitle: string;
  company?: string;
  matchPercentage: number;
  atsPassProbability: 'High' | 'Medium' | 'Low';
  matchingKeywords: string[];
  missingKeywords: string[];
  missingSkills: string[];
  tailoringRecommendations: string[];
}

export interface PortfolioAnalysisResult {
  githubUsername?: string;
  linkedinProfile?: string;
  portfolioStrengthScore: number; // 0-100
  githubMetrics?: {
    publicRepos: number;
    starsCount: number;
    commitFrequencyRating: 'High' | 'Moderate' | 'Low';
    topLanguages: string[];
    readmesQualityScore: number;
  };
  linkedinMetrics?: {
    headlineQuality: 'Excellent' | 'Good' | 'Needs Improvement';
    aboutSectionClarity: 'High' | 'Average' | 'Missing';
    endorsementsScore: number;
  };
  actionableInsights: string[];
}

export interface CareerRoadmapPhase {
  phaseTitle: string; // "30-Day Plan", "60-Day Plan", "90-Day Plan"
  timeframe: string;
  focusArea: string;
  goals: string[];
  actionChecklist: {
    item: string;
    isCompleted: boolean;
    estimatedHours: number;
  }[];
  keyMilestone: string;
}

export interface AnalyticsTrendItem {
  date: string;
  atsScore: number;
  keywordScore: number;
  readinessScore: number;
}

export interface JobApplicationTrackerItem {
  id: string;
  company: string;
  position: string;
  appliedDate: string;
  status: 'Drafting' | 'Applied' | 'Screening' | 'Interviewing' | 'Offer' | 'Rejected';
  matchScore: number;
  resumeVersion: string;
}
