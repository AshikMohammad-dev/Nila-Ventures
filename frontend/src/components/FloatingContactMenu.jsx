import React from 'react'
import whatsappIcon from '../assets/whatsapp-symbol-logo-svgrepo-com.svg'

export default function FloatingContactMenu() {
  const openWhatsApp = () => {
    const message = "Hi Nila Ventures! I'm interested in learning more about your services."
    window.open(`https://wa.me/917510988356?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
      {/* WhatsApp Button - Mobile Optimized */}
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 p-4 sm:p-5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 relative group min-w-[56px] sm:min-w-[60px] min-h-[56px] sm:min-h-[60px] flex items-center justify-center animate-bounce-slow hover:animate-none"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-7 sm:w-8 h-7 sm:h-8 object-contain"
        />
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-pulse" />
        
        {/* Tooltip on mobile */}
        <span className="absolute -left-20 sm:hidden bg-dark-card/90 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat now!
        </span>
      </button>
    </div>
  )
}
