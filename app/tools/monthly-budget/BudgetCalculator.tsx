'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Calculator, RotateCcw, Shield, PieChart, PiggyBank } from 'lucide-react'
import { calculateBudget, type BudgetResults } from '@/lib/calculations/budget'
import { saveBudgetData, loadBudgetData, clearBudgetData } from '@/lib/storage/budget'

const initialExpenses = {
  housing: '',
  utilities: '',
  transportation: '',
  food: '',
  insurance: '',
  debt: '',
  subscriptions: '',
  miscellaneous: '',
}

export default function BudgetCalculator() {
  // Initialize state from localStorage using lazy initialization
  const [income, setIncome] = useState(() => {
    const saved = loadBudgetData()
    return saved.income
  })
  const [expenses, setExpenses] = useState(() => {
    const saved = loadBudgetData()
    return saved.expenses || initialExpenses
  })
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<BudgetResults | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Save data whenever it changes
  useEffect(() => {
    if (income || Object.values(expenses).some((val) => val)) {
      saveBudgetData({ income, expenses })
    }
  }, [income, expenses])

  const handleCalculate = async () => {
    setIsLoading(true)
    setShowResults(false)
    
    // Simulate a brief calculation delay for a smoother UX
    await new Promise((resolve) => setTimeout(resolve, 800))
    
    const calculated = calculateBudget(income, expenses)
    setResults(calculated)
    setShowResults(true)
    setIsLoading(false)
  }

  const handleReset = () => {
    setIncome('')
    setExpenses(initialExpenses)
    setShowResults(false)
    setResults(null)
    clearBudgetData()
  }

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="glass-card p-6 lg:p-8">
        <div className="flex items-center gap-2 mb-2">
          <PieChart className="w-5 h-5 text-primary" />
          <p className="text-sm font-medium text-muted-foreground">Calm budget starter</p>
        </div>
        <h2 className="font-display font-semibold text-xl mb-6">Enter your details</h2>

        <div className="space-y-6">
          {/* Income Input */}
          <div>
            <label htmlFor="income" className="block text-base font-medium mb-2">
              Monthly income (after tax)
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-medium">
                $
              </span>
              <input
                id="income"
                type="number"
                inputMode="decimal"
                placeholder="5000"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="w-full pl-8 pr-4 h-12 text-lg rounded-lg border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Monthly income"
              />
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Include your take-home pay from your job, freelance work, or any other regular income.
            </p>
          </div>

          {/* Expenses Inputs */}
          <div>
            <label className="block text-base font-medium mb-4">Monthly expenses</label>
            <div className="space-y-4">
              {[
                { key: 'housing', label: 'Housing', desc: 'Rent, mortgage, HOA fees' },
                { key: 'utilities', label: 'Utilities', desc: 'Electric, water, gas, internet' },
                { key: 'transportation', label: 'Transportation', desc: 'Car payment, gas, public transit' },
                { key: 'food', label: 'Food', desc: 'Groceries and dining out' },
                { key: 'insurance', label: 'Insurance', desc: 'Health, auto, life insurance' },
                { key: 'debt', label: 'Debt Payments', desc: 'Credit cards, student loans' },
                { key: 'subscriptions', label: 'Subscriptions', desc: 'Streaming, software, memberships' },
                { key: 'miscellaneous', label: 'Miscellaneous', desc: 'Other monthly expenses' },
              ].map((field) => (
                <div key={field.key}>
                  <label
                    htmlFor={field.key}
                    className="block text-sm font-medium text-gray-700 mb-1.5"
                  >
                    {field.label}
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base font-medium">
                      $
                    </span>
                    <input
                      id={field.key}
                      type="number"
                      inputMode="decimal"
                      placeholder="0"
                      value={expenses[field.key as keyof typeof expenses]}
                      onChange={(e) =>
                        setExpenses({
                          ...expenses,
                          [field.key]: e.target.value,
                        })
                      }
                      className="w-full pl-8 pr-4 h-10 rounded-lg border border-input bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      aria-label={`${field.label} expense`}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{field.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              onClick={handleCalculate}
              disabled={isLoading}
              className="flex-1 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Calculating...
                </>
              ) : (
                <>
                  <Calculator className="w-5 h-5" />
                  Calculate Budget
                </>
              )}
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="sm:w-auto h-12 px-6 rounded-lg text-base font-medium"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
          </div>

          {/* Privacy Notice */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-3">
            <Shield className="w-4 h-4 text-emerald-600" />
            <span>Your data is saved locally and never leaves your device.</span>
          </div>
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="space-y-6 pt-6 border-t border-gray-200">
          <div className="glass-card p-6 lg:p-8">
            <div className="flex flex-col items-center justify-center py-16 space-y-4">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-emerald-100 rounded-full"></div>
                <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
              </div>
              <div className="text-center space-y-1">
                <p className="text-base font-medium text-gray-900">Calculating your budget</p>
                <p className="text-sm text-muted-foreground">This will just take a moment...</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Section */}
      {showResults && results && !isLoading && (
        <div className="space-y-6 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="text-xl font-semibold text-gray-900">Your Budget Summary</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="glass-card p-6 lg:p-8">
            <div className="space-y-6">
              {/* Income vs Expenses */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Monthly Income</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(results.income)}
                  </span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Expenses</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(results.totalExpenses)}
                  </span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex items-center justify-between pt-2">
                  <span className="text-base font-medium text-gray-900">Remaining</span>
                  <span
                    className={`text-xl font-bold ${
                      results.remaining >= 0 ? 'text-emerald-600' : 'text-red-600'
                    }`}
                  >
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    }).format(results.remaining)}
                  </span>
                </div>
              </div>

              {/* Savings Rate */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                    <PiggyBank className="w-5 h-5 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Savings Rate</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {results.savingsRate.toFixed(1)}%
                    </div>
                  </div>
                </div>
                <div className="h-px bg-gray-200 my-4" />
                <div className="pt-2">
                  <div className="text-xs text-gray-600 mb-2">Recommended: 20%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full transition-all ${
                        results.savingsRate >= 20
                          ? 'bg-emerald-600'
                          : results.savingsRate >= 10
                            ? 'bg-amber-500'
                            : 'bg-red-500'
                      }`}
                      style={{ width: `${Math.min(100, (results.savingsRate / 20) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
