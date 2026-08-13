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
      className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-violet-600/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-[-0.05em] text-balance">
            Our<span className="neon-text"> Premium Services</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto opacity-90">
            Everything you need to establish a powerful online presence
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="glass-card p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl space-y-3 sm:space-y-4 group hover:border-purple-400 transition-all"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-white sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
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
