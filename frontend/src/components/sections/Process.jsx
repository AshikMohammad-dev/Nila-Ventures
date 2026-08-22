import React from 'react'
import {
  MessageSquare,
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
  Sparkles,
  Clock,
  CheckCircle2
} from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      timeframe: 'Day 1 - 2',
      title: 'Discovery & Vision Alignment',
      description: 'We dive deep into your target audience, competitor landscape, and revenue goals to define exact conversion funnels.',
      deliverable: 'Strategy Blueprint & Sitemap',
    },
    {
      number: '02',
      icon: Palette,
      timeframe: 'Day 3 - 6',
      title: 'Bespoke Luxury UI/UX Design',
      description: 'Handcrafted Figma prototypes tailored to your brand identity with micro-interactions, dark aesthetic, and typography.',
      deliverable: 'Interactive Figma Prototypes',
    },
    {
      number: '03',
      icon: Code2,
      timeframe: 'Day 7 - 11',
      title: 'Speed-Tuned Engineering',
      description: 'Clean React/Tailwind code development with 99+ Core Web Vitals, mobile-first touch optimization, and WhatsApp integrations.',
      deliverable: 'Staging Environment Preview',
    },
    {
      number: '04',
      icon: Rocket,
      timeframe: 'Day 12 - 14',
      title: 'Testing, SEO & Global Launch',
      description: 'Cross-browser QA testing, Google Search Console indexing, domain SSL configuration, and live deployment handover.',
      deliverable: 'Live Website & Admin Access',
    },
  ]

  return (
    <section
      id="process"
      className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden bg-[#08070E]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3 animate-slide-up max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
            <Sparkles size={13} className="text-purple-400" />
            <span>Structured & Transparent Methodology</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            From Concept to Launch in <span className="neon-text">14 Days</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            A battle-tested 4-phase delivery system ensuring zero delays, crystal-clear communication, and elite quality standards.
          </p>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-white/[0.08] hover:border-purple-500/40 relative flex flex-col justify-between group bg-[#0E0C18]/90 transition-all duration-300"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                {/* Step Header */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl sm:text-4xl font-extrabold font-display neon-text opacity-80">
                      {step.number}
                    </span>
                    <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] font-semibold">
                      <Clock size={11} className="text-purple-400" />
                      <span>{step.timeframe}</span>
                    </div>
                  </div>

                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-violet-600 group-hover:text-white transition-all duration-300 shadow-md">
                    <Icon size={20} />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Milestone Deliverable Pill */}
                <div className="pt-5 mt-4 border-t border-white/[0.06]">
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium bg-emerald-500/10 px-2.5 py-1.5 rounded-lg border border-emerald-500/20">
                    <CheckCircle2 size={12} className="flex-shrink-0" />
                    <span className="truncate">{step.deliverable}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
