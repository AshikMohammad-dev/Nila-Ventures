import React, { useState } from 'react'
import { ArrowRight, UtensilsCrossed, Shirt, Hotel, Stethoscope, Building2, Zap, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react'

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Industries' },
    { id: 'ecommerce', label: 'E-Commerce & Retail' },
    { id: 'dining', label: 'Restaurants & Dining' },
    { id: 'hospitality', label: 'Hospitality & Real Estate' },
    { id: 'medical', label: 'Healthcare & Clinics' },
    { id: 'saas', label: 'Tech & SaaS' },
  ]

  const projects = [
    {
      category: 'dining',
      categoryLabel: 'Restaurant & Cafe',
      title: 'The Malabar Fine Dining',
      result: '+340% Online Table Bookings',
      icon: UtensilsCrossed,
      color: 'from-orange-500 to-amber-600',
      description: 'Interactive luxury menu, 1-click table reservations, automated WhatsApp order confirmations.',
      tags: ['Smart Menu', 'Instant Booking', 'Local SEO #1'],
      previewUrl: 'themalabar.dining',
    },
    {
      category: 'ecommerce',
      categoryLabel: 'Luxury Fashion',
      title: 'Aurelia Silk & Linen Brand',
      result: '+260% Direct WhatsApp Sales',
      icon: Shirt,
      color: 'from-pink-500 to-rose-600',
      description: 'High-speed mobile catalog, instant UPI checkout, multi-size selector, and Instagram shopping feed.',
      tags: ['UPI & Cards', 'Live Inventory', 'Sub-second Load'],
      previewUrl: 'aureliafashion.store',
    },
    {
      category: 'hospitality',
      categoryLabel: 'Boutique Resort',
      title: 'Verdant Hills Villa & Retreat',
      result: '+190% Direct Room Reservations',
      icon: Hotel,
      color: 'from-blue-500 to-cyan-600',
      description: 'Direct booking engine with zero commission fees, 360° virtual room tours, and guest review sync.',
      tags: ['Zero-Commission Booking', '360° Gallery', 'Multi-Language'],
      previewUrl: 'verdanthills.stay',
    },
    {
      category: 'medical',
      categoryLabel: 'Dental & Wellness',
      title: 'Apex Smile & Dental Clinic',
      result: '+185% Patient Consultations',
      icon: Stethoscope,
      color: 'from-emerald-500 to-teal-600',
      description: 'Doctor profile showcase, patient pre-booking scheduler, automated appointment reminders via SMS & WhatsApp.',
      tags: ['HIPAA Compliant', 'Slot Scheduler', 'Google Reviews'],
      previewUrl: 'apexsmile.care',
    },
    {
      category: 'hospitality',
      categoryLabel: 'Real Estate Developer',
      title: 'Skyline Premium Residences',
      result: '+310% High-Intent Leads',
      icon: Building2,
      color: 'from-amber-500 to-yellow-600',
      description: 'Interactive floor plan explorer, neighborhood guide, WhatsApp instant brochure download with lead capture.',
      tags: ['3D Floor Plans', 'Instant Brochure', 'Ad Funnel'],
      previewUrl: 'skylineluxury.in',
    },
    {
      category: 'saas',
      categoryLabel: 'Tech Platform',
      title: 'FlowSync Cloud Intelligence',
      result: '+480% App Sign-ups',
      icon: Zap,
      color: 'from-purple-500 to-indigo-600',
      description: 'Interactive pricing comparison, dynamic product demo walkthrough, and automated Stripe onboarding funnel.',
      tags: ['Interactive Demo', 'Stripe Billing', 'Dark Mode UI'],
      previewUrl: 'flowsync.cloud',
    },
  ]

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  const openWhatsAppWithProject = (title) => {
    const msg = `Hi Nila Ventures! I loved your work on "${title}". I want a similar high-converting website for my business.`
    window.open(`https://wa.me/917510988356?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section
      id="industries"
      className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 space-y-3 animate-slide-up max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
            <Sparkles size={13} className="text-purple-400" />
            <span>Proven Sector Expertise</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Industries We Turn Into <span className="neon-text">Market Leaders</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Explore industry-specific architectures engineered to outshine your competition and drive high-intent inquiries.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-thin scrollbar-thumb-purple-500/30">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-purple-500 to-violet-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40'
                  : 'glass-card text-gray-300 hover:text-white hover:border-purple-500/30'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => {
            const Icon = project.icon
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl overflow-hidden border border-white/[0.08] hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group shadow-xl bg-[#0E0C18]/90"
              >
                {/* Mockup Preview Chrome */}
                <div className="p-4 pb-0 bg-white/[0.02] border-b border-white/[0.06]">
                  <div className="rounded-t-xl bg-dark-card border border-white/[0.06] p-3 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-red-400/80" />
                        <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
                        <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
                      </div>
                      <span className="text-[10px] text-gray-400 font-mono">{project.previewUrl}</span>
                    </div>

                    {/* Miniature Banner */}
                    <div className={`p-4 rounded-lg bg-gradient-to-r ${project.color} text-white flex items-center justify-between shadow-md`}>
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-bold uppercase tracking-wider opacity-90">{project.categoryLabel}</span>
                        <p className="text-sm font-extrabold">{project.title}</p>
                      </div>
                      <div className="p-2 rounded-lg bg-white/20 backdrop-blur-md">
                        <Icon size={18} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    {/* ROI Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-extrabold">
                      <Sparkles size={12} />
                      <span>{project.result}</span>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-300/90 leading-relaxed font-light">
                      {project.description}
                    </p>

                    {/* Tag Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((t, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.04] text-gray-300 border border-white/[0.06]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Interactive Button */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <button
                      onClick={() => openWhatsAppWithProject(project.title)}
                      className="w-full py-2.5 rounded-xl bg-purple-500/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-violet-600 text-purple-200 hover:text-white border border-purple-500/20 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-600/20"
                    >
                      <span>Build Similar Website</span>
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            type="button"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-glow px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-bold text-sm sm:text-base inline-flex items-center gap-2"
          >
            <span>Discuss Your Industry Solution</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
