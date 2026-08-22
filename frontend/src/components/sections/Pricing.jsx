import React, { useState } from 'react'
import { 
  Check, 
  Shield, 
  Smartphone, 
  Zap, 
  Headphones, 
  Monitor, 
  Gem, 
  ShoppingCart, 
  Sparkles, 
  Plus, 
  MessageSquare,
  ArrowRight,
  Calculator,
  Flame
} from 'lucide-react'
import pricingData from '../../data/pricing.json'

const iconMap = {
  Monitor,
  Gem,
  ShoppingCart,
}

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState('premium')
  const [selectedAddons, setSelectedAddons] = useState([])

  const availableAddons = [
    { id: 'seo', name: 'Advanced Google Local SEO & Schema', price: 2500 },
    { id: 'whatsapp_api', name: 'WhatsApp Catalog & Direct Order Bot', price: 3500 },
    { id: 'multilingual', name: 'Bilingual Support (English + Malayalam)', price: 2000 },
    { id: 'express', name: '7-Day Express Priority Delivery', price: 4000 },
  ]

  const pricingPlans = pricingData.plans.map(plan => ({
    ...plan,
    icon: iconMap[plan.icon] || Monitor,
  }))

  const toggleAddon = (addonId) => {
    if (selectedAddons.includes(addonId)) {
      setSelectedAddons(selectedAddons.filter(id => id !== addonId))
    } else {
      setSelectedAddons([...selectedAddons, addonId])
    }
  }

  const currentBasePlan = pricingPlans.find(p => p.id === selectedPlan) || pricingPlans[1]
  const addonTotal = selectedAddons.reduce((sum, id) => {
    const addon = availableAddons.find(a => a.id === id)
    return sum + (addon ? addon.price : 0)
  }, 0)
  const totalEstimatedPrice = currentBasePlan.priceNumber + addonTotal

  const openWhatsAppWithCustomScope = () => {
    const addonNames = selectedAddons
      .map(id => availableAddons.find(a => a.id === id)?.name)
      .filter(Boolean)
    
    let msg = `Hi Nila Ventures! I'm interested in the ${currentBasePlan.name} Package (₹${currentBasePlan.priceNumber.toLocaleString('en-IN')}).`
    if (addonNames.length > 0) {
      msg += `\n\nSelected Add-ons:\n- ${addonNames.join('\n- ')}\n\nEstimated Total: ₹${totalEstimatedPrice.toLocaleString('en-IN')}`
    }
    msg += `\n\nCan we discuss the roadmap?`

    window.open(`https://wa.me/917510988356?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const trustBadges = [
    {
      icon: Shield,
      title: '100% SECURE & RELIABLE',
      description: 'Enterprise-grade SSL, zero WordPress vulnerabilities, 99.9% uptime.',
    },
    {
      icon: Smartphone,
      title: '100% MOBILE RESPONSIVE',
      description: 'Tested across 15+ iOS and Android viewport sizes with sub-second touch speeds.',
    },
    {
      icon: Zap,
      title: 'SUB-SECOND PERFORMANCE',
      description: 'Engineered with clean React code and compressed WebP image CDN assets.',
    },
    {
      icon: Headphones,
      title: 'DEDICATED SUPPORT',
      description: 'Direct WhatsApp and phone assistance during and after your project launch.',
    },
  ]

  return (
    <section id="pricing" className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden bg-cyber-grid">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3 animate-slide-up max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
            <Sparkles size={13} className="text-purple-400" />
            <span>Transparent Investment • Zero Hidden Fees</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            High-Impact Website <span className="neon-text">Packages</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Invest in digital infrastructure that pays for itself with increased customer trust and inquiries.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 items-stretch">
          {pricingPlans.map((plan, idx) => {
            const Icon = plan.icon
            const isHighlighted = plan.highlighted

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`glass-card p-6 sm:p-8 rounded-3xl relative flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  isHighlighted
                    ? 'border-2 border-purple-400/80 bg-gradient-to-b from-[#180F33]/90 via-[#100C22]/90 to-[#0B0915] shadow-[0_0_40px_rgba(124,58,237,0.25)] md:-translate-y-2'
                    : selectedPlan === plan.id
                    ? 'border-purple-500/60 bg-[#120F24]'
                    : 'border-white/[0.08] hover:border-purple-500/30'
                }`}
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                {/* Popular Badge */}
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 text-white text-[11px] font-black tracking-wider uppercase shadow-lg shadow-purple-500/40 flex items-center gap-1">
                    <Flame size={13} className="text-amber-300" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Title & Icon */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider">{plan.tagline}</span>
                      <h3 className="text-2xl font-extrabold text-white">{plan.name}</h3>
                    </div>
                    <div className={`p-3 rounded-2xl ${isHighlighted ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' : 'bg-white/[0.04] text-gray-300'}`}>
                      <Icon size={24} />
                    </div>
                  </div>

                  {/* Price */}
                  <div className="pb-4 border-b border-white/[0.08]">
                    <p className="text-3xl sm:text-4xl font-extrabold font-display neon-text">
                      {plan.price}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">One-time investment • Full ownership</p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <Check size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-gray-300 leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Action CTA */}
                <div className="pt-6 mt-6 border-t border-white/[0.08]">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedPlan(plan.id)
                      openWhatsAppWithCustomScope()
                    }}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
                      isHighlighted
                        ? 'btn-glow bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-600/30'
                        : 'glass-card text-white hover:border-purple-400'
                    }`}
                  >
                    <MessageSquare size={16} />
                    <span>Select & Chat on WhatsApp</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Interactive Add-On & Scope Estimator */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-purple-500/30 bg-[#0E0C1C]/90 mb-12 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 text-purple-300 text-xs font-bold uppercase tracking-wider">
                <Calculator size={14} className="text-purple-400" />
                <span>Interactive Custom Scope Calculator</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">Customize Your Package with High-ROI Add-ons</h3>
              <p className="text-xs sm:text-sm text-gray-400">Select any optional feature to estimate your total package cost instantly.</p>
            </div>

            {/* Total Estimate Summary */}
            <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-right sm:min-w-[220px]">
              <span className="text-xs text-gray-400 block">Total Estimated Scope:</span>
              <p className="text-2xl sm:text-3xl font-extrabold neon-text">₹{totalEstimatedPrice.toLocaleString('en-IN')}</p>
              <span className="text-[10px] text-purple-300 font-semibold">{currentBasePlan.name} Plan + {selectedAddons.length} Add-on(s)</span>
            </div>
          </div>

          {/* Addons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-6">
            {availableAddons.map((addon) => {
              const isSelected = selectedAddons.includes(addon.id)
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-3 ${
                    isSelected
                      ? 'bg-purple-500/15 border-purple-500 text-white shadow-md shadow-purple-500/20'
                      : 'bg-white/[0.02] border-white/[0.06] text-gray-400 hover:border-purple-500/30 hover:text-gray-200'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-xs font-semibold leading-snug">{addon.name}</span>
                    <div className={`w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 transition-colors ${
                      isSelected ? 'bg-purple-500 text-white' : 'border border-white/20'
                    }`}>
                      {isSelected && <Check size={12} />}
                    </div>
                  </div>
                  <span className="text-xs font-bold text-purple-300">+₹{addon.price.toLocaleString('en-IN')}</span>
                </div>
              )
            })}
          </div>

          {/* WhatsApp Custom Action */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/[0.06]">
            <p className="text-xs text-gray-400">
              💡 Custom requirements? We also build tailored APIs, portals, and mobile apps.
            </p>
            <button
              onClick={openWhatsAppWithCustomScope}
              className="btn-glow w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare size={16} />
              <span>Confirm & Start via WhatsApp</span>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon
            return (
              <div key={idx} className="glass-card p-5 sm:p-6 rounded-2xl border border-white/[0.06] space-y-2.5">
                <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 w-fit">
                  <Icon size={20} />
                </div>
                <h4 className="font-bold text-sm text-white">{badge.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed font-light">{badge.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
