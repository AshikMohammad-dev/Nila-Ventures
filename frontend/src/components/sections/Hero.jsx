import React from 'react'
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Star, 
  Flame, 
  MousePointerClick,
  CheckCircle2,
  Lock
} from 'lucide-react'

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
      className="relative min-h-[92vh] pt-24 sm:pt-28 md:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden flex items-center bg-cyber-grid"
    >
      {/* Dynamic Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-br from-purple-600/15 via-violet-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 animate-slide-up text-left">
            
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-300 text-xs sm:text-sm font-medium backdrop-blur-md">
              <Sparkles size={14} className="text-purple-400 animate-pulse" />
              <span>Bespoke Web Engineering & Digital Design</span>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] font-display text-white">
                Websites That Make Businesses Look{' '}
                <span className="neon-text inline-block">Expensive & Credible</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300/90 leading-relaxed max-w-2xl font-light">
                We craft high-converting, lightning-fast digital experiences that turn casual visitors into loyal high-ticket clients.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1">
              <button
                onClick={openWhatsApp}
                className="btn-glow px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-purple-500 via-purple-600 to-violet-600 text-white rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 group shadow-xl shadow-purple-600/25"
              >
                <MessageCircle size={19} className="group-hover:scale-110 transition-transform" />
                <span>Claim Free Strategy Call</span>
              </button>
              
              <button
                onClick={() => scrollToSection('#services')}
                className="px-6 sm:px-8 py-3.5 sm:py-4 glass-card rounded-xl font-semibold text-sm sm:text-base text-gray-200 hover:text-white hover:border-purple-400/50 flex items-center justify-center gap-2 transition-all duration-300 group"
                type="button"
              >
                <span>Explore Services</span>
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform text-purple-400" />
              </button>
            </div>

            {/* Trust Mini Bar */}
            <div className="pt-4 sm:pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-3 sm:gap-4 max-w-xl">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-white font-bold text-sm sm:text-base">
                  <Flame size={16} className="text-amber-400" />
                  <span>3.2x</span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-400">Avg. Lead Boost</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-white font-bold text-sm sm:text-base">
                  <Zap size={16} className="text-purple-400" />
                  <span>&lt;1.2s</span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-400">PageSpeed Load</p>
              </div>

              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-white font-bold text-sm sm:text-base">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span>5.0/5</span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-400">Client Satisfaction</p>
              </div>
            </div>

          </div>

          {/* Right Column: Ultra-Realistic Interactive Browser Showcase */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none px-2 sm:px-0">
              
              {/* Outer Decorative Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-purple-600/30 to-violet-500/20 rounded-3xl blur-2xl opacity-60 -z-10" />

              {/* Main Luxury Browser Frame */}
              <div className="glass-card rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0E0C18]/90">
                {/* Browser Header Bar */}
                <div className="px-3 sm:px-4 py-2.5 sm:py-3 bg-white/[0.03] border-b border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-[9px] sm:text-[10px] text-gray-300">
                    <Lock size={10} className="text-emerald-400" />
                    <span className="truncate max-w-[140px] sm:max-w-none">nilaventures.com/client-store</span>
                  </div>
                  <div className="w-3" />
                </div>

                {/* Simulated Web App UI */}
                <div className="p-3.5 sm:p-5 space-y-3 sm:space-y-4">
                  {/* Storefront Hero Preview */}
                  <div className="rounded-xl p-3.5 sm:p-4 bg-gradient-to-br from-purple-900/40 via-violet-950/30 to-black border border-purple-500/20 relative overflow-hidden">
                    <div className="flex justify-between items-start">
                      <div className="space-y-0.5 sm:space-y-1">
                        <span className="text-[9px] sm:text-[10px] font-semibold text-purple-300 uppercase tracking-wider">Luxury Living & Co.</span>
                        <h4 className="text-sm sm:text-base font-bold text-white leading-tight">Elevate Your Everyday Sanctuary</h4>
                      </div>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[9px] sm:text-[10px] font-bold">
                        Live Demo
                      </span>
                    </div>

                    {/* Metric Graph Simulation */}
                    <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-white/10 flex items-center justify-between">
                      <div>
                        <span className="text-[9px] sm:text-[10px] text-gray-400 block">Monthly Revenue</span>
                        <span className="text-base sm:text-lg font-extrabold text-white">₹4,82,000</span>
                      </div>
                      <div className="flex items-center gap-1 text-emerald-400 text-[11px] sm:text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-lg">
                        <TrendingUp size={13} />
                        <span>+284%</span>
                      </div>
                    </div>
                  </div>

                  {/* Micro Feature Grid */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-0.5 sm:space-y-1">
                      <div className="flex items-center gap-1 sm:gap-1.5 text-purple-300 text-[11px] sm:text-xs font-semibold">
                        <Zap size={12} className="text-purple-400" />
                        <span>PageSpeed 99</span>
                      </div>
                      <p className="text-[9px] sm:text-[10px] text-gray-400">Core Web Vitals A+</p>
                    </div>

                    <div className="p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-0.5 sm:space-y-1">
                      <div className="flex items-center gap-1 sm:gap-1.5 text-emerald-300 text-[11px] sm:text-xs font-semibold">
                        <ShieldCheck size={12} className="text-emerald-400" />
                        <span>SEO Rank #1</span>
                      </div>
                      <p className="text-[9px] sm:text-[10px] text-gray-400">Google Optimized</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Live Badge 1: New Order (Hidden on narrowest mobile, visible on sm and up) */}
              <div className="hidden xs:flex sm:flex absolute -left-2 sm:-left-6 top-10 sm:top-16 glass-pill p-2 sm:p-3 rounded-xl shadow-xl items-center gap-2 sm:gap-2.5 animate-float border-purple-500/30">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white">
                  <CheckCircle2 size={14} className="sm:w-4 sm:h-4" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] font-bold text-white leading-tight">New Order Received</p>
                  <p className="text-[8px] sm:text-[9px] text-emerald-300 font-semibold">+₹14,500 via WhatsApp</p>
                </div>
              </div>

              {/* Floating Live Badge 2: Performance */}
              <div className="hidden xs:flex sm:flex absolute -right-2 sm:-right-5 -bottom-3 sm:-bottom-4 glass-pill p-2 sm:p-3 rounded-xl shadow-xl items-center gap-2 sm:gap-2.5 animate-float-slow border-purple-500/30">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white">
                  <Zap size={14} className="sm:w-4 sm:h-4" />
                </div>
                <div>
                  <p className="text-[10px] sm:text-[11px] font-bold text-white leading-tight">0.8s Ultra Speed</p>
                  <p className="text-[8px] sm:text-[9px] text-purple-300 font-semibold">Zero Lag • Instant Click</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
