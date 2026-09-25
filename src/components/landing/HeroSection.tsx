'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  Eye, 
  Star 
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Decorative Grid and Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Top Pill Announcement */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2"
          >
            <Badge variant="blue" size="md" dot={true} className="px-3.5 py-1.5 shadow-glass">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Next-Gen AI Resume & ATS Intelligence 2.0</span>
            </Badge>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            See Your Resume Through a{' '}
            <span className="text-gradient">Recruiter&apos;s Eyes.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Stop submitting resumes into the black hole. HireLens AI simulates Fortune 500 ATS scanners, analyzes skill gaps, optimizes achievement bullets with the STAR method, and prepares you to crack top-tier tech interviews.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/upload">
              <GlassButton
                variant="primary"
                size="lg"
                leftIcon={<Zap className="w-5 h-5 text-amber-300" />}
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto shadow-xl shadow-blue-600/30"
              >
                Scan Resume Instantly — Free
              </GlassButton>
            </Link>
            <Link href="/ats-analysis">
              <GlassButton
                variant="glass"
                size="lg"
                leftIcon={<Eye className="w-5 h-5 text-blue-400" />}
                className="w-full sm:w-auto"
              >
                Explore Live ATS Demo
              </GlassButton>
            </Link>
          </motion.div>

          {/* Micro Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400"
          >
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>100% Privacy Protected</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>4.9/5 Rating by 45,000+ Engineers</span>
            </div>
          </motion.div>
        </div>

        {/* Hero Interactive Visual Mockup / Floating Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-5xl mx-auto relative"
        >
          {/* Outer Glow Halo */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 rounded-3xl blur-2xl opacity-30 animate-pulse-slow pointer-events-none" />

          {/* Main Dashboard Preview Card */}
          <div className="relative rounded-2xl glass-panel p-6 sm:p-8 border border-white/20 shadow-2xl backdrop-blur-2xl">
            {/* Top Bar Mockup */}
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <span className="text-xs font-mono text-slate-400 pl-2">hirelens-ai-ats-telemetry.v2</span>
              </div>
              <Badge variant="emerald" size="sm" dot={true}>
                Live Recruiter Simulator Active
              </Badge>
            </div>

            {/* Content Mockup Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
              {/* Score Dial */}
              <div className="rounded-xl bg-white/[0.03] border border-white/10 p-5 flex flex-col items-center justify-center text-center">
                <span className="text-xs uppercase font-bold text-slate-400 tracking-wider mb-2">ATS Match Score</span>
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.1)" strokeWidth="8" fill="none" />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="#3B82F6"
                      strokeWidth="8"
                      strokeDasharray="251.2"
                      strokeDashoffset="25.12"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-extrabold text-blue-400">92</span>
                    <span className="text-[10px] text-slate-400 uppercase font-bold">Top 5%</span>
                  </div>
                </div>
                <p className="text-xs text-emerald-400 font-semibold mt-2">Ready for Tier-1 Recruiter Review</p>
              </div>

              {/* Real-time Insights */}
              <div className="rounded-xl bg-white/[0.03] border border-white/10 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Keyword Benchmark</span>
                    <span className="text-xs font-mono text-emerald-400">+28 Found</span>
                  </div>
                  <div className="space-y-2.5">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300">Distributed Systems</span>
                        <span className="text-blue-400 font-semibold">96%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[96%] h-full bg-blue-500 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300">Cloud Architecture (AWS/K8s)</span>
                        <span className="text-purple-400 font-semibold">88%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[88%] h-full bg-purple-500 rounded-full" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-300">System Design & High Concurrency</span>
                        <span className="text-cyan-400 font-semibold">91%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="w-[91%] h-full bg-cyan-500 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Role: <strong className="text-white font-medium">Software Engineer</strong></span>
                  <span className="text-emerald-400 font-semibold">ATS Passed</span>
                </div>
              </div>

              {/* STAR Improvement Sample */}
              <div className="rounded-xl bg-white/[0.03] border border-white/10 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Sparkles className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-300">AI Bullet Rewriter</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300/80">
                      <span className="font-bold text-rose-400 block mb-0.5">BEFORE (Passive):</span>
                      &quot;Worked on microservices and reduced database queries.&quot;
                    </div>
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-200">
                      <span className="font-bold text-emerald-400 block mb-0.5">AFTER (STAR Method):</span>
                      &quot;Architected Redis cache layer across 14 microservices, slashing latency by 43% for 2.4M daily users.&quot;
                    </div>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-end">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" /> +15% Recruiter Callback Rate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
