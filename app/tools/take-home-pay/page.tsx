import type { Metadata } from 'next'
import TakeHomePayCalculator from './TakeHomePayCalculator'

export const metadata: Metadata = {
  title: 'Take-Home Pay Calculator 2025 | Estimate Your After-Tax Income',
  description:
    'Calculate your 2025 take-home pay after federal, state, and payroll taxes. Free net pay calculator with deductions. No sign-up. Private & accurate.',
}

export default function TakeHomePayPage() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* SEO Intro - Above Tool */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Take-Home Pay Calculator (2025)
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          Calculate your actual take-home pay after federal taxes, state taxes,
          FICA (Social Security & Medicare), and paycheck deductions.
        </p>
        <p className="text-base text-gray-600 leading-relaxed mb-4">
          This free take-home pay calculator for 2025 helps you understand how much money
          you&apos;ll actually receive after taxes and deductions. Using 2025 federal tax brackets and updated state tax rates, it estimates your net pay after Social Security, Medicare, pre-tax deductions, and post-tax deductions.
        </p>
        <p className="text-base text-gray-600 leading-relaxed">
          No accounts. No sign-ups.
          <br />
          Your data stays private and is saved locally in your browser.
        </p>
      </div>

      {/* Take-Home Pay Calculator Tool */}
      <TakeHomePayCalculator />

      {/* SEO Content - Below Tool */}
      <div className="mt-12 space-y-8 text-gray-700">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Take-Home Pay Calculator Inputs
          </h2>
          <div className="space-y-4 mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Basic Information
              </h3>
              <ul className="list-disc list-inside space-y-1 text-base leading-relaxed ml-4">
                <li>Gross Income</li>
                <li>Pay Period (Yearly, Monthly, Bi-Weekly, Weekly)</li>
                <li>Filing Status (Single, Married Filing Jointly, Head of Household)</li>
                <li>State of Residence</li>
                <li>Dependents</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Payroll Taxes
              </h3>
              <ul className="list-disc list-inside space-y-1 text-base leading-relaxed ml-4">
                <li>Include Social Security Tax (6.2%)</li>
                <li>Include Medicare Tax (1.45% + 0.9% Additional Medicare Tax over $200,000)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Pre-Tax Deductions
              </h3>
              <p className="text-base leading-relaxed mb-2">
                Reduce your taxable income before taxes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base leading-relaxed ml-4">
                <li>401(k) / 403(b) contributions</li>
                <li>HSA / FSA contributions</li>
                <li>Pre-tax health insurance premiums</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Post-Tax Deductions
              </h3>
              <p className="text-base leading-relaxed mb-2">
                Deductions taken after taxes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base leading-relaxed ml-4">
                <li>Post-tax insurance premiums</li>
                <li>Other voluntary deductions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Advanced Settings
              </h3>
              <ul className="list-disc list-inside space-y-1 text-base leading-relaxed ml-4">
                <li>Additional federal withholding per pay period</li>
                <li>Local or city income tax (if applicable)</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="h-px bg-gray-200 my-6" />

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
              Build realistic budgets based on money you actually receive
            </li>
            <li>
              Compare job offers using net pay instead of salary alone
            </li>
            <li>
              Plan major expenses with confidence
            </li>
            <li>
              Understand how taxes and deductions affect your paycheck
            </li>
            <li>
              Make smarter retirement and benefits decisions
            </li>
          </ul>
          <p className="text-base leading-relaxed mb-4">
            For many people, taxes and deductions reduce gross income by 25–40% or more, depending on income level, state, and filing status. This calculator shows the reality so you can plan accordingly.
          </p>
          <p className="text-base leading-relaxed">
            Whether you&apos;re starting a new job, negotiating a raise, or budgeting for the year, knowing your take-home pay is essential for making informed financial decisions. Once you know your take-home pay, you can use our <a href="/tools/monthly-budget" className="text-emerald-700 underline hover:text-emerald-800">Monthly Budget Calculator</a> to plan your expenses, or check out our guide on <a href="/blog/how-to-start-budgeting" className="text-emerald-700 underline hover:text-emerald-800">how to start budgeting</a> to get organized.
          </p>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How to Use the Take-Home Pay Calculator
          </h2>
          <p className="text-base leading-relaxed mb-4">
            This calculator is designed to be accurate, fast, and easy to use, no tax expertise required. If you&apos;re using this to plan your budget, check out our <a href="/blog/how-to-start-budgeting" className="text-emerald-700 underline hover:text-emerald-800">beginner&apos;s guide to budgeting</a> for next steps.
          </p>
          <ol className="list-decimal list-inside space-y-3 text-base leading-relaxed ml-4 mb-4">
            <li>
              <strong className="text-gray-900">
                Enter your gross income and pay period
              </strong>
              <br />
              Use your annual salary, monthly income, or per-paycheck amount before taxes.
            </li>
            <li>
              <strong className="text-gray-900">
                Select your filing status and state
              </strong>
              <br />
              Your filing status and state of residence affect tax calculations. Add dependents if applicable.
            </li>
            <li>
              <strong className="text-gray-900">
                Add pre-tax deductions
              </strong>
              <br />
              Include retirement contributions, HSA/FSA amounts, and pre-tax insurance premiums to reduce taxable income.
            </li>
            <li>
              <strong className="text-gray-900">
                Include post-tax deductions (if any)
              </strong>
              <br />
              Add deductions that occur after taxes, such as post-tax insurance or voluntary benefits.
            </li>
            <li>
              <strong className="text-gray-900">
                Use advanced settings for accuracy
              </strong>
              <br />
              Include additional withholding or local income tax if your paycheck includes them.
            </li>
            <li>
              <strong className="text-gray-900">
                Click &quot;Calculate&quot;
              </strong>
              <br />
              Instantly see your annual, monthly, and per-paycheck take-home pay, plus a detailed tax breakdown.
            </li>
          </ol>
          <p className="text-base leading-relaxed">
            Your information is saved locally in your browser, so you can return anytime and test different scenarios without re-entering your data.
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
                This is the amount you actually receive after all taxes and deductions. Results are shown annually, monthly, and per pay period.
                <br />
                For budgeting, focus on the monthly take-home pay. You can use this number with our <a href="/tools/monthly-budget" className="text-emerald-700 underline hover:text-emerald-800">Monthly Budget Calculator</a> to see how your expenses compare to your actual income.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Effective Tax Rate
              </h3>
              <p className="text-base leading-relaxed">
                Your effective tax rate is the percentage of your gross income that goes toward federal, state, local, and payroll taxes combined.
                <br />
                Most people fall between 15–30%, depending on income and location.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Detailed Breakdown
              </h3>
              <p className="text-base leading-relaxed">
                See exactly where your money goes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base leading-relaxed ml-4 mt-2">
                <li>Federal income tax</li>
                <li>Social Security tax</li>
                <li>Medicare tax</li>
                <li>State and local taxes</li>
                <li>Pre-tax and post-tax deductions</li>
              </ul>
              <p className="text-base leading-relaxed mt-2">
                This transparency helps you identify opportunities to adjust deductions and increase take-home pay.
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
                These reduce taxable income and lower your tax bill:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base leading-relaxed ml-4">
                <li>
                  <strong className="text-gray-900">401(k) / 403(b):</strong> Retirement contributions, often with employer matching
                </li>
                <li>
                  <strong className="text-gray-900">HSA / FSA:</strong> Tax-advantaged accounts for medical expenses
                </li>
                <li>
                  <strong className="text-gray-900">Pre-Tax Health Insurance:</strong> Lowers taxable wages
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Post-Tax Deductions
              </h3>
              <p className="text-base leading-relaxed mb-2">
                These are taken after taxes:
              </p>
              <ul className="list-disc list-inside space-y-1 text-base leading-relaxed ml-4">
                <li>Post-tax health, dental, or vision premiums</li>
                <li>Life and disability insurance</li>
                <li>Union dues or wage garnishments</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="h-px bg-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Important Notes About This Calculator (2025)
          </h2>
          <p className="text-base leading-relaxed mb-4">
            This calculator provides estimated results for 2025 and is intended for planning purposes.
          </p>
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
            <li>Uses 2025 federal tax brackets and standard state tax rates</li>
            <li>State and local tax rules may vary by location</li>
            <li>Does not include every possible tax credit (such as education credits)</li>
            <li>Employer-specific payroll rules may affect actual paychecks</li>
            <li>Refunds or balances due at tax time are not reflected</li>
          </ul>
          <p className="text-base leading-relaxed">
            For complex tax situations, consult a tax professional or your HR department.
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
                How accurate is this take-home pay calculator?
              </h3>
              <p className="text-base leading-relaxed">
                This calculator provides accurate estimates for most employees using 2025 tax rates. Actual paychecks may vary based on employer benefits, local taxes, or additional credits.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Why is my take-home pay so much lower than my salary?
              </h3>
              <p className="text-base leading-relaxed">
                Federal taxes, Social Security, Medicare, state taxes, and deductions can significantly reduce gross income. The calculator shows exactly how each factor impacts your paycheck.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Should I include my 401(k) contribution?
              </h3>
              <p className="text-base leading-relaxed">
                Yes. If it&apos;s deducted from your paycheck, including it gives a more accurate take-home pay estimate and shows your true net income. Pre-tax retirement contributions reduce your taxable income, which can lower your tax bill while helping you save for the future.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                What&apos;s the difference between marginal and effective tax rate?
              </h3>
              <ul className="list-disc list-inside space-y-1 text-base leading-relaxed ml-4">
                <li>Marginal tax rate applies to your highest dollar of income</li>
                <li>Effective tax rate is the average percentage of income paid in taxes</li>
              </ul>
              <p className="text-base leading-relaxed mt-2">
                The effective rate is almost always lower.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Do I need to create an account?
              </h3>
              <p className="text-base leading-relaxed">
                No. This calculator runs entirely in your browser and stores data locally. Your information never leaves your device.
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
            Once you know your net income, you can:
          </p>
          <ul className="list-disc list-inside space-y-2 text-base leading-relaxed ml-4 mb-4">
            <li>Build a monthly budget based on real income using our <a href="/tools/monthly-budget" className="text-emerald-700 underline hover:text-emerald-800">Monthly Budget Calculator</a></li>
            <li>Optimize retirement and tax-advantaged deductions</li>
            <li>Plan for raises, bonuses, or job changes</li>
            <li>Set realistic savings and financial goals</li>
          </ul>
          <p className="text-base leading-relaxed mb-4">
            If you&apos;re new to budgeting, our guide on <a href="/blog/how-to-start-budgeting" className="text-emerald-700 underline hover:text-emerald-800">how to start budgeting</a> walks you through creating a budget step by step. You might also find it helpful to learn about <a href="/blog/tracking-spending" className="text-emerald-700 underline hover:text-emerald-800">tracking your spending</a> to understand where your money goes, or check out the <a href="/blog/50-30-20-rule" className="text-emerald-700 underline hover:text-emerald-800">50/30/20 budgeting rule</a> as a simple framework for dividing your take-home pay.
          </p>
          <p className="text-base leading-relaxed">
            Explore our other free budgeting tools and financial calculators to take the next step toward financial clarity and confidence.
          </p>
        </section>
      </div>
    </div>
  )
}

