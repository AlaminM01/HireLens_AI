'use client';

import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  clickable?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showTagline = false,
  clickable = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-12 h-12 text-base',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  const badgeSizes = {
    sm: 'text-[9px] px-1.5 py-0.5',
    md: 'text-[10px] px-2 py-0.5',
    lg: 'text-xs px-2.5 py-1',
  };

  const content = (
    <div className="inline-flex items-center gap-2.5 group select-none">
      {/* Aperture Lens Icon */}
      <div 
        style={{
          width: size === 'sm' ? '28px' : size === 'lg' ? '48px' : '36px',
          height: size === 'sm' ? '28px' : size === 'lg' ? '48px' : '36px',
          flexShrink: 0
        }}
        className={`relative ${iconSizes[size]} rounded-xl bg-slate-900 border border-white/20 p-1 flex items-center justify-center shadow-lg shadow-blue-500/10 group-hover:border-blue-500/50 transition-colors`}
      >
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />
        <svg 
          viewBox="0 0 24 24" 
          width={size === 'sm' ? 20 : size === 'lg' ? 36 : 28} 
          height={size === 'sm' ? 20 : size === 'lg' ? 36 : 28} 
          className="w-full h-full relative z-10" 
          fill="none"
        >
          <circle cx="12" cy="12" r="8" stroke="url(#logoGrad)" strokeWidth="2" strokeDasharray="3 2" />
          <circle cx="12" cy="12" r="4" fill="url(#logoGrad)" />
          <circle cx="10.5" cy="10.5" r="1.5" fill="#FFFFFF" fillOpacity="0.9" />
          <defs>
            <linearGradient id="logoGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#3B82F6" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className={`${textSizes[size]} font-extrabold tracking-tight text-white group-hover:text-blue-100 transition-colors`}>
            Hire<span className="text-brand-primary">Lens</span>
          </span>
          <span className={`inline-flex items-center font-bold uppercase rounded-md bg-gradient-to-r from-blue-500 to-purple-600 text-white tracking-wider shadow-sm ${badgeSizes[size]}`}>
            AI
          </span>
        </div>
        {showTagline && (
          <span className="text-[11px] font-medium text-slate-400 tracking-normal -mt-0.5">
            See Your Resume Through a Recruiter&apos;s Eyes
          </span>
        )}
      </div>
    </div>
  );

  if (clickable) {
    return <Link href="/" className="inline-block">{content}</Link>;
  }

  return content;
};
