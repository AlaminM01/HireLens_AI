import React from 'react';
import { cn } from '@/lib/utils';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
  gradient?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 2,
  gradient = false,
  className,
  children,
  ...props
}) => {
  const Tag = `h${level}` as React.ElementType;

  const styles = {
    1: 'text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight',
    2: 'text-2xl sm:text-3xl font-bold tracking-tight',
    3: 'text-xl sm:text-2xl font-semibold tracking-tight',
    4: 'text-lg sm:text-xl font-semibold',
  }[level];

  return (
    <Tag
      className={cn(
        styles,
        gradient ? 'text-gradient' : 'text-slate-100',
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export const Text: React.FC<React.HTMLAttributes<HTMLParagraphElement> & {
  variant?: 'lead' | 'body' | 'muted' | 'small';
}> = ({ variant = 'body', className, children, ...props }) => {
  const styles = {
    lead: 'text-lg sm:text-xl text-slate-300 font-normal leading-relaxed',
    body: 'text-base text-slate-300 leading-relaxed',
    muted: 'text-sm text-slate-400',
    small: 'text-xs text-slate-500 font-medium',
  }[variant];

  return (
    <p className={cn(styles, className)} {...props}>
      {children}
    </p>
  );
};

export const GradientText: React.FC<React.HTMLAttributes<HTMLSpanElement> & {
  from?: 'blue-violet' | 'cyan-blue' | 'emerald-cyan';
}> = ({ from = 'blue-violet', className, children, ...props }) => {
  const gradients = {
    'blue-violet': 'bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500',
    'cyan-blue': 'bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500',
    'emerald-cyan': 'bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-500',
  }[from];

  return (
    <span
      className={cn(
        gradients,
        'bg-clip-text text-transparent font-extrabold inline-block',
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
