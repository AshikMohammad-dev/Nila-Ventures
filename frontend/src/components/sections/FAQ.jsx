import React, { useState } from 'react'
import { ChevronDown, HelpCircle, MessageSquare, Sparkles } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'How long does a website project take from start to finish?',
      answer:
        'Most standard business and e-commerce websites are completed and launched within 10 to 14 business days. We follow a strict 4-stage milestone process ensuring rapid turnaround without compromising quality.',
    },
    {
      question: 'Do I get full ownership of the website and source code?',
      answer:
        'Yes, 100%! Once full payment is complete, you own all design files, source code, domains, and assets. We do not lock you into proprietary hosting traps.',
    },
    {
      question: 'Can I easily update prices, photos, and products myself?',
      answer:
        'Yes! We build with intuitive CMS solutions or simple dashboard setups, and provide custom video walkthroughs showing you how to update content in minutes.',
    },
    {
      question: 'How do WhatsApp ordering and lead inquiries work?',
      answer:
        'When a customer clicks "Order" or "Book Appointment", it opens WhatsApp on their phone with a pre-filled message detailing the product, price, or service selected. You receive high-intent inquiries directly into your business WhatsApp.',
    },
    {
      question: 'Do you provide domain registration and high-speed hosting?',
      answer:
        'Yes! We assist with .com / .in domain registration and set up global CDN hosting backed by automated SSL certificates and sub-second load times.',
    },
    {
      question: 'What happens after the website is launched?',
      answer:
        'We include 30 days of post-launch maintenance, bug fixes, and performance monitoring. Ongoing maintenance retainer packages are also available if you want continuous updates.',
    },
  ]

  const openWhatsApp = () => {
    const msg = "Hi Nila Ventures! I have a question regarding your website packages."
    window.open(`https://wa.me/917510988356?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="faq" className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-10 overflow-hidden bg-cyber-grid">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 space-y-3 animate-slide-up max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
            <HelpCircle size={13} className="text-purple-400" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            Frequently Asked <span className="neon-text">Questions</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 font-light">
            Everything you need to know before initiating your project with us.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 border ${
                  isOpen ? 'border-purple-500/50 bg-[#120F22]' : 'border-white/[0.08] hover:border-purple-500/30'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-5 sm:px-7 py-4 sm:py-5 flex items-center justify-between text-left gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base text-white">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-purple-500/20 text-purple-300' : 'bg-white/[0.04] text-gray-400'
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-7 pb-5 pt-1 text-xs sm:text-sm text-gray-300/90 leading-relaxed font-light border-t border-white/[0.04] animate-slide-up">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Bottom Direct Question CTA */}
        <div className="mt-10 sm:mt-12 text-center p-6 rounded-2xl glass-card border border-purple-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-0.5">
            <p className="font-bold text-sm sm:text-base text-white">Have a specific question not covered here?</p>
            <p className="text-xs text-gray-400">Speak directly with our technical lead on WhatsApp.</p>
          </div>
          <button
            onClick={openWhatsApp}
            className="btn-glow px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 flex-shrink-0"
          >
            <MessageSquare size={16} />
            <span>Chat with Us Directly</span>
          </button>
        </div>
      </div>
    </section>
  )
}
