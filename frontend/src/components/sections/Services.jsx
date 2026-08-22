import React from 'react'
import {
  Palette,
  ShoppingCart,
  Globe,
  Zap,
  Rocket,
  Sparkles,
  ArrowRight,
  Layers,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: 'web-design',
      icon: Palette,
      title: 'Bespoke UI/UX & Web Design',
      description: 'Handcrafted, high-end interfaces built specifically for your brand identity. No generic cookie-cutter templates.',
      tags: ['Figma Prototyping', 'Design Systems', 'Micro-Animations'],
      featured: true,
      colSpan: 'md:col-span-2',
      gradient: 'from-purple-600/20 to-indigo-600/10',
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'E-Commerce Storefronts',
      description: 'High-converting online stores with streamlined checkout, inventory management, and multi-payment gateways.',
      tags: ['WhatsApp Orders', 'Payment Gateways', 'Order Tracking'],
      featured: true,
      colSpan: 'md:col-span-1',
      gradient: 'from-pink-600/20 to-rose-600/10',
    },
    {
      id: 'business',
      icon: Globe,
      title: 'High-Authority Business Portals',
      description: 'Tailored websites for clinics, restaurants, hospitality, boutiques, real estate, and professional consultancies.',
      tags: ['Booking Engine', 'Location Maps', 'Review Integration'],
      featured: false,
      colSpan: 'md:col-span-1',
      gradient: 'from-cyan-600/20 to-blue-600/10',
    },
    {
      id: 'landing-pages',
      icon: Zap,
      title: 'High-Conversion Landing Pages',
      description: 'Laser-focused lead-generation funnels engineered specifically for Google & Meta ad campaigns.',
      tags: ['A/B Tested Layouts', 'Speed Under 1s', 'CRM Sync'],
      featured: false,
      colSpan: 'md:col-span-1',
      gradient: 'from-amber-600/20 to-yellow-600/10',
    },
    {
      id: 'seo-dev',
      icon: Rocket,
      title: 'Speed & Technical SEO Architecture',
      description: 'Built with React / Next.js architecture, JSON-LD Schema, semantic HTML, and image CDN compression for top rankings.',
      tags: ['Google Search Console', 'Core Web Vitals', 'Structured Data'],
      featured: false,
      colSpan: 'md:col-span-1',
      gradient: 'from-emerald-600/20 to-teal-600/10',
    },
  ]

  const scrollToCTA = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="services"
      className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden"
    >
      {/* Background Ambient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 space-y-3 animate-slide-up max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
            <Layers size={13} className="text-purple-400" />
            <span>End-to-End Digital Engineering</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Engineered for Authority & <span className="neon-text">Revenue Growth</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Every feature we design is backed by conversion psychology, speed engineering, and luxury aesthetic standards.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className={`glass-card p-6 sm:p-7 rounded-2xl relative overflow-hidden flex flex-col justify-between group ${service.colSpan} border border-white/[0.08] hover:border-purple-500/40`}
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                {/* Background Glow */}
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/30 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:text-white group-hover:bg-gradient-to-br group-hover:from-purple-500 group-hover:to-violet-600 transition-all duration-300 shadow-lg shadow-purple-500/10">
                      <Icon size={22} />
                    </div>

                    {service.featured && (
                      <span className="px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-[11px] font-semibold">
                        Core Specialty
                      </span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-purple-200 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Deliverables Tags */}
                <div className="pt-6 relative z-10">
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-white/[0.06]">
                    {service.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/[0.06] text-[11px] text-gray-300 font-medium group-hover:border-purple-500/20"
                      >
                        <CheckCircle2 size={11} className="text-purple-400" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-8 sm:mt-12 glass-card p-5 sm:p-7 rounded-2xl border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base sm:text-lg font-bold text-white">Need a custom feature or platform integration?</h4>
            <p className="text-xs sm:text-sm text-gray-400">We build tailor-made web systems with custom databases, APIs, and automations.</p>
          </div>
          <button
            onClick={scrollToCTA}
            className="btn-glow px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-bold text-xs sm:text-sm flex-shrink-0 flex items-center gap-2"
          >
            <span>Request Custom Solution</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </section>
  )
}
