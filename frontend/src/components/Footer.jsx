import React from 'react'
import { Instagram, MessageCircle, Mail } from 'lucide-react'
import logo from '../assets/Nila Ventures_logo.png'

export default function Footer() {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-dark-card/50 backdrop-blur-xl border-t border-purple-500/10 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Nila Ventures" className="h-12 w-auto" />
              <div>
                <p className="text-lg font-black tracking-[-0.04em] text-white">Nila Ventures</p>
                <p className="text-[9px] uppercase tracking-[0.24em] text-purple-300/80">Brand Systems</p>
              </div>
            </div>
            <p className="text-gray-400">Your Vision. Our Innovation.</p>
            <p className="text-sm text-gray-500">
              Premium web design & digital solutions for growing businesses in Kerala.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
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
          <div className="space-y-4">
            <h4 className="font-bold text-white">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
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

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-bold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/917510988356"
                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} />
                <span>+91 7510988356</span>
              </a>
              <a
                href="https://instagram.com/nila.ventures"
                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={18} />
                <span>nila.ventures</span>
              </a>
              <a
                href="mailto:ashikmohammad.zm@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-purple-400 transition-colors break-all"
              >
                <Mail size={18} />
                <span>ashikmohammad.zm@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 my-8" />

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
