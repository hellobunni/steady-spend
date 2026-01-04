/**
 * 50/30/20 budget rule calculation utilities
 */

export type FiftyThirtyTwentyResults = {
  income: number;
  needs: number;
  wants: number;
  savings: number;
};

/**
 * Calculate 50/30/20 budget breakdown
 */
export function calculateFiftyThirtyTwenty(monthlyIncome: string): FiftyThirtyTwentyResults {
  const income = parseFloat(monthlyIncome) || 0;
  const needs = income * 0.5;
  const wants = income * 0.3;
  const savings = income * 0.2;

  return {
    income,
    needs,
    wants,
    savings,
  };
}
