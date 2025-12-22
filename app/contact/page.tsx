import type { Metadata } from 'next'
import ContactForm from './ContactForm'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://steadyspend.com'

export const metadata: Metadata = {
  title: 'Contact Us | SteadySpend',
  description:
    'Get in touch with SteadySpend. Have questions or feedback? We\'d love to hear from you.',
  alternates: {
    canonical: `${baseUrl}/contact`,
  },
}

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Contact', href: '/contact' },
        ]}
      />

      {/* Contact Form */}
      <ContactForm />
    </div>
  )
}
