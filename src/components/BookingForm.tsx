'use client'

import { useState, useEffect, useRef } from 'react'
import { siteConfig } from '@/config/site'

export default function BookingForm() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    address: '',
    problem: '',
  })
  const [honeypot, setHoneypot] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

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

  const validate = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number'
    } else if (!/^03[0-9]{2}-?[0-9]{7}$/.test(formData.phone.replace(/-/g, ''))) {
      newErrors.phone = 'Please enter a valid Pakistani phone number'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service'
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date'
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time'
    }

    if (!formData.address.trim()) {
      newErrors.address = 'Please enter your address'
    }

    if (!formData.problem.trim()) {
      newErrors.problem = 'Please describe the problem'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '')
    if (value.length > 4) {
      value = value.substring(0, 4) + '-' + value.substring(4)
    }
    setFormData((prev) => ({ ...prev, phone: value }))
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot check - if filled, it's a bot
    if (honeypot) {
      return
    }

    if (!validate()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        address: '',
        problem: '',
      })
    }, 3000)
  }

  return (
    <section
      ref={sectionRef}
      id="booking"
      className="section bg-white"
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="animate-on-scroll">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan/10 rounded-full text-cyan text-sm font-medium mb-4">
              <svg
                className="w-4 h-4"
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
              BOOK A TECHNICIAN
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-4">
              Book a Technician
            </h2>
            <p className="text-gray-600 mb-8">
              Tell us what you need help with and request a technician.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan/10 rounded-lg flex items-center justify-center text-blue flex-shrink-0">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">
                    Professional Service
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Skilled technicians for all your appliance repair needs
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan/10 rounded-lg flex items-center justify-center text-blue flex-shrink-0">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">Fast Response</h4>
                  <p className="text-gray-600 text-sm">
                    We will contact you to confirm your appointment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan/10 rounded-lg flex items-center justify-center text-blue flex-shrink-0">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-navy mb-1">
                    Convenient Location
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Technician visits your home or office
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-8 text-sm text-gray-500 italic">
              Our team will contact you to confirm your request.
            </p>
          </div>

          {/* Right Form */}
          <div className="animate-on-scroll animate-delay-200">
            {isSubmitted ? (
              <div className="bg-light-bg rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-10 h-10 text-green-600"
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
                <h3 className="text-2xl font-bold text-navy mb-2">
                  Request Submitted!
                </h3>
                <p className="text-gray-600">
                  Thank you for your request. Our team will contact you shortly
                  to confirm your appointment.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-light-bg rounded-2xl p-6 sm:p-8"
              >
                {/* Honeypot - hidden from users, bots will fill it */}
                <div className="absolute opacity-0 pointer-events-none h-0 overflow-hidden" aria-hidden="true">
                  <label htmlFor="website">Leave this empty</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="form-label">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`form-input ${
                        errors.name ? 'border-red-500 bg-red-50' : ''
                      }`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="form-label">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`form-input ${
                        errors.phone ? 'border-red-500 bg-red-50' : ''
                      }`}
                      placeholder="03XX-XXXXXXX"
                      maxLength={12}
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="service" className="form-label">
                      Select Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`form-input ${
                        errors.service ? 'border-red-500 bg-red-50' : ''
                      }`}
                    >
                      <option value="">Choose a service</option>
                      {siteConfig.serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="date" className="form-label">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={`form-input ${
                          errors.date ? 'border-red-500 bg-red-50' : ''
                        }`}
                      />
                      {errors.date && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.date}
                        </p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="time" className="form-label">
                        Preferred Time *
                      </label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`form-input ${
                          errors.time ? 'border-red-500 bg-red-50' : ''
                        }`}
                      >
                        <option value="">Select time</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">
                          Afternoon (12PM - 4PM)
                        </option>
                        <option value="evening">Evening (4PM - 8PM)</option>
                      </select>
                      {errors.time && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.time}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="form-label">
                      Address *
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`form-input ${
                        errors.address ? 'border-red-500 bg-red-50' : ''
                      }`}
                      placeholder="Enter your full address"
                    />
                    {errors.address && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="problem" className="form-label">
                      Problem Description *
                    </label>
                    <textarea
                      id="problem"
                      name="problem"
                      value={formData.problem}
                      onChange={handleChange}
                      rows={3}
                      className={`form-input resize-none ${
                        errors.problem ? 'border-red-500 bg-red-50' : ''
                      }`}
                      placeholder="Describe the issue with your appliance"
                    />
                    {errors.problem && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.problem}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full mt-6 py-4 text-base"
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="w-5 h-5 animate-spin"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    <>
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
                      Book a Technician
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}