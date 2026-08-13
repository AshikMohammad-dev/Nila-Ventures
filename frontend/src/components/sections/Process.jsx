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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Our<span className="neon-text"> Process</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            A proven methodology for exceptional results
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Hidden on mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-violet-500 to-purple-500 -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-6 md:space-y-8">
            {steps.map((step, idx) => {
              const Icon = step.icon
              const isOdd = idx % 2 === 0

              return (
                <div
                  key={idx}
                  className={`flex flex-col ${isOdd ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
                  style={{
                    animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  {/* Content */}
                  <div className="flex-1 glass-card p-6 sm:p-8 rounded-xl sm:rounded-2xl space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-3xl font-black neon-text">
                        {step.number}
                      </span>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center">
                        <Icon size={24} className="text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden lg:block w-6 h-6 rounded-full border-4 border-dark-bg bg-gradient-to-br from-purple-500 to-violet-600 flex-shrink-0" />

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
