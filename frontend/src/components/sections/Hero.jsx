import React from 'react'
import { ArrowRight, Monitor, Smartphone, Zap } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 sm:pt-32 pb-16 sm:pb-20 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden flex items-center"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[-0.06em] leading-[0.88] text-balance">
                Websites That Make
                <span className="neon-text block mt-2">Businesses Look Expensive</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl opacity-90">
                We design high-converting websites that help brands build trust, attract customers, and grow faster online.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
              <button
                onClick={() => scrollToSection('#cta')}
                className="btn-glow w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:shadow-glow-lg transition-all flex items-center justify-center gap-2 min-h-12"
              >
                Get a Free Quote
                <ArrowRight className="inline" size={18} />
              </button>
              <button
                onClick={() => scrollToSection('#industries')}
                className="btn-glow w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-purple-500/50 text-white rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:border-purple-500 hover:shadow-glow transition-all flex items-center justify-center gap-2 min-h-12"
                type="button"
              >
                View Industries
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 pt-8 border-t border-purple-500/20">
              <div className="flex-1 sm:flex-none">
                <p className="text-2xl sm:text-3xl font-bold">100%</p>
                <p className="text-xs sm:text-sm text-gray-400">Custom Design</p>
              </div>
              <div className="flex-1 sm:flex-none">
                <p className="text-2xl sm:text-3xl text-purple-400"><Zap size={28} className="inline sm:hidden" /><Zap size={32} className="hidden sm:inline" /></p>
                <p className="text-xs sm:text-sm text-gray-400">Fast Performance</p>
              </div>
              <div className="flex-1 sm:flex-none">
                <p className="text-2xl sm:text-3xl text-purple-400"><Smartphone size={28} className="inline sm:hidden" /><Smartphone size={32} className="hidden sm:inline" /></p>
                <p className="text-xs sm:text-sm text-gray-400">Mobile Ready</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2 md:hidden">
              <div className="glass-card p-3 rounded-2xl border border-purple-400/30 bg-gradient-to-br from-purple-500/12 to-violet-500/8 shadow-[0_0_20px_rgba(168,85,247,0.12)]">
                <div className="flex items-center justify-center mb-2 text-purple-300">
                  <Monitor size={22} />
                </div>
                <p className="text-center text-[11px] font-semibold tracking-[0.08em] text-gray-100 uppercase">Premium Website</p>
              </div>
              <div className="glass-card p-3 rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-500/12 to-purple-500/8 shadow-[0_0_20px_rgba(168,85,247,0.12)]">
                <div className="flex items-center justify-center mb-2 text-violet-300">
                  <Smartphone size={22} />
                </div>
                <p className="text-center text-[11px] font-semibold tracking-[0.08em] text-gray-100 uppercase">Mobile Ready</p>
              </div>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-3xl blur-3xl opacity-20 animate-pulse" />

            <div className="relative space-y-6">
              {/* Laptop Mockup */}
              <div className="glass-card p-6 rounded-2xl transform hover:scale-105 transition-transform">
                <div className="bg-dark-light rounded-lg p-4 space-y-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <Monitor className="text-purple-400 mx-auto" size={40} />
                  <p className="text-center text-sm text-gray-400">Premium Website</p>
                </div>
              </div>

              {/* Mobile Mockup */}
              <div className="ml-20 glass-card p-4 rounded-2xl w-40 transform hover:scale-105 transition-transform">
                <div className="bg-dark-light rounded-lg p-3 space-y-2">
                  <Smartphone className="text-violet-400 mx-auto" size={32} />
                  <p className="text-center text-xs text-gray-400">Mobile Ready</p>
                </div>
              </div>

              {/* Notification Cards */}
              <div className="absolute -right-4 top-32 glass-card p-3 rounded-lg text-sm max-w-xs animate-float">
                <p className="text-gray-300">✓ New inquiry received</p>
              </div>

              <div className="absolute -left-4 bottom-20 glass-card p-3 rounded-lg text-sm max-w-xs animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-gray-300">✓ Website ranking up</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
