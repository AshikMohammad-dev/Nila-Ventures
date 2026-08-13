import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How long does a website take to build?',
      answer:
        'Most websites take 4-8 weeks from discovery to launch, depending on complexity and features. We always prioritize quality over speed.',
    },
    {
      question: 'Do you provide hosting and domain services?',
      answer:
        'Yes! We can help you with domain registration and premium hosting solutions. We recommend secure, fast, and reliable hosting providers.',
    },
    {
      question: 'Can I update the website myself?',
      answer:
        'Absolutely! We build websites on easy-to-use CMS platforms. We also provide training and documentation for easy updates.',
    },
    {
      question: 'Do you build e-commerce stores?',
      answer:
        'Yes! We specialize in building secure, conversion-optimized e-commerce websites with payment gateway integration.',
    },
    {
      question: 'Do you work with businesses outside Kerala?',
      answer:
        'Yes! We work with clients from across India and internationally. Our entire process is done online, so location is not a barrier.',
    },
    {
      question: 'What about ongoing support and maintenance?',
      answer:
        'We provide ongoing support, regular updates, security checks, and optimization to keep your website running at peak performance.',
    },
  ]

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-violet-600/5 blur-3xl -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-4 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black">
            Frequently Asked<span className="neon-text"> Questions</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-400">
            Everything you need to know about our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl overflow-hidden transition-all hover:border-purple-400"
              style={{
                animation: `slideUp 0.6s ease-out ${idx * 0.08}s both`,
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between hover:bg-purple-500/10 transition-colors"
              >
                <span className="font-bold text-base sm:text-lg text-left">{faq.question}</span>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === idx && (
                <div className="px-6 py-4 border-t border-purple-500/20 bg-purple-500/5 text-gray-300 animate-slide-up">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-400">Still have questions?</p>
          <button className="btn-glow px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-xl font-bold">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}
