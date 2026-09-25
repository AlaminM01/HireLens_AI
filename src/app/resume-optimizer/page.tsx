'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import { ResumeParserService } from '@/services/resume-parser';
import { ResumeSuggesterService } from '@/services/resume-suggester';
import { MOCK_RESUMES } from '@/lib/mock-resumes';
import { ResumeImprovementSuggestion, TargetRole } from '@/types';
import { 
  Wand2, 
  ArrowRight, 
  Copy, 
  Check, 
  TrendingUp, 
  Sparkles, 
  Layers, 
  FileText,
  Filter,
  CheckCircle2
} from 'lucide-react';

export default function ResumeOptimizerPage() {
  const [suggestions, setSuggestions] = useState<ResumeImprovementSuggestion[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    let rawText = '';
    try {
      rawText = localStorage.getItem('hirelens_current_resume_text') || MOCK_RESUMES['Software Engineer'].rawText;
    } catch {
      rawText = MOCK_RESUMES['Software Engineer'].rawText;
    }

    const parsed = ResumeParserService.parse(rawText);
    const generated = ResumeSuggesterService.generateSuggestions(parsed, 'Software Engineer');
    setSuggestions(generated);
  }, []);

  const categories = ['All', 'Summary', 'Projects', 'Achievements', 'Technical Skills'];

  const filteredSuggestions = activeCategory === 'All'
    ? suggestions
    : suggestions.filter(s => s.category === activeCategory);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const totalScoreGain = suggestions.reduce((acc, curr) => acc + curr.impactScoreIncrease, 0);

  return (
    <div className="flex min-h-screen flex-col bg-brand-dark selection:bg-brand-primary selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="emerald" size="md" dot={true}>
                STAR Method Rewriter
              </Badge>
              <span className="text-xs text-slate-400">
                Action-Oriented & Metric-Quantified Bullet Transformations
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Before vs After <span className="text-gradient">Optimizer</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Replace weak, passive descriptions with high-velocity statements engineered to grab recruiter attention in 6 seconds.
            </p>
          </div>

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
            <TrendingUp className="w-5 h-5 flex-shrink-0" />
            <div>
              <span>Potential ATS Score Boost</span>
              <strong className="block text-white text-base">+{totalScoreGain} Total Points</strong>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 border border-blue-400/30'
                  : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Before vs After Cards Stack */}
        <div className="space-y-6">
          {filteredSuggestions.map((item, idx) => (
            <GlassCard key={idx} variant="default" className="p-6 sm:p-7 border border-white/10 space-y-5">
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <Badge variant={item.category === 'Summary' ? 'blue' : item.category === 'Projects' ? 'purple' : 'emerald'} size="sm">
                    {item.category}
                  </Badge>
                  <h3 className="text-base sm:text-lg font-bold text-white">{item.title}</h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+{item.impactScoreIncrease} PTS Recruiter Value</span>
                </div>
              </div>

              {/* Side-by-Side Comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* BEFORE */}
                <div className="p-4 rounded-xl bg-rose-500/[0.04] border border-rose-500/20 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-rose-400 uppercase tracking-wider">
                    <span>Before (Passive / Unquantified)</span>
                    <span className="text-[10px] text-rose-400/80">Low Recruiter Retention</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic whitespace-pre-line">
                    &quot;{item.before}&quot;
                  </p>
                </div>

                {/* AFTER */}
                <div className="p-4 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/30 space-y-2 relative group">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-400 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" /> After (HireLens STAR Standard)
                    </span>
                    <button
                      onClick={() => handleCopy(item.after, idx)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-white text-[11px] font-semibold transition-colors"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-100 font-medium leading-relaxed whitespace-pre-line">
                    {item.after}
                  </p>
                </div>
              </div>

              {/* Rationale Footer */}
              <div className="pt-2 text-xs text-slate-400 flex items-start gap-2">
                <span className="text-blue-400 font-bold uppercase tracking-wider flex-shrink-0">Why this works:</span>
                <span>{item.rationale}</span>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Bottom CTA to Coach */}
        <div className="rounded-2xl glass-panel p-6 sm:p-8 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">Want custom rewrites for your specific work experiences?</h4>
            <p className="text-xs text-slate-400">Paste your exact project notes into the Career Coach to generate 5 distinct STAR iterations.</p>
          </div>
          <Link href="/career-coach">
            <GlassButton variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Open Career Coach
            </GlassButton>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
