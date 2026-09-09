'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/config/site'

const services = [
  {
    title: 'AC Repair & Maintenance',
    description: 'Split, Window, Duct, Inverter & Non-Inverter AC repair. Gas charging, PCB repair, and regular servicing.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    image: '/images/ac-repair.jpg',
    tags: ['Split AC', 'Window AC', 'Inverter', 'Gas Charging'],
    span: 'lg:col-span-2 lg:row-span-2',
    height: 'h-64 sm:h-80 lg:h-full',
    gradient: 'from-navy/80 via-navy/40 to-transparent',
    contentPosition: 'justify-end',
  },
  {
    title: 'Refrigerator Repair',
    description: 'Cooling issues, compressor problems, and general maintenance.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 7h16M4 14h16m-6 3h4" />
      </svg>
    ),
    image: '/images/refrigerator.jpg',
    tags: [],
    span: '',
    height: 'h-48 sm:h-64',
    gradient: 'from-navy/80 via-navy/40 to-transparent',
    contentPosition: 'justify-end',
  },
  {
    title: 'Washing Machine Repair',
    description: 'All types and brands serviced.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm4 4h8m-6 8a3 3 0 106 0m-6 0h6" />
      </svg>
    ),
    image: '/images/washing-machine.jpg',
    tags: [],
    span: '',
    height: 'h-48 sm:h-64',
    gradient: 'from-navy/80 via-navy/40 to-transparent',
    contentPosition: 'justify-end',
  },
  {
    title: 'Microwave Oven Repair',
    description: 'Heating problems, PCB faults, magnetron issues — we fix it all.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm4 4h8m-6 8h4" />
      </svg>
    ),
    image: '/images/microwave.jpg',
    tags: [],
    span: 'lg:col-span-2',
    height: 'h-48 sm:h-64',
    gradient: 'from-navy/80 via-navy/40 to-transparent',
    contentPosition: 'justify-end',
  },
]

export default function Services() {
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

  return (
    <section ref={sectionRef} id="services" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-light-bg" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="animate-on-scroll inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-cyan/10 border border-cyan/20 rounded-full text-cyan text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            WHAT WE FIX
          </span>
          <h2 className="animate-on-scroll text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mb-4 leading-tight">
            Professional Appliance Repair
          </h2>
          <p className="animate-on-scroll text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            From AC breakdowns to refrigerator malfunctions — we handle it all with precision and care.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`animate-on-scroll group relative rounded-2xl overflow-hidden cursor-pointer ${service.span} ${service.height}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient}`} />
              <div className={`absolute inset-0 p-4 sm:p-6 flex flex-col ${service.contentPosition}`}>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 text-cyan">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300 text-sm mb-3 hidden sm:block">{service.description}</p>
                {service.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tags.map((tag) => (
                      <span key={tag} className="px-2 sm:px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex gap-2 sm:gap-3">
                  <a href={`tel:${siteConfig.contact.phoneRaw}`} className="bg-white text-navy px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:bg-cyan hover:text-white transition-all">
                    Call Now
                  </a>
                  <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:bg-[#128C7E] transition-all">
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}