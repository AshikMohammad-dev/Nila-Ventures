import React from 'react'
import { Star, Quote, CheckCircle, Sparkles } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      role: 'Managing Partner',
      company: 'The Malabar Fine Dining',
      initials: 'RK',
      rating: 5,
      result: '+340% Table Bookings',
      text: 'Nila Ventures completely elevated our luxury dining brand. Within 10 days of launch, our online reservations skyrocketed. The mobile UX and WhatsApp table booking work seamlessly.',
      gradient: 'from-orange-500 to-amber-600',
    },
    {
      name: 'Priya Sharma',
      role: 'Founder & Designer',
      company: 'Aurelia Silk & Linen',
      initials: 'PS',
      rating: 5,
      result: '+260% WhatsApp Orders',
      text: 'Super responsive, professional, and delivered beyond our high expectations. The catalog is blisteringly fast on mobile and our online customer conversions have more than doubled.',
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      name: 'Dr. Arun Nair',
      role: 'Chief Medical Director',
      company: 'Apex Dental Care',
      initials: 'AN',
      rating: 5,
      result: '+185% Patient Inquiries',
      text: 'The best digital agency investment we have made. Our clinic now ranks #1 locally in Google search and patients love the 1-click WhatsApp appointment scheduler.',
      gradient: 'from-emerald-500 to-teal-600',
    },
  ]

  return (
    <section className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden bg-[#07060D]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3 animate-slide-up max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
            <Sparkles size={13} className="text-purple-400" />
            <span>Client Success Stories</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Trusted by Ambitious <span className="neon-text">Brand Leaders</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Real feedback from business owners who scaled their revenue and credibility with Nila Ventures.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="glass-card p-6 sm:p-8 rounded-3xl border border-white/[0.08] hover:border-purple-500/40 relative flex flex-col justify-between group bg-[#0E0C18]/90 transition-all duration-300 shadow-xl"
              style={{
                animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
              }}
            >
              <div className="space-y-4">
                {/* Header: Stars & ROI Pill */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                    {testimonial.result}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-gray-300/90 leading-relaxed font-light italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-5 mt-5 border-t border-white/[0.06]">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-md`}>
                  {testimonial.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <p className="font-bold text-sm text-white truncate">
                      {testimonial.name}
                    </p>
                    <CheckCircle size={13} className="text-purple-400 flex-shrink-0" />
                  </div>
                  <p className="text-xs text-gray-400 truncate font-light">
                    {testimonial.role} • <span className="text-gray-300">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
