import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Khalil Ahmad AC Repair',
  description: 'Terms of service for Khalil Ahmad AC & Home Appliance Repair and Maintenance Services.',
}

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue hover:text-cyan mb-8 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-8">Terms of Service</h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p><strong>Last updated:</strong> January 2026</p>

          <h2 className="text-xl font-bold text-navy mt-8">1. Service Agreement</h2>
          <p>
            By using our services, you agree to these Terms of Service.
            Our services include AC repair, refrigerator repair, washing machine repair,
            and microwave oven repair and maintenance.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8">2. Booking and Scheduling</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service appointments are subject to availability</li>
            <li>We will contact you to confirm your booking</li>
            <li>Please provide accurate contact information</li>
            <li>Someone must be present at the service location during the appointment</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8">3. Payment Terms</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payment is due upon completion of service</li>
            <li>We accept cash and digital payments</li>
            <li>Inspection fees may apply and will be communicated beforehand</li>
            <li>Parts and materials costs will be discussed before replacement</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8">4. Service Warranty</h2>
          <p>
            Warranty terms for repairs will be communicated at the time of service.
            Warranty covers the specific repair performed and does not extend to
            pre-existing issues or unrelated components.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8">5. Cancellation Policy</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>You may cancel or reschedule an appointment by contacting us</li>
            <li>Please provide at least 24 hours notice for cancellation</li>
            <li>Late cancellations may incur a service fee</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8">6. Liability Limitations</h2>
          <p>
            We are not liable for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Pre-existing conditions or defects in appliances</li>
            <li>Damage caused by unauthorized modifications</li>
            <li>Issues arising from improper use or maintenance</li>
            <li>Indirect or consequential damages</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8">7. Customer Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate information about the appliance issue</li>
            <li>Ensure safe access to the appliance</li>
            <li>Inform the technician of any known issues</li>
            <li>Secure valuables before technician arrival</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8">8. Contact Information</h2>
          <p>
            For any questions regarding these Terms of Service:
          </p>
          <p>
            <strong>Phone:</strong> [PHONE NUMBER]<br />
            <strong>WhatsApp:</strong> [WHATSAPP NUMBER]<br />
            <strong>Email:</strong> [EMAIL ADDRESS]
          </p>
        </div>
      </div>
    </main>
  )
}