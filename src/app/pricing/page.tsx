'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import { 
  Check, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  HelpCircle, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = [
    {
      name: 'Starter Candidate',
      tagline: 'Ideal for students & freshers looking to fix ATS red flags.',
      price: '$0',
      period: 'forever free',
      highlight: false,
      badge: 'Free Tier',
      buttonText: 'Start Free Now',
      buttonVariant: 'outline' as const,
      features: [
        '3 Complete ATS Resume Scans / month',
        'Basic Formatting & Contact validation',
        'Target Role Skill Gap Check (1 Role)',
        '3 AI STAR Bullet Re-writes',
        'Standard Community Support',
      ],
    },
    {
      name: 'Pro Career Accelerator',
      tagline: 'For active job seekers targeting Tier-1 tech interviews.',
      price: isAnnual ? '$15' : '$19',
      period: 'per month',
      highlight: true,
      badge: 'Most Popular',
      buttonText: 'Get Pro Access',
      buttonVariant: 'primary' as const,
      features: [
        'Unlimited Full ATS Deep Diagnostic Scans',
        'All 5 Target Benchmark Roles Included',
        'Unlimited STAR Bullet Re-writes & Comparisons',
        '24/7 HireLens AI Career Coach Chatbot',
        'Custom Job Description (JD) Match Scanner',
        'GitHub & LinkedIn Profile Auditor',
        'Personalized 30-60-90 Day Roadmap Generator',
        'Priority Candidate Support',
      ],
    },
    {
      name: 'Lifetime Offer',
      tagline: 'Pay once, accelerate your career across every job cycle.',
      price: '$99',
      period: 'one-time payment',
      highlight: false,
      badge: 'Lifetime Value',
      buttonText: 'Get Lifetime Pass',
      buttonVariant: 'secondary' as const,
      features: [
        'Everything in Pro Career Accelerator',
        'Lifetime Access to all future AI updates',
        'Direct Resume Review Feedback from Founder',
        'Early access to Mock Technical Interview Simulator',
        'Exportable Custom PDF Resume Templates',
      ],
    },
  ];

  const faqs = [
    {
      q: 'How does HireLens AI simulate real-world ATS software?',
      a: 'We test resumes against the exact parsing engines and tokenization algorithms used by Workday, Greenhouse, Lever, and Taleo. We evaluate single-stream plain text extraction, keyword density, section headers, and bullet formatting.'
    },
    {
      q: 'Is my personal data and resume information stored or sold?',
      a: 'Never. HireLens AI operates with strict ephemeral data principles. We do not sell your information or train public models on your personal resume text.'
    },
    {
      q: 'What if I am a student or recent graduate with little experience?',
      a: 'HireLens AI is particularly powerful for students! Our STAR rewriter helps turn college coursework, hackathon projects, and club leadership into quantified technical accomplishments that impress recruiters.'
    },
    {
      q: 'Can I cancel my Pro subscription at any time?',
      a: 'Yes, absolutely. You can cancel your subscription at any time with a single click in your account settings with zero questions asked.'
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-brand-dark selection:bg-brand-primary selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <Badge variant="purple" size="md" dot={true}>
            Transparent & Simple Pricing
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Invest in Your Career, <span className="text-gradient">Land Top-Tier Offers</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            One extra recruiter interview callback pays for a lifetime of HireLens AI. Choose the plan that fits your job search timeline.
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="pt-6 flex items-center justify-center gap-3">
            <span className={`text-xs font-semibold ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-6 rounded-full bg-slate-800 border border-white/20 p-1 flex items-center transition-colors relative"
            >
              <div
                className={`w-4 h-4 rounded-full bg-blue-500 transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-semibold ${isAnnual ? 'text-white' : 'text-slate-400'} flex items-center gap-1.5`}>
              <span>Annual</span>
              <Badge variant="emerald" size="sm">Save 20%</Badge>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <GlassCard
              key={plan.name}
              variant={plan.highlight ? 'glow' : 'default'}
              glowColor="blue"
              className={`p-8 flex flex-col justify-between space-y-8 relative ${
                plan.highlight ? 'border-blue-500/50 shadow-glass-glow' : 'border-white/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant={plan.highlight ? 'blue' : 'slate'} size="sm">
                    {plan.badge}
                  </Badge>
                </div>

                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                <p className="text-xs text-slate-400 mt-1 min-h-[32px]">{plan.tagline}</p>

                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">{plan.price}</span>
                  <span className="text-xs text-slate-400 font-medium">/ {plan.period}</span>
                </div>

                <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-2">
                    Included Features:
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/upload" className="w-full">
                <GlassButton variant={plan.buttonVariant} size="lg" className="w-full">
                  {plan.buttonText}
                </GlassButton>
              </Link>
            </GlassCard>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="max-w-3xl mx-auto space-y-6 pt-12 border-t border-white/10">
          <div className="text-center space-y-2 mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
            <p className="text-xs sm:text-sm text-slate-400">Everything you need to know about HireLens AI plans and ATS verification.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <GlassCard
                  key={i}
                  variant="default"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                  className="p-5 border border-white/10 cursor-pointer transition-colors hover:border-white/20"
                >
                  <div className="flex items-center justify-between text-sm font-bold text-white">
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </div>
                  {isOpen && (
                    <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed pt-2 border-t border-white/5">
                      {faq.a}
                    </p>
                  )}
                </GlassCard>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
