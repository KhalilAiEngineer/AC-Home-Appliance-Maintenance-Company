'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/config/site'

export default function HowItWorks() {
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
    <section
      ref={sectionRef}
      className="section bg-light-bg"
    >
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="animate-on-scroll trust-badge mb-4 inline-flex">
            HOW IT WORKS
          </span>
          <h2 className="animate-on-scroll animate-delay-100 text-3xl sm:text-4xl font-bold text-navy mb-4">
            Simple 4-Step Process
          </h2>
          <p className="animate-on-scroll animate-delay-200 text-gray-600 max-w-2xl mx-auto">
            Getting your appliance repaired is easy with our straightforward
            process.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block relative">
          <div className="timeline-line" />
          <div className="grid grid-cols-4 gap-8">
            {siteConfig.steps.map((step, index) => (
              <div
                key={step.number}
                className={`animate-on-scroll animate-delay-${(index + 1) * 100} relative`}
              >
                <div className="bg-white rounded-xl p-6 border border-gray-100 card-hover relative z-10">
                  <div className="w-12 h-12 bg-cyan rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden relative">
          <div className="timeline-line" />
          <div className="space-y-6 pl-16">
            {siteConfig.steps.map((step, index) => (
              <div
                key={step.number}
                className={`animate-on-scroll animate-delay-${(index + 1) * 100} relative`}
              >
                <div className="absolute left-0 w-12 h-12 bg-cyan rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                  {step.number}
                </div>
                <div className="bg-white rounded-xl p-5 border border-gray-100 card-hover">
                  <h3 className="text-lg font-bold text-navy mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}