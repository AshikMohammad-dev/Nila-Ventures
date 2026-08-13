import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      category: 'Restaurant',
      title: 'Fine Dining Restaurant',
      result: '+300% Online Orders',
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'Fashion',
      title: 'Clothing Brand',
      result: '+250% Sales',
      color: 'from-pink-500 to-rose-500',
    },
    {
      category: 'Hospitality',
      title: 'Boutique Hostel',
      result: '+180% Bookings',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Medical',
      title: 'Medical Clinic',
      result: '+150% Appointments',
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Real Estate',
      title: 'Real Estate Agency',
      result: '+200% Inquiries',
      color: 'from-amber-500 to-yellow-500',
    },
    {
      category: 'SaaS',
      title: 'Startup SaaS Platform',
      result: '+500% Sign-ups',
      color: 'from-purple-500 to-indigo-500',
    },
  ]

  return (
    <section
      id="portfolio"
      className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-violet-600/5 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-black">
            Featured<span className="neon-text"> Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Real results from businesses just like yours
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
              style={{
                animation: `slideUp 0.6s ease-out ${idx * 0.1}s both`,
              }}
            >
              {/* Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
              />

              {/* Glass Card */}
              <div className="glass-card absolute inset-0 flex flex-col justify-between p-8 group-hover:border-purple-400 transition-all">
                {/* Top Content */}
                <div className="space-y-3">
                  <p className="text-purple-400 text-sm font-semibold uppercase">
                    {project.category}
                  </p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>

                {/* Bottom Content */}
                <div className="space-y-4">
                  <div className="h-px bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0" />
                  <div className="flex items-end justify-between">
                    <p className="text-xl font-bold neon-text">{project.result}</p>
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500/40 transition-colors">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-glow px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-bold hover:shadow-glow-lg transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}
