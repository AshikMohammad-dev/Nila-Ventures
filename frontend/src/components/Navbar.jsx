import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/Nila Ventures_logo.png'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Contact', href: '#cta' },
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-bg/80 backdrop-blur-xl border-b border-purple-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src={logo} alt="Nila Ventures" className="h-8 sm:h-10 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-glow px-6 py-2.5 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg font-semibold text-sm hover:shadow-lg">
              Get a Free Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-white hover:bg-purple-500/10 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-lg font-semibold">
              Get a Free Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
