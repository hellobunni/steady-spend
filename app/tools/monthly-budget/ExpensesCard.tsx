'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Receipt } from 'lucide-react'

type ExpensesCardProps = {
  expenses: {
    housing: string
    utilities: string
    transportation: string
    food: string
    insurance: string
    debt: string
    subscriptions: string
    miscellaneous: string
  }
  setExpenses: (expenses: ExpensesCardProps['expenses']) => void
}

const expenseFields = [
  { key: 'housing', label: 'Housing', description: 'Rent, mortgage, HOA fees' },
  { key: 'utilities', label: 'Utilities', description: 'Electric, water, gas, internet' },
  { key: 'transportation', label: 'Transportation', description: 'Car payment, gas, public transit' },
  { key: 'food', label: 'Food', description: 'Groceries and dining out' },
  { key: 'insurance', label: 'Insurance', description: 'Health, auto, life insurance' },
  { key: 'debt', label: 'Debt Payments', description: 'Credit cards, student loans' },
  { key: 'subscriptions', label: 'Subscriptions', description: 'Streaming, software, memberships' },
  { key: 'miscellaneous', label: 'Miscellaneous', description: 'Other monthly expenses' },
] as const

export default function ExpensesCard({ expenses, setExpenses }: ExpensesCardProps) {
  const handleChange = (key: string, value: string) => {
    setExpenses({
      ...expenses,
      [key]: value,
    })
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
            <Receipt className="w-5 h-5 text-amber-700" />
          </div>
          <div>
            <CardTitle>Monthly Expenses</CardTitle>
            <CardDescription>Enter your monthly expenses by category</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {expenseFields.map((field) => (
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
                <Input
                  id={field.key}
                  type="number"
                  inputMode="decimal"
                  placeholder="0"
                  value={expenses[field.key]}
                  onChange={(e) => handleChange(field.key, e.target.value)}
                  className="pl-8"
                  aria-label={`${field.label} expense`}
                  aria-describedby={field.key + '-desc'}
                />
              </div>
              <p id={field.key + '-desc'} className="text-xs text-gray-500 mt-1">
                {field.description}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

