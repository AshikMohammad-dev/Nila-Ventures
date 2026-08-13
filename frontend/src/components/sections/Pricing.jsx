import React from 'react'
import { Check, Shield, Smartphone, Zap, Headphones, Monitor, Gem, ShoppingCart, PenTool, DollarSign, TrendingUp, MessageSquare } from 'lucide-react'

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'BASIC',
      price: '₹7,500',
      icon: Monitor,
      tagline: 'Perfect for startups and small businesses.',
      features: [
        'Professional Website',
        'Up to 5 Pages',
        'Showcase Your Products/Services',
        'WhatsApp Integration',
        'Instagram & Social Media Links',
        'Mobile Friendly Design',
        'Website Setup & Launch',
      ],
      highlighted: false,
    },
    {
      name: 'PREMIUM',
      price: '₹12,500',
      icon: Gem,
      badge: 'MOST POPULAR',
      tagline: 'Great for growing businesses that want more visibility.',
      features: [
        'Everything in Basic',
        'Up to 10 Pages',
        'Different Pages for Each Service/Product',
        'Product Prices & Details',
        'WhatsApp & Call Button',
        'Google Maps Integration',
        'Custom Premium Design',
        'Better UI/UX & Animations',
      ],
      highlighted: true,
    },
    {
      name: 'ONLINE STORE',
      price: '₹20,000',
      icon: ShoppingCart,
      tagline: 'Complete solution to sell your products or services online.',
      features: [
        'Everything in Premium',
        'Shopping Cart',
        'Online Ordering',
        'Online Payment Options',
        'Order Management',
        'Product Availability Management',
        'Offers & Discounts',
      ],
      highlighted: false,
    },
  ]

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
    <section id="pricing" className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-violet-600/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            WEBSITE DEVELOPMENT
            <br />
            <span className="neon-text">PACKAGES</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Professional websites that help your business <span className="text-purple-400">grow</span>.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 overflow-x-auto pb-3 md:overflow-visible snap-x md:snap-none scrollbar-thin scrollbar-thumb-purple-500/70 scrollbar-track-transparent">
          {pricingPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl sm:rounded-2xl transition-all flex-shrink-0 w-[82%] sm:w-[68%] md:w-auto max-w-[320px] md:max-w-none snap-center md:snap-none overflow-visible ${
                plan.highlighted ? 'md:scale-105' : ''
              }`}
              style={{
                animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
              }}
            >
              {/* Glow Background for highlighted */}
              {plan.highlighted && (
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl blur-2xl opacity-30 -z-10" />
              )}

              {/* Card */}
              <div
                className={`glass-card p-5 sm:p-6 md:p-8 rounded-2xl space-y-5 sm:space-y-6 h-full relative ${
                  plan.badge ? 'pt-8 sm:pt-9' : ''
                } ${
                  plan.highlighted
                    ? 'border-2 border-purple-400 bg-gradient-to-br from-purple-500/15 to-violet-600/15'
                    : 'border border-purple-500/20'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 z-20 bg-gradient-to-r from-purple-500 to-violet-600 text-white px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black tracking-wide shadow-lg shadow-purple-500/30 whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

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
                  className={`w-full py-2 sm:py-3 md:py-4 rounded-lg sm:rounded-xl font-bold transition-all text-sm sm:text-base min-h-10 sm:min-h-12 ${
                    plan.highlighted
                      ? 'btn-glow bg-gradient-to-r from-purple-500 to-violet-600 text-white'
                      : 'border-2 border-purple-500/50 text-white hover:border-purple-500 hover:bg-purple-500/10'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
          {trustBadges.map((badge, idx) => (
            <div key={idx} className="glass-card p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl border border-purple-500/20 text-center hover:border-purple-500/50 transition-all">
              <div className="flex justify-center mb-2 sm:mb-3 text-purple-400">
                {badge.icon && React.createElement(badge.icon, { size: 28, className: 'sm:w-9 sm:h-9' })}
              </div>
              <h4 className="font-bold text-white mb-1 sm:mb-2 text-sm sm:text-base">{badge.title}</h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8">
          {bottomFeatures.map((feature, idx) => (
            <div key={idx} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2 md:gap-3 text-center sm:text-left">
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
