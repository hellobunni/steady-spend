import type { Metadata } from 'next'
import Link from 'next/link'
import BudgetCalculator from './BudgetCalculator'
import Breadcrumbs from '@/components/layout/Breadcrumbs'
import { Accordion } from '@/components/ui/accordion'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://steadyspend.com';

export const metadata: Metadata = {
  title: 'Monthly Budget Calculator | SteadySpend',
  description:
    'Free monthly budget calculator. Track income and expenses to see where your money goes and how much you can save each month.',
  alternates: {
    canonical: `${baseUrl}/tools/monthly-budget`,
  },
}

export default function MonthlyBudgetPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Tools', href: '/tools' },
          { label: 'Monthly Budget Calculator', href: '/tools/monthly-budget' },
        ]}
      />
      {/* SEO Intro - Above Tool */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Monthly Budget Calculator
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Understand where your money goes each month — and what you can actually save.
        </p>
        <p className="text-base text-gray-600 leading-relaxed">
          This free monthly budget calculator helps you see your income, organize your expenses, and
          understand how much money you have left over each month. No accounts, no sign-ups — your data
          stays private and is saved locally in your browser.
        </p>
      </div>

      {/* Budget Calculator Tool */}
      <BudgetCalculator />

      {/* SEO Content - Below Tool */}
      <div className="mt-12 space-y-8 text-gray-700">

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Use This Budget Calculator</h2>
          <p className="text-base leading-relaxed mb-4">
            This calculator is designed to be simple and straightforward. You don&apos;t need any
            financial background or special knowledge — just your monthly income and expense numbers.
          </p>
          <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4 mb-4">
            <li>
              <strong className="text-gray-900">Enter your total monthly income after taxes.</strong> This
              is your take-home pay, not your gross salary. If you have multiple income sources, add them
              together. For irregular income, use your average monthly amount.
            </li>
            <li>
              <strong className="text-gray-900">Add your expenses for each category.</strong> Start with
              the essentials like housing, utilities, and groceries. Then add transportation, insurance,
              and other regular expenses. Don&apos;t worry about being perfect — you can always adjust
              later.
            </li>
            <li>
              <strong className="text-gray-900">Click Calculate Budget to see your results.</strong> The
              calculator will show you how much money you have left over, your savings rate, and a visual
              breakdown of where your money goes.
            </li>
            <li>
              <strong className="text-gray-900">Review your results carefully.</strong> Look at how much
              money you have left and your savings rate. If your expenses exceed your income, the
              calculator will show you exactly how much you&apos;re overspending.
            </li>
            <li>
              <strong className="text-gray-900">Adjust categories to explore different scenarios.</strong>
              What happens if you reduce dining out by $50? What if you find a way to save $30 on
              utilities? Small changes can add up quickly.
            </li>
          </ol>
          <p className="text-base leading-relaxed">
            Your data is automatically saved in your browser, so you can come back anytime and pick up
            where you left off. No need to re-enter everything each time you want to check your budget.
          </p>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <Accordion
            items={[
              {
                question: 'Why Use a Monthly Budget Calculator?',
                answer: (
                  <>
                    <p className="mb-4">
                      A monthly budget calculator gives you a clear snapshot of your financial situation. By
                      tracking your income and expenses in one place, you can:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                      <li>Identify spending patterns you might not notice day-to-day</li>
                      <li>Find areas where you can cut back without major lifestyle changes</li>
                      <li>Understand how much you&apos;re actually saving each month</li>
                      <li>Make more confident financial decisions with real numbers</li>
                      <li>See the impact of small changes across different expense categories</li>
                    </ul>
                    <p className="mb-4">
                      Many financial experts recommend saving around 20% of your income, but that&apos;s not always
                      realistic for everyone. This calculator shows your actual savings rate so you can focus on
                      progress — not perfection. Whether you&apos;re saving 5% or 50%, understanding your numbers
                      is the first step toward financial clarity.
                    </p>
                    <p>
                      Budgeting doesn&apos;t have to be restrictive or stressful. When you know where your money
                      goes, you can make intentional choices about spending and saving. A monthly budget calculator
                      removes the guesswork and shows you the reality of your financial situation — which is often
                      better than you think.
                    </p>
                  </>
                ),
              },
              {
                question: 'What is the difference between a monthly budget calculator and a budget planner?',
                answer:
                  'A monthly budget calculator is a tool that helps you track your income and expenses to see where your money goes and how much you can save each month. A budget planner is a tool that helps you create a budget based on your income and expenses.',
              },
              {
                question: 'What if my expenses are higher than my income?',
                answer:
                  'If your expenses exceed your income, the calculator will show you exactly how much you\'re overspending. This is valuable information — you can\'t fix what you don\'t know about. Look for categories where you can reduce spending, or consider ways to increase your income. Even small changes can help close the gap.',
              },
              {
                question: 'How often should I update my budget?',
                answer:
                  'Review your budget monthly, especially when you first start. As you get more comfortable and your spending patterns stabilize, you might review it quarterly. Update it immediately if your income or major expenses change significantly.',
              },
              {
                question: 'Should I include savings as an expense?',
                answer:
                  'That depends on your approach. Some people treat savings like a bill and include it as an expense category. Others prefer to see savings as what\'s left over after expenses. This calculator shows your remaining income, which you can then allocate to savings, investments, or other goals.',
              },
              {
                question: 'What if I have irregular income?',
                answer:
                  'For irregular income, use your average monthly amount over the past 6-12 months. If your income varies significantly, consider using your lowest recent month as a baseline to ensure your budget works even in lean months.',
              },
              {
                question: 'Can I use this for annual budgeting?',
                answer:
                  'This calculator is designed for monthly budgets, but you can multiply your results by 12 to see annual totals. Monthly budgeting is often more manageable because it matches how most bills and paychecks work.',
              },
            ]}
          />
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Next Steps After Budgeting</h2>
          <p className="text-base leading-relaxed mb-4">
            Once you understand your monthly budget, you can take your financial planning to the next
            level. Here are some natural next steps:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
            <li>
              <strong className="text-gray-900">Build an emergency fund:</strong> Aim for 3-6 months of
              expenses saved in an easily accessible account. This gives you a safety net for unexpected
              expenses or income loss.
            </li>
            <li>
              <strong className="text-gray-900">Pay down high-interest debt:</strong> If you have credit
              card debt or other high-interest loans, use your budget surplus to pay them off faster. The
              interest you save is like earning a guaranteed return.
            </li>
            <li>
              <strong className="text-gray-900">Set specific savings goals:</strong> Whether it&apos;s a
              vacation, down payment, or retirement, having a clear goal makes saving easier. Break large
              goals into monthly amounts.
            </li>
            <li>
              <strong className="text-gray-900">Review and adjust regularly:</strong> Your budget should
              evolve with your life. Review it monthly at first, then quarterly as you get more
              comfortable.
            </li>
          </ul>
          <p className="text-base leading-relaxed mb-4">
            We&apos;re building more tools to help you with these next steps, including calculators for
            debt payoff, emergency savings goals, and retirement planning. Check back regularly for new
            resources.
          </p>
          <p className="text-base leading-relaxed">
            For more in-depth guidance on budgeting and personal finance, explore our{' '}
            <Link href="/guides" className="text-emerald-600 hover:text-emerald-700 underline">
              financial guides
            </Link>
            . You&apos;ll find step-by-step instructions on topics like{' '}
            <Link href="/guides" className="text-emerald-600 hover:text-emerald-700 underline">
              getting started with budgeting
            </Link>
            , understanding your spending habits, and building an emergency fund. You can also browse all
            our{' '}
            <Link href="/tools" className="text-emerald-600 hover:text-emerald-700 underline">
              free financial tools
            </Link>{' '}
            to find calculators that match your current financial goals.
          </p>
        </section>
      </div>
    </div>
  )
}
