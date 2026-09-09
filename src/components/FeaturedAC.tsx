'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/config/site'

const acFeatures = [
  'AC Servicing',
  'Cooling Problems',
  'Gas Charging',
  'Installation',
  'Compressor Repair',
  'PCB Repair',
]

export default function FeaturedAC() {
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

  const scrollToBooking = () => {
    const element = document.querySelector('#booking')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      ref={sectionRef}
      className="section bg-white overflow-hidden"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="animate-on-scroll relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/featured-ac.jpg"
                alt="Professional AC repair and maintenance service"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-cyan/10 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-cyan"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy">All AC Types</p>
                  <p className="text-sm text-gray-500">Serviced & Repaired</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="animate-on-scroll trust-badge mb-4 inline-flex">
              AC REPAIR & MAINTENANCE
            </span>
            <h2 className="animate-on-scroll animate-delay-100 text-3xl sm:text-4xl font-bold text-navy mb-6">
              Complete AC Solutions, From Servicing to Repair
            </h2>
            <p className="animate-on-scroll animate-delay-200 text-gray-600 mb-8">
              Our professional technicians handle all types of AC maintenance
              and repair needs. From split ACs to window units, inverter to
              non-inverter systems — we provide comprehensive solutions to keep
              your space cool and comfortable.
            </p>

            <div className="animate-on-scroll animate-delay-300 grid grid-cols-2 gap-4 mb-8">
              {acFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <svg
                    className="w-5 h-5 text-cyan flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="animate-on-scroll animate-delay-400 flex flex-col sm:flex-row gap-4">
              <button onClick={scrollToBooking} className="btn btn-primary">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book AC Technician
              </button>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="btn btn-outline"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}