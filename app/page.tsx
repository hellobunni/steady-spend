import type { Metadata } from 'next'
import { HeroSection } from '@/components/home/HeroSection'
import { FeaturesSection } from '@/components/home/FeaturesSection'
import { CTASection } from '@/components/home/CTASection'
import { FeaturedPostsSection } from '@/components/home/FeaturedPostsSection'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.steadyspend.com'

export const metadata: Metadata = {
  title: 'Free Budget Calculator & Financial Planning Tools | SteadySpend',
  description:
    'Master your money with free monthly budget calculators, after-tax salary tools, and personal finance guides. Track income and expenses, build better budgets, and make confident financial decisions. 100% free, no sign-up required.',
  keywords: [
    'budget calculator',
    'monthly budget',
    'personal finance',
    'money management',
    'expense tracker',
    'budgeting tools',
    'free budget calculator',
    'financial planning',
    'after-tax salary calculator',
    'take-home pay calculator',
    '50/30/20 budget',
    'financial literacy',
  ],
  alternates: {
    canonical: baseUrl,
  },
  openGraph: {
    title: 'Free Budget Calculator & Financial Planning Tools | SteadySpend',
    description:
      'Master your money with free monthly budget calculators and personal finance guides. Track income and expenses, build better budgets, and make confident financial decisions.',
    url: baseUrl,
    siteName: 'SteadySpend',
    images: [
      {
        url: `${baseUrl}/logo-vertical.png`,
        width: 1200,
        height: 630,
        alt: 'SteadySpend - Free Monthly Budget Calculator and Financial Planning Tools',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Budget Calculator & Financial Planning Tools | SteadySpend',
    description:
      'Master your money with free monthly budget calculators. Track income and expenses, build better budgets. No sign-up required.',
    images: [`${baseUrl}/logo-vertical.png`],
  },
}

export default function Home() {
  return (
    <>
      <HeroSection />

      <FeaturedPostsSection />
      <FeaturesSection />
      <CTASection />
    </>
  )
}
