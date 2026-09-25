'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';
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
  ArrowRight
} from 'lucide-react';

interface FeatureItem {
  id: string;
  icon: React.ElementType;
  title: string;
  category: string;
  description: string;
  highlight: string;
  link: string;
  badge: string;
  glow: 'blue' | 'purple' | 'emerald' | 'amber';
}

const features: FeatureItem[] = [
  {
    id: 'ats-engine',
    icon: Target,
    title: 'ATS Scoring Engine',
    category: 'Compatibility',
    description: 'Calculates formatting, content density, and keyword alignment against enterprise ATS parsers like Workday, Greenhouse, and Lever.',
    highlight: 'Scores 0-100 across 4 dimensions with real-time actionable fix recommendations.',
    link: '/ats-analysis',
    badge: 'Core Engine',
    glow: 'blue',
  },
  {
    id: 'skill-gap',
    icon: Compass,
    title: 'Skill Gap Analysis',
    category: 'Benchmarking',
    description: 'Benchmarks your experience against industry standards for Software Engineer, Java Dev, Full Stack, Data Analyst, and AI/ML roles.',
    highlight: 'Identifies missing critical skills and generates curated learning resource links.',
    link: '/skill-gap',
    badge: 'Targeted',
    glow: 'purple',
  },
  {
    id: 'resume-optimizer',
    icon: Wand2,
    title: 'Resume Improvement Suggestions',
    category: 'Optimization',
    description: 'Transforms weak, passive bullet points into high-impact STAR method achievement statements with verifiable metrics.',
    highlight: 'Interactive Before vs After comparison slider for summaries, projects, and skills.',
    link: '/resume-optimizer',
    badge: 'AI Rewriter',
    glow: 'emerald',
  },
  {
    id: 'career-coach',
    icon: Bot,
    title: 'HireLens Career Coach',
    category: 'AI Advisory',
    description: 'An intelligent AI advisor primed on 50,000+ technical interviews that examines resume weaknesses and conducts mock prep.',
    highlight: 'Explains weak areas, suggests improvements, and answers role-specific interview queries.',
    link: '/career-coach',
    badge: 'Conversational AI',
    glow: 'blue',
  },
  {
    id: 'interview-readiness',
    icon: Activity,
    title: 'Interview Readiness Score',
    category: 'Evaluation',
    description: 'Synthesizes resume strength, system design depth, and technical readiness into multidimensional radar diagnostics.',
    highlight: 'Pinpoints exact competency gaps prior to recruiter phone screens.',
    link: '/ats-analysis',
    badge: 'Diagnostics',
    glow: 'amber',
  },
  {
    id: 'job-match',
    icon: Briefcase,
    title: 'Job Match Analyzer',
    category: 'Targeting',
    description: 'Paste any job description to instantly analyze match percentage, missing keywords, and tailor resume bullets for maximum interview odds.',
    highlight: 'ATS pass probability projection with custom keyword insertion advice.',
    link: '/job-match',
    badge: 'JD Scanner',
    glow: 'purple',
  },
  {
    id: 'portfolio-analyzer',
    icon: GitBranch,
    title: 'Portfolio & Profile Analyzer',
    category: 'Online Presence',
    description: 'Evaluates GitHub repositories, commit cadence, README quality, and LinkedIn profiles for technical recruiter appeal.',
    highlight: 'Calculates portfolio strength score and repo presentation metrics.',
    link: '/portfolio-analyzer',
    badge: 'GitHub & LinkedIn',
    glow: 'emerald',
  },
  {
    id: 'career-roadmap',
    icon: Map,
    title: 'AI Career Roadmap',
    category: 'Growth',
    description: 'Generates progressive 30-Day, 60-Day, and 90-Day step-by-step career blueprints tailored to your current skills and target role.',
    highlight: 'Checklists with estimated hours, key milestones, and certification recommendations.',
    link: '/roadmap',
    badge: 'Career Path',
    glow: 'amber',
  },
  {
    id: 'analytics-dashboard',
    icon: BarChart3,
    title: 'Analytics & Application Tracker',
    category: 'Tracking',
    description: 'Monitors historical ATS score progression, skill velocity across revisions, and organizes job applications in a streamlined Kanban board.',
    highlight: 'Version-by-version diffing and status pipeline from Applied to Offer.',
    link: '/analytics',
    badge: 'Telemetry',
    glow: 'blue',
  },
];

export const FeatureShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Compatibility', 'Benchmarking', 'Optimization', 'AI Advisory', 'Targeting', 'Growth'];

  const filteredFeatures = activeCategory === 'All' 
    ? features 
    : features.filter(f => f.category === activeCategory);

  return (
    <section className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="purple" size="md" dot={true}>
            Enterprise Feature Suite
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to <span className="text-gradient">Land Top-Tier Offers</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Built from scratch to empower candidates with the exact diagnostic tools used by Silicon Valley hiring teams and talent acquisition systems.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30'
                    : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <GlassCard
                  variant="interactive"
                  glowColor={feature.glow}
                  className="h-full flex flex-col justify-between group p-6 sm:p-7"
                >
                  <div>
                    {/* Card Top: Icon & Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant={feature.glow === 'purple' ? 'purple' : feature.glow === 'emerald' ? 'emerald' : 'blue'} size="sm">
                        {feature.badge}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    {/* Highlight Box */}
                    <div className="rounded-xl bg-white/[0.03] border border-white/5 p-3 text-xs text-slate-300 font-medium mb-6">
                      <span className="text-blue-400 font-semibold block mb-0.5">Key Capability:</span>
                      {feature.highlight}
                    </div>
                  </div>

                  {/* Explore Link */}
                  <Link
                    href={feature.link}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 group/link pt-2 border-t border-white/5"
                  >
                    <span>Launch Feature</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
