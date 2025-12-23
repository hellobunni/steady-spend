import type { Metadata } from 'next'
import GuidesClient from './GuidesClient'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.steadyspend.com'

export const metadata: Metadata = {
  title: 'Free Financial Guides & Money Management Tips | SteadySpend',
  description:
    'Simple, actionable financial guides to help you master your money. Learn budgeting, saving, and money management without the jargon.',
  keywords: [
    'financial guides',
    'money management',
    'budgeting guide',
    'personal finance tips',
    'saving money',
    'financial education',
  ],
  alternates: {
    canonical: `${baseUrl}/guides`,
  },
  openGraph: {
    title: 'Free Financial Guides & Money Management Tips | SteadySpend',
    description:
      'Simple, actionable financial guides to help you master your money. Learn budgeting, saving, and money management.',
    url: `${baseUrl}/guides`,
    siteName: 'SteadySpend',
    images: [
      {
        url: `${baseUrl}/logo-vertical.png`,
        width: 1200,
        height: 630,
        alt: 'SteadySpend Financial Guides',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Financial Guides & Money Management Tips | SteadySpend',
    description:
      'Simple, actionable financial guides to help you master your money. No jargon, just clarity.',
    images: [`${baseUrl}/logo-vertical.png`],
  },
}

export default function Guides() {
  return <GuidesClient />
}