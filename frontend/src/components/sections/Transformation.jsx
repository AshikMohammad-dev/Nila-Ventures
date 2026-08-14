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
    <section className="relative py-6 sm:py-8 md:py-14 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-violet-600/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-10 space-y-1.5 sm:space-y-2 md:space-y-3 animate-slide-up">
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-black">
            Your Business<span className="neon-text"> Transformation</span>
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-400">
            See the dramatic difference a professional website makes
          </p>
        </div>

        {/* Transformation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6 items-center">
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
