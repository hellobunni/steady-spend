import type { Metadata } from 'next'
import ContactClient from './ContactClient'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://steadyspend.com'

export const metadata: Metadata = {
  title: 'Contact Us | SteadySpend',
  description:
    'Have questions or feedback? Get in touch with SteadySpend. We typically respond within 24-48 hours.',
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
  openGraph: {
    title: 'Contact Us | SteadySpend',
    description: 'Have questions or feedback? Get in touch with SteadySpend.',
    url: `${baseUrl}/contact`,
    siteName: 'SteadySpend',
    type: 'website',
  },
}

export default function Contact() {
  return <ContactClient />
}
