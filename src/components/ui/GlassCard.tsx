import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'glow' | 'subtle';
  glowColor?: 'blue' | 'purple' | 'emerald' | 'amber';
  children: React.ReactNode;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  variant = 'default',
  glowColor = 'blue',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'relative rounded-2xl p-6 transition-all duration-300';

  const variantStyles = {
    default: 'glass-panel',
    interactive: 'glass-panel-interactive cursor-pointer',
    glow: cn(
      'glass-panel',
      glowColor === 'blue' && 'hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] border-blue-500/20',
      glowColor === 'purple' && 'hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] border-purple-500/20',
      glowColor === 'emerald' && 'hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] border-emerald-500/20',
      glowColor === 'amber' && 'hover:shadow-[0_0_30px_rgba(245,158,11,0.25)] border-amber-500/20'
    ),
    subtle: 'bg-white/[0.02] border border-white/5 backdrop-blur-md',
  }[variant];

  return (
    <div className={cn(baseStyles, variantStyles, className)} {...props}>
      {children}
    </div>
  );
};
