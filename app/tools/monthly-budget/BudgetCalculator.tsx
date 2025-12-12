'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Calculator, RotateCcw, Shield } from 'lucide-react'
import IncomeCard from './IncomeCard'
import ExpensesCard from './ExpensesCard'
import BudgetSummary from './BudgetSummary'
import BudgetChart from './BudgetChart'
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
    return saved.expenses
  })
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<BudgetResults | null>(null)

  // Save data whenever it changes
  useEffect(() => {
    if (income || Object.values(expenses).some((val) => val)) {
      saveBudgetData({ income, expenses })
    }
  }, [income, expenses])

  const handleCalculate = () => {
    const calculated = calculateBudget(income, expenses)
    setResults(calculated)
    setShowResults(true)
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
      {/* Income Card */}
      <IncomeCard income={income} setIncome={setIncome} />

      {/* Expenses Card */}
      <ExpensesCard expenses={expenses} setExpenses={setExpenses} />

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button
          onClick={handleCalculate}
          className="flex-1 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-base font-medium"
        >
          <Calculator className="w-5 h-5" />
          Calculate Budget
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
      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
        <Shield className="w-4 h-4 text-emerald-600" />
        <span>Your data is saved locally and never leaves your device.</span>
      </div>

      {/* Results Section */}
      {showResults && results && (
        <div className="space-y-6 pt-6 border-t border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="text-xl font-semibold text-gray-900">Your Budget Summary</h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <BudgetSummary
            income={results.income}
            totalExpenses={results.totalExpenses}
            remaining={results.remaining}
            savingsRate={results.savingsRate}
          />

          <BudgetChart expenses={expenses} />
        </div>
      )}
    </div>
  )
}

