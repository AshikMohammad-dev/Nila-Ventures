import React from 'react'
import {
  Palette,
  ShoppingCart,
  Globe,
  Zap,
  Rocket,
  Sparkles,
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: Palette,
      title: 'Website Design',
      description: 'Luxury UI/UX tailored to your brand identity and vision.',
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Websites',
      description: 'Secure online stores that convert visitors into customers.',
    },
    {
      icon: Globe,
      title: 'Business Websites',
      description:
        'Professional websites for clinics, restaurants, hostels, boutiques, and startups.',
    },
    {
      icon: Zap,
      title: 'Landing Pages',
      description: 'Conversion-focused pages designed for ads and campaigns.',
    },
    {
      icon: Rocket,
      title: 'SEO-Ready Development',
      description: 'Built with performance and search visibility in mind.',
    },
    {
      icon: Sparkles,
      title: 'Branding & Digital Identity',
      description: 'Modern visual identity that elevates your business.',
    },
  ]

  return (
    <section
      id="services"
      className="relative py-6 sm:py-8 md:py-14 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-violet-600/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6 md:mb-10 space-y-1.5 sm:space-y-2 md:space-y-3 animate-slide-up">
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-black tracking-[-0.04em] text-balance">
            Our<span className="neon-text"> Premium Services</span>
          </h2>
          <p className="text-[10px] sm:text-xs md:text-sm text-gray-300 max-w-2xl mx-auto opacity-90">
            Everything you need to establish a powerful online presence
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-1 md:overflow-visible snap-x md:snap-none scrollbar-thin scrollbar-thumb-purple-500/70 scrollbar-track-transparent">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="glass-card p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-lg md:rounded-xl space-y-2 sm:space-y-2.5 md:space-y-3 group hover:border-purple-400 transition-all flex-shrink-0 w-[90%] sm:w-[72%] md:w-auto max-w-[280px] md:max-w-none snap-center md:snap-none"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="text-base sm:text-base md:text-lg font-bold leading-snug">{service.title}</h3>
                <p className="text-xs sm:text-sm md:text-sm text-gray-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
