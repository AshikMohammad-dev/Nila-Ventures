import React, { useEffect, useRef, useState } from 'react'
import { Zap, ShieldCheck, Smartphone, Search, Award, TrendingUp } from 'lucide-react'

export default function Stats() {
  const [counts, setCounts] = useState({
    speed: 0,
    conversion: 0,
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
      { threshold: 0.15 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const targets = { speed: 99, conversion: 300, mobile: 100, seo: 98 }
    const duration = 1500
    const steps = 30
    const stepTime = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      setCounts({
        speed: Math.round(targets.speed * progress),
        conversion: Math.round(targets.conversion * progress),
        mobile: Math.round(targets.mobile * progress),
        seo: Math.round(targets.seo * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isVisible])

  const stats = [
    {
      icon: Zap,
      value: counts.speed,
      suffix: '/100',
      label: 'Performance Score',
      desc: 'Blazing fast load times under 1.2s',
      color: 'text-purple-400',
      badgeBg: 'bg-purple-500/10 border-purple-500/20',
    },
    {
      icon: TrendingUp,
      value: `+${counts.conversion}`,
      suffix: '%',
      label: 'Average Lead Growth',
      desc: 'Proven conversion-first UX layouts',
      color: 'text-emerald-400',
      badgeBg: 'bg-emerald-500/10 border-emerald-500/20',
    },
    {
      icon: Smartphone,
      value: counts.mobile,
      suffix: '%',
      label: 'Mobile Responsive',
      desc: 'Flawless touch experience on iOS & Android',
      color: 'text-cyan-400',
      badgeBg: 'bg-cyan-500/10 border-cyan-500/20',
    },
    {
      icon: Search,
      value: counts.seo,
      suffix: '%',
      label: 'Google SEO Ready',
      desc: 'Schema markup & technical indexing built-in',
      color: 'text-amber-400',
      badgeBg: 'bg-amber-500/10 border-amber-500/20',
    },
  ]

  return (
    <section
      ref={ref}
      className="relative py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-10 border-y border-white/[0.06] bg-[#0A0912]/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div
                key={idx}
                className="glass-card p-4 sm:p-6 rounded-2xl relative overflow-hidden group hover:border-purple-500/40 transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-xl ${stat.badgeBg} border ${stat.color}`}>
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Verified
                  </span>
                </div>

                <div className="space-y-1">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-display tracking-tight text-white flex items-baseline">
                    <span className="neon-text">{stat.value}</span>
                    <span className="text-sm sm:text-lg text-purple-400 ml-0.5">{stat.suffix}</span>
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-gray-200">{stat.label}</p>
                  <p className="text-[11px] sm:text-xs text-gray-400 font-light leading-relaxed hidden sm:block">
                    {stat.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
