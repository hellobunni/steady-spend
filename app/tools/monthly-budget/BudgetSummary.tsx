"use client";

import { PiggyBank, TrendingDown, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { formatCurrency, formatPercentage } from "@/lib/utils";

type BudgetSummaryProps = {
  income: number;
  totalExpenses: number;
  remaining: number;
  savingsRate: number;
};

export default function BudgetSummary({
  income,
  totalExpenses,
  remaining,
  savingsRate,
}: BudgetSummaryProps) {
  const isPositive = remaining >= 0;
  const savingsGoal = income * 0.2; // 20% savings goal

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {/* Income vs Expenses */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Monthly Income</span>
              <span className="text-lg font-semibold text-gray-900">{formatCurrency(income)}</span>
            </div>
            <div className="h-px bg-gray-200" />
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Total Expenses</span>
              <span className="text-lg font-semibold text-gray-900">
                {formatCurrency(totalExpenses)}
              </span>
            </div>
            <div className="h-px bg-gray-200" />
            <div className="flex items-center justify-between pt-2">
              <span className="text-base font-medium text-gray-900">Remaining</span>
              <div className="flex items-center gap-2">
                {isPositive ? (
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                ) : (
                  <TrendingDown className="w-5 h-5 text-red-600" />
                )}
                <span
                  className={`text-xl font-bold ${
                    isPositive ? "text-emerald-600" : "text-red-600"
                  }`}
                >
                  {formatCurrency(remaining)}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Savings Rate */}
      <Card>
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
                <PiggyBank className="w-5 h-5 text-emerald-700" />
              </div>
              <div>
                <div className="text-sm text-gray-600">Savings Rate</div>
                <div className="text-2xl font-bold text-gray-900">
                  {formatPercentage(savingsRate)}
                </div>
              </div>
            </div>
            <div className="h-px bg-gray-200" />
            <div className="pt-2">
              <div className="text-xs text-gray-600 mb-2">Recommended: 20%</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`h-2.5 rounded-full transition-all ${
                    savingsRate >= 20
                      ? "bg-emerald-600"
                      : savingsRate >= 10
                        ? "bg-amber-500"
                        : "bg-red-500"
                  }`}
                  style={{ width: `${Math.min(100, (savingsRate / 20) * 100)}%` }}
                />
              </div>
              {remaining < savingsGoal && remaining > 0 && (
                <p className="text-xs text-gray-600 mt-2">
                  You&apos;re saving {formatCurrency(remaining)}. To reach the 20% goal, aim to save{" "}
                  {formatCurrency(savingsGoal)} per month.
                </p>
              )}
              {remaining < 0 && (
                <p className="text-xs text-red-600 mt-2">
                  You&apos;re spending more than you earn. Consider reviewing your expenses.
                </p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
