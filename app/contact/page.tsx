import type { Metadata } from 'next'
import ContactForm from './ContactForm'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.steadyspend.com'

export const metadata: Metadata = {
  title: 'Contact Us | SteadySpend',
  description:
    'Get in touch with SteadySpend. Have questions or feedback? We\'d love to hear from you.',
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
}

export default function ContactPage() {
  return <ContactForm />
}
