'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import { 
  FileUp, 
  Target, 
  Compass, 
  Wand2, 
  Bot, 
  Activity, 
  Briefcase, 
  GitBranch, 
  Map, 
  BarChart3, 
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Sparkles
} from 'lucide-react';

const deepFeatures = [
  {
    icon: Target,
    title: 'ATS Scoring Engine',
    desc: 'Simulates Workday, Greenhouse, and Lever enterprise parsing rules. Evaluates formatting compliance, keyword density, and bullet point consistency.',
    details: ['Single-stream parsing verification', 'Detailed 0-100 score breakdown across 4 categories', 'Detection of broken tables or text boxes'],
    link: '/ats-analysis',
    color: 'text-blue-400',
  },
  {
    icon: Compass,
    title: 'Skill Gap Analysis',
    desc: 'Benchmarks your experience against industry standards for Software Engineer, Java Dev, Full Stack, Data Analyst, and AI/ML Engineer roles.',
    details: ['Identifies missing critical skills', 'Calculates domain readiness percentages', 'Generates prioritized learning paths with course links'],
    link: '/skill-gap',
    color: 'text-purple-400',
  },
  {
    icon: Wand2,
    title: 'STAR Resume Optimizer',
    desc: 'Transforms weak, passive bullet points into high-impact achievement statements using the Google X-Y-Z and STAR methodologies.',
    details: ['Side-by-side Before vs After comparative view', 'One-click copy to clipboard', 'Quantified latency and business metrics enhancement'],
    link: '/resume-optimizer',
    color: 'text-emerald-400',
  },
  {
    icon: Bot,
    title: 'HireLens Career Coach',
    desc: 'Conversational AI chatbot that reviews resume weak points, conducts technical mock screens, and answers company-specific interview queries.',
    details: ['Contextual awareness of uploaded resume', 'Gemini & OpenAI API integration', 'Prompt suggestion pills for instant guidance'],
    link: '/career-coach',
    color: 'text-blue-400',
  },
  {
    icon: Briefcase,
    title: 'Job Match Analyzer',
    desc: 'Paste any target job description to instantly measure semantic alignment, keyword deficit counts, and ATS pass probability.',
    details: ['Pre-loaded Silicon Valley JDs (Google, Stripe, Amazon)', 'Immediate tailoring recommendations', 'High/Medium/Low ATS pass probability projection'],
    link: '/job-match',
    color: 'text-amber-400',
  },
  {
    icon: GitBranch,
    title: 'Portfolio & Profile Analyzer',
    desc: 'Audits GitHub repositories, commit velocity, README documentation quality, and LinkedIn profiles for technical recruiter appeal.',
    details: ['Portfolio Strength Score calculation', 'Public repository star count evaluation', 'LinkedIn headline & about section clarity checks'],
    link: '/portfolio-analyzer',
    color: 'text-emerald-400',
  },
  {
    icon: Map,
    title: 'AI Career Roadmap',
    desc: 'Generates progressive 30-Day, 60-Day, and 90-Day execution plans tailored to your current skills and target engineering role.',
    details: ['Interactive task checklists with hour estimates', 'Key milestone tracking for each phase', 'Direct study guides and resource recommendations'],
    link: '/roadmap',
    color: 'text-purple-400',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Application Pipeline',
    desc: 'Visualizes historical ATS score progression across revisions and organizes job applications in a synced tracking table.',
    details: ['Track ATS score growth over time', 'Version-by-version audit trail', 'Status pipeline from Applied to Offer'],
    link: '/analytics',
    color: 'text-blue-400',
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-dark selection:bg-brand-primary selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="blue" size="md" dot={true}>
            Complete Platform Architecture
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Engineered for <span className="text-gradient">Maximum Interview Conversion</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Every feature in HireLens AI was reverse-engineered from corporate applicant tracking systems and top-tier technical recruiting workflows.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deepFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <GlassCard key={feat.title} variant="default" className="p-7 sm:p-8 border border-white/10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                      <Icon className={`w-6 h-6 ${feat.color}`} />
                    </div>
                    <Link href={feat.link} className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1">
                      <span>Launch Tool</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                    {feat.desc}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {feat.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl glass-panel p-8 sm:p-12 border border-blue-500/30 text-center max-w-4xl mx-auto space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Start Scanning with HireLens AI Today
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Join 45,000+ engineers optimizing their resumes and stepping into technical interviews with total confidence.
          </p>
          <div className="pt-2">
            <Link href="/upload">
              <GlassButton variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Upload Resume Free
              </GlassButton>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
