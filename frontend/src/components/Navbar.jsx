import React, { useState, useEffect } from 'react'
import { Menu, X, Sparkles, ArrowRight, MessageSquare } from 'lucide-react'
import logo from '../assets/Nila Ventures_logo.png'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
      
      const sections = ['hero', 'services', 'transformation', 'industries', 'process', 'pricing', 'faq', 'cta']
      const scrollPos = window.scrollY + 200

      for (const sec of sections) {
        const el = document.getElementById(sec)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Why Us', href: '#transformation', id: 'transformation' },
    { label: 'Industries', href: '#industries', id: 'industries' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  const openWhatsApp = () => {
    const msg = "Hi Nila Ventures! I'd like to discuss a new website project."
    window.open(`https://wa.me/917510988356?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 lg:px-8 py-3 sm:py-4">
      <div className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl ${
        isScrolled 
          ? 'glass-pill px-4 sm:px-6 py-2.5 sm:py-3 shadow-[0_8px_30px_rgba(0,0,0,0.6)]' 
          : 'bg-transparent px-2 sm:px-4 py-2'
      }`}>
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#hero')
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative">
              <img 
                src={logo} 
                alt="Nila Ventures" 
                className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105" 
              />
              <div className="absolute -inset-1 bg-purple-500/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white group-hover:text-purple-300 transition-colors font-display">
                Nila Ventures
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.22em] text-purple-400/90 font-semibold">
                Digital Systems
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id
              return (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-purple-500/20 text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.3)] border border-purple-500/30 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </nav>

          {/* Desktop CTA & Status */}
          <div className="hidden md:flex items-center gap-3">
            <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Projects</span>
            </div>

            <button
              onClick={() => scrollToSection('#cta')}
              className="btn-glow px-4 sm:px-5 py-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center gap-1.5"
              type="button"
            >
              <span>Get Free Quote</span>
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={openWhatsApp}
              className="p-2 rounded-xl bg-purple-500/20 text-purple-300 border border-purple-500/30"
              aria-label="WhatsApp Us"
            >
              <MessageSquare size={18} />
            </button>
            <button
              className="p-2 rounded-xl bg-white/5 text-gray-200 border border-white/10 hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 rounded-2xl border border-purple-500/20 bg-[#0B0914]/95 backdrop-blur-2xl p-4 shadow-[0_15px_40px_rgba(0,0,0,0.8)] animate-slide-up">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-white/10">
              <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Taking new clients this month</span>
              </div>
              <span className="text-[10px] text-gray-400 uppercase tracking-wider">Menu</span>
            </div>

            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id
                return (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-purple-500/20 text-purple-200 font-semibold border border-purple-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </button>
                )
              })}
            </div>

            <div className="pt-3 mt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => scrollToSection('#cta')}
                className="btn-glow w-full py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-bold text-sm text-center flex items-center justify-center gap-2"
                type="button"
              >
                <Sparkles size={16} />
                <span>Get Free Consultation</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
