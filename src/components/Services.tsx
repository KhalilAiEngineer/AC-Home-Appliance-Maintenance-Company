'use client'

import { useEffect, useRef } from 'react'
import { siteConfig } from '@/config/site'
import ServiceCard from './ServiceCard'

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
    <section
      ref={sectionRef}
      id="services"
      className="section bg-light-bg"
    >
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="animate-on-scroll trust-badge mb-4 inline-flex">
            OUR SERVICES
          </span>
          <h2 className="animate-on-scroll animate-delay-100 text-3xl sm:text-4xl font-bold text-navy mb-4">
            Complete Repair & Maintenance Solutions
          </h2>
          <p className="animate-on-scroll animate-delay-200 text-gray-600 max-w-2xl mx-auto">
            Complete repair and maintenance solutions for your essential home
            appliances.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}