'use client';

import React from 'react';
import { GlassCard } from '@/components/ui/GlassCard';
import { Badge } from '@/components/ui/Badge';
import { Star, Quote, ArrowUpRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatarText: string;
  review: string;
  scoreBefore: number;
  scoreAfter: number;
}

const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    role: 'Frontend Engineer',
    company: 'Now at Stripe',
    avatarText: 'PS',
    review: 'HireLens AI flagged that my two-column Canva resume was completely scrambled by Greenhouse. Switched to their single-stream format and STAR suggestions—landed 4 interviews in 10 days!',
    scoreBefore: 48,
    scoreAfter: 94,
  },
  {
    name: 'Alexandre Moreau',
    role: 'Full Stack Developer',
    company: 'Now at Uber',
    avatarText: 'AM',
    review: 'The Career Coach chatbot gave me harsh but accurate feedback on my technical experience bullets. Replacing vague verbs with metric-backed accomplishments got me past the recruiter screen immediately.',
    scoreBefore: 55,
    scoreAfter: 91,
  },
  {
    name: 'Rohit Verma',
    role: 'AI / ML Engineer',
    company: 'Now at Amazon',
    avatarText: 'RV',
    review: 'The skill gap analyzer was spot on. It pointed out that my resume lacked Distributed Systems keywords despite having done PyTorch model parallelization. Fixed it and scored a direct referral!',
    scoreBefore: 62,
    scoreAfter: 96,
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <Badge variant="blue" size="md">
            Candidate Success Stories
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            From ATS Rejections to <span className="text-gradient">Dream Tech Offers</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            See how real engineers optimized their resumes and transformed their callback rates with HireLens AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <GlassCard key={t.name} variant="glow" glowColor="blue" className="flex flex-col justify-between p-7">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono">
                    <span className="text-rose-400 font-bold">{t.scoreBefore}</span>
                    <span className="text-slate-500">→</span>
                    <span className="text-emerald-400 font-bold">{t.scoreAfter} ATS</span>
                  </div>
                </div>

                <Quote className="w-6 h-6 text-blue-400/40 mb-3" />
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  &quot;{t.review}&quot;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center font-bold text-xs text-white">
                  {t.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role} • <span className="text-emerald-400 font-medium">{t.company}</span></p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};
