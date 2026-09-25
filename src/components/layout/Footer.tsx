import React from 'react';
import Link from 'next/link';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-white/10 bg-slate-950/80 backdrop-blur-xl pt-16 pb-12 mt-auto relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="md" showTagline={true} />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              HireLens AI empowers tech talent, students, and engineers to optimize resumes for modern ATS algorithms and see their applications through a recruiter&apos;s eyes.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/AlaminM01/HireLens_AI"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:alaminmondal297@outlook.com"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">Product</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/upload" className="hover:text-blue-400 transition-colors">Resume Upload</Link></li>
              <li><Link href="/ats-analysis" className="hover:text-blue-400 transition-colors">ATS Scoring Engine</Link></li>
              <li><Link href="/skill-gap" className="hover:text-blue-400 transition-colors">Skill Gap Analyzer</Link></li>
              <li><Link href="/resume-optimizer" className="hover:text-blue-400 transition-colors">Before & After Optimizer</Link></li>
              <li><Link href="/career-coach" className="hover:text-blue-400 transition-colors">Career Coach Chatbot</Link></li>
              <li><Link href="/job-match" className="hover:text-blue-400 transition-colors">Job Match Scanner</Link></li>
            </ul>
          </div>

          {/* Features & Insights */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">Intelligence</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/portfolio-analyzer" className="hover:text-blue-400 transition-colors">GitHub & LinkedIn Audit</Link></li>
              <li><Link href="/roadmap" className="hover:text-blue-400 transition-colors">30-60-90 Day Roadmaps</Link></li>
              <li><Link href="/analytics" className="hover:text-blue-400 transition-colors">ATS Score History</Link></li>
              <li><Link href="/dashboard" className="hover:text-blue-400 transition-colors">Applicant Tracker</Link></li>
              <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">Transparent Pricing</Link></li>
            </ul>
          </div>

          {/* Technology & Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300">Stack & Docs</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><span className="text-slate-300 font-mono text-xs">Next.js 14 + React 18</span></li>
              <li><span className="text-slate-300 font-mono text-xs">TypeScript & Tailwind</span></li>
              <li><span className="text-slate-300 font-mono text-xs">Framer Motion FX</span></li>
              <li><span className="text-slate-300 font-mono text-xs">Gemini 1.5 / 2.0 & GPT-4o</span></li>
              <li><span className="text-slate-300 font-mono text-xs">Vercel Deployment Ready</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} HireLens AI. Engineered with precision by <span className="text-slate-300 font-medium">Alamin Mondal</span>.</p>
          <div className="flex items-center gap-6">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span className="flex items-center gap-1">Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" /> for Engineers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
