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
      className="relative py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-violet-600/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10 md:mb-16 space-y-2 sm:space-y-3 md:space-y-4 animate-slide-up">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-[-0.04em] text-balance">
            Our<span className="neon-text"> Premium Services</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-lg text-gray-300 max-w-2xl mx-auto opacity-90">
            Everything you need to establish a powerful online presence
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-3 sm:gap-5 md:gap-8 overflow-x-auto pb-2 md:overflow-visible snap-x md:snap-none scrollbar-thin scrollbar-thumb-purple-500/70 scrollbar-track-transparent">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="glass-card p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl md:rounded-2xl space-y-2 sm:space-y-3 md:space-y-4 group hover:border-purple-400 transition-all flex-shrink-0 w-[85%] sm:w-[75%] md:w-auto max-w-[300px] md:max-w-none snap-center md:snap-none"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={20} className="text-white sm:w-6 sm:h-6 md:w-7 md:h-7" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold">{service.title}</h3>
                <p className="text-xs sm:text-sm md:text-base text-gray-400 leading-relaxed">
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
