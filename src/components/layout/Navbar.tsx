'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrandLogo } from '@/components/ui/BrandLogo';
import { GlassButton } from '@/components/ui/GlassButton';
import { 
  FileText, 
  Sparkles, 
  Target, 
  Compass, 
  Layers, 
  Menu, 
  X, 
  ArrowRight,
  UserCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: Layers },
    { name: 'ATS Scanner', href: '/ats-analysis', icon: Target },
    { name: 'Skill Gap', href: '/skill-gap', icon: Compass },
    { name: 'Career Coach', href: '/career-coach', icon: Sparkles },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-950/75 border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <BrandLogo size="md" showTagline={false} />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/10 px-3 py-1.5 rounded-full shadow-inner">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200',
                  isActive
                    ? 'bg-blue-600/30 text-blue-400 border border-blue-500/40 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                )}
              >
                {Icon && <Icon className="w-3.5 h-3.5 opacity-80" />}
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link href="/login">
            <GlassButton variant="ghost" size="sm">
              Sign In
            </GlassButton>
          </Link>
          <Link href="/upload">
            <GlassButton
              variant="primary"
              size="sm"
              leftIcon={<FileText className="w-3.5 h-3.5" />}
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Analyze Resume
            </GlassButton>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden backdrop-blur-2xl bg-slate-900/95 border-b border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors',
                  isActive
                    ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                )}
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 opacity-50" />
              </Link>
            );
          })}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="w-full">
              <GlassButton variant="outline" size="md" className="w-full">
                Sign In
              </GlassButton>
            </Link>
            <Link href="/upload" onClick={() => setMobileMenuOpen(false)} className="w-full">
              <GlassButton variant="primary" size="md" className="w-full" leftIcon={<FileText className="w-4 h-4" />}>
                Analyze Resume Free
              </GlassButton>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
