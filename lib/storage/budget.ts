/**
 * localStorage utilities for budget calculator
 * Persists user input so they can return to their budget later
 */

const STORAGE_KEY = 'steady-spend-budget'

export type BudgetData = {
  income: string
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
}

const defaultBudgetData: BudgetData = {
  income: '',
  expenses: {
    housing: '',
    utilities: '',
    transportation: '',
    food: '',
    insurance: '',
    debt: '',
    subscriptions: '',
    miscellaneous: '',
  },
}

export function saveBudgetData(data: BudgetData): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch (error) {
    console.error('Failed to save budget data:', error)
  }
}

export function loadBudgetData(): BudgetData {
  if (typeof window === 'undefined') return defaultBudgetData
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return defaultBudgetData
    return JSON.parse(stored) as BudgetData
  } catch (error) {
    console.error('Failed to load budget data:', error)
    return defaultBudgetData
  }
}

export function clearBudgetData(): void {
  if (typeof window === 'undefined') return
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.error('Failed to clear budget data:', error)
  }
}

