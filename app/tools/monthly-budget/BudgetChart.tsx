'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { getExpenseCategories, type ExpenseCategory } from '@/lib/calculations/budget'
import { PieChart } from 'lucide-react'

type BudgetChartProps = {
  expenses: Record<string, string>
}

export default function BudgetChart({ expenses }: BudgetChartProps) {
  const categories = getExpenseCategories(expenses)
  const total = categories.reduce((sum, cat) => sum + cat.value, 0)

  if (categories.length === 0) {
    return null
  }

  // Simple bar chart visualization
  const maxValue = Math.max(...categories.map((cat) => cat.value))

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
            <PieChart className="w-5 h-5 text-emerald-700" />
          </div>
          <CardTitle>Spending Breakdown</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories.map((category) => {
            const percentage = total > 0 ? (category.value / total) * 100 : 0
            const barWidth = maxValue > 0 ? (category.value / maxValue) * 100 : 0

            return (
              <div key={category.name} className="space-y-1.5">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-gray-700">{category.name}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-gray-600">{formatCurrency(category.value)}</span>
                    <span className="text-gray-500 text-xs w-12 text-right">
                      {percentage.toFixed(1)}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="h-2.5 rounded-full bg-emerald-600 transition-all"
                    style={{ width: `${barWidth}%` }}
                    aria-label={`${category.name}: ${formatCurrency(category.value)}`}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
