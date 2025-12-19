import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Accordion } from '@/components/ui/accordion'
import { Calculator, Clock } from 'lucide-react'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://steadyspend.com'

export const metadata: Metadata = {
  title: 'Take-Home Pay Calculator | SteadySpend',
  description:
    'Calculate your take-home pay after taxes and deductions. Free take-home pay calculator to understand your actual income.',
  alternates: {
    canonical: `${baseUrl}/tools/take-home-pay-calculator`,
  },
}

export default function TakeHomePayCalculatorPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Tools', href: '/tools' },
          { label: 'Take-Home Pay Calculator', href: '/tools/take-home-pay-calculator' },
        ]}
      />

      {/* SEO Intro - Above Tool */}
      <div className="text-center mb-12 mt-22">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Take-Home Pay Calculator
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Calculate your actual take-home pay after taxes, deductions, and other withholdings.
        </p>
        <p className="text-base text-gray-600 leading-relaxed">
          This free take-home pay calculator helps you understand how much money you&apos;ll actually
          receive in your paycheck after federal taxes, state taxes, FICA, and other deductions. No
          accounts, no sign-ups — your data stays private.
        </p>
      </div>

      {/* Coming Soon Card */}
      <Card className="border border-gray-200 shadow-sm">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 rounded-lg bg-emerald-50 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">Coming Soon</h2>
          <p className="text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
            We&apos;re building this calculator to help you understand your take-home pay. In the
            meantime, use our{' '}
            <Link href="/tools/monthly-budget" className="text-emerald-600 hover:text-emerald-700 underline">
              monthly budget calculator
            </Link>{' '}
            to track your spending and plan your finances.
          </p>
          <Link href="/tools/monthly-budget">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              <Calculator className="w-4 h-4" />
              Try Budget Calculator
            </Button>
          </Link>
        </CardContent>
      </Card>

      {/* SEO Content - Below Tool */}
      <div className="mt-12 space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What is Take-Home Pay?</h2>
          <p className="text-base leading-relaxed mb-4">
            Take-home pay, also known as net pay, is the amount of money you actually receive in your
            paycheck after all deductions are taken out. This is different from your gross pay, which
            is your total salary or hourly wage before any deductions.
          </p>
          <p className="text-base leading-relaxed mb-4">
            Common deductions that reduce your take-home pay include:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
            <li>
              <strong className="text-gray-900">Federal income tax:</strong> Withheld based on your
              tax bracket and the information you provide on your W-4 form
            </li>
            <li>
              <strong className="text-gray-900">State income tax:</strong> Varies by state, and some
              states don&apos;t have state income tax
            </li>
            <li>
              <strong className="text-gray-900">FICA taxes:</strong> Social Security (6.2%) and
              Medicare (1.45%) taxes, totaling 7.65% of your gross pay
            </li>
            <li>
              <strong className="text-gray-900">Health insurance premiums:</strong> If you have
              employer-sponsored health insurance
            </li>
            <li>
              <strong className="text-gray-900">Retirement contributions:</strong> Such as 401(k) or
              403(b) contributions
            </li>
            <li>
              <strong className="text-gray-900">Other deductions:</strong> Life insurance, disability
              insurance, flexible spending accounts, and more
            </li>
          </ul>
          <p className="text-base leading-relaxed">
            Understanding your take-home pay is essential for budgeting because it shows you the actual
            amount of money you have available to spend and save each month.
          </p>
        </section>
      </div>
    </div>
  )
}
