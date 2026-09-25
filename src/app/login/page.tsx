'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { Badge } from '@/components/ui/Badge';
import { Mail, Lock, Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { loginDemoUser, loginWithEmail, isLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both email and password.');
      return;
    }
    setError('');
    const success = await loginWithEmail(email, password);
    if (success) {
      router.push('/dashboard');
    }
  };

  const handleDemoAccess = () => {
    loginDemoUser();
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-12 relative overflow-hidden bg-brand-dark">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial from-blue-600/20 via-purple-600/10 to-transparent blur-3xl pointer-events-none" />

      <div className="w-full max-w-md relative z-10 space-y-6">
        {/* Brand Header */}
        <div className="text-center space-y-2">
          <div className="inline-block mb-2">
            <BrandLogo size="lg" clickable={true} />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Welcome Back to HireLens AI
          </h1>
          <p className="text-sm text-slate-400">
            Sign in to access your ATS diagnostics, resume history, and career roadmaps.
          </p>
        </div>

        {/* Demo Fast Login Callout */}
        <div className="rounded-2xl bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 border border-blue-500/30 p-4 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-blue-300 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Instant Recruiter & Candidate Demo</span>
          </div>
          <p className="text-xs text-slate-300 mb-3">
            Want to test drive the platform immediately with pre-loaded mock resumes?
          </p>
          <GlassButton
            type="button"
            variant="primary"
            size="sm"
            onClick={handleDemoAccess}
            className="w-full"
            rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
          >
            One-Click Demo Login
          </GlassButton>
        </div>

        {/* Login Form Card */}
        <GlassCard variant="default" className="p-7">
          <form onSubmit={handleEmailLogin} className="space-y-4">
            {error && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Work or Personal Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="engineer@company.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Password
                </label>
                <span className="text-xs text-blue-400 hover:underline cursor-pointer">
                  Forgot?
                </span>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-input text-sm text-white placeholder-slate-500 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <GlassButton
              type="submit"
              variant="primary"
              size="md"
              className="w-full mt-2"
              isLoading={isLoading}
            >
              Sign In to HireLens
            </GlassButton>
          </form>

          {/* Social Logins */}
          <div className="mt-6 pt-6 border-t border-white/10 text-center">
            <span className="text-xs text-slate-400">Or continue with</span>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <button
                type="button"
                onClick={handleDemoAccess}
                className="py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-medium text-slate-300 transition-colors"
              >
                Google Workspace
              </button>
              <button
                type="button"
                onClick={handleDemoAccess}
                className="py-2.5 px-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-xs font-medium text-slate-300 transition-colors"
              >
                GitHub OAuth
              </button>
            </div>
          </div>
        </GlassCard>

        {/* Footer Link */}
        <p className="text-center text-xs text-slate-400">
          Don&apos;t have an account yet?{' '}
          <Link href="/signup" className="text-blue-400 hover:text-blue-300 font-semibold underline underline-offset-4">
            Create an account free
          </Link>
        </p>
      </div>
    </div>
  );
}
