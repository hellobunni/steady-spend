'use client'

import { useState, useEffect } from 'react'
import { motion } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import {
  Calculator,
  RotateCcw,
  Shield,
  Home,
  Heart,
  PiggyBank,
} from 'lucide-react'
import {
  calculateFiftyThirtyTwenty,
  type FiftyThirtyTwentyResults,
} from '@/lib/calculations/fifty-thirty-twenty'
import {
  saveFiftyThirtyTwentyData,
  loadFiftyThirtyTwentyData,
  clearFiftyThirtyTwentyData,
} from '@/lib/storage/fifty-thirty-twenty'

export default function FiftyThirtyTwentyCalculator() {
  const [income, setIncome] = useState('')
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<FiftyThirtyTwentyResults | null>(
    null
  )

  // Load data from localStorage after hydration
  useEffect(() => {
    const savedData = loadFiftyThirtyTwentyData()
    setIncome(savedData.income)
  }, [])

  // Save data whenever it changes
  useEffect(() => {
    if (income) {
      saveFiftyThirtyTwentyData({ income })
    }
  }, [income])

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '')
    setIncome(value)
  }

  const calculateBudget = () => {
    if (income && parseFloat(income) > 0) {
      const calculated = calculateFiftyThirtyTwenty(income)
      setResults(calculated)
      setShowResults(true)
    }
  }

  const resetCalculator = () => {
    setIncome('')
    setShowResults(false)
    setResults(null)
    clearFiftyThirtyTwentyData()
  }

  return (
    <div className="space-y-6">
      {/* Income Input Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Calculator className="w-6 h-6 text-emerald-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900">
              Monthly After-Tax Income
            </h2>
          </div>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-lg">
              $
            </span>
            <Input
              type="text"
              value={income}
              onChange={handleIncomeChange}
              placeholder="3,500"
              className="h-14 pl-8 text-lg rounded-lg border-gray-200 focus:ring-2 focus:ring-emerald-200 focus:border-emerald-400"
            />
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Enter your monthly take-home pay (after taxes)
          </p>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3">
        <Button
          onClick={calculateBudget}
          className="flex-1 h-14 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-base font-semibold"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Calculate My Budget
        </Button>
        <Button
          onClick={resetCalculator}
          variant="outline"
          className="sm:w-auto h-14 px-6 rounded-lg text-base font-medium border-gray-200 hover:bg-gray-50"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset
        </Button>
      </div>

      {/* Privacy Notice */}
      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
        <Shield className="w-4 h-4 text-emerald-600" />
        <span>Your data is saved locally and never leaves your device.</span>
      </div>

      {/* Results Section */}
      {showResults && results && results.income > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="space-y-6 pt-6 border-t border-gray-200"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="text-lg font-semibold text-gray-800">
              Your 50/30/20 Budget
            </h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Results Cards */}
          <div className="grid gap-4">
            {/* Needs - 50% */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-0 shadow-sm bg-blue-50 rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                        <Home className="w-7 h-7 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          Needs (50%)
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Essential expenses you can&apos;t avoid
                        </p>
                        <p className="text-xs text-gray-500">
                          Rent/mortgage, utilities, groceries, insurance,
                          minimum debt payments, transportation
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-600">
                        $
                        {results.needs.toLocaleString('en-US', {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </div>
                      <div className="text-sm text-gray-600">per month</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Wants - 30% */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Card className="border-0 shadow-sm bg-purple-50 rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                        <Heart className="w-7 h-7 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          Wants (30%)
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Things that make life enjoyable
                        </p>
                        <p className="text-xs text-gray-500">
                          Dining out, entertainment, hobbies, subscriptions,
                          shopping, vacations
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-purple-600">
                        $
                        {results.wants.toLocaleString('en-US', {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </div>
                      <div className="text-sm text-gray-600">per month</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Savings - 20% */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="border-0 shadow-sm bg-emerald-50 rounded-xl overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center shrink-0">
                        <PiggyBank className="w-7 h-7 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          Savings & Debt (20%)
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          Building your financial future
                        </p>
                        <p className="text-xs text-gray-500">
                          Emergency fund, retirement, investments, extra debt
                          payments beyond minimums
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-emerald-600">
                        $
                        {results.savings.toLocaleString('en-US', {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })}
                      </div>
                      <div className="text-sm text-gray-600">per month</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  )
}
