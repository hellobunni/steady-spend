import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { FeaturesSection } from '@/components/home/FeaturesSection'
import { TrustSection } from '@/components/home/TrustSection'
import { CTASection } from '@/components/home/CTASection'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.steadyspend.com'

export const metadata: Metadata = {
  title: 'Free Budget Calculator & Tools | SteadySpend',
  description:
    'Track income and expenses with our free monthly budget calculator. See where your money goes and make confident financial decisions. No sign-up.',
  keywords: [
    'budget calculator',
    'monthly budget',
    'personal finance',
    'money management',
    'expense tracker',
    'budgeting tools',
    'free budget calculator',
    'financial planning',
  ],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Free Budget Calculator & Tools | SteadySpend',
    description:
      'Track income and expenses with our free monthly budget calculator. See where your money goes and make confident financial decisions.',
    url: baseUrl,
    siteName: 'SteadySpend',
    images: [
      {
        url: `${baseUrl}/logo-vertical.png`,
        width: 1200,
        height: 630,
        alt: 'SteadySpend - Free Budget Calculator',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Budget Calculator & Tools | SteadySpend',
    description:
      'Track income and expenses with our free monthly budget calculator. No sign-up required.',
    images: [`${baseUrl}/logo-vertical.png`],
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <TrustSection />
      <CTASection />
    </>
  )
}
