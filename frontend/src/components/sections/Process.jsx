import React from 'react'
import {
  MessageSquare,
  Lightbulb,
  Palette,
  Code2,
  Rocket,
  TrendingUp,
} from 'lucide-react'

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: MessageSquare,
      title: 'Discovery Call',
      description: 'We understand your business, goals, and vision.',
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Strategy',
      description: 'Crafting a comprehensive plan tailored to your needs.',
    },
    {
      number: '03',
      icon: Palette,
      title: 'Design',
      description: 'Creating stunning, user-friendly designs.',
    },
    {
      number: '04',
      icon: Code2,
      title: 'Development',
      description: 'Building fast, secure, and scalable websites.',
    },
    {
      number: '05',
      icon: Rocket,
      title: 'Launch',
      description: 'Deploying your website to the world.',
    },
    {
      number: '06',
      icon: TrendingUp,
      title: 'Growth Support',
      description: 'Continuous optimization and support.',
    },
  ]

  return (
    <section
      id="process"
      className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-violet-600/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.05em] text-balance">
            Our<span className="neon-text"> Process</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto opacity-90">
            A proven methodology for exceptional results
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-purple-500/70 to-transparent -translate-x-1/2" />

          <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 overflow-x-auto pb-3 md:overflow-visible snap-x md:snap-none scrollbar-thin scrollbar-thumb-purple-500/70 scrollbar-track-transparent">
            {steps.map((step, idx) => {
              const Icon = step.icon

              return (
                <div
                  key={idx}
                  className="relative flex-shrink-0 w-[82%] sm:w-[68%] md:w-auto max-w-[320px] md:max-w-none snap-center md:snap-none"
                  style={{
                    animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  <div className="glass-card h-full p-4 sm:p-6 md:p-7 rounded-2xl border border-purple-500/20 relative">
                    <div className="absolute -top-3 left-4 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.45)]">
                      <span className="text-[10px] font-black">{step.number}</span>
                    </div>

                    <div className="flex items-start gap-3 sm:gap-4 pt-4 sm:pt-5">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.35)]">
                        <Icon size={22} className="text-white sm:w-6 sm:h-6" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{step.title}</h3>
                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
