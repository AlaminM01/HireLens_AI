'use client';

import React from 'react';
import Link from 'next/link';
import { GlassButton } from '@/components/ui/GlassButton';
import { Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden glass-panel border border-blue-500/30 p-8 sm:p-14 text-center">
          {/* Internal Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <Sparkles className="w-3.5 h-3.5" /> Start Optimizing Now
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Ready to See Your Resume Through a{' '}
              <span className="text-gradient">Recruiter&apos;s Eyes?</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
              Upload your current resume in seconds. Get instant ATS scores, missing keywords, and recruiter-grade bullet re-writes.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/upload">
                <GlassButton
                  variant="primary"
                  size="lg"
                  leftIcon={<Zap className="w-5 h-5 text-amber-300" />}
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="w-full sm:w-auto text-base px-8 py-4 shadow-xl shadow-blue-600/30"
                >
                  Upload & Analyze Free
                </GlassButton>
              </Link>
              <Link href="/pricing">
                <GlassButton variant="outline" size="lg" className="w-full sm:w-auto text-base">
                  View Transparent Plans
                </GlassButton>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-4 text-xs text-slate-400 pt-4">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                No credit card required
              </span>
              <span>•</span>
              <span>Free initial analysis</span>
              <span>•</span>
              <span>Export PDF & TXT anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
