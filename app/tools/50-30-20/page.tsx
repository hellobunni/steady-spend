import type { Metadata } from 'next'
import Link from 'next/link'
import FiftyThirtyTwentyCalculator from './FiftyThirtyTwentyCalculator'
import Breadcrumbs from '@/components/layout/Breadcrumbs'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://steadyspend.com'

export const metadata: Metadata = {
  title: '50/30/20 Budget Calculator | SteadySpend',
  description:
    'Free 50/30/20 budget calculator. Split your income into 50% needs, 30% wants, and 20% savings. Simple budgeting method for beginners.',
  alternates: {
    canonical: `${baseUrl}/tools/50-30-20`,
  },
}

export default function FiftyThirtyTwentyPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Tools', href: '/tools' },
          { label: '50/30/20 Budget Calculator', href: '/tools/50-30-20' },
        ]}
      />

      {/* SEO Intro - Above Tool */}
      <div className="mb-8">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
    50/30/20 Budget Calculator
  </h1>

  <p className="text-lg text-gray-700 leading-relaxed mb-4">
    A simple way to budget your money: divide your income into 50% needs, 30%
    wants, and 20% savings.
  </p>

  <p className="text-base text-gray-600 leading-relaxed mb-4">
    This free 50/30/20 budget calculator helps you turn your monthly take-home
    pay into a clear, balanced budget. Enter your income and instantly see how
    much to spend on essentials, lifestyle expenses, and savings — without
    spreadsheets or complicated rules.
  </p>

  <p className="text-base text-gray-600 leading-relaxed">
    No accounts. No sign-ups. Your data stays private and is saved locally in
    your browser.
  </p>
</div>

      {/* 50/30/20 Calculator Tool */}
      <FiftyThirtyTwentyCalculator />

      {/* SEO Content - Below Tool */}
      <div className="mt-12 space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            What Is the 50/30/20 Budget Rule?
          </h2>
          <p className="text-base leading-relaxed mb-4">
            The 50/30/20 rule is a simple budgeting framework that helps you decide where
            your money should go each month. It divides your after-tax (take-home)
            income into three clear categories:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
            <li>
              <strong className="text-gray-900">50% for needs:</strong> Essential
              expenses you can&apos;t avoid, like housing, utilities, groceries,
              insurance, minimum debt payments, and transportation to work
            </li>
            <li>
              <strong className="text-gray-900">30% for wants:</strong> Things
              that make life enjoyable, such as dining out, entertainment,
              hobbies, subscriptions, shopping, and vacations
            </li>
            <li>
              <strong className="text-gray-900">20% for savings and debt:</strong>{' '}
              Building your financial future through emergency funds, retirement
              savings, investments, and extra debt payments beyond minimums
            </li>
          </ul>
          <p className="text-base leading-relaxed mb-4">
            Created by Senator Elizabeth Warren in her book &quot;All Your Worth:
            The Ultimate Lifetime Money Plan,&quot; the 50/30/20 rule has become
            one of the most popular budgeting methods because it&apos;s simple
            enough to remember and apply without complex calculations or tracking
            dozens of categories.
          </p>
          <p className="text-base leading-relaxed">
            This calculator makes it even easier by doing the math for you. Just
            enter your monthly take-home pay, and you&apos;ll see exactly how much
            to allocate to each category. For more detailed guidance on the
            50/30/20 rule, check out our{' '}
            <Link
              href="/blog/50-30-20-budget-rule"
              className="text-emerald-600 hover:text-emerald-700 underline"
            >
              complete guide to the 50/30/20 budgeting method
            </Link>
            .
          </p>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Use the 50/30/20 Budget Rule?
          </h2>
          <p className="text-base leading-relaxed mb-4">
  The main appeal of the 50/30/20 rule is simplicity. Instead of tracking dozens
  of spending categories or maintaining complex spreadsheets, you focus on just
  three priorities: essentials, enjoyment, and saving for the future.
