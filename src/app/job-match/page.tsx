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
import { JobMatcherService, SAMPLE_JOB_DESCRIPTIONS } from '@/services/job-matcher';
import { MOCK_RESUMES } from '@/lib/mock-resumes';
import { JobMatchResult, ResumeData } from '@/types';
import { 
  Briefcase, 
  Target, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  ArrowRight, 
  Layers, 
  Copy, 
  Zap, 
  Building 
} from 'lucide-react';

export default function JobMatchPage() {
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);
  const [selectedSample, setSelectedSample] = useState<string>('Google - Senior Software Engineer');
  const [jdText, setJdText] = useState<string>(SAMPLE_JOB_DESCRIPTIONS['Google - Senior Software Engineer']);
  const [matchResult, setMatchResult] = useState<JobMatchResult | null>(null);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    let rawText = '';
    try {
      rawText = localStorage.getItem('hirelens_current_resume_text') || MOCK_RESUMES['Software Engineer'].rawText;
    } catch {
      rawText = MOCK_RESUMES['Software Engineer'].rawText;
    }

    const parsed = ResumeParserService.parse(rawText);
    setResumeData(parsed);

    const result = JobMatcherService.analyze(parsed, jdText, selectedSample.split(' - ')[1] || 'Software Engineer');
    setMatchResult(result);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRunMatch = () => {
    if (!resumeData || !jdText.trim()) return;
    setIsScanning(true);
    setTimeout(() => {
      const result = JobMatcherService.analyze(resumeData, jdText, selectedSample.split(' - ')[1] || 'Software Engineer');
      setMatchResult(result);
      setIsScanning(false);
    }, 450);
  };

  const handleSelectSample = (key: string) => {
    setSelectedSample(key);
    const text = SAMPLE_JOB_DESCRIPTIONS[key as keyof typeof SAMPLE_JOB_DESCRIPTIONS];
    setJdText(text);
    if (resumeData) {
      const result = JobMatcherService.analyze(resumeData, text, key.split(' - ')[1]);
      setMatchResult(result);
    }
  };

  if (!matchResult) {
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
                Targeted Application Analyzer
              </Badge>
              <span className="text-xs text-slate-400 font-mono">
                Resume vs Custom Job Description
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Job Match <span className="text-gradient">Analyzer</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Paste any job posting to calculate ATS compatibility score, uncover missing technical keywords, and tailor bullet points.
            </p>
          </div>

          {/* Quick Preload Sample JDs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-slate-400 mr-1">Preload JD:</span>
            {Object.keys(SAMPLE_JOB_DESCRIPTIONS).map((key) => (
              <button
                key={key}
                onClick={() => handleSelectSample(key)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedSample === key
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 border border-blue-400/30'
                    : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {key.split(' - ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Input & Live Results Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Job Description Textarea */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Briefcase className="w-4 h-4 text-blue-400" />
                Target Job Description
              </label>
              <span className="text-xs text-slate-400 font-mono">
                {jdText.length} characters
              </span>
            </div>

            <textarea
              value={jdText}
              onChange={(e) => setJdText(e.target.value)}
              rows={16}
              placeholder="Paste job description requirements, qualifications, and role responsibilities here..."
              className="w-full p-4 rounded-2xl glass-input text-xs sm:text-sm text-white placeholder-slate-500 focus:border-blue-500 transition-all font-mono leading-relaxed resize-none shadow-inner"
            />

            <GlassButton
              variant="primary"
              size="md"
              onClick={handleRunMatch}
              isLoading={isScanning}
              className="w-full shadow-lg shadow-blue-600/25"
              leftIcon={<Sparkles className="w-4 h-4" />}
            >
              Analyze Job Match Compatibility
            </GlassButton>
          </div>

          {/* Right Column: Compatibility Analytics */}
          <div className="lg:col-span-6 space-y-6">
            {/* Top Score Dial & Probability */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <GlassCard variant="glow" glowColor="blue" className="p-6 flex flex-col items-center justify-center text-center">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">Match Percentage</span>
                <CircularProgress score={matchResult.matchPercentage} size={120} strokeWidth={9} sublabel="Match" />
              </GlassCard>

              <GlassCard variant="glow" glowColor="emerald" className="p-6 flex flex-col justify-between">
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">ATS Pass Probability</span>
                  <div className="mt-2 flex items-center gap-2">
                    <span className={`text-2xl font-extrabold ${
                      matchResult.atsPassProbability === 'High' ? 'text-emerald-400' : matchResult.atsPassProbability === 'Medium' ? 'text-amber-400' : 'text-rose-400'
                    }`}>
                      {matchResult.atsPassProbability} Probability
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {matchResult.atsPassProbability === 'High' 
                      ? 'Your resume possesses strong semantic overlap with key recruiter screening filters.'
                      : 'Missing several required keywords. Adding them will push pass probability to High.'}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Found: <strong className="text-emerald-400 font-bold">{matchResult.matchingKeywords.length}</strong></span>
                  <span>Missing: <strong className="text-rose-400 font-bold">{matchResult.missingKeywords.length}</strong></span>
                </div>
              </GlassCard>
            </div>

            {/* Matching Keywords */}
            <GlassCard variant="default" className="p-5 border-emerald-500/20">
              <div className="flex items-center justify-between mb-3 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" /> Matched Keywords ({matchResult.matchingKeywords.length})
                </span>
                <span className="text-[10px] text-emerald-300">Present in Resume</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {matchResult.matchingKeywords.map((kw) => (
                  <Badge key={kw} variant="emerald" size="sm">
                    {kw}
                  </Badge>
                ))}
              </div>
            </GlassCard>

            {/* Missing Keywords */}
            <GlassCard variant="default" className="p-5 border-rose-500/20">
              <div className="flex items-center justify-between mb-3 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" /> Missing Target Keywords ({matchResult.missingKeywords.length})
                </span>
                <span className="text-[10px] text-rose-300">Recommended to Insert</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {matchResult.missingKeywords.map((kw) => (
                  <Badge key={kw} variant="rose" size="sm">
                    + {kw}
                  </Badge>
                ))}
              </div>
            </GlassCard>

            {/* Actionable Tailoring Recommendations */}
            <GlassCard variant="default" className="p-5 border border-white/10">
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-1.5">
                <Zap className="w-4 h-4" /> Tailoring Action Items
              </h3>
              <ul className="space-y-2 text-xs text-slate-300 leading-relaxed">
                {matchResult.tailoringRecommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
