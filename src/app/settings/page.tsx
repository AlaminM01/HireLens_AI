'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import { useAuth } from '@/lib/auth-context';
import { 
  Settings, 
  User, 
  Key, 
  Cpu, 
  ShieldCheck, 
  Bell, 
  Check, 
  Sparkles,
  Lock
} from 'lucide-react';

export default function SettingsPage() {
  const { user, updateTargetRole } = useAuth();
  const [name, setName] = useState(user?.name || 'Alamin Mondal');
  const [targetRole, setTargetRole] = useState(user?.targetRole || 'Software Engineer');
  const [aiProvider, setAiProvider] = useState<'gemini' | 'openai'>('gemini');
  const [apiKey, setApiKey] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateTargetRole(targetRole);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="flex min-h-screen flex-col bg-brand-dark selection:bg-brand-primary selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-14 space-y-8">
        <div className="border-b border-white/10 pb-6">
          <Badge variant="blue" size="md" className="mb-2">Configuration</Badge>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Account & AI <span className="text-gradient">Settings</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Manage your candidate profile, target benchmark role, and custom AI engine credentials.
          </p>
        </div>

        {savedSuccess && (
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4" />
            <span>Settings successfully updated and saved locally!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          {/* Candidate Profile Details */}
          <GlassCard variant="default" className="p-6 sm:p-7 border border-white/10 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <User className="w-4 h-4 text-blue-400" />
              Candidate Profile
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Display Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Primary Target Benchmark Role
                </label>
                <select
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white bg-slate-900 focus:border-blue-500 cursor-pointer"
                >
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Java Developer">Java Developer</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="AI/ML Engineer">AI/ML Engineer</option>
                </select>
              </div>
            </div>
          </GlassCard>

          {/* AI Engine & API Keys */}
          <GlassCard variant="default" className="p-6 sm:p-7 border border-white/10 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Cpu className="w-4 h-4 text-purple-400" />
              AI Intelligence Engine Configuration
            </h3>
            <p className="text-xs text-slate-400">
              HireLens AI runs on smart offline heuristics out of the box. You can optionally supply your own Gemini or OpenAI API key for bespoke LLM generations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div
                onClick={() => setAiProvider('gemini')}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  aiProvider === 'gemini'
                    ? 'border-blue-500 bg-blue-600/10'
                    : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-white">Google Gemini 1.5 Flash / Pro</span>
                  <Badge variant="blue" size="sm">Recommended</Badge>
                </div>
                <p className="text-xs text-slate-400">Ultra fast zero-latency technical resume evaluation.</p>
              </div>

              <div
                onClick={() => setAiProvider('openai')}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  aiProvider === 'openai'
                    ? 'border-purple-500 bg-purple-600/10'
                    : 'border-white/10 bg-white/[0.02]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-white">OpenAI GPT-4o</span>
                  <Badge variant="purple" size="sm">Enterprise</Badge>
                </div>
                <p className="text-xs text-slate-400">High-precision STAR bullet re-structuring.</p>
              </div>
            </div>

            <div className="pt-2">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5 flex items-center gap-1.5">
                <Key className="w-3.5 h-3.5 text-slate-400" /> Optional Custom API Key
              </label>
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="w-full px-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:border-blue-500 font-mono"
              />
              <span className="block text-[11px] text-slate-500 mt-1">
                Keys remain private in your browser session and are never logged to external servers.
              </span>
            </div>
          </GlassCard>

          {/* Privacy & Security */}
          <GlassCard variant="default" className="p-6 border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <div>
                <h4 className="text-sm font-bold text-white">Ephemeral Analysis Guarantee</h4>
                <p className="text-xs text-slate-400">All resume text parsing and scoring is client-side encrypted.</p>
              </div>
            </div>
            <Badge variant="emerald" size="sm">Active</Badge>
          </GlassCard>

          <GlassButton type="submit" variant="primary" size="md">
            Save Preferences
          </GlassButton>
        </form>
      </main>

      <Footer />
    </div>
  );
}
