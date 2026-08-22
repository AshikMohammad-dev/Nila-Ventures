import React, { useState } from 'react'
import { CheckCircle2, XCircle, Sparkles, ArrowRight, ShieldAlert, Zap, TrendingUp, Lock } from 'lucide-react'

export default function Transformation() {
  const [activeTab, setActiveTab] = useState('after') // 'before', 'after', or 'side-by-side'

  const comparisonData = [
    {
      metric: 'Load Speed & Core Web Vitals',
      before: '3.8s - 5.5s (Slow, heavy bloated plugins)',
      after: '0.8s - 1.2s (Sub-second React/Next.js speed)',
      impact: '75% lower bounce rate',
    },
    {
      metric: 'First Impression & Trust Factor',
      before: 'Generic template, looks like 100 other competitors',
      after: 'Custom luxury brand aesthetics, instant prestige',
      impact: 'Immediate high-ticket positioning',
    },
    {
      metric: 'Mobile Conversion Architecture',
      before: 'Cluttered menus, broken buttons, hard to navigate',
      after: 'Fingertip 1-tap WhatsApp booking & smooth flow',
      impact: '3x higher inquiry rate',
    },
    {
      metric: 'Google SEO & Structured Data',
      before: 'Basic tags, missing Schema, zero local ranking',
      after: 'Full JSON-LD rich snippets, optimized indexing',
      impact: 'Ranks on page 1 for local searches',
    },
    {
      metric: 'Security & Reliability',
      before: 'Vulnerable to WordPress plugin hacks & crashes',
      after: 'Modern static CDN hosting, 99.99% uptime',
      impact: '100% peace of mind',
    },
  ]

  return (
    <section 
      id="transformation"
      className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden bg-cyber-grid"
    >
      <div className="absolute inset-0 bg-radial-ambient pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 space-y-3 animate-slide-up max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
            <Sparkles size={13} className="text-purple-400" />
            <span>The Competitive Edge</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Why High-Growth Brands <span className="neon-text">Upgrade To Us</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            A cheap website costs you thousands in lost customers every month. Here is the tangible difference.
          </p>
        </div>

        {/* Side-by-Side Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          
          {/* Card 1: The Generic Agency / Cheap Route */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border border-red-500/20 bg-[#12080D]/60 relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-red-500/20">
                <div>
                  <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Traditional Cheap Way</span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">Generic Template Site</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-center text-red-400">
                  <XCircle size={22} />
                </div>
              </div>

              <div className="space-y-3.5">
                {comparisonData.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-red-500/[0.04] border border-red-500/10 space-y-1">
                    <p className="text-xs font-semibold text-gray-400">{item.metric}</p>
                    <p className="text-xs sm:text-sm text-red-300/90 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0" />
                      {item.before}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-red-500/20">
              <p className="text-xs text-red-300/70 font-medium text-center">
                ❌ Results in low credibility, missed inquiries, and wasted ad spend.
              </p>
            </div>
          </div>

          {/* Card 2: The Nila Ventures Standard */}
          <div className="glass-card p-6 sm:p-8 rounded-3xl border-2 border-purple-500/40 bg-gradient-to-br from-[#1A0F35]/80 via-[#100C22]/80 to-[#0B0915] relative overflow-hidden flex flex-col justify-between shadow-2xl shadow-purple-900/30">
            {/* Top Glow Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-5 relative z-10">
              <div className="flex items-center justify-between pb-4 border-b border-purple-500/20">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[10px] font-bold uppercase tracking-wider mb-1">
                    <Zap size={11} className="text-purple-400" />
                    High-Converting Standard
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">Nila Ventures Architecture</h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-300 shadow-lg shadow-purple-500/20">
                  <CheckCircle2 size={22} className="text-purple-300" />
                </div>
              </div>

              <div className="space-y-3.5">
                {comparisonData.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-purple-500/[0.08] border border-purple-500/20 space-y-1 group hover:border-purple-400/40 transition-colors">
                    <div className="flex justify-between items-center">
                      <p className="text-xs font-semibold text-purple-300">{item.metric}</p>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                        {item.impact}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-white font-medium flex items-center gap-2">
                      <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                      {item.after}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-purple-500/20 relative z-10">
              <p className="text-xs text-purple-200 font-medium text-center flex items-center justify-center gap-1.5">
                <Sparkles size={14} className="text-purple-400" />
                Built to elevate brand perception and maximize client inquiries from day one.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
