'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Calculator, ArrowRight, Shield, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

export default function HomeClient() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Simple. Calm. Trustworthy.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
          >
            Understand Your Money,
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              {' '}
              Spend With Confidence
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Track your income and expenses to see exactly where your money goes each month. No
            sign-up required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link href="/tools/monthly-budget">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-6 text-lg rounded-xl cursor-pointer"
              >
                Try Budget Calculator
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center gap-2 mt-8 text-sm text-gray-500"
          >
            <Shield className="w-4 h-4" />
            <span>100% free. No sign-up required. Your privacy matters.</span>
          </motion.div>
        </div>
      </section>

      {/* Featured Tool CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-2xl overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Monthly Budget Calculator
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      See exactly where your money goes each month. Track your income and expenses,
                      identify spending patterns, and find opportunities to save—all in one simple
                      tool.
                    </p>
                  </div>
                </div>
                <Link href="/tools/monthly-budget">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 rounded-xl cursor-pointer"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Free Budgeting Tools for Better Money Management
          </h2>
          
          <div className="space-y-8 text-gray-700">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Use a Budget Calculator?
              </h3>
              <p className="text-base leading-relaxed mb-4">
                A budget calculator helps you understand where your money goes each month. By tracking your income and expenses, you can identify spending patterns, find opportunities to save, and make more informed financial decisions. Our free monthly budget calculator makes it easy to see your complete financial picture without any sign-up or account required.
              </p>
              <p className="text-base leading-relaxed mb-4">
                According to the{' '}
                <a
                  href="https://www.consumerfinance.gov/consumer-tools/money-as-you-grow/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 underline hover:text-emerald-800"
                >
                  Consumer Financial Protection Bureau
                </a>
                , creating a budget is one of the most important steps you can take to improve your financial well-being. Budgeting helps you prioritize spending, build savings, and reduce financial stress.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                How Our Budget Calculator Works
              </h3>
              <p className="text-base leading-relaxed mb-4">
                Our monthly budget calculator is designed to be simple and straightforward:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
                <li>
                  <strong className="text-gray-900">Enter your income:</strong> Add all sources of monthly income, including salary, freelance work, and other earnings
                </li>
                <li>
                  <strong className="text-gray-900">List your expenses:</strong> Categorize your spending into housing, food, transportation, utilities, and other expenses
                </li>
                <li>
                  <strong className="text-gray-900">See your results:</strong> Instantly see where your money goes and identify areas where you can save
                </li>
              </ul>
              <p className="text-base leading-relaxed">
                All your data is stored locally in your browser, so your financial information never leaves your device. No accounts, no sign-ups, no tracking—just a simple tool to help you understand your money.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Additional Budgeting Tools and Resources
              </h3>
              <p className="text-base leading-relaxed mb-4">
                Beyond our monthly budget calculator, we offer other free tools to help you manage your finances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
                <li>
                  <Link href="/tools/50-30-20" className="text-emerald-700 underline hover:text-emerald-800">
                    50/30/20 Budget Calculator
                  </Link>
                  : Use the popular 50/30/20 rule to allocate your income across needs, wants, and savings
                </li>
                <li>
                  <Link href="/tools/take-home-pay-calculator" className="text-emerald-700 underline hover:text-emerald-800">
                    Take-Home Pay Calculator
                  </Link>
                  : Calculate your actual income after taxes and deductions
                </li>
              </ul>
              <p className="text-base leading-relaxed mb-4">
                We also provide helpful guides and articles to support your budgeting journey:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
                <li>
                  <Link href="/blog/how-to-start-budgeting" className="text-emerald-700 underline hover:text-emerald-800">
                    How to Start Budgeting
                  </Link>
                  : A beginner-friendly guide to creating your first budget
                </li>
                <li>
                  <Link href="/blog/how-to-track-your-spending" className="text-emerald-700 underline hover:text-emerald-800">
                    How to Track Your Spending
                  </Link>
                  : Learn effective methods for monitoring where your money goes
                </li>
                <li>
                  <Link href="/blog/50-30-20-budget-rule" className="text-emerald-700 underline hover:text-emerald-800">
                    The 50/30/20 Budget Rule Explained
                  </Link>
                  : Understand this popular budgeting framework
                </li>
                <li>
                  <Link href="/blog/common-budget-mistakes" className="text-emerald-700 underline hover:text-emerald-800">
                    Common Budget Mistakes to Avoid
                  </Link>
                  : Learn from common pitfalls and improve your budgeting success
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Financial Education Resources
              </h3>
              <p className="text-base leading-relaxed mb-4">
                For additional financial education and resources, we recommend these trusted sources:
              </p>
              <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
                <li>
                  <a
                    href="https://www.consumerfinance.gov/consumer-tools/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 underline hover:text-emerald-800"
                  >
                    Consumer Financial Protection Bureau
                  </a>
                  : Free tools and resources for managing money and making financial decisions
                </li>
                <li>
                  <a
                    href="https://www.usa.gov/money"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 underline hover:text-emerald-800"
                  >
                    USA.gov Money and Credit Resources
                  </a>
                  : Government resources for financial planning and credit management
                </li>
                <li>
                  <a
                    href="https://www.investor.gov/introduction-investing/investing-basics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 underline hover:text-emerald-800"
                  >
                    Investor.gov
                  </a>
                  : Educational resources from the SEC about investing and financial planning
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Getting Started with Budgeting
              </h4>
              <p className="text-base leading-relaxed mb-4">
                If you&apos;re new to budgeting, start with our{' '}
                <Link href="/blog/how-to-start-budgeting" className="text-emerald-700 underline hover:text-emerald-800">
                  beginner&apos;s guide to budgeting
                </Link>
                . This comprehensive guide walks you through the basics of creating a budget, tracking expenses, and setting financial goals. Once you understand the fundamentals, use our{' '}
                <Link href="/tools/monthly-budget" className="text-emerald-700 underline hover:text-emerald-800">
                  monthly budget calculator
                </Link>{' '}
                to put your knowledge into practice.
              </p>
              <p className="text-base leading-relaxed">
                Remember, budgeting is a skill that improves with practice. Start simple, be consistent, and adjust your budget as your financial situation changes. With the right tools and knowledge, you can take control of your finances and spend with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
