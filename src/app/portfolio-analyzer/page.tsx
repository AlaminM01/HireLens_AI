'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import { CircularProgress } from '@/components/ui/CircularProgress';
import { PortfolioAnalyzerService } from '@/services/portfolio-analyzer';
import { PortfolioAnalysisResult } from '@/types';
import { 
  GitBranch, 
  Linkedin, 
  Github, 
  Star, 
  CheckCircle2, 
  Zap, 
  Sparkles, 
  ArrowRight, 
  Code2, 
  Globe, 
  ExternalLink 
} from 'lucide-react';

export default function PortfolioAnalyzerPage() {
  const [githubUser, setGithubUser] = useState('AlaminM01');
  const [linkedinSlug, setLinkedinSlug] = useState('alaminmondal');
  const [result, setResult] = useState<PortfolioAnalysisResult>(
    PortfolioAnalyzerService.analyze('AlaminM01', 'alaminmondal')
  );
  const [isAuditing, setIsAuditing] = useState(false);

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuditing(true);
    setTimeout(() => {
      setResult(PortfolioAnalyzerService.analyze(githubUser, linkedinSlug));
      setIsAuditing(false);
    }, 600);
  };

  return (
    <div className="flex min-h-screen flex-col bg-brand-dark selection:bg-brand-primary selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="emerald" size="md" dot={true}>
                Candidate Digital Footprint
              </Badge>
              <span className="text-xs text-slate-400 font-mono">
                GitHub & LinkedIn Recruiter Audit
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Portfolio & Profile <span className="text-gradient">Analyzer</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Top tech recruiters scrutinize your code repositories and professional presence. See how your profiles score under engineering leadership rubrics.
            </p>
          </div>
        </div>

        {/* Input Form */}
        <GlassCard variant="default" className="p-6 border border-white/10">
          <form onSubmit={handleAudit} className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-end">
            <div className="sm:col-span-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Github className="w-4 h-4 text-slate-400" /> GitHub Username
              </label>
              <input
                type="text"
                value={githubUser}
                onChange={(e) => setGithubUser(e.target.value)}
                placeholder="e.g. AlaminM01"
                className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:border-blue-500"
              />
            </div>

            <div className="sm:col-span-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn Profile Slug
              </label>
              <input
                type="text"
                value={linkedinSlug}
                onChange={(e) => setLinkedinSlug(e.target.value)}
                placeholder="e.g. alaminmondal"
                className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:border-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <GlassButton
                type="submit"
                variant="primary"
                size="md"
                className="w-full"
                isLoading={isAuditing}
              >
                Run Audit
              </GlassButton>
            </div>
          </form>
        </GlassCard>

        {/* Score & Platform Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Portfolio Strength Circular Score */}
          <GlassCard variant="glow" glowColor="emerald" className="p-8 flex flex-col items-center justify-center text-center space-y-4">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Overall Portfolio Score</span>
            <CircularProgress score={result.portfolioStrengthScore} size={150} strokeWidth={11} sublabel="Recruiter Grade" />
            <div>
              <h3 className="text-xl font-bold text-white">Tier-1 Ready Presence</h3>
              <p className="text-xs text-slate-400 mt-1 max-w-xs">
                Your repositories demonstrate solid code hygiene, architectural documentation, and production readiness.
              </p>
            </div>
          </GlassCard>

          {/* GitHub Metrics Card */}
          <GlassCard variant="default" className="p-6 border border-white/10 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Github className="w-5 h-5 text-white" />
                <h3 className="text-base font-bold text-white">GitHub Audit</h3>
              </div>
              <a
                href={`https://github.com/${result.githubUsername}`}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1 font-mono"
              >
                <span>@{result.githubUsername}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-slate-400 block mb-1">Public Repositories</span>
                <strong className="text-lg text-white font-mono">{result.githubMetrics?.publicRepos}</strong>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-slate-400 block mb-1">Total GitHub Stars</span>
                <strong className="text-lg text-amber-400 font-mono flex items-center gap-1">
                  <Star className="w-4 h-4 fill-amber-400 inline" /> {result.githubMetrics?.starsCount}
                </strong>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-slate-400 block mb-1">Commit Cadence</span>
                <strong className="text-base text-emerald-400 font-semibold">{result.githubMetrics?.commitFrequencyRating} Frequency</strong>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="text-slate-400 block mb-1">README Documentation</span>
                <strong className="text-lg text-blue-400 font-mono">{result.githubMetrics?.readmesQualityScore}% Score</strong>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                Top Code Languages
              </span>
              <div className="flex flex-wrap gap-1.5">
                {result.githubMetrics?.topLanguages.map((lang) => (
                  <Badge key={lang} variant="blue" size="sm">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* LinkedIn Profile Quality */}
          <GlassCard variant="default" className="p-6 border border-white/10 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Linkedin className="w-5 h-5 text-blue-400" />
                <h3 className="text-base font-bold text-white">LinkedIn Presence</h3>
              </div>
              <span className="text-xs text-slate-400 font-mono">in/{result.linkedinProfile}</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                <span className="text-slate-300">Headline Optimization</span>
                <span className="text-emerald-400 font-bold">{result.linkedinMetrics?.headlineQuality}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                <span className="text-slate-300">About Section Narrative</span>
                <span className="text-blue-400 font-bold">{result.linkedinMetrics?.aboutSectionClarity} Clarity</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                <span className="text-slate-300">Skill Endorsements Match</span>
                <span className="text-purple-400 font-bold font-mono">{result.linkedinMetrics?.endorsementsScore}% Match</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
              <span className="font-bold block mb-1">Recruiter Insight:</span>
              Engineering managers spend 80% of candidate profile review time checking GitHub pinned repositories and recent commit velocity.
            </div>
          </GlassCard>
        </div>

        {/* Actionable Recommendations */}
        <GlassCard variant="default" className="p-6 sm:p-8 border border-white/10 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            Actionable Steps to Elevate Your Online Technical Authority
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {result.actionableInsights.map((insight, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">{insight}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </main>

      <Footer />
    </div>
  );
}
