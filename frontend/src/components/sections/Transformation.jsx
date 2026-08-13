import React from 'react'
import { CheckCircle2, X } from 'lucide-react'

export default function Transformation() {
  const beforeItems = [
    'No website',
    'Low credibility',
    'Few inquiries',
    'Hard to find online',
  ]

  const afterItems = [
    'Professional online presence',
    'Strong brand trust',
    'More inquiries',
    'Better conversions',
  ]

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-violet-600/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Your Business<span className="neon-text"> Transformation</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400">
            See the dramatic difference a professional website makes
          </p>
        </div>

        {/* Transformation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 items-center">
          {/* Before Card */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-6 border-red-500/20">
            <h3 className="text-xl sm:text-2xl font-bold">Without a Website</h3>
            <div className="space-y-4">
              {beforeItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <X className="text-red-500 flex-shrink-0 mt-1" size={18} />
                  <p className="text-sm sm:text-base text-gray-300">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 pt-4">
              Missing out on growth opportunities
            </p>
          </div>

          {/* VS Divider */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full blur-xl opacity-30 animate-glow-pulse" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 flex items-center justify-center font-bold text-xl">
                VS
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl space-y-6 border-green-500/20">
            <h3 className="text-xl sm:text-2xl font-bold">With Nila Ventures</h3>
            <div className="space-y-4">
              {afterItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0 mt-1" size={18} />
                  <p className="text-sm sm:text-base text-gray-300">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-400 pt-4">
              Ready to scale and grow your business
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
