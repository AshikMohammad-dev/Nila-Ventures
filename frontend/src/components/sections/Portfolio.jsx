import React from 'react'
import { ArrowRight, UtensilsCrossed, Shirt, Hotel, Stethoscope, Building2, Zap } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      category: 'Restaurant',
      title: 'Fine Dining Restaurant',
      result: '+300% Online Orders',
      icon: UtensilsCrossed,
      color: 'from-orange-500 to-red-500',
      gradient: 'from-orange-600/20 via-transparent to-transparent',
      description: 'Online presence, reservations, menu showcase',
    },
    {
      category: 'Fashion',
      title: 'Clothing Brand',
      result: '+250% Sales',
      icon: Shirt,
      color: 'from-pink-500 to-rose-500',
      gradient: 'from-pink-600/20 via-transparent to-transparent',
      description: 'E-commerce store, product catalog, checkout',
    },
    {
      category: 'Hospitality',
      title: 'Boutique Hostel',
      result: '+180% Bookings',
      icon: Hotel,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'from-blue-600/20 via-transparent to-transparent',
      description: 'Booking system, room showcase, guest reviews',
    },
    {
      category: 'Medical',
      title: 'Medical Clinic',
      result: '+150% Appointments',
      icon: Stethoscope,
      color: 'from-green-500 to-emerald-500',
      gradient: 'from-green-600/20 via-transparent to-transparent',
      description: 'Appointment booking, doctor profiles, services',
    },
    {
      category: 'Real Estate',
      title: 'Real Estate Agency',
      result: '+200% Inquiries',
      icon: Building2,
      color: 'from-amber-500 to-yellow-500',
      gradient: 'from-amber-600/20 via-transparent to-transparent',
      description: 'Property listings, 3D tours, lead generation',
    },
    {
      category: 'SaaS',
      title: 'Startup SaaS Platform',
      result: '+500% Sign-ups',
      icon: Zap,
      color: 'from-purple-500 to-indigo-500',
      gradient: 'from-purple-600/20 via-transparent to-transparent',
      description: 'SaaS dashboard, user onboarding, analytics',
    },
  ]

  return (
    <section
      id="industries"
      className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-violet-600/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Industries We<span className="neon-text"> Transform</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Specialized solutions for your industry with proven growth strategies
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-3 md:overflow-visible snap-x md:snap-none scrollbar-thin scrollbar-thumb-purple-500/70 scrollbar-track-transparent">
          {projects.map((project, idx) => {
            const Icon = project.icon
            return (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl sm:rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 flex-shrink-0 w-[82%] sm:w-[68%] md:w-auto max-w-[320px] md:max-w-none snap-center md:snap-none"
                style={{
                  animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

                {/* Glass Card */}
                <div className="glass-card relative h-full min-h-80 p-5 sm:p-6 md:p-8 flex flex-col justify-between border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300">
                  {/* Top Section */}
                  <div className="space-y-4">
                    {/* Category Badge */}
                    <div className="flex items-center gap-3 w-fit">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${project.color} p-2 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <Icon size={20} className="text-white sm:w-6 sm:h-6" />
                      </div>
                      <span className="text-purple-300 text-xs sm:text-sm font-bold uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-black leading-tight group-hover:neon-text transition-all">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="space-y-3 sm:space-y-4 pt-4">
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-purple-500/0 via-purple-500/40 to-purple-500/0 group-hover:via-purple-400 transition-all" />

                    {/* Result & Arrow */}
                    <div className="flex items-end justify-between gap-4">
                      <p className="text-base sm:text-lg md:text-xl font-black neon-text">
                        {project.result}
                      </p>
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0 group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all`}>
                        <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform sm:w-6 sm:h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
                </div>

                {/* Top Accent Line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </div>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            type="button"
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-glow px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg sm:rounded-xl font-bold text-sm sm:text-base hover:shadow-glow-lg transition-all min-h-12 inline-flex items-center gap-2"
          >
            Get Your Industry Solution
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
