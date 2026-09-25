'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GlassCard } from '@/components/ui/GlassCard';
import { GlassButton } from '@/components/ui/GlassButton';
import { Badge } from '@/components/ui/Badge';
import { ChatMessage } from '@/types';
import { 
  Bot, 
  User, 
  Send, 
  Sparkles, 
  RotateCcw, 
  Zap, 
  MessageSquare, 
  ChevronRight,
  HelpCircle,
  Briefcase
} from 'lucide-react';

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'msg_1',
    sender: 'assistant',
    content: `### 👋 Welcome to **HireLens Career Coach**!

I have loaded your resume context and analyzed it through our enterprise recruiter diagnostic engine.

Here are a few high-impact questions we can explore right away:
1. **Explain weak areas:** Why did my resume score below 90% in content or keywords?
2. **STAR bullet re-writes:** How do I transform my project bullet points into metric-driven accomplishments?
3. **Mock Tech Screen:** What questions will hiring managers ask about my architecture projects?`,
    timestamp: 'Just now',
    suggestedPrompts: [
      'Why is my ATS score low?',
      'Rewrite my project descriptions using STAR',
      'What questions will Google ask for this role?',
      'What skills am I missing for this role?'
    ]
  }
];

export default function CareerCoachPage() {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [targetRole, setTargetRole] = useState('Software Engineer');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const sendMessage = async (contentToSend?: string) => {
    const text = (contentToSend || input).trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: `msg_${Date.now()}`,
      sender: 'user',
      content: text,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      let resumeText = '';
      try {
        resumeText = localStorage.getItem('hirelens_current_resume_text') || '';
      } catch {}

      const res = await fetch('/api/career-coach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          resumeContext: resumeText,
          targetRole,
        }),
      });

      const data = await res.json();
      if (data.success && data.data) {
        const assistantMsg: ChatMessage = {
          id: `msg_${Date.now()}_reply`,
          sender: 'assistant',
          content: data.data.reply,
          timestamp: 'Just now',
          suggestedPrompts: data.data.suggestedPrompts,
        };
        setMessages((prev) => [...prev, assistantMsg]);
      }
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: `msg_${Date.now()}_err`,
        sender: 'assistant',
        content: "I'm having trouble connecting to the advisory server. Please check your connection and try again.",
        timestamp: 'Just now',
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <div className="flex min-h-screen flex-col bg-brand-dark selection:bg-brand-primary selection:text-white">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 sm:px-6 py-8 md:py-12 flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 border border-white/20 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white tracking-tight">HireLens Career Coach</h1>
                <Badge variant="emerald" size="sm" dot={true}>Online</Badge>
              </div>
              <p className="text-xs text-slate-400">
                Trained on 50,000+ tech resumes and Silicon Valley recruiter rubrics
              </p>
            </div>
          </div>

          <button
            onClick={handleResetChat}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white text-xs font-medium flex items-center gap-1.5 transition-colors"
            title="Reset Conversation"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>

        {/* Message Container */}
        <GlassCard variant="default" className="flex-1 p-4 sm:p-6 overflow-y-auto min-h-[500px] max-h-[600px] flex flex-col space-y-4 border border-white/10">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
              >
                {!isUser && (
                  <div className="w-8 h-8 rounded-xl bg-blue-600/30 border border-blue-500/40 flex-shrink-0 flex items-center justify-center text-blue-400">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`max-w-2xl rounded-2xl p-4 text-sm leading-relaxed ${
                  isUser
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-none shadow-md shadow-blue-600/20'
                    : 'bg-white/[0.05] border border-white/10 text-slate-200 rounded-tl-none prose prose-invert prose-sm max-w-none'
                }`}>
                  <div className="whitespace-pre-line">{msg.content}</div>

                  {/* Suggested Quick Prompts */}
                  {msg.suggestedPrompts && msg.suggestedPrompts.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap gap-2">
                      {msg.suggestedPrompts.map((prompt, i) => (
                        <button
                          key={i}
                          onClick={() => sendMessage(prompt)}
                          className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 text-[11px] font-medium text-blue-300 hover:text-white transition-all text-left flex items-center gap-1"
                        >
                          <ChevronRight className="w-3 h-3 text-blue-400" />
                          <span>{prompt}</span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {isUser && (
                  <div className="w-8 h-8 rounded-xl bg-slate-800 border border-white/10 flex-shrink-0 flex items-center justify-center text-slate-300">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex gap-3 justify-start items-center text-slate-400 text-xs">
              <div className="w-8 h-8 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Sparkles className="w-4 h-4 animate-spin" />
              </div>
              <span className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-slate-300 flex items-center gap-1.5">
                Career Coach is formulating recruiter advice...
              </span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </GlassCard>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className="mt-4 flex gap-2"
        >
          <div className="relative flex-1">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about ATS scores, STAR rewrites, or interview questions..."
              className="w-full px-4 py-3.5 rounded-2xl glass-input text-sm text-white placeholder-slate-500 focus:border-blue-500 pr-12 transition-all shadow-lg shadow-black/20"
            />
          </div>
          <GlassButton
            type="submit"
            variant="primary"
            size="md"
            disabled={!input.trim() || isTyping}
            className="px-5 rounded-2xl"
          >
            <Send className="w-4 h-4" />
          </GlassButton>
        </form>
      </main>

      <Footer />
    </div>
  );
}
