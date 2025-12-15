import type { Metadata } from 'next'
import Link from 'next/link'
import TakeHomePayCalculator from './TakeHomePayCalculator'

export const metadata: Metadata = {
  title: 'Take-Home Pay Calculator | SteadySpend',
  description:
    'Calculate your actual take-home pay after taxes, FICA, and deductions. Free calculator based on 2024 tax rates.',
}

export default function TakeHomePayPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* SEO Intro - Above Tool */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Take-Home Pay Calculator
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Calculate your actual take-home pay after federal taxes, state taxes,
          FICA, and all deductions.
        </p>
        <p className="text-base text-gray-600 leading-relaxed">
          This free take-home pay calculator helps you understand how much money
          you&apos;ll actually receive after taxes and deductions. Based on 2024
          federal tax brackets and standard state tax rates, it accounts for Social
          Security, Medicare, pre-tax and post-tax deductions, and more. No accounts,
          no sign-ups — your data stays private and is saved locally in your browser.
        </p>
      </div>

      {/* Take-Home Pay Calculator Tool */}
      <TakeHomePayCalculator />

      {/* SEO Content - Below Tool */}
      <div className="mt-12 space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Why Use a Take-Home Pay Calculator?
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Your gross salary and your take-home pay are very different numbers.
            Understanding the difference helps you:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
            <li>
              Create realistic budgets based on money you actually receive
            </li>
            <li>
              Negotiate salary offers with a clear understanding of your net pay
            </li>
            <li>
              Plan for major expenses knowing your true monthly income
            </li>
            <li>
              Understand how deductions and tax changes affect your paycheck
            </li>
            <li>
              Make informed decisions about retirement contributions and benefits
            </li>
          </ul>
          <p className="text-base leading-relaxed mb-4">
            Many people are surprised by how much their gross income differs from
            their take-home pay. Taxes, Social Security, Medicare, and various
            deductions can reduce your paycheck by 25-40% or more, depending on
            your income level, state, and filing status. This calculator shows you
            the reality so you can plan accordingly.
          </p>
          <p className="text-base leading-relaxed">
            Whether you&apos;re starting a new job, considering a raise, or
            planning your monthly budget, knowing your take-home pay is essential
            for making sound financial decisions. This calculator removes the
            guesswork and gives you accurate estimates based on current tax rates.
          </p>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use This Take-Home Pay Calculator
          </h2>
          <p className="text-base leading-relaxed mb-4">
            This calculator is designed to be comprehensive yet straightforward.
            You don&apos;t need to be a tax expert — just enter your information
            and let the calculator do the work.
          </p>
          <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4 mb-4">
            <li>
              <strong className="text-gray-900">
                Enter your gross income and pay period.
              </strong>{' '}
              Start with your annual salary, monthly income, or bi-weekly paycheck
              amount. This is your income before any taxes or deductions.
            </li>
            <li>
              <strong className="text-gray-900">
                Select your filing status and state.
              </strong>{' '}
              Your filing status (single or married) and state of residence affect
              your tax brackets and deductions. Enter the number of dependents if
              applicable.
            </li>
            <li>
              <strong className="text-gray-900">
                Add your pre-tax deductions.
              </strong>{' '}
              Include contributions to 401(k) or 403(b) plans, HSA or FSA accounts,
              and pre-tax health insurance premiums. These reduce your taxable
              income.
            </li>
            <li>
              <strong className="text-gray-900">
                Include post-tax deductions if applicable.
              </strong>{' '}
              Add any deductions that come out after taxes, such as post-tax health
              insurance, life insurance, or other voluntary deductions.
            </li>
            <li>
              <strong className="text-gray-900">
                Use advanced settings for additional accuracy.
              </strong>{' '}
              If you have additional withholding or pay local/city income tax, you
              can include those in the advanced settings section.
            </li>
            <li>
              <strong className="text-gray-900">
                Click Calculate to see your results.
              </strong>{' '}
              The calculator will show your annual, monthly, and bi-weekly
              take-home pay, along with a detailed breakdown of all taxes and
              deductions.
            </li>
          </ol>
          <p className="text-base leading-relaxed">
            Your data is automatically saved in your browser, so you can return
            anytime and adjust your calculations without re-entering everything.
            Experiment with different scenarios to see how changes in deductions
            or income affect your take-home pay.
          </p>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Understanding Your Take-Home Pay Results
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Once you calculate your take-home pay, you&apos;ll see several key
            numbers that help you understand your financial situation:
          </p>
          <div className="space-y-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Take-Home Pay
              </h3>
              <p className="text-base leading-relaxed">
                This is the amount you actually receive after all taxes and
                deductions. The calculator shows this in three formats: annual,
                monthly, and bi-weekly. Use the monthly amount for budgeting
                purposes, as most bills and expenses are monthly.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Effective Tax Rate
              </h3>
              <p className="text-base leading-relaxed">
                This is the percentage of your gross income that goes to taxes
                (federal, state, local, and FICA combined). It&apos;s different
                from your marginal tax rate because it accounts for all taxes,
                deductions, and credits. A typical effective tax rate ranges from
                15-30% depending on income and location.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Detailed Breakdown
              </h3>
              <p className="text-base leading-relaxed">
                The breakdown shows exactly where your money goes: federal income
                tax, Social Security, Medicare, state tax, and all deductions. This
                helps you understand which expenses are reducing your take-home pay
                and whether you can adjust any of them.
              </p>
            </div>
          </div>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Common Deductions Explained
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Understanding the difference between pre-tax and post-tax deductions
            helps you make better financial decisions:
          </p>
          <div className="space-y-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Pre-Tax Deductions
              </h3>
              <p className="text-base leading-relaxed mb-2">
                These reduce your taxable income, which means you pay less in taxes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base leading-relaxed ml-4">
                <li>
                  <strong className="text-gray-900">401(k) / 403(b):</strong> Retirement
                  contributions that reduce your taxable income. Many employers offer
                  matching contributions, making this one of the most valuable
                  deductions.
                </li>
                <li>
                  <strong className="text-gray-900">HSA / FSA:</strong> Health savings
                  accounts and flexible spending accounts let you pay for medical
                  expenses with pre-tax dollars.
                </li>
                <li>
                  <strong className="text-gray-900">Pre-Tax Health Insurance:</strong>{' '}
                  Premiums paid before taxes reduce your taxable income.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Post-Tax Deductions
              </h3>
              <p className="text-base leading-relaxed mb-2">
                These come out after taxes are calculated:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base leading-relaxed ml-4">
                <li>
                  <strong className="text-gray-900">Post-Tax Health Insurance:</strong>{' '}
                  Some health, dental, or vision premiums are deducted after taxes.
                </li>
                <li>
                  <strong className="text-gray-900">Life/Disability Insurance:</strong>{' '}
                  Voluntary insurance premiums are typically post-tax.
                </li>
                <li>
                  <strong className="text-gray-900">Other Deductions:</strong> Union
                  dues, wage garnishments, or other voluntary deductions.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Important Notes About This Calculator
          </h2>
          <p className="text-base leading-relaxed mb-4">
            This calculator provides estimates based on 2024 federal tax brackets
            and standard state tax rates. While it&apos;s designed to be accurate,
            there are some limitations:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
            <li>
              <strong className="text-gray-900">Tax rates may vary:</strong> State
              and local tax rules can be complex and may differ from the standard
              rates used here. Some states have flat rates, others have progressive
              brackets.
            </li>
            <li>
              <strong className="text-gray-900">Additional credits not included:</strong>{' '}
              This calculator includes the child tax credit but doesn&apos;t account
              for other tax credits you might qualify for, such as the earned income
              tax credit or education credits.
            </li>
            <li>
              <strong className="text-gray-900">Employer-specific factors:</strong>{' '}
              Your actual paycheck may vary based on your employer&apos;s specific
              benefits, payroll system, or additional deductions not covered here.
            </li>
            <li>
              <strong className="text-gray-900">Year-end adjustments:</strong> Tax
              refunds or additional payments at year-end can affect your effective
              tax rate, but this calculator shows your estimated annual taxes.
            </li>
          </ul>
          <p className="text-base leading-relaxed">
            For the most accurate calculations, especially if you have complex tax
            situations, consult a tax professional or your HR department. This
            calculator is best used as a planning tool to understand the general
            impact of taxes and deductions on your take-home pay.
          </p>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                How accurate is this calculator?
              </h3>
              <p className="text-base leading-relaxed">
                This calculator uses 2024 federal tax brackets and standard state
                tax rates, so it provides accurate estimates for most situations.
                However, actual take-home pay can vary based on specific state/local
                tax rules, additional tax credits, and employer-specific deductions.
                Use it as a planning tool, and consult your HR department or a tax
                professional for precise calculations.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why is my take-home pay so much less than my gross income?
              </h3>
              <p className="text-base leading-relaxed">
                Taxes and deductions significantly reduce your gross income. Federal
                income tax, Social Security (6.2%), Medicare (1.45%), state taxes, and
                various deductions can easily reduce your paycheck by 25-40% or more.
                The detailed breakdown in the calculator shows exactly where your
                money goes.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Should I include my 401(k) contribution?
              </h3>
              <p className="text-base leading-relaxed">
                Yes, if your 401(k) contribution is deducted from your paycheck. This
                is a pre-tax deduction that reduces your taxable income, which means
                you pay less in taxes. Including it gives you a more accurate picture
                of your take-home pay.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What&apos;s the difference between marginal and effective tax rate?
              </h3>
              <p className="text-base leading-relaxed">
                Your marginal tax rate is the rate you pay on your highest dollar of
                income (e.g., 22% or 24%). Your effective tax rate is the average
                percentage of your total income that goes to taxes. The effective
                rate is usually lower because it accounts for lower tax brackets on
                your first dollars of income, deductions, and credits.
              </p>
            </div>
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
                How do I know if I pay local income tax?
              </h3>
              <p className="text-base leading-relaxed">
                Local income taxes are typically found in cities like New York City,
                Philadelphia, or certain counties. Check your pay stub for local tax
                deductions, or ask your HR department. If you&apos;re not sure, you
                can leave this option unchecked — it won&apos;t significantly affect
                the calculation unless you live in a high local tax area.
              </p>
            </div>
          </div>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Next Steps After Calculating Your Take-Home Pay
          </h2>
          <p className="text-base leading-relaxed mb-4">
            Once you know your take-home pay, you can take your financial planning
            to the next level:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
            <li>
              <strong className="text-gray-900">Create a monthly budget:</strong> Use
              your monthly take-home pay as the foundation for your budget. Our{' '}
              <Link
                href="/tools/monthly-budget"
                className="text-emerald-600 hover:text-emerald-700 underline"
              >
                monthly budget calculator
              </Link>{' '}
              can help you plan your expenses around your actual income.
            </li>
            <li>
              <strong className="text-gray-900">Review your deductions:</strong> Look
              at your pre-tax deductions and consider whether you&apos;re maximizing
              your 401(k) match or taking advantage of HSA contributions.
            </li>
            <li>
              <strong className="text-gray-900">Plan for tax changes:</strong> If
              you&apos;re expecting a raise or change in deductions, recalculate to
              see how it affects your take-home pay.
            </li>
            <li>
              <strong className="text-gray-900">Set savings goals:</strong> Knowing
              your take-home pay helps you set realistic savings goals and plan for
              major expenses.
            </li>
          </ul>
          <p className="text-base leading-relaxed">
            For more guidance on budgeting and personal finance, explore our{' '}
            <Link
              href="/guides"
              className="text-emerald-600 hover:text-emerald-700 underline"
            >
              financial guides
            </Link>
            . You&apos;ll find step-by-step instructions on topics like{' '}
            <Link
              href="/guides/how-to-make-a-budget"
              className="text-emerald-600 hover:text-emerald-700 underline"
            >
              creating a budget
            </Link>
            , understanding your spending, and building an emergency fund. You can also
            browse all our{' '}
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