</p>
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
            <li>
              <strong className="text-gray-900">Simple to remember:</strong> Just
              three categories to track instead of dozens
            </li>
            <li>
              <strong className="text-gray-900">Balanced approach:</strong> Covers
              essentials, allows for enjoyment, and prioritizes savings
            </li>
            <li>
              <strong className="text-gray-900">Built-in savings:</strong>{' '}
              Automatically sets aside 20% for your financial goals
            </li>
            <li>
              <strong className="text-gray-900">Flexible:</strong> You can adjust
              percentages based on your life situation
            </li>
            <li>
              <strong className="text-gray-900">Forces prioritization:</strong> The
              20% savings category is non-negotiable, helping you build the habit
              of paying yourself first
            </li>
          </ul>
          <p className="text-base leading-relaxed">
            Many people save whatever is left over at the end of the month, which
            often means saving nothing. The 50/30/20 rule flips this by making
            savings a priority category, not an afterthought. This calculator shows
            you exactly how much to allocate, so you can start implementing the
            rule today.
          </p>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use This 50/30/20 Calculator
          </h2>
          <p className="text-base leading-relaxed mb-4">
  This calculator is designed to be quick and beginner-friendly. You don’t need
  any financial background — just your monthly take-home pay and a few minutes.
</p>
          <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4 mb-4">
            <li>
              <strong className="text-gray-900">
                Enter your monthly after-tax income.
              </strong>{' '}
              This is your take-home pay, not your gross salary. If you have
              multiple income sources, add them together. For irregular income, use
              your average monthly amount.
            </li>
            <li>
              <strong className="text-gray-900">
                Click &quot;Calculate My Budget&quot; to see your results.
              </strong>{' '}
              The calculator will show you exactly how much to allocate to needs
              (50%), wants (30%), and savings (20%).
            </li>
            <li>
              <strong className="text-gray-900">
                Review your budget breakdown.
              </strong>{' '}
              Each category includes examples of what expenses belong there, so you
              can see how to apply the rule to your actual spending.
            </li>
            <li>
              <strong className="text-gray-900">
                Adjust your spending to match the percentages.
              </strong>{' '}
              If your current spending doesn&apos;t align with these percentages,
              that&apos;s okay. The calculator gives you a target to work toward.
              Start by focusing on one category at a time.
            </li>
          </ol>
          <p className="text-base leading-relaxed">
            Your data is automatically saved in your browser, so you can come back
            anytime and recalculate with different income amounts. No need to
            re-enter your information each time.
          </p>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Understanding Your 50/30/20 Budget Results
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Once you calculate your budget, you&apos;ll see three categories with
            specific dollar amounts:
          </p>
          <div className="space-y-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Needs (50%)
              </h3>
              <p className="text-base leading-relaxed">
                This category includes essential expenses you can&apos;t avoid:
                rent or mortgage, utilities, groceries, insurance, minimum debt
                payments, and transportation to work. If your needs exceed 50% of
                your income, you may need to find ways to reduce these costs or
                increase your income. High housing costs are often the culprit when
                needs exceed 50%.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Wants (30%)
              </h3>
              <p className="text-base leading-relaxed">
                This is your lifestyle spending: dining out, entertainment, hobbies,
                subscriptions, shopping, and vacations. The 30% allocation gives you
                room to enjoy life while still prioritizing savings. If you find
                yourself spending more than 30% on wants, look for areas where you
                can cut back without major lifestyle changes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Savings & Debt (20%)
              </h3>
              <p className="text-base leading-relaxed">
                This category is for building your financial future: emergency fund,
                retirement savings, investments, and extra debt payments beyond
                minimums. The 20% allocation ensures you&apos;re consistently
                saving, which is essential for long-term financial security. If
                you&apos;re currently saving less than 20%, start with what you can
                and gradually increase over time.
              </p>
            </div>
          </div>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            When the 50/30/20 Rule Works Best
          </h2>
          <p className="text-base leading-relaxed mb-4">
            This budgeting method works well for many people, but it&apos;s not a
            one-size-fits-all solution. The 50/30/20 rule works best when:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
            <li>
              Your income comfortably covers your needs (essential expenses take
              up 50% or less)
            </li>
            <li>
              You have some flexibility in your spending (the 30% for wants gives
              you room to enjoy life)
            </li>
            <li>
              You&apos;re looking for a simple starting point (if you&apos;re new
              to budgeting or have struggled with more complex methods)
            </li>
            <li>
              You want a balanced approach (not too restrictive, but still
              prioritizing savings)
            </li>
          </ul>
          <p className="text-base leading-relaxed mb-4">
            If your needs exceed 50% of your income, the rule may not fit your
            situation. High housing costs, student loan payments, or medical
            expenses can make it difficult to stay within the 50% needs category.
            In these cases, you might need to adjust the percentages or focus on
            increasing your income.
          </p>
          <p className="text-base leading-relaxed">
            Remember: The 50/30/20 rule is a guideline, not a strict rule. Use it
            as a starting point and adjust based on your unique financial situation.
            The most important thing is that you&apos;re saving something and
            making progress toward your goals.
          </p>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Tips for Implementing the 50/30/20 Rule
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Once you know your target amounts, here are practical tips to help you
            implement the 50/30/20 rule:
          </p>
          <div className="space-y-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Start with Your Current Spending
              </h3>
              <p className="text-base leading-relaxed">
                Use our{' '}
                <Link
                  href="/tools/monthly-budget"
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Monthly Budget Calculator
                </Link>{' '}
                to see how your current spending compares to the 50/30/20
                percentages. Don&apos;t worry if you&apos;re not hitting these
                targets yet — use them as goals to work toward.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Automate Your Savings
              </h3>
              <p className="text-base leading-relaxed">
                Set up automatic transfers to move 20% of your income into savings
                as soon as you get paid. This ensures you&apos;re paying yourself
                first, before you have a chance to spend it on wants.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Track Your Spending
              </h3>
              <p className="text-base leading-relaxed">
                Use a budgeting app or simple spreadsheet to track your spending
                across the three categories. Check in weekly or monthly to see how
                you&apos;re doing. Our guide on{' '}
                <Link
                  href="/blog/how-to-track-your-spending"
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  tracking your spending
                </Link>{' '}
                can help you get started.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Adjust as Needed
              </h3>
              <p className="text-base leading-relaxed">
                If your needs consistently exceed 50%, you might need to adjust the
                percentages. For example, you could try 60/25/15 or 55/30/15. The
                key is finding a balance that works for your situation while still
                prioritizing savings.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Focus on Progress, Not Perfection
              </h3>
              <p className="text-base leading-relaxed">
                Don&apos;t get discouraged if you can&apos;t hit these percentages
                immediately. Even moving from saving 5% to saving 10% is progress.
                The 50/30/20 rule is a target to work toward, not a requirement
                you must meet from day one.
              </p>
            </div>
          </div>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do I need to create an account to use this calculator?
              </h3>
              <p className="text-base leading-relaxed">
                No. This calculator works entirely in your browser. Your data is
                saved locally using localStorage, so you don&apos;t need to sign up
                or create an account. Your financial information stays private and
                never leaves your device.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What if my needs exceed 50% of my income?
              </h3>
              <p className="text-base leading-relaxed">
                If your essential expenses take up more than 50% of your income,
                the 50/30/20 rule may not fit your situation. High housing costs,
                student loans, or medical expenses can make it difficult to stay
                within the 50% needs category. Consider adjusting the percentages
                (like 60/25/15) or focus on finding ways to reduce your needs or
                increase your income.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Should I use gross or net income for the 50/30/20 rule?
              </h3>
              <p className="text-base leading-relaxed">
                Always use your after-tax (net) income — the money that actually lands in your
                bank account. If you&apos;re not sure what your take-home pay is, use our{' '}
                <Link
                  href="/tools/take-home-pay"
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Take-Home Pay Calculator
                </Link>{' '}
                first, then come back and apply the 50/30/20 rule.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Can I adjust the percentages?
              </h3>
              <p className="text-base leading-relaxed">
                Absolutely. The 50/30/20 rule is a guideline, not a strict rule.
                If your situation requires different percentages, adjust them to
                fit your needs. The key is finding a balance that works for you
                while still prioritizing savings. Some people use 60/25/15 or
                55/30/15 if their needs are higher.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What counts as a &quot;need&quot; vs a &quot;want&quot;?
              </h3>
              <p className="text-base leading-relaxed">
                Needs are essential expenses you can&apos;t avoid: housing,
                utilities, groceries, insurance, minimum debt payments, and
                transportation to work. Wants are things that make life enjoyable
                but aren&apos;t essential: dining out, entertainment, hobbies,
                subscriptions, shopping, and vacations. The line can be blurry
                (for example, is a gym membership a need or want?), so use your
                judgment and be consistent.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How do I know if I&apos;m following the rule correctly?
              </h3>
              <p className="text-base leading-relaxed">
                Track your spending for a month and see how it compares to the
                50/30/20 percentages. Use our{' '}
                <Link
                  href="/tools/monthly-budget"
                  className="text-emerald-600 hover:text-emerald-700 underline"
                >
                  Monthly Budget Calculator
                </Link>{' '}
                to categorize your expenses and see where you stand. Don&apos;t
                worry about being perfect — focus on getting close to these
                percentages over time.
              </p>
            </div>
          </div>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Next Steps After Using the 50/30/20 Calculator
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Once you know your target amounts, you can take your financial planning
            to the next level:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
            <li>
              <strong className="text-gray-900">Build an emergency fund:</strong>{' '}
              Use your 20% savings allocation to build 3-6 months of expenses in
              an easily accessible account
            </li>
            <li>
              <strong className="text-gray-900">Pay down high-interest debt:</strong>{' '}
              If you have credit card debt or other high-interest loans, use part
              of your savings allocation to pay them off faster
            </li>
            <li>
              <strong className="text-gray-900">Set specific savings goals:</strong>{' '}
              Whether it&apos;s a vacation, down payment, or retirement, having a
              clear goal makes saving easier
            </li>
            <li>
              <strong className="text-gray-900">Track your progress:</strong> Use
              our{' '}
              <Link
                href="/tools/monthly-budget"
                className="text-emerald-600 hover:text-emerald-700 underline"
              >
                Monthly Budget Calculator
              </Link>{' '}
              to see how your actual spending compares to the 50/30/20 targets
            </li>
          </ul>
          <p className="text-base leading-relaxed mb-4">
            For more in-depth guidance on budgeting and personal finance, explore
            our{' '}
            <Link
              href="/guides"
              className="text-emerald-600 hover:text-emerald-700 underline"
            >
              financial guides
            </Link>
            . You&apos;ll find step-by-step instructions on topics like{' '}
            <Link
              href="/blog/how-to-start-budgeting"
              className="text-emerald-600 hover:text-emerald-700 underline"
            >
              getting started with budgeting
            </Link>
            ,{' '}
            <Link
              href="/blog/how-to-track-your-spending"
              className="text-emerald-600 hover:text-emerald-700 underline"
            >
              tracking your spending
            </Link>
            , and{' '}
            <Link
              href="/blog/50-30-20-budget-rule"
              className="text-emerald-600 hover:text-emerald-700 underline"
            >
              understanding the 50/30/20 rule
            </Link>
            . You can also browse all our{' '}
            <Link
              href="/tools"
              className="text-emerald-600 hover:text-emerald-700 underline"
            >
              free financial tools
            </Link>{' '}
            to find calculators that match your current financial goals.
          </p>
        </section>
      </div>
    </div>
  )
}
