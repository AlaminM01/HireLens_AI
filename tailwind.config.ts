import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3B82F6',   // Electric Blue
          secondary: '#8B5CF6', // Purple/Violet
          dark: '#0F172A',      // Slate 900 / Deep Navy Background
          darker: '#0B0F19',    // Pitch Dark Surface
          card: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.1)',
          accent: '#06B6D4',    // Cyan accent
          success: '#10B981',   // Emerald Green
          warning: '#F59E0B',   // Amber
          danger: '#EF4444',    // Rose Red
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.18), rgba(139, 92, 246, 0.15), transparent 70%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-glow': '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        'glass-glow-violet': '0 0 25px -5px rgba(139, 92, 246, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
