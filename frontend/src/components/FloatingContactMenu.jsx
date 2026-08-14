import React, { useState } from 'react'
import { X } from 'lucide-react'
import whatsappIcon from '../assets/whatsapp-symbol-logo-svgrepo-com.svg'
import instagramIcon from '../assets/instagram-1-svgrepo-com.svg'
import gmailIcon from '../assets/gmail-svgrepo-com.svg'

export default function FloatingContactMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const contactLinks = [
    {
      label: 'WhatsApp',
      icon: whatsappIcon,
      href: 'https://wa.me/917510988356',
      color: 'bg-green-500 hover:bg-green-600',
      primary: true,
    },
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

  const primaryIcon = contactLinks[0]
  const secondaryIcons = contactLinks.slice(1)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Expanded Menu */}
      {isOpen && (
        <div className="flex flex-col gap-3 animate-slide-up">
          {secondaryIcons.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? undefined : '_blank'}
              rel={link.label === 'Email' ? undefined : 'noopener noreferrer'}
              aria-label={link.label}
              title={link.label}
              className={`flex items-center gap-3 transition-all duration-300 hover:scale-110 active:scale-95`}
            >
              <span className="text-sm font-semibold text-white bg-dark-card/90 backdrop-blur px-3 py-1 rounded-full whitespace-nowrap">
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

      {/* Primary Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'bg-gray-600 hover:bg-gray-700' : primaryIcon.color
        } p-5 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 transform`}
        aria-label="Contact us"
        title="Contact us"
      >
        {isOpen ? (
          <X size={28} className="text-white" />
        ) : (
          <img
            src={primaryIcon.icon}
            alt={primaryIcon.label}
            className="w-8 h-8 object-contain"
          />
        )}
      </button>

      {/* Pulse animation when closed */}
      {!isOpen && (
        <div className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping" />
      )}
    </div>
  )
}
