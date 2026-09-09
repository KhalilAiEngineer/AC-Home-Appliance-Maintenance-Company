'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/config/site'

const serviceImages: Record<string, string> = {
  snowflake: '/images/ac-repair.jpg',
  refrigerator: '/images/refrigerator.jpg',
  'washing-machine': '/images/washing-machine.jpg',
  microwave: '/images/microwave.jpg',
}

export default function BentoGrid() {
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
    <section ref={sectionRef} id="services" className="relative py-24 overflow-hidden">
      {/* Atmospheric Background */}
      <div className="absolute inset-0 bg-light-bg" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue/5 rounded-full blur-3xl translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="animate-on-scroll inline-flex items-center gap-2 px-4 py-2 bg-cyan/10 border border-cyan/20 rounded-full text-cyan text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            WHAT WE FIX
          </span>
          <h2 className="animate-on-scroll text-4xl sm:text-5xl font-bold text-navy mb-4 leading-tight">
            Your Comfort, <span className="text-cyan">Our Expertise</span>
          </h2>
          <p className="animate-on-scroll text-lg text-gray-600 max-w-2xl mx-auto">
            From AC breakdowns to refrigerator malfunctions — we handle it all with precision and care.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[280px]">
          {/* AC Repair - Large Card */}
          <div className="animate-on-scroll lg:col-span-2 lg:row-span-2 group relative rounded-3xl overflow-hidden cursor-pointer">
            <img
              src={serviceImages.snowflake}
              alt="Professional AC repair service"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-cyan/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">AC Repair & Maintenance</h3>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Split AC', 'Window AC', 'Inverter', 'Gas Charging', 'PCB Repair'].map((item) => (
                  <span key={item} className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm">
                    {item}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="bg-white text-navy px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-cyan hover:text-white transition-all">
                  Call Now
                </a>
                <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#128C7E] transition-all">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Refrigerator - Medium Card */}
          <div className="animate-on-scroll group relative rounded-3xl overflow-hidden cursor-pointer">
            <img
              src={serviceImages.refrigerator}
              alt="Refrigerator repair service"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="w-10 h-10 bg-cyan/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 7h16M4 14h16m-6 3h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Refrigerator Repair</h3>
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-cyan text-sm font-medium hover:underline">
                Book Now →
              </a>
            </div>
          </div>

          {/* Washing Machine - Medium Card */}
          <div className="animate-on-scroll group relative rounded-3xl overflow-hidden cursor-pointer">
            <img
              src={serviceImages['washing-machine']}
              alt="Washing machine repair service"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <div className="w-10 h-10 bg-cyan/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm4 4h8m-6 8a3 3 0 106 0m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Washing Machine Repair</h3>
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="text-cyan text-sm font-medium hover:underline">
                Book Now →
              </a>
            </div>
          </div>

          {/* Microwave - Wide Card */}
          <div className="animate-on-scroll lg:col-span-2 group relative rounded-3xl overflow-hidden cursor-pointer">
            <img
              src={serviceImages.microwave}
              alt="Microwave oven repair service"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/40 to-transparent" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4h16a2 2 0 012 2v14a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm4 4h8m-6 8h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Microwave Oven Repair</h3>
              </div>
              <p className="text-gray-300 text-sm mb-4 max-w-md">
                Heating problems, PCB faults, magnetron issues — we fix it all.
              </p>
              <div className="flex gap-3">
                <a href={`tel:${siteConfig.contact.phoneRaw}`} className="bg-white text-navy px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-cyan hover:text-white transition-all">
                  Call Now
                </a>
                <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#128C7E] transition-all">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}