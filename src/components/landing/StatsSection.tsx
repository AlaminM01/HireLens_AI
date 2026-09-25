'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
import { TrendingUp, Users, Zap, CheckCircle, Award } from 'lucide-react';

interface MetricItem {
  value: string;
  label: string;
  subtext: string;
  icon: React.ElementType;
  color: string;
}

const metrics: MetricItem[] = [
  {
    value: '94.8%',
    label: 'ATS Pass Rate',
    subtext: 'Up from 32% baseline across major ATS platforms',
    icon: Award,
    color: 'text-emerald-400',
  },
  {
    value: '3.4x',
    label: 'Interview Rate',
    subtext: 'More direct recruiter outreach and screen invites',
    icon: TrendingUp,
    color: 'text-blue-400',
  },
  {
    value: '120k+',
    label: 'Resumes Analyzed',
    subtext: 'Engineers, data scientists, and students globally',
    icon: Users,
    color: 'text-purple-400',
  },
  {
    value: '< 3.2s',
    label: 'Deep Diagnostic Speed',
    subtext: 'Zero-latency parsing & heuristic extraction',
    icon: Zap,
    color: 'text-amber-400',
  },
];

const companyLogos = [
  'Google', 'Amazon', 'Microsoft', 'Meta', 'Netflix', 'Uber', 'Stripe', 'Apple'
];

export const StatsSection: React.FC = () => {
  return (
    <section className="py-20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Recruiter Trust Header */}
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest font-semibold text-slate-400">
            Candidates Prepared by HireLens AI Land Roles at Leading Tech Giants
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-6 opacity-60">
            {companyLogos.map((company) => (
              <span
                key={company}
                className="text-lg sm:text-xl font-bold font-mono tracking-wider text-slate-300 hover:text-white transition-colors"
              >
                {company}
              </span>
            ))}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlassCard variant="glow" className="p-6 text-center group">
                  <div className="mx-auto w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                  <div className={`text-4xl font-extrabold tracking-tight mb-1 ${metric.color}`}>
                    {metric.value}
                  </div>
                  <div className="text-base font-bold text-white mb-1">
                    {metric.label}
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    {metric.subtext}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>

        {/* Informative Comparison Box */}
        <div className="mt-12 rounded-2xl glass-panel p-6 sm:p-8 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-1">
              <span className="text-xs uppercase font-bold text-blue-400 tracking-wider">The Reality of Modern Hiring</span>
              <h3 className="text-2xl font-bold text-white mt-1">Why 75% of Resumes Never Reach a Human</h3>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-slate-300">
                <span className="font-bold text-rose-400 block mb-1">Unfriendly ATS Formats</span>
                Multi-column tables, text boxes, non-standard section headers, and graphics cause commercial ATS parsers to drop entire sections.
              </div>
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-slate-300">
                <span className="font-bold text-emerald-400 block mb-1">The HireLens Solution</span>
                100% compliant single-stream formatting, precise taxonomy tagging, and quantified STAR bullet re-architecting guarantee parsing fidelity.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
