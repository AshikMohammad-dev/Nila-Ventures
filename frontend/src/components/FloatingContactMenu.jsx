import React from 'react'
import whatsappIcon from '../assets/whatsapp-symbol-logo-svgrepo-com.svg'

export default function FloatingContactMenu() {
  const openWhatsApp = () => {
    const message = "Hi Nila Ventures! I'm interested in learning more about your services."
    window.open(`https://wa.me/917510988356?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 p-5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 relative group"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <img
          src={whatsappIcon}
          alt="WhatsApp"
          className="w-8 h-8 object-contain"
        />
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping" />
      </button>
    </div>
  )
}
