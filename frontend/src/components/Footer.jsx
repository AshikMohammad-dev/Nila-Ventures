import React from 'react'
import logo from '../assets/Nila Ventures_logo.png'
import whatsappIcon from '../assets/whatsapp-symbol-logo-svgrepo-com.svg'
import instagramIcon from '../assets/instagram-1-svgrepo-com.svg'
import gmailIcon from '../assets/gmail-svgrepo-com.svg'
import { ArrowUp, Sparkles, Heart } from 'lucide-react'

export default function Footer() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-[#07060C] border-t border-white/[0.08] pt-14 sm:pt-16 pb-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-10 pb-12 border-b border-white/[0.06]">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Nila Ventures" className="h-9 sm:h-10 w-auto object-contain" />
              <div>
                <p className="text-base sm:text-lg font-extrabold tracking-tight text-white font-display">Nila Ventures</p>
                <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-purple-400 font-semibold">Digital Systems Studio</p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed max-w-sm">
              We design & build ultra-fast, high-converting digital storefronts and web portals for high-growth businesses.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
              <Sparkles size={12} className="text-purple-400" />
              <span>Headquartered in Kerala • Serving Globally</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400 font-light">
              <li>
                <button onClick={() => scrollToSection('#hero')} className="hover:text-purple-300 transition-colors">
                  Home & Overview
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#services')} className="hover:text-purple-300 transition-colors">
                  Capabilities & Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#transformation')} className="hover:text-purple-300 transition-colors">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#industries')} className="hover:text-purple-300 transition-colors">
                  Industry Showcase
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('#pricing')} className="hover:text-purple-300 transition-colors">
                  Packages & Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* Social Channels & Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-bold text-sm text-white uppercase tracking-wider">Direct Connect</h4>
            <p className="text-xs text-gray-400">
              Have an urgent inquiry? Reach out directly to our founders.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/917510988356"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/[0.08] hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 object-contain" />
              </a>
              <a
                href="https://instagram.com/nila.ventures"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/[0.08] hover:border-pink-500/50 hover:bg-pink-500/10 transition-all"
              >
                <img src={instagramIcon} alt="Instagram" className="w-5 h-5 object-contain" />
              </a>
              <a
                href="mailto:ashikmohammad.zm@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-xl glass-card flex items-center justify-center border border-white/[0.08] hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
              >
                <img src={gmailIcon} alt="Email" className="w-5 h-5 object-contain" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© {currentYear} Nila Ventures. All rights reserved. Handcrafted with speed & precision.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 hover:text-purple-300 transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
