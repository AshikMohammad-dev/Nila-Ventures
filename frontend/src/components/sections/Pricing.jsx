import React from 'react'
import { Check, Shield, Smartphone, Zap, Headphones, Monitor, Gem, ShoppingCart, PenTool, DollarSign, TrendingUp, MessageSquare } from 'lucide-react'
import pricingData from '../../data/pricing.json'

// Map icon names to actual icon components
const iconMap = {
  Monitor,
  Gem,
  ShoppingCart,
}

export default function Pricing() {
  const openWhatsAppWithPlan = (planName) => {
    const message = `Hi Nila Ventures! I'm interested in the ${planName} package. Can you provide more details?`
    window.open(`https://wa.me/917510988356?text=${encodeURIComponent(message)}`, '_blank')
  }

  // Map icon strings to actual components
  const pricingPlans = pricingData.plans.map(plan => ({
    ...plan,
    icon: iconMap[plan.icon],
  }))

  const trustBadges = [
    {
      icon: Shield,
      title: '100% SECURE',
      description: 'Your website and data are safe with us',
    },
    {
      icon: Smartphone,
      title: 'MOBILE FRIENDLY',
      description: 'Looks perfect on all devices and screen sizes',
    },
    {
      icon: Zap,
      title: 'FAST & RELIABLE',
      description: 'Optimized for speed and better performance',
    },
    {
      icon: Headphones,
      title: 'DEDICATED SUPPORT',
      description: 'We\'re here to help you whenever you need us',
    },
  ]

  const bottomFeatures = [
    { icon: PenTool, title: 'MODERN & UNIQUE DESIGNS' },
    { icon: DollarSign, title: 'AFFORDABLE PRICING' },
    { icon: TrendingUp, title: 'SEO FRIENDLY STRUCTURE' },
    { icon: MessageSquare, title: 'FRIENDLY COMMUNICATION' },
  ]


  return (
    <section id="pricing" className="relative py-6 sm:py-8 md:py-14 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-violet-600/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-10 space-y-1.5 sm:space-y-2 md:space-y-3 animate-slide-up">
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-black tracking-tight">
            WEBSITE DEVELOPMENT
            <br />
            <span className="neon-text">PACKAGES</span>
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-400 max-w-2xl mx-auto">
            Professional websites that help your business <span className="text-purple-400">grow</span>.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex md:grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-12 overflow-x-auto pb-1 md:overflow-visible snap-x md:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style]:none [scrollbar-width]:none">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative transition-all flex-shrink-0 w-[90%] sm:w-[76%] md:w-auto max-w-[280px] md:max-w-none snap-center md:snap-none ${
                plan.highlighted ? 'md:scale-105' : ''
              }`}
              style={{
                animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
              }}
            >
              {/* Badge outside the card */}
              {plan.badge && (
                <div className="relative z-20 mb-[-12px] flex justify-center">
                  <div className="bg-gradient-to-r from-purple-500 to-violet-600 text-white px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black tracking-[0.18em] shadow-lg shadow-purple-500/40 whitespace-nowrap">
                    {plan.badge}
                  </div>
                </div>
              )}

              {/* Glow Background for highlighted */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl blur-2xl opacity-30 -z-10" />
              )}

              {/* Card */}
              <div
                className={`pricing-card premium-card-shimmer glass-card p-5 sm:p-6 md:p-8 rounded-2xl space-y-4 sm:space-y-6 h-full relative ${
                  plan.highlighted
                    ? 'border-2 border-purple-400 bg-gradient-to-br from-purple-500/15 to-violet-600/15'
                    : 'border border-purple-500/20'
                }`}
              >

                {/* Icon & Name */}
                <div className="space-y-3 sm:space-y-4">
                  {plan.icon && (
                    <div className="text-purple-400">
                      {React.createElement(plan.icon, { size: 32, className: 'sm:w-10 sm:h-10' })}
                    </div>
                  )}
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{plan.name}</h3>
                </div>

                {/* Price */}
                <div>
                  <p className="text-3xl sm:text-4xl md:text-5xl font-black neon-text">{plan.price}</p>
                </div>

                {/* Features */}
                <div className="space-y-2.5 sm:space-y-3 flex-1">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-3">
                      <Check size={18} className="text-purple-400 flex-shrink-0 mt-0.5 sm:w-5 sm:h-5" />
                      <span className="text-gray-300 text-[11px] sm:text-sm leading-relaxed break-words">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Tagline */}
                <div className="pt-3 sm:pt-4 border-t border-purple-500/20">
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{plan.tagline}</p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => openWhatsAppWithPlan(plan.name)}
                  className={`w-full py-3 sm:py-3 md:py-4 rounded-xl sm:rounded-xl md:rounded-xl font-bold transition-all text-sm sm:text-sm md:text-base min-h-[48px] sm:min-h-12 flex items-center justify-center gap-2 group ${
                    plan.highlighted
                      ? 'btn-glow bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                      : 'border-2 border-purple-500/50 text-white hover:border-purple-500 hover:bg-purple-500/10 hover:shadow-glow transition-all duration-300'
                  }`}
                >
                  <MessageSquare size={18} className="sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Extra Charges Note */}
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <p className="text-xs sm:text-sm text-gray-400 inline-block bg-dark-card/50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border border-purple-500/20">
            ⚠️ <span className="text-purple-400 font-semibold">Extra charges may apply</span> for custom features and advanced requirements as per your plan.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex md:grid md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16 overflow-x-auto pb-3 md:overflow-visible snap-x md:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style]:none [scrollbar-width]:none">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="glass-card p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-purple-500/20 text-center hover:border-purple-500/50 transition-all flex-shrink-0 w-[82%] sm:w-[66%] md:w-auto max-w-[320px] md:max-w-none snap-center md:snap-none">
              <div className="flex justify-center mb-2 sm:mb-3 text-purple-400">
                {badge.icon && React.createElement(badge.icon, { size: 28, className: 'sm:w-9 sm:h-9' })}
              </div>
              <h4 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">{badge.title}</h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="flex md:grid md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8 overflow-x-auto pb-3 md:overflow-visible snap-x md:snap-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style]:none [scrollbar-width]:none">
          {bottomFeatures.map((feature, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 md:gap-3 text-center sm:text-left flex-shrink-0 w-[70%] sm:w-[60%] md:w-auto max-w-[260px] md:max-w-none snap-center md:snap-none">
              <div className="text-purple-400 flex-shrink-0 mx-auto sm:mx-0">
                {feature.icon && React.createElement(feature.icon, { size: 20, className: 'sm:w-6 sm:h-6' })}
              </div>
              <span className="font-bold text-white text-xs sm:text-sm leading-snug">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
