import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { MessageCircle, Calendar, Check, Loader, Sparkles, Send, ShieldCheck, ArrowRight } from 'lucide-react'

export default function CTA() {
  const EMAILJS_SERVICE_ID = 'service_495ati6'
  const EMAILJS_TEMPLATE_ID = 'template_g2dy1zd'
  const EMAILJS_PUBLIC_KEY = 'bMj9bnUDQRFFPiRi-'

  React.useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY)
  }, [])

  const [selectedProjectType, setSelectedProjectType] = useState('Business Website')
  const [selectedTimeline, setSelectedTimeline] = useState('Standard (10-14 Days)')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [submitStatus, setSubmitStatus] = useState('')

  const projectTypes = [
    'Business Website',
    'E-Commerce Store',
    'Landing Page',
    'Complete Redesign',
  ]

  const timelines = [
    'Urgent (Under 7 Days)',
    'Standard (10-14 Days)',
    'Flexible (Within a Month)',
  ]

  const openWhatsApp = () => {
    const msg = `Hi Nila Ventures! I'm interested in building a ${selectedProjectType} with a timeline of "${selectedTimeline}". Can we schedule a free strategy call?`
    window.open(`https://wa.me/917510988356?text=${encodeURIComponent(msg)}`, '_blank')
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      const formData = new FormData(e.target)
      const templateParams = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        company: formData.get('company') || 'N/A',
        phone: formData.get('phone') || 'N/A',
        project_type: selectedProjectType,
        timeline: selectedTimeline,
        message: formData.get('message'),
        to_email: 'ashikmohammad.zm@gmail.com',
      }

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )

      setSubmitStatus('success')
      setSubmitMessage('✅ Inquiry received! Our team will reach out within 12 hours with a custom project proposal.')
      e.target.reset()
      setTimeout(() => {
        setSubmitMessage('')
      }, 6000)
    } catch (error) {
      console.error('Email error:', error)
      setSubmitStatus('error')
      setSubmitMessage('❌ Failed to send. Please reach out to us directly on WhatsApp for an immediate response.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="cta"
      className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden bg-cyber-grid"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        <div className="glass-card p-6 sm:p-10 md:p-12 rounded-3xl border border-purple-500/30 bg-[#0E0C1B]/95 text-center space-y-8 animate-slide-up shadow-2xl">
          
          {/* Header */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
              <Sparkles size={13} className="text-purple-400" />
              <span>Let's Build Something Remarkable</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
              Ready to Upgrade Your <span className="neon-text">Digital Presence?</span>
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-400 font-light leading-relaxed">
              Book a complimentary 20-minute strategy session. We'll audit your current digital presence and craft a tailored roadmap.
            </p>
          </div>

          {/* Quick WhatsApp Action Strip */}
          <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-teal-950/20 to-purple-950/30 border border-emerald-500/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-emerald-300 flex items-center justify-center sm:justify-start gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Instant WhatsApp Consultation
              </span>
              <p className="text-[11px] text-gray-400">Prefer chatting on WhatsApp? Get direct answers right away.</p>
            </div>
            <button
              type="button"
              onClick={openWhatsApp}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold text-xs sm:text-sm hover:shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2 flex-shrink-0"
            >
              <MessageCircle size={16} />
              <span>Chat on WhatsApp</span>
            </button>
          </div>

          {/* Detailed Consultation Form */}
          <form
            id="consultation-form"
            onSubmit={handleFormSubmit}
            className="text-left space-y-6 pt-2"
          >
            {/* 1. Project Type Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                1. Select Project Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setSelectedProjectType(type)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      selectedProjectType === type
                        ? 'bg-purple-500/20 border-purple-400 text-white shadow-md shadow-purple-500/20'
                        : 'bg-white/[0.02] border-white/[0.08] text-gray-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Timeline Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider">
                2. Target Launch Timeline
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {timelines.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTimeline(time)}
                    className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all text-center ${
                      selectedTimeline === time
                        ? 'bg-purple-500/20 border-purple-400 text-white shadow-md shadow-purple-500/20'
                        : 'bg-white/[0.02] border-white/[0.08] text-gray-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs font-semibold text-gray-300">Your Full Name *</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Rahul Menon"
                  className="w-full rounded-xl border border-white/[0.1] bg-[#141026] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-semibold text-gray-300">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="e.g. rahul@brand.com"
                  className="w-full rounded-xl border border-white/[0.1] bg-[#141026] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="company" className="block text-xs font-semibold text-gray-300">Company / Brand Name</label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  placeholder="e.g. Kerala Spices Co."
                  className="w-full rounded-xl border border-white/[0.1] bg-[#141026] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="phone" className="block text-xs font-semibold text-gray-300">Phone / WhatsApp Number</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  placeholder="e.g. +91 98765 43210"
                  className="w-full rounded-xl border border-white/[0.1] bg-[#141026] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none transition-colors"
                />
              </div>

              <div className="sm:col-span-2 space-y-1.5">
                <label htmlFor="message" className="block text-xs font-semibold text-gray-300">Project Details & Key Objectives *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell us about your brand, current challenges, features needed, and inspirations..."
                  className="w-full rounded-xl border border-white/[0.1] bg-[#141026] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-purple-400 focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Submit Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <ShieldCheck size={16} className="text-purple-400 flex-shrink-0" />
                <span>NDA & Data Privacy Protected. No spam guaranteed.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-glow w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-bold text-sm flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader size={16} className="animate-spin" />
                    <span>Transmitting Inquiry...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Project Inquiry</span>
                  </>
                )}
              </button>
            </div>

            {/* Status Alert */}
            {submitMessage && (
              <div className={`p-4 rounded-xl text-sm font-medium text-center animate-slide-up ${
                submitStatus === 'success'
                  ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/30'
                  : 'bg-rose-500/10 text-rose-300 border border-rose-500/30'
              }`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
