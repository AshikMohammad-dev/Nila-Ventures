import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import Stats from './components/sections/Stats'
import Services from './components/sections/Services'
import Transformation from './components/sections/Transformation'
import Portfolio from './components/sections/Portfolio'
import Process from './components/sections/Process'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'
import FAQ from './components/sections/FAQ'
import CTA from './components/sections/CTA'
import Footer from './components/Footer'
import FloatingParticles from './components/FloatingParticles'
import './index.css'

export default function App() {
  useEffect(() => {
    // Custom cursor glow effect
    const cursor = document.createElement('div')
    cursor.id = 'cursor-glow'
    document.body.appendChild(cursor)
    
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    })
  }, [])

  return (
    <div className="relative w-full bg-dark-bg text-white">
      <FloatingParticles />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Transformation />
        <Portfolio />
        <Process />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
