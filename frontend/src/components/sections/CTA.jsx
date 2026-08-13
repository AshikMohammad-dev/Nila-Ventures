import React from 'react'
import { MessageCircle, Calendar, Check } from 'lucide-react'

export default function CTA() {
  const openWhatsApp = () => {
    window.open('https://wa.me/917510988356?text=Hi%20Nila%20Ventures%2C%20I%20want%20to%20know%20more%20about%20your%20website%20design%20services.', '_blank')
  }

  return (
    <section
      id="cta"
      className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-600 opacity-10 blur-3xl -z-10" />
      <div className="absolute inset-0 bg-hero-gradient opacity-5 blur-2xl -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-12 md:p-16 rounded-3xl border-purple-400/30 text-center space-y-8 animate-slide-up">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
              Let's Build Your
              <span className="neon-text block">Success Story</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Your website should work as your best salesperson. Let's create something extraordinary together.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-4">
            <button
              onClick={openWhatsApp}
              className="btn-glow flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:shadow-lg transition-all min-h-12"
            >
              <MessageCircle size={20} />
              WhatsApp Us
            </button>
            <button className="btn-glow flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg sm:rounded-xl font-bold text-base sm:text-lg hover:shadow-lg transition-all min-h-12">
              <Calendar size={20} />
              Free Consultation
            </button>
          </div>

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

        {/* Contact Info */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div className="glass-card p-6 rounded-xl space-y-2">
            <p className="text-gray-400 text-sm">WhatsApp</p>
            <a
              href="https://wa.me/917510988356"
              className="text-xl font-bold text-purple-400 hover:text-purple-300"
            >
              +91 7510988356
            </a>
          </div>
          <div className="glass-card p-6 rounded-xl space-y-2">
            <p className="text-gray-400 text-sm">Instagram</p>
            <a
              href="https://instagram.com/nila.ventures"
              className="text-xl font-bold text-purple-400 hover:text-purple-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              nila.ventures
            </a>
          </div>
          <div className="glass-card p-6 rounded-xl space-y-2">
            <p className="text-gray-400 text-sm">Email</p>
            <a
              href="mailto:hello@nilaventures.in"
              className="text-xl font-bold text-purple-400 hover:text-purple-300"
            >
              hello@nilaventures.in
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
