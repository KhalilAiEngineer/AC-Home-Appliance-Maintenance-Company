'use client'

import { useEffect, useRef } from 'react'

export default function About() {
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
    <section ref={sectionRef} id="about" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="animate-on-scroll relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/team.jpg"
                alt="Khalil Ahmad AC repair team"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-navy text-white rounded-xl p-3 sm:p-4 shadow-xl">
              <p className="text-2xl sm:text-3xl font-bold text-cyan">10+</p>
              <p className="text-xs sm:text-sm text-gray-300">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="animate-on-scroll inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-cyan/10 border border-cyan/20 rounded-full text-cyan text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              ABOUT US
            </span>

            <h2 className="animate-on-scroll text-3xl sm:text-4xl font-bold text-navy mb-4 leading-tight">
              Trusted AC Repair Experts in Islamabad
            </h2>

            <p className="animate-on-scroll text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              With over a decade of experience, we provide reliable AC and home appliance repair services across Islamabad. Our skilled technicians deliver quality workmanship and transparent pricing.
            </p>

            <div className="animate-on-scroll grid grid-cols-2 gap-4 mb-8">
              <div className="bg-light-bg rounded-xl p-4">
                <p className="text-2xl sm:text-3xl font-bold text-cyan">5000+</p>
                <p className="text-sm text-gray-600">Jobs Completed</p>
              </div>
              <div className="bg-light-bg rounded-xl p-4">
                <p className="text-2xl sm:text-3xl font-bold text-cyan">4.8</p>
                <p className="text-sm text-gray-600">Customer Rating</p>
              </div>
            </div>

            <div className="animate-on-scroll flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#contact" className="w-full sm:w-auto bg-gradient-to-r from-cyan to-blue text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-center hover:shadow-lg hover:shadow-cyan/30 transition-all duration-300 hover:-translate-y-0.5">
                Contact Us
              </a>
              <a href="#services" className="w-full sm:w-auto border-2 border-navy text-navy px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-center hover:bg-navy hover:text-white transition-all duration-300">
                Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}