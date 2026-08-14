import React, { useState } from 'react'
import { X, MessageCircle } from 'lucide-react'
import whatsappIcon from '../assets/whatsapp-symbol-logo-svgrepo-com.svg'
import instagramIcon from '../assets/instagram-1-svgrepo-com.svg'
import gmailIcon from '../assets/gmail-svgrepo-com.svg'

export default function FloatingContactMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const openWhatsApp = () => {
    const message = "Hi Nila Ventures! I'm interested in learning more about your services."
    window.open(`https://wa.me/917510988356?text=${encodeURIComponent(message)}`, '_blank')
  }

  const contactLinks = [
    {
      label: 'Instagram',
      icon: instagramIcon,
      href: 'https://instagram.com/nila.ventures',
      color: 'bg-pink-500 hover:bg-pink-600',
    },
    {
      label: 'Email',
      icon: gmailIcon,
      href: 'mailto:ashikmohammad.zm@gmail.com',
      color: 'bg-red-500 hover:bg-red-600',
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Expanded Menu */}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-slide-up">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
              aria-label={link.label}
              title={link.label}
              className={`flex items-center gap-3 transition-all duration-300 hover:scale-110 active:scale-95`}
            >
              <span className="text-sm font-semibold text-white bg-dark-card/90 backdrop-blur px-3 py-1 rounded-full whitespace-nowrap shadow-lg">
                {link.label}
              </span>
              <div className={`${link.color} p-4 rounded-full shadow-lg flex items-center justify-center transition-all`}>
                <img
                  src={link.icon}
                  alt={link.label}
                  className="w-7 h-7 object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      )}

      {/* Primary WhatsApp Button */}
      <button
        onClick={() => {
          if (isOpen) {
            setIsOpen(false)
          } else {
            openWhatsApp()
          }
        }}
        className={`bg-green-500 hover:bg-green-600 p-5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 transform relative`}
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

      {/* Menu Toggle Button (secondary) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-purple-600 hover:bg-purple-700 p-3 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        title={isOpen ? 'Close menu' : 'More options'}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={20} className="text-white" />
        )}
      </button>
    </div>
  )
}
