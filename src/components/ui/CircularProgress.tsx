'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CircularProgressProps {
  score: number; // 0 to 100
  size?: number; // diameter in px
  strokeWidth?: number;
  label?: string;
  sublabel?: string;
  animate?: boolean;
  className?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  score,
  size = 140,
  strokeWidth = 10,
  label,
  sublabel,
  animate = true,
  className,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const safeScore = Math.min(100, Math.max(0, score));
  const strokeDashoffset = circumference - (safeScore / 100) * circumference;

  // Determine gradient color ID based on score
  const getScoreColor = () => {
    if (safeScore >= 80) return { stroke: '#10B981', text: 'text-emerald-400', labelText: 'Excellent' };
    if (safeScore >= 60) return { stroke: '#F59E0B', text: 'text-amber-400', labelText: 'Moderate' };
    return { stroke: '#EF4444', text: 'text-rose-400', labelText: 'Needs Work' };
  };

  const { stroke, text, labelText } = getScoreColor();
  const gradId = `scoreGrad-${safeScore}-${size}`;

  return (
    <div className={cn('relative flex flex-col items-center justify-center select-none', className)}>
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="transform -rotate-90"
        >
          <defs>
            <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
              {safeScore >= 80 ? (
                <>
                  <stop offset="0%" stopColor="#10B981" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </>
              ) : safeScore >= 60 ? (
                <>
                  <stop offset="0%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#EAB308" />
                </>
              ) : (
                <>
                  <stop offset="0%" stopColor="#EF4444" />
                  <stop offset="100%" stopColor="#F43F5E" />
                </>
              )}
            </linearGradient>
          </defs>

          {/* Background track circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth={strokeWidth}
            fill="none"
          />

          {/* Animated active progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`url(#${gradId})`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: animate ? 1.4 : 0, ease: 'easeOut' }}
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        {/* Center Score Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className={cn('text-3xl font-extrabold tracking-tight', text)}>
            {safeScore}
          </span>
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
            {sublabel || '/ 100'}
          </span>
        </div>
      </div>

      {label && (
        <div className="mt-2.5 text-center">
          <p className="text-sm font-semibold text-slate-200">{label}</p>
          <span className={cn('text-xs font-medium', text)}>{labelText}</span>
        </div>
      )}
    </div>
  );
};
