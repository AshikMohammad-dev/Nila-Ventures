import React from 'react'
import logo from '../assets/Nila Ventures_logo.png'
import whatsappIcon from '../assets/whatsapp-symbol-logo-svgrepo-com.svg'
import instagramIcon from '../assets/instagram-1-svgrepo-com.svg'
import gmailIcon from '../assets/gmail-svgrepo-com.svg'

export default function Footer() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-dark-card/50 backdrop-blur-xl border-t border-purple-500/10 py-10 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Brand Section */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <img src={logo} alt="Nila Ventures" className="h-10 sm:h-12 w-auto" />
              <div>
                <p className="text-base sm:text-lg font-black tracking-[-0.04em] text-white">Nila Ventures</p>
                <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.24em] text-purple-300/80">Brand Systems</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400">Your Vision. Our Innovation.</p>
            <p className="text-xs sm:text-sm text-gray-500">
              Premium web design & digital solutions for growing businesses in Kerala.
            </p>
          </div>
        </div>

        {/* Quick Links & Services - Side by Side */}
        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-10 md:mb-12 md:grid-cols-3">
          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-bold text-sm sm:text-base text-white">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <button
                  onClick={() => scrollToSection('#hero')}
                  className="hover:text-purple-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="hover:text-purple-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#industries')}
                  className="hover:text-purple-400 transition-colors"
                >
                  Industries
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#process')}
                  className="hover:text-purple-400 transition-colors"
                >
                  Process
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="font-bold text-sm sm:text-base text-white">Services</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li className="hover:text-purple-400 transition-colors cursor-pointer">
                Website Design
              </li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">
                E-Commerce
              </li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">
                Landing Pages
              </li>
              <li className="hover:text-purple-400 transition-colors cursor-pointer">
                Branding
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 my-8" />

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://wa.me/917510988356"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="bg-green-500 hover:bg-green-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 object-contain" />
          </a>
          <a
            href="https://instagram.com/nila.ventures"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
            className="bg-pink-500 hover:bg-pink-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <img src={instagramIcon} alt="Instagram" className="w-5 h-5 object-contain" />
          </a>
          <a
            href="mailto:ashikmohammad.zm@gmail.com"
            aria-label="Email"
            title="Email"
            className="bg-red-500 hover:bg-red-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <img src={gmailIcon} alt="Email" className="w-5 h-5 object-contain" />
          </a>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© {currentYear} Nila Ventures. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button className="hover:text-purple-400 transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-purple-400 transition-colors">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
