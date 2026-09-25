// HireLens AI - Enterprise Design Tokens System

export const DESIGN_TOKENS = {
  brand: {
    name: 'HireLens AI',
    tagline: 'See Your Resume Through a Recruiter\'s Eyes',
    colors: {
      primary: '#3B82F6',       // Electric Blue
      primaryHover: '#2563EB',
      secondary: '#8B5CF6',     // Radiant Purple/Violet
      secondaryHover: '#7C3AED',
      accent: '#06B6D4',        // Cyber Cyan
      background: '#0F172A',    // Slate 900 Deep Space Navy
      surfaceDark: '#0B0F19',   // Deep Abyss
      surfaceCard: 'rgba(255, 255, 255, 0.05)',
      surfaceCardHover: 'rgba(255, 255, 255, 0.08)',
      glassBorder: 'rgba(255, 255, 255, 0.1)',
      glassBorderActive: 'rgba(59, 130, 246, 0.4)',
      textPrimary: '#F8FAFC',   // Slate 50
      textSecondary: '#94A3B8', // Slate 400
      textMuted: '#64748B',     // Slate 500
    },
    status: {
      success: '#10B981', // Emerald
      warning: '#F59E0B', // Amber
      danger: '#EF4444',  // Rose
      info: '#3B82F6',    // Blue
    },
  },
  glassmorphism: {
    card: 'backdrop-blur-xl bg-white/[0.05] border border-white/10 shadow-glass',
    cardHover: 'hover:bg-white/[0.08] hover:border-blue-500/40 hover:shadow-glass-glow transition-all duration-300',
    modal: 'backdrop-blur-2xl bg-slate-900/90 border border-white/15 shadow-2xl',
    dropdown: 'backdrop-blur-xl bg-slate-900/95 border border-white/10 shadow-glass',
    navbar: 'backdrop-blur-md bg-slate-950/70 border-b border-white/10',
  },
  typography: {
    fonts: {
      sans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      mono: 'JetBrains Mono, Fira Code, monospace',
    },
    scale: {
      hero: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight',
      h1: 'text-3xl sm:text-4xl font-bold tracking-tight',
      h2: 'text-2xl sm:text-3xl font-semibold tracking-tight',
      h3: 'text-xl sm:text-2xl font-semibold',
      bodyLg: 'text-lg sm:text-xl text-slate-300',
      body: 'text-base text-slate-300',
      bodySm: 'text-sm text-slate-400',
      caption: 'text-xs text-slate-500 uppercase tracking-wider font-semibold',
    },
  },
  targetRoles: [
    'Software Engineer',
    'Java Developer',
    'Full Stack Developer',
    'Data Analyst',
    'AI/ML Engineer',
  ] as const,
};
