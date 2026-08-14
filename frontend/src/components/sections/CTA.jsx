import React from 'react'
import { MessageCircle, Calendar, Check } from 'lucide-react'

export default function CTA() {
  const formspreeEndpoint = 'https://formspree.io/f/xeajzeqr'

  const openWhatsApp = () => {
    window.open('https://wa.me/917510988356?text=Hi%20Nila%20Ventures%2C%20I%20want%20to%20know%20more%20about%20your%20website%20design%20services.', '_blank')
  }

  const scrollToForm = () => {
    const form = document.getElementById('consultation-form')
    form?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="cta"
      className="relative py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-600 opacity-10 blur-3xl -z-10" />
      <div className="absolute inset-0 bg-hero-gradient opacity-5 blur-2xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-6 sm:p-10 md:p-16 rounded-3xl border-purple-400/30 text-center space-y-8 animate-slide-up">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-[-0.04em]">
              Let's Build Your
              <span className="neon-text block mt-1 sm:mt-2">Success Story</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Your website should work as your best salesperson. Let's create something extraordinary together.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2 sm:pt-4">
            <button
              type="button"
              onClick={openWhatsApp}
              className="btn-glow w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:shadow-lg transition-all min-h-12"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </button>
            <button
              type="button"
              onClick={scrollToForm}
              className="btn-glow w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:shadow-lg transition-all min-h-12"
            >
              <Calendar size={20} />
              Free Consultation
            </button>
          </div>

          <form
            id="consultation-form"
            action={formspreeEndpoint}
            method="POST"
            className="mt-8 sm:mt-10 mx-auto max-w-2xl glass-card rounded-2xl border border-purple-500/20 p-4 sm:p-6 text-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-300 mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-purple-500/20 bg-dark-light/80 px-4 py-3 text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-purple-500/20 bg-dark-light/80 px-4 py-3 text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm text-gray-300 mb-2">Business / Brand</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="Your business name"
                  className="w-full rounded-xl border border-purple-500/20 bg-dark-light/80 px-4 py-3 text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm text-gray-300 mb-2">Project Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us about your website goals and timeline"
                  className="w-full rounded-xl border border-purple-500/20 bg-dark-light/80 px-4 py-3 text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400">We usually respond within 24 hours.</p>
              <button
                type="submit"
                className="btn-glow w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-bold hover:shadow-lg transition-all min-h-12"
              >
                Send Inquiry
              </button>
            </div>
          </form>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center text-sm text-gray-400 pt-4">
            <div className="flex items-center gap-2">
              <Check size={24} className="text-purple-400 flex-shrink-0" />
              <span>No credit card required</span>
            </div>
            <div className="w-px h-6 bg-purple-500/20 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Check size={24} className="text-purple-400 flex-shrink-0" />
              <span>Completely free initial consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
