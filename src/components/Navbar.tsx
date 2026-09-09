'use client'

import { useState } from 'react'
import { siteConfig } from '@/config/site'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="relative bg-navy z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#home')
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan to-blue rounded-xl flex items-center justify-center shadow-lg shadow-cyan/20 group-hover:shadow-cyan/40 transition-shadow">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-lg tracking-tight">{siteConfig.name}</span>
              <span className="hidden sm:block text-cyan text-xs font-medium tracking-wider uppercase">AC Repair</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(link.href)
                }}
                className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="flex items-center gap-2 text-gray-300 hover:text-white text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now
            </a>
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#booking')
              }}
              className="bg-gradient-to-r from-cyan to-blue text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-cyan/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Technician
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-white/10">
            <nav className="flex flex-col gap-1 pt-4">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }}
                  className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg font-medium text-sm transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 mt-4 px-4">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue text-white py-3 rounded-xl font-semibold text-sm"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Now
                </a>
                <a
                  href="#booking"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection('#booking')
                  }}
                  className="flex-1 bg-gradient-to-r from-cyan to-blue text-white py-3 rounded-xl font-semibold text-sm text-center"
                >
                  Book Technician
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}