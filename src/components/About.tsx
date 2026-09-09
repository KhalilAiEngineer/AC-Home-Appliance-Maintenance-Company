'use client'

import { useEffect, useRef } from 'react'

const highlights = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'AC & Appliance Expertise',
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    title: 'Customer-Focused Service',
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: 'Professional Approach',
  },
]

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
    <section
      ref={sectionRef}
      id="about"
      className="section bg-white"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="animate-on-scroll trust-badge mb-4 inline-flex">
              ABOUT US
            </span>
            <h2 className="animate-on-scroll animate-delay-100 text-3xl sm:text-4xl font-bold text-navy mb-6">
              Professional Service. Reliable Solutions.
            </h2>
            <p className="animate-on-scroll animate-delay-200 text-gray-600 mb-6">
              Khalil Ahmad provides professional AC and home appliance repair
              and maintenance services with a focus on reliable solutions,
              quality workmanship and customer satisfaction.
            </p>
            <p className="animate-on-scroll animate-delay-300 text-gray-600 mb-8">
              Our team of skilled technicians is dedicated to diagnosing and
              resolving appliance problems efficiently, ensuring your home
              comfort is restored quickly.
            </p>

            <div className="animate-on-scroll animate-delay-400 space-y-4">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-cyan/10 rounded-lg flex items-center justify-center text-blue flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-navy">{item.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="animate-on-scroll animate-delay-200 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/team.jpg"
                alt="Professional AC repair team providing reliable service"
                className="w-full h-auto object-cover aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -left-4 bg-white rounded-xl p-4 shadow-xl hidden md:block">
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
                      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy">Trusted</p>
                  <p className="text-sm text-gray-500">Service Provider</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}