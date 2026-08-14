import React from 'react'
import { ArrowRight, Monitor, Smartphone, Zap, MessageCircle } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openWhatsApp = () => {
    const message = "Hi Nila Ventures! I'm interested in getting a free quote for my website project. Can you help me?"
    window.open(`https://wa.me/917510988356?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <section
      id="hero"
      className="relative md:min-h-screen pt-16 sm:pt-20 md:pt-28 pb-4 sm:pb-6 md:pb-16 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden flex items-center"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-2 sm:gap-4 md:gap-10 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-2 sm:space-y-3 md:space-y-5 animate-slide-up">
            <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black tracking-[-0.04em] leading-snug text-balance">
                Websites That Make
                <span className="neon-text block mt-1">Businesses Look Expensive</span>
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed max-w-2xl opacity-90">
                High-converting websites that help brands build trust and grow faster online.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-1.5 sm:gap-2.5 md:gap-3 pt-1 sm:pt-2 md:pt-4">
              <button
                onClick={openWhatsApp}
                className="btn-glow w-full px-3 sm:px-5 md:px-8 py-1.5 sm:py-2.5 md:py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg sm:rounded-lg md:rounded-xl font-bold text-xs sm:text-sm md:text-base lg:text-lg hover:shadow-glow-lg transition-all flex items-center justify-center gap-1.5 sm:gap-2"
              >
                <MessageCircle size={12} className="sm:w-4 sm:h-4 md:w-5 md:h-5" />
                Get a Free Quote
              </button>
              <button
                onClick={() => scrollToSection('#industries')}
                className="btn-glow w-full px-3 sm:px-5 md:px-8 py-1.5 sm:py-2.5 md:py-3 bg-transparent border-2 border-purple-500/50 text-white rounded-lg sm:rounded-lg md:rounded-xl font-bold text-xs sm:text-sm md:text-base lg:text-lg hover:border-purple-500 hover:shadow-glow transition-all"
                type="button"
              >
                View Industries
              </button>
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
