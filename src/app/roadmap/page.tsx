'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import { CareerRoadmapService } from '@/services/career-roadmap';
import { TargetRole, CareerRoadmapPhase } from '@/types';
import { 
  Map, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  Flag, 
  Compass, 
  Target, 
  Layers,
  Award
} from 'lucide-react';

const targetRoles: TargetRole[] = [
  'Software Engineer',
  'Java Developer',
  'Full Stack Developer',
  'Data Analyst',
  'AI/ML Engineer',
];

export default function CareerRoadmapPage() {
  const [selectedRole, setSelectedRole] = useState<TargetRole>('Software Engineer');
  const [phases, setPhases] = useState<CareerRoadmapPhase[]>(
    CareerRoadmapService.generate('Software Engineer')
  );

  const handleRoleChange = (role: TargetRole) => {
    setSelectedRole(role);
    setPhases(CareerRoadmapService.generate(role));
  };

  const toggleChecklist = (phaseIdx: number, itemIdx: number) => {
    setPhases((prev) => {
      const copy = [...prev];
      const targetPhase = { ...copy[phaseIdx] };
      const targetItems = [...targetPhase.actionChecklist];
      targetItems[itemIdx] = {
        ...targetItems[itemIdx],
        isCompleted: !targetItems[itemIdx].isCompleted,
      };
      targetPhase.actionChecklist = targetItems;
      copy[phaseIdx] = targetPhase;
      return copy;
    });
  };

  const totalTasks = phases.reduce((acc, p) => acc + p.actionChecklist.length, 0);
  const completedTasks = phases.reduce(
    (acc, p) => acc + p.actionChecklist.filter(i => i.isCompleted).length,
    0
  );
  const progressPercent = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="flex min-h-screen flex-col bg-brand-dark selection:bg-brand-primary selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="amber" size="md" dot={true}>
                Personalized AI Career Plan
              </Badge>
              <span className="text-xs text-slate-400 font-mono">
                30-60-90 Day Structured Roadmap
              </span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              AI Career <span className="text-gradient">Roadmap</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              A systematic, week-by-week timeline engineered to bridge skill gaps, build architectural authority, and prepare for top-tier tech screens.
            </p>
          </div>

          {/* Role Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {targetRoles.map((role) => (
              <button
                key={role}
                onClick={() => handleRoleChange(role)}
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

        {/* Global Progress Bar Header */}
        <GlassCard variant="glow" glowColor="blue" className="p-6 border-blue-500/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">90-Day Execution Milestone Tracker</h3>
                <p className="text-xs text-slate-400">Target Role: <strong className="text-slate-200">{selectedRole}</strong></p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400">
                Completed: <strong className="text-white font-mono">{completedTasks}/{totalTasks} Goals</strong>
              </span>
              <span className="text-sm font-extrabold text-blue-400 font-mono">
                {progressPercent}%
              </span>
            </div>
          </div>

          <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden p-0.5">
            <div
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </GlassCard>

        {/* 30 - 60 - 90 Days Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phases.map((phase, pIdx) => {
            const phaseCompleted = phase.actionChecklist.filter(i => i.isCompleted).length;
            const phaseTotal = phase.actionChecklist.length;

            return (
              <GlassCard
                key={phase.phaseTitle}
                variant="default"
                className="p-6 sm:p-7 border border-white/10 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Phase Badge & Timeframe */}
                  <div className="flex items-center justify-between">
                    <Badge variant={pIdx === 0 ? 'blue' : pIdx === 1 ? 'purple' : 'emerald'} size="md">
                      {phase.phaseTitle}
                    </Badge>
                    <span className="text-xs font-mono text-slate-400">{phase.timeframe}</span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{phase.focusArea}</h3>
                    <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs text-slate-300">
                      <span className="text-amber-400 font-bold block mb-0.5 flex items-center gap-1">
                        <Flag className="w-3.5 h-3.5" /> Key Milestone:
                      </span>
                      {phase.keyMilestone}
                    </div>
                  </div>

                  {/* Strategic Goals */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Core Objectives
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {phase.goals.map((goal, gIdx) => (
                        <li key={gIdx} className="flex items-start gap-2">
                          <span className="text-blue-400 font-bold mt-0.5">•</span>
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Checklist */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                        Action Checklist
                      </span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {phaseCompleted}/{phaseTotal} done
                      </span>
                    </div>

                    <div className="space-y-2">
                      {phase.actionChecklist.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          onClick={() => toggleChecklist(pIdx, itemIdx)}
                          className={`p-3 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${
                            item.isCompleted
                              ? 'bg-emerald-500/[0.08] border-emerald-500/30 text-emerald-200 line-through'
                              : 'bg-white/[0.02] border-white/10 text-slate-300 hover:bg-white/5'
                          }`}
                        >
                          <div className="mt-0.5 flex-shrink-0">
                            {item.isCompleted ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                            ) : (
                              <Circle className="w-4 h-4 text-slate-500" />
                            )}
                          </div>
                          <div className="flex-1">
                            <span className="leading-relaxed">{item.item}</span>
                            <span className="block text-[10px] text-slate-400 mt-1 font-mono">
                              Est. {item.estimatedHours} Hours
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    {phase.actionChecklist.reduce((acc, c) => acc + c.estimatedHours, 0)} Total Hours
                  </span>
                  <Link href="/career-coach" className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1">
                    <span>Ask Coach</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}
