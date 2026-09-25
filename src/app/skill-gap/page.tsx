'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import { CircularProgress } from '@/components/ui/CircularProgress';
import { ResumeParserService } from '@/services/resume-parser';
import { SkillEngineService } from '@/services/skill-engine';
import { MOCK_RESUMES } from '@/lib/mock-resumes';
import { TargetRole, SkillGapAnalysisResult } from '@/types';
import { 
  Compass, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  Bot, 
  ArrowRight, 
  Layers, 
  Sparkles,
  Zap,
  TrendingUp,
  Target
} from 'lucide-react';

const targetRoles: TargetRole[] = [
  'Software Engineer',
  'Java Developer',
  'Full Stack Developer',
  'Data Analyst',
  'AI/ML Engineer',
];

export default function SkillGapPage() {
  const [selectedRole, setSelectedRole] = useState<TargetRole>('Software Engineer');
  const [analysisResult, setAnalysisResult] = useState<SkillGapAnalysisResult | null>(null);
  const [extractedSkills, setExtractedSkills] = useState<string[]>([]);

  useEffect(() => {
    let rawText = '';
    try {
      const stored = localStorage.getItem('hirelens_current_resume_text');
      rawText = stored || MOCK_RESUMES['Software Engineer'].rawText;
    } catch {
      rawText = MOCK_RESUMES['Software Engineer'].rawText;
    }

    const parsed = ResumeParserService.parse(rawText);
    setExtractedSkills(parsed.skills);

    const result = SkillEngineService.analyze(parsed.skills, selectedRole);
    setAnalysisResult(result);
  }, [selectedRole]);

  if (!analysisResult) {
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
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="purple" size="md" dot={true}>
                Industry Benchmark Matrix
              </Badge>
              <span className="text-xs text-slate-400">
                Comparing your profile against Tier-1 requirements
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skill Gap <span className="text-gradient">Analysis</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Identify missing technologies, understand market demands, and bridge competency gaps.
            </p>
          </div>

          {/* Role Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {targetRoles.map((role) => (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedRole === role
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 border border-blue-400/30'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {role}
              </button>
            ))}
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard variant="glow" glowColor="blue" className="p-6 flex items-center gap-6">
            <CircularProgress score={analysisResult.matchPercentage} size={110} strokeWidth={9} sublabel="Match" />
            <div>
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Role Compatibility</span>
              <h3 className="text-xl font-bold text-white mt-1">{selectedRole}</h3>
              <p className="text-xs text-slate-400 mt-1">
                {analysisResult.currentSkills.length} of {analysisResult.currentSkills.length + analysisResult.missingSkills.length} foundational skills matched.
              </p>
            </div>
          </GlassCard>

          <GlassCard variant="glow" glowColor="emerald" className="p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Verified Skills</span>
              <Badge variant="emerald" size="sm">{analysisResult.currentSkills.length} Detected</Badge>
            </div>
            <div className="my-2">
              <span className="text-3xl font-extrabold text-emerald-400">
                {analysisResult.currentSkills.length}
              </span>
              <span className="text-xs text-slate-400 ml-2">Matched in resume text</span>
            </div>
            <p className="text-xs text-slate-400">
              Validated against our standard 70+ technology industry taxonomy.
            </p>
          </GlassCard>

          <GlassCard variant="glow" glowColor="amber" className="p-6 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Critical Missing</span>
              <Badge variant="amber" size="sm">{analysisResult.missingSkills.length} Deficits</Badge>
            </div>
            <div className="my-2">
              <span className="text-3xl font-extrabold text-amber-400">
                {analysisResult.missingSkills.length}
              </span>
              <span className="text-xs text-slate-400 ml-2">High impact gaps</span>
            </div>
            <p className="text-xs text-slate-400">
              Adding these keywords could increase recruiter screening pass-rate by up to 34%.
            </p>
          </GlassCard>
        </div>

        {/* Current vs Missing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Matched Skills */}
          <GlassCard variant="default" className="p-6 border-emerald-500/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-emerald-400">
                <CheckCircle2 className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Current Skills on Resume ({analysisResult.currentSkills.length})
                </h3>
              </div>
              <span className="text-xs text-emerald-400 font-semibold">Verified</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {analysisResult.currentSkills.map((skill) => (
                <Badge key={skill} variant="emerald" size="md">
                  {skill}
                </Badge>
              ))}
            </div>
          </GlassCard>

          {/* Missing Skills */}
          <GlassCard variant="default" className="p-6 border-amber-500/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-amber-400">
                <AlertCircle className="w-5 h-5" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">
                  Missing Skills ({analysisResult.missingSkills.length})
                </h3>
              </div>
              <span className="text-xs text-amber-400 font-semibold">Recommended to Add</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {analysisResult.missingSkills.length > 0 ? (
                analysisResult.missingSkills.map((skill) => (
                  <Badge key={skill} variant="amber" size="md">
                    {skill}
                  </Badge>
                ))
              ) : (
                <span className="text-xs text-emerald-400 font-medium">
                  Impressive! You have covered all core foundational skills for this role.
                </span>
              )}
            </div>
          </GlassCard>
        </div>

        {/* Recommended Upskilling Roadmap & Curated Courses */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-400" />
              Curated Upskilling Recommendations to Bridge the Gap
            </h3>
            <span className="text-xs text-slate-400">Target Role: {selectedRole}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {analysisResult.recommendedSkills.map((rec, i) => (
              <GlassCard key={i} variant="interactive" glowColor="blue" className="p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant={rec.priority === 'Critical' ? 'rose' : rec.priority === 'High' ? 'amber' : 'blue'}
                      size="sm"
                    >
                      {rec.priority} Priority
                    </Badge>
                    <span className="text-xs font-mono text-slate-400">
                      Curve: <strong className="text-blue-400">{rec.learningCurve}</strong>
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">{rec.skill}</h4>
                  <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-300">
                    <span className="text-blue-400 font-semibold block mb-1">Recommended Learning Path:</span>
                    {rec.resourceRecommendation}
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" /> Fast-track in 1-2 weeks
                  </span>
                  <Link href="/career-coach" className="text-xs font-semibold text-blue-400 hover:text-blue-300 inline-flex items-center gap-1">
                    <span>Ask Coach How to Learn</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-blue-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white">Need tailored project ideas to showcase these skills?</h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Our AI Career Coach can generate specific architectural portfolio projects demonstrating these missing competencies.
            </p>
          </div>
          <Link href="/career-coach">
            <GlassButton variant="primary" size="md" leftIcon={<Bot className="w-4 h-4" />}>
              Chat with Career Coach
            </GlassButton>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
