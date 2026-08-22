import React from 'react'
import whatsappIcon from '../assets/whatsapp-symbol-logo-svgrepo-com.svg'

export default function FloatingContactMenu() {
  const openWhatsApp = () => {
    const message = "Hi Nila Ventures! I'm interested in getting a website for my business."
    window.open(`https://wa.me/917510988356?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 group">
      {/* Tooltip Badge */}
      <span className="hidden sm:inline-block glass-pill px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
        ⚡ Chat with Us on WhatsApp
      </span>

      {/* WhatsApp Floating Button */}
      <button
        onClick={openWhatsApp}
        className="w-13 h-13 sm:w-14 sm:h-14 p-3.5 rounded-full bg-gradient-to-tr from-emerald-600 to-green-500 shadow-[0_4px_25px_rgba(16,185,129,0.5)] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 relative border border-emerald-400/40"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-6 h-6 sm:w-7 sm:h-7 object-contain"
        />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#060608] animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-400 rounded-full border-2 border-[#060608]" />
      </button>
    </div>
  )
}
