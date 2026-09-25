'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { Mail, Lock, User, Target, CheckCircle2 } from 'lucide-react';

const targetRoles = [
  'Software Engineer',
  'Java Developer',
  'Full Stack Developer',
  'Data Analyst',
  'AI/ML Engineer',
];

export default function SignupPage() {
  const router = useRouter();
  const { signupWithEmail, isLoading } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [targetRole, setTargetRole] = useState(targetRoles[0]);
  const [error, setError] = useState('');

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    const success = await signupWithEmail(name, email, password, targetRole);
    if (success) {
      router.push('/upload');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden bg-brand-dark">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-radial from-purple-600/20 via-blue-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-block mb-2">
            <BrandLogo size="lg" clickable={true} />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Create Your Free Account
          </h1>
          <p className="text-sm text-slate-400">
            Start scanning and optimizing your resume against modern ATS platforms in minutes.
          </p>
        </div>

        <GlassCard variant="default" className="p-7">
          <form onSubmit={handleSignup} className="space-y-4">
            {error && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alamin Mondal"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="engineer@gmail.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Target Role Benchmark
              </label>
              <div className="relative">
                <Target className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <select
                  value={targetRole}
                  onChange={(e) => setTargetRole(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm text-white bg-slate-900 focus:border-blue-500 transition-colors appearance-none cursor-pointer"
                >
                  {targetRoles.map((role) => (
                    <option key={role} value={role} className="bg-slate-900 text-white">
                      {role}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Unlimited free ATS score checks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Personalized AI Career Coach suggestions</span>
              </div>
            </div>

            <GlassButton
              type="submit"
              variant="primary"
              size="md"
              className="w-full mt-2"
              isLoading={isLoading}
            >
              Create Account & Start Scanning
            </GlassButton>
          </form>
        </GlassCard>

        <p className="text-center text-xs text-slate-400">
          Already have an account?{' '}
          <Link href="/login" className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4">
            Sign In here
          </Link>
        </p>
      </div>
    </div>
  );
}
