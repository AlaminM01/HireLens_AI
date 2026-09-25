'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ResumeUploader } from '@/components/resume/ResumeUploader';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, CheckCircle2, FileCheck2, Cpu } from 'lucide-react';

export default function UploadPage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-dark selection:bg-brand-primary selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Top Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <Badge variant="blue" size="md" dot={true}>
            Step 1 of 3: Resume Ingestion
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Upload Your <span className="text-gradient">Resume</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Our multi-engine pipeline parses your document through automated ATS filters, extracting structural clarity, technical taxonomy, and achievement metrics.
          </p>
        </div>

        {/* Uploader Card */}
        <ResumeUploader redirectOnComplete={true} />

        {/* Quality Guidelines Section */}
        <div className="mt-16 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10 text-xs text-slate-400">
          <div className="space-y-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="font-bold text-white flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-emerald-400" /> Single-Column Standard
            </span>
            <p>Tables and multi-column designs often cause ATS parsers to misread chronological order.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="font-bold text-white flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-blue-400" /> Deep Heuristic Analysis
            </span>
            <p>Instantly extracts languages, frameworks, metrics, action verbs, and contact info.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="font-bold text-white flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-purple-400" /> Zero Data Retention
            </span>
            <p>Your resume text is processed client-side and ephemeral for guaranteed security.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
