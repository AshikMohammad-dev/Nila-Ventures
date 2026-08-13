import React, { useEffect, useRef, useState } from 'react'

export default function Stats() {
  const [counts, setCounts] = useState({
    design: 0,
    performance: 0,
    mobile: 0,
    seo: 0,
  })
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const targets = { design: 100, performance: 99, mobile: 100, seo: 98 }
    const increment = setInterval(() => {
      setCounts((prev) => ({
        design: Math.min(prev.design + Math.random() * 10, targets.design),
        performance: Math.min(prev.performance + Math.random() * 10, targets.performance),
        mobile: Math.min(prev.mobile + Math.random() * 10, targets.mobile),
        seo: Math.min(prev.seo + Math.random() * 10, targets.seo),
      }))
    }, 50)

    return () => clearInterval(increment)
  }, [isVisible])

  const stats = [
    { label: 'Custom Design', value: 'design', suffix: '%' },
    { label: 'Fast Performance', value: 'performance', suffix: '%' },
    { label: 'Mobile Optimized', value: 'mobile', suffix: '%' },
    { label: 'SEO Ready', value: 'seo', suffix: '%' },
  ]

  return (
    <section
      ref={ref}
      className="relative py-14 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="glass-card p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center space-y-2 hover:scale-105 transition-transform"
            >
              <p className="text-xl sm:text-3xl md:text-5xl font-black neon-text">
                {Math.round(counts[stat.value])}{stat.suffix}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
