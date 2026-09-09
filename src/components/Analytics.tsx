'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      const script = document.createElement('script')
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
      script.async = true
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      const gtag = function (...args: unknown[]) {
        window.dataLayer?.push(args)
      }
      gtag('js', new Date())
      gtag('config', GA_MEASUREMENT_ID)
    }
  }, [])

  useEffect(() => {
    if (GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
      const url = pathname + (searchParams?.toString() || '')
      window.dataLayer?.push({
        event: 'page_view',
        page_path: url,
      })
    }
  }, [pathname, searchParams])

  return null
}

declare global {
  interface Window {
    dataLayer?: unknown[]
  }
}