/**
 * Budget calculation utilities
 */

export type BudgetResults = {
  income: number
  totalExpenses: number
  remaining: number
  savingsRate: number
}

export type ExpenseCategory = {
  name: string
  value: number
}

export function calculateBudget(
  income: string,
  expenses: Record<string, string>
): BudgetResults {
  const totalIncome = parseFloat(income) || 0
  const totalExpenses = Object.values(expenses).reduce(
    (sum, val) => sum + (parseFloat(val) || 0),
    0
  )
  const remaining = totalIncome - totalExpenses
  const savingsRate = totalIncome > 0 ? (remaining / totalIncome) * 100 : 0

  return {
    income: totalIncome,
    totalExpenses,
    remaining,
    savingsRate: Math.max(0, savingsRate),
  }
}

export function getExpenseCategories(
  expenses: Record<string, string>
): ExpenseCategory[] {
  const categories: ExpenseCategory[] = []
  const categoryLabels: Record<string, string> = {
    housing: 'Housing',
    utilities: 'Utilities',
    transportation: 'Transportation',
    food: 'Food',
    insurance: 'Insurance',
    debt: 'Debt',
    subscriptions: 'Subscriptions',
    miscellaneous: 'Miscellaneous',
  }

  Object.entries(expenses).forEach(([key, value]) => {
    const numValue = parseFloat(value) || 0
    if (numValue > 0) {
      categories.push({
        name: categoryLabels[key] || key,
        value: numValue,
      })
    }
  })

  return categories.sort((a, b) => b.value - a.value)
}

