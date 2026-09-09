import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | Khalil Ahmad AC Repair',
  description: 'Privacy policy for Khalil Ahmad AC & Home Appliance Repair and Maintenance Services.',
}

export default function PrivacyPolicy() {
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

        <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-8">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
          <p><strong>Last updated:</strong> January 2026</p>

          <h2 className="text-xl font-bold text-navy mt-8">1. Information We Collect</h2>
          <p>
            When you use our services or submit a booking form, we may collect the following information:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full name</li>
            <li>Phone number</li>
            <li>Email address</li>
            <li>Service address</li>
            <li>Appliance details and problem description</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8">2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Contact you to confirm and schedule service appointments</li>
            <li>Provide repair and maintenance services</li>
            <li>Communicate about your service requests</li>
            <li>Improve our services and customer experience</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8">3. Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties.
            Your information is only used internally to provide you with the requested services.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8">4. Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information.
            However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8">5. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience.
            You can choose to disable cookies through your browser settings.
          </p>

          <h2 className="text-xl font-bold text-navy mt-8">6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-xl font-bold text-navy mt-8">7. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p>
            <strong>Phone:</strong> [PHONE NUMBER]<br />
            <strong>WhatsApp:</strong> [WHATSAPP NUMBER]<br />
            <strong>Email:</strong> [EMAIL ADDRESS]
          </p>

          <h2 className="text-xl font-bold text-navy mt-8">8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time.
            Any changes will be posted on this page with an updated revision date.
          </p>
        </div>
      </div>
    </main>
  )
}