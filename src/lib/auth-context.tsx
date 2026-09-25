'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  targetRole: string;
  targetCompany?: string;
  isPro: boolean;
  resumesCount: number;
}

interface AuthContextType {
  user: UserProfile | null;
  isLoading: boolean;
  loginDemoUser: () => void;
  loginWithEmail: (email: string, pass: string) => Promise<boolean>;
  signupWithEmail: (name: string, email: string, pass: string, targetRole: string) => Promise<boolean>;
  logout: () => void;
  updateTargetRole: (role: string) => void;
}

const DEFAULT_DEMO_USER: UserProfile = {
  id: 'usr_demo_8829',
  name: 'Alamin Mondal',
  email: 'alaminmondal297@outlook.com',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  targetRole: 'Software Engineer',
  targetCompany: 'Google / Stripe',
  isPro: true,
  resumesCount: 3,
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('hirelens_user_session');
      if (stored) {
        setUser(JSON.parse(stored));
      } else {
        // Pre-initialize with demo user for seamless exploration
        setUser(DEFAULT_DEMO_USER);
        localStorage.setItem('hirelens_user_session', JSON.stringify(DEFAULT_DEMO_USER));
      }
    } catch {
      setUser(DEFAULT_DEMO_USER);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loginDemoUser = () => {
    setUser(DEFAULT_DEMO_USER);
    localStorage.setItem('hirelens_user_session', JSON.stringify(DEFAULT_DEMO_USER));
  };

  const loginWithEmail = async (email: string, _pass: string): Promise<boolean> => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 600)); // micro latency
    const newUser: UserProfile = {
      id: `usr_${Date.now()}`,
      name: email.split('@')[0],
      email,
      targetRole: 'Full Stack Developer',
      isPro: false,
      resumesCount: 1,
    };
    setUser(newUser);
    localStorage.setItem('hirelens_user_session', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const signupWithEmail = async (
    name: string,
    email: string,
    _pass: string,
    targetRole: string
  ): Promise<boolean> => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 600));
    const newUser: UserProfile = {
      id: `usr_${Date.now()}`,
      name,
      email,
      targetRole: targetRole || 'Software Engineer',
      isPro: false,
      resumesCount: 0,
    };
    setUser(newUser);
    localStorage.setItem('hirelens_user_session', JSON.stringify(newUser));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('hirelens_user_session');
  };

  const updateTargetRole = (role: string) => {
    if (user) {
      const updated = { ...user, targetRole: role };
      setUser(updated);
      localStorage.setItem('hirelens_user_session', JSON.stringify(updated));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        loginDemoUser,
        loginWithEmail,
        signupWithEmail,
        logout,
        updateTargetRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
