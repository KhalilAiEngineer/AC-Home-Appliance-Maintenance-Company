import type { Metadata } from 'next'
import { Suspense } from 'react'
import Analytics from '@/components/Analytics'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Khalil Ahmad | AC & Home Appliance Repair Services',
    template: '%s | Khalil Ahmad AC Repair',
  },
  description: 'Professional AC, refrigerator, washing machine and microwave repair and maintenance services. Book a technician or contact us today.',
  keywords: ['AC repair', 'home appliance repair', 'refrigerator repair', 'washing machine repair', 'microwave repair', 'maintenance services', 'HVAC', 'air conditioner repair'],
  authors: [{ name: 'Khalil Ahmad' }],
  creator: 'Khalil Ahmad',
  publisher: 'Khalil Ahmad',
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://khalilahmad-acrepair.vercel.app',
    siteName: 'Khalil Ahmad AC Repair',
    title: 'Khalil Ahmad | AC & Home Appliance Repair Services',
    description: 'Professional AC, refrigerator, washing machine and microwave repair and maintenance services. Book a technician or contact us today.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Khalil Ahmad AC Repair Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khalil Ahmad | AC & Home Appliance Repair Services',
    description: 'Professional AC, refrigerator, washing machine and microwave repair and maintenance services.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://khalilahmad-acrepair.vercel.app" />
      </head>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        {children}
      </body>
    </html>
  )
}