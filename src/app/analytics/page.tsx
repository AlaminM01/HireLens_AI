'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import { CircularProgress } from '@/components/ui/CircularProgress';
import { 
  BarChart3, 
  TrendingUp, 
  FileText, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  Briefcase, 
  ChevronRight, 
  ArrowUpRight,
  Sparkles,
  Download
} from 'lucide-react';

interface VersionItem {
  version: string;
  date: string;
  atsScore: number;
  keywordScore: number;
  changes: string;
}

interface ApplicationItem {
  id: string;
  company: string;
  position: string;
  appliedDate: string;
  status: 'Interviewing' | 'Screening' | 'Applied' | 'Offer';
  matchScore: number;
  resumeVersion: string;
}

const mockVersions: VersionItem[] = [
  { version: 'v1.0 (Initial)', date: '3 Weeks Ago', atsScore: 54, keywordScore: 48, changes: 'Initial unoptimized raw resume upload' },
  { version: 'v1.1 (Formatting)', date: '2 Weeks Ago', atsScore: 71, keywordScore: 65, changes: 'Removed multi-column table and reformatted headers' },
  { version: 'v1.2 (STAR Bullets)', date: '1 Week Ago', atsScore: 84, keywordScore: 82, changes: 'Integrated STAR metrics and quantified latency savings' },
  { version: 'v2.0 (Current)', date: 'Yesterday', atsScore: 92, keywordScore: 94, changes: 'Full taxonomy keyword alignment & system design depth' },
];

const mockApplications: ApplicationItem[] = [
  { id: 'app_1', company: 'Google', position: 'Software Engineer III', appliedDate: '2 Days Ago', status: 'Interviewing', matchScore: 94, resumeVersion: 'v2.0' },
  { id: 'app_2', company: 'Stripe', position: 'Backend Engineer - Infrastructure', appliedDate: '5 Days Ago', status: 'Interviewing', matchScore: 91, resumeVersion: 'v2.0' },
  { id: 'app_3', company: 'Uber', position: 'Senior Full Stack Engineer', appliedDate: '1 Week Ago', status: 'Screening', matchScore: 88, resumeVersion: 'v1.2' },
  { id: 'app_4', company: 'Amazon', position: 'Software Development Engineer II', appliedDate: '2 Weeks Ago', status: 'Offer', matchScore: 95, resumeVersion: 'v2.0' },
];

export default function AnalyticsPage() {
  const [applications, setApplications] = useState<ApplicationItem[]>(mockApplications);

  const getStatusBadge = (status: ApplicationItem['status']) => {
    switch (status) {
      case 'Offer': return <Badge variant="emerald" size="sm" dot={true}>Offer Extended</Badge>;
      case 'Interviewing': return <Badge variant="blue" size="sm" dot={true}>Technical Rounds</Badge>;
      case 'Screening': return <Badge variant="purple" size="sm" dot={true}>Recruiter Screen</Badge>;
      default: return <Badge variant="slate" size="sm">Applied</Badge>;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-brand-dark selection:bg-brand-primary selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="blue" size="md" dot={true}>
                Performance Intelligence
              </Badge>
              <span className="text-xs text-slate-400 font-mono">
                Longitudinal Telemetry & Pipeline
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Analytics & <span className="text-gradient">Application Tracking</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Track ATS score velocity across iterations and monitor interview conversion rates in real time.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/upload">
              <GlassButton variant="primary" size="sm" leftIcon={<FileText className="w-4 h-4" />}>
                Upload New Revision
              </GlassButton>
            </Link>
          </div>
        </div>

        {/* Top Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <GlassCard variant="glow" glowColor="blue" className="p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Total ATS Growth</span>
            <div className="text-3xl font-extrabold text-blue-400 mt-2">+38 PTS</div>
            <p className="text-xs text-slate-400 mt-1">From v1.0 (54) to v2.0 (92)</p>
          </GlassCard>

          <GlassCard variant="glow" glowColor="emerald" className="p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Interview Callback Rate</span>
            <div className="text-3xl font-extrabold text-emerald-400 mt-2">75.0%</div>
            <p className="text-xs text-slate-400 mt-1">3 of 4 applications active in screens</p>
          </GlassCard>

          <GlassCard variant="glow" glowColor="purple" className="p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Keyword Density</span>
            <div className="text-3xl font-extrabold text-purple-400 mt-2">94%</div>
            <p className="text-xs text-slate-400 mt-1">Matched against tier-1 job rubrics</p>
          </GlassCard>

          <GlassCard variant="glow" glowColor="amber" className="p-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Revisions Logged</span>
            <div className="text-3xl font-extrabold text-amber-400 mt-2">4 Versions</div>
            <p className="text-xs text-slate-400 mt-1">Full audit trail maintained</p>
          </GlassCard>
        </div>

        {/* ATS Score Progress Visualization */}
        <GlassCard variant="default" className="p-6 sm:p-8 border border-white/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                ATS Compatibility Progression
              </h3>
              <p className="text-xs text-slate-400">Historical ATS score gain across sequential revisions</p>
            </div>
            <Badge variant="emerald" size="sm">+70% Net Improvement</Badge>
          </div>

          {/* Version progression bars */}
          <div className="space-y-4">
            {mockVersions.map((v, i) => (
              <div key={v.version} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white">{v.version}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{v.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400">Keywords: <strong className="text-slate-200">{v.keywordScore}%</strong></span>
                    <span className="font-bold text-emerald-400 font-mono text-sm">{v.atsScore} ATS</span>
                  </div>
                </div>

                <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-emerald-400 rounded-full transition-all duration-500"
                    style={{ width: `${v.atsScore}%` }}
                  />
                </div>
                <p className="text-[11px] text-slate-400 italic">{v.changes}</p>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Application Tracking Pipeline Table */}
        <GlassCard variant="default" className="p-6 sm:p-8 border border-white/10 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-blue-400" />
                Active Job Application Pipeline
              </h3>
              <p className="text-xs text-slate-400">Integrated tracking synced with resume versions</p>
            </div>
            <Badge variant="blue" size="sm">{applications.length} Active Targets</Badge>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 uppercase text-[11px] font-semibold tracking-wider">
                  <th className="pb-3 pl-2">Company & Role</th>
                  <th className="pb-3">Applied</th>
                  <th className="pb-3">Match Score</th>
                  <th className="pb-3">Resume Version</th>
                  <th className="pb-3">Pipeline Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 pl-2 font-medium text-white">
                      <div className="font-bold">{app.company}</div>
                      <div className="text-xs text-slate-400">{app.position}</div>
                    </td>
                    <td className="py-4 text-slate-400">{app.appliedDate}</td>
                    <td className="py-4">
                      <span className="font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {app.matchScore}% Match
                      </span>
                    </td>
                    <td className="py-4 font-mono text-slate-300">{app.resumeVersion}</td>
                    <td className="py-4">{getStatusBadge(app.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </main>

      <Footer />
    </div>
  );
}
