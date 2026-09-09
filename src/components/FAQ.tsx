'use client'

import { useState, useEffect, useRef } from 'react'
import { siteConfig } from '@/config/site'

const faqData = [
  {
    question: 'What types of AC units do you repair?',
    answer: 'We repair all types of air conditioning systems including Split AC, Window AC, Duct AC, Inverter and Non-Inverter units. Our technicians are trained to handle all major brands and models.',
  },
  {
    question: 'Do you offer same-day service?',
    answer: 'Yes, we offer same-day service for most repair requests. Contact us early in the day for the best chance of same-day technician dispatch. We understand AC emergencies cannot wait.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We provide AC and home appliance repair services across Islamabad, Pakistan. Our technicians cover all major areas and neighborhoods within the city.',
  },
  {
    question: 'How much does an inspection cost?',
    answer: 'We offer transparent pricing with no hidden fees. Contact us for a free initial consultation. Our technicians will provide a detailed quote before starting any work.',
  },
  {
    question: 'Do you provide warranty on repairs?',
    answer: 'Yes, we stand behind our work. All repairs come with a service warranty. Specific warranty terms are communicated at the time of service and depend on the type of repair performed.',
  },
  {
    question: 'Can you repair refrigerators and washing machines too?',
    answer: 'Absolutely. We specialize in AC repair and also service Refrigerators, Washing Machines, and Microwave Ovens. One team for all your home appliance needs.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-500 to-navy-600" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-cyan/10 border border-cyan/20 rounded-full text-cyan text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            COMMON QUESTIONS
          </span>
          <h2 className="animate-on-scroll text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Got Questions?
          </h2>
          <p className="animate-on-scroll text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about our AC and appliance repair services.
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`animate-on-scroll bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-white/10 border-cyan/30' : 'hover:bg-white/8'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-white text-lg pr-4">{faq.question}</span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  openIndex === index ? 'bg-cyan rotate-180' : 'bg-white/10'
                }`}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <div className="px-6 pt-0">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll text-center mt-12">
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}