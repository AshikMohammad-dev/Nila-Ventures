import React from 'react'
import { Star, User } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Fine Dining Restaurant',
      initials: 'RK',
      rating: 5,
      text: 'Nila Ventures completely transformed our online presence. We started getting inquiries within days of launching our new website. The design is stunning and the user experience is seamless.',
    },
    {
      name: 'Priya Sharma',
      company: 'Fashion Boutique',
      initials: 'PS',
      rating: 5,
      text: 'Professional, responsive, and incredibly talented team. They understood our vision and delivered beyond expectations. Our online sales have tripled since the website launch.',
    },
    {
      name: 'Arun Nair',
      company: 'Medical Clinic',
      initials: 'AN',
      rating: 5,
      text: 'The best investment we made for our clinic. Patient inquiries have increased significantly, and the website is so easy to manage. Highly recommended!',
    },
  ]

  return (
    <section className="relative py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-violet-600/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Loved by<span className="neon-text"> Businesses</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
            Real testimonials from our satisfied clients
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex md:grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 overflow-x-auto pb-3 md:overflow-visible snap-x md:snap-none scrollbar-thin scrollbar-thumb-purple-500/70 scrollbar-track-transparent">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl space-y-6 hover:border-purple-400 transition-all hover:scale-105 flex-shrink-0 w-[82%] sm:w-[68%] md:w-auto max-w-[320px] md:max-w-none snap-center md:snap-none"
              style={{
                animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed italic">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4 pt-4 border-t border-purple-500/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-white text-xs sm:text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base">
                    {testimonial.name}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {testimonial.company}
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
