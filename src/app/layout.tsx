import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HireLens AI - See Your Resume Through a Recruiter\'s Eyes',
  description: 'AI-powered Resume Analysis, ATS Compatibility Checker, and Career Optimization Platform for engineers, students, and professionals.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-brand-dark text-slate-100 min-h-screen relative antialiased selection:bg-brand-primary selection:text-white">
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-brand-primary/15 rounded-full blur-[120px]" />
          <div className="absolute top-[-10%] right-[20%] w-[450px] h-[450px] bg-brand-secondary/15 rounded-full blur-[140px]" />
        </div>
        <div className="relative z-10 flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
