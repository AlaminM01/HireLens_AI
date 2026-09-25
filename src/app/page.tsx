import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/landing/HeroSection';
import { StatsSection } from '@/components/landing/StatsSection';
import { FeatureShowcase } from '@/components/landing/FeatureShowcase';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { CTASection } from '@/components/landing/CTASection';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-brand-dark selection:bg-brand-primary selection:text-white">
      {/* Global SaaS Navigation */}
      <Navbar />

      {/* Main Hero with Live Simulator Preview */}
      <main className="flex-1">
        <HeroSection />
        <StatsSection />
        <FeatureShowcase />
        <TestimonialsSection />
        <CTASection />
      </main>

      {/* Startup Footer */}
      <Footer />
    </div>
  );
}
