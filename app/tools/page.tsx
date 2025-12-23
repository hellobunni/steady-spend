import type { Metadata } from 'next'
import ToolsClient from './ToolsClient'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.steadyspend.com'

export const metadata: Metadata = {
  title: 'Free Financial Tools & Calculators | SteadySpend',
  description:
    'Free financial tools and calculators to help you budget, track expenses, and make confident money decisions. No sign-up required.',
  keywords: [
    'financial tools',
    'budget calculator',
    'money calculator',
    'expense tracker',
    'financial planning tools',
    'free financial calculators',
  ],
  alternates: {
    canonical: `${baseUrl}/tools`,
  },
  openGraph: {
    title: 'Free Financial Tools & Calculators | SteadySpend',
    description:
      'Free financial tools and calculators to help you budget, track expenses, and make confident money decisions.',
    url: `${baseUrl}/tools`,
    siteName: 'SteadySpend',
    images: [
      {
        url: `${baseUrl}/logo-vertical.png`,
        width: 1200,
        height: 630,
        alt: 'SteadySpend Financial Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Financial Tools & Calculators | SteadySpend',
    description:
      'Free financial tools and calculators to help you budget and track expenses. No sign-up required.',
    images: [`${baseUrl}/logo-vertical.png`],
  },
}

export default function Tools() {
  return <ToolsClient />
}
