'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import { CircularProgress } from '@/components/ui/CircularProgress';
import { useAuth } from '@/lib/auth-context';
import { 
  FileText, 
  Target, 
  Compass, 
  Wand2, 
  Bot, 
  Briefcase, 
  GitBranch, 
  Map, 
  BarChart3, 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  Activity, 
  Clock, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';

export default function DashboardPage() {
  const { user } = useAuth();

  const quickActions = [
    { title: 'Upload & Scan Resume', href: '/upload', icon: FileText, desc: 'Analyze ATS score & formatting', color: 'text-blue-400' },
    { title: 'ATS Score Telemetry', href: '/ats-analysis', icon: Target, desc: 'Deep diagnostic breakdown', color: 'text-purple-400' },
    { title: 'Skill Gap Matrix', href: '/skill-gap', icon: Compass, desc: 'Benchmark against top roles', color: 'text-cyan-400' },
    { title: 'STAR Bullet Rewriter', href: '/resume-optimizer', icon: Wand2, desc: 'Before vs After comparative diff', color: 'text-emerald-400' },
    { title: 'AI Career Coach', href: '/career-coach', icon: Bot, desc: 'Simulate tech screens & Q&A', color: 'text-blue-400' },
    { title: 'Job Match Scanner', href: '/job-match', icon: Briefcase, desc: 'Paste JD for instant alignment', color: 'text-amber-400' },
    { title: 'GitHub & LinkedIn Audit', href: '/portfolio-analyzer', icon: GitBranch, desc: 'Evaluate repository presence', color: 'text-emerald-400' },
    { title: '30-60-90 Day Roadmap', href: '/roadmap', icon: Map, desc: 'Structured weekly milestones', color: 'text-purple-400' },
  ];

  const radarCompetencies = [
    { name: 'System Design & Distributed Systems', score: 88 },
    { name: 'Data Structures & Algorithms', score: 92 },
    { name: 'Frontend Architecture (Next.js/React)', score: 95 },
    { name: 'Backend Services & Caching (Redis/Kafka)', score: 86 },
    { name: 'Behavioral STAR Communication', score: 84 },
    { name: 'Cloud & DevOps (AWS/Docker/K8s)', score: 82 },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-brand-dark selection:bg-brand-primary selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-10">
        {/* User Hero Greeting */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="blue" size="md" dot={true}>
                Candidate Command Center
              </Badge>
              <span className="text-xs text-slate-400 font-mono">
                {user?.targetCompany || 'Targeting Tier-1 Tech'}
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Welcome back, <span className="text-gradient">{user?.name || 'Engineer'}</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Your resume is optimized for <strong className="text-slate-200">{user?.targetRole || 'Software Engineer'}</strong>. Here is your live recruiter readiness snapshot:
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/upload">
              <GlassButton variant="primary" size="md" leftIcon={<FileText className="w-4 h-4" />}>
                Scan New Resume
              </GlassButton>
            </Link>
            <Link href="/settings">
              <GlassButton variant="outline" size="md">
                Settings
              </GlassButton>
            </Link>
          </div>
        </div>

        {/* 4 Top Level KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <GlassCard variant="glow" glowColor="blue" className="p-6">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>ATS Health Score</span>
              <Target className="w-4 h-4 text-blue-400" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-blue-400">92</span>
              <span className="text-xs text-emerald-400 font-semibold">+18 pts</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Workday & Greenhouse validated</p>
          </GlassCard>

          <GlassCard variant="glow" glowColor="emerald" className="p-6">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>Interview Readiness</span>
              <Activity className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-emerald-400">88%</span>
              <span className="text-xs text-emerald-400 font-semibold">Tier-1 Ready</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Across 6 technical dimensions</p>
          </GlassCard>

          <GlassCard variant="glow" glowColor="purple" className="p-6">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>Role Compatibility</span>
              <Compass className="w-4 h-4 text-purple-400" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-purple-400">94%</span>
              <span className="text-xs text-slate-400 font-mono">16 of 18 skills</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Software Engineer benchmark</p>
          </GlassCard>

          <GlassCard variant="glow" glowColor="amber" className="p-6">
            <div className="flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-wider">
              <span>Roadmap Velocity</span>
              <Map className="w-4 h-4 text-amber-400" />
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-3xl font-extrabold text-amber-400">65%</span>
              <span className="text-xs text-amber-300 font-mono">Day 28 of 90</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Phase 1 goals completed</p>
          </GlassCard>
        </div>

        {/* Quick Launchers Grid */}
        <div>
          <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-blue-400" />
            AI Career Suite Launchpad
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link key={action.title} href={action.href}>
                  <GlassCard variant="interactive" className="p-5 h-full flex flex-col justify-between group">
                    <div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 w-fit mb-3 group-hover:scale-110 transition-transform">
                        <Icon className={`w-5 h-5 ${action.color}`} />
                      </div>
                      <h3 className="text-sm font-bold text-white group-hover:text-blue-200 transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {action.desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-semibold text-blue-400">
                      <span>Open Tool</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </GlassCard>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Interview Readiness Competency Diagnostics */}
        <GlassCard variant="default" className="p-6 sm:p-8 border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-emerald-400" />
                Technical Interview Readiness Radar
              </h3>
              <p className="text-xs text-slate-400">
                Evaluation based on your resume achievements and technical complexity indicators
              </p>
            </div>
            <Link href="/career-coach">
              <GlassButton variant="primary" size="sm" leftIcon={<Bot className="w-4 h-4" />}>
                Practice Technical Screen
              </GlassButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {radarCompetencies.map((comp) => (
              <div key={comp.name} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">{comp.name}</span>
                  <span className="font-mono font-bold text-blue-400">{comp.score}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                    style={{ width: `${comp.score}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </main>

      <Footer />
    </div>
  );
}
