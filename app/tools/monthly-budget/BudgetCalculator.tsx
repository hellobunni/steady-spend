"use client";

import { PieChart, PiggyBank } from "lucide-react";
import { useEffect, useState } from "react";
import { CurrencyInput } from "@/components/forms/CurrencyInput";
import { ActionButtonGroup } from "@/components/tools/ActionButtonGroup";
import { LoadingState } from "@/components/tools/LoadingState";
import { PrivacyNotice } from "@/components/tools/PrivacyNotice";
import { ResultsSection } from "@/components/tools/ResultsSection";
import { formatCurrency } from "@/lib/accessibility/formatCurrency";
import { type BudgetResults, calculateBudget } from "@/lib/calculations/budget";
import { clearBudgetData, loadBudgetData, saveBudgetData } from "@/lib/storage/budget";

const initialExpenses = {
  housing: "",
  utilities: "",
  transportation: "",
  food: "",
  insurance: "",
  debt: "",
  subscriptions: "",
  miscellaneous: "",
};

export default function BudgetCalculator() {
  // Initialize state from localStorage using lazy initialization
  const [income, setIncome] = useState(() => {
    const saved = loadBudgetData();
    return saved.income;
  });
  const [expenses, setExpenses] = useState(() => {
    const saved = loadBudgetData();
    return saved.expenses || initialExpenses;
  });
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<BudgetResults | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Save data whenever it changes
  useEffect(() => {
    if (income || Object.values(expenses).some((val) => val)) {
      saveBudgetData({ income, expenses });
    }
  }, [income, expenses]);

  const handleCalculate = async () => {
    setIsLoading(true);
    setShowResults(false);

    // Simulate a brief calculation delay for a smoother UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    const calculated = calculateBudget(income, expenses);
    setResults(calculated);
    setShowResults(true);
    setIsLoading(false);
  };

  const handleReset = () => {
    setIncome("");
    setExpenses(initialExpenses);
    setShowResults(false);
    setResults(null);
    clearBudgetData();
  };

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
          <CurrencyInput
            id="income"
            label="Monthly income (after tax)"
            placeholder="5000"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            helperText="Include your take-home pay from your job, freelance work, or any other regular income."
            size="md"
          />

          {/* Expenses Inputs */}
          <div>
            <div className="block text-base font-medium mb-4">Monthly expenses</div>
            <div className="space-y-4">
              {[
                { key: "housing", label: "Housing", desc: "Rent, mortgage, HOA fees" },
                { key: "utilities", label: "Utilities", desc: "Electric, water, gas, internet" },
                {
                  key: "transportation",
                  label: "Transportation",
                  desc: "Car payment, gas, public transit",
                },
                { key: "food", label: "Food", desc: "Groceries and dining out" },
                { key: "insurance", label: "Insurance", desc: "Health, auto, life insurance" },
                { key: "debt", label: "Debt Payments", desc: "Credit cards, student loans" },
                {
                  key: "subscriptions",
                  label: "Subscriptions",
                  desc: "Streaming, software, memberships",
                },
                { key: "miscellaneous", label: "Miscellaneous", desc: "Other monthly expenses" },
              ].map((field) => (
                <CurrencyInput
                  key={field.key}
                  id={field.key}
                  label={field.label}
                  placeholder="0"
                  value={expenses[field.key as keyof typeof expenses]}
                  onChange={(e) =>
                    setExpenses({
                      ...expenses,
                      [field.key]: e.target.value,
                    })
                  }
                  helperText={field.desc}
                  size="sm"
                />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <ActionButtonGroup
            onCalculate={handleCalculate}
            onReset={handleReset}
            isLoading={isLoading}
            calculateLabel="Calculate Budget"
            resetLabel="Reset"
          />

          {/* Privacy Notice */}
          <PrivacyNotice />
        </div>
      </div>

      {/* Loading State */}
      {isLoading && <LoadingState message="Calculating your budget" />}

      {/* Results Section */}
      {results && (
        <ResultsSection show={showResults && !isLoading} title="Your Budget Summary">
          <div className="glass-card p-6 lg:p-8">
            <div className="space-y-6">
              {/* Income vs Expenses */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Monthly Income</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {formatCurrency(results.income)}
                  </span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Expenses</span>
                  <span className="text-lg font-semibold text-gray-900">
                    {formatCurrency(results.totalExpenses)}
                  </span>
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex items-center justify-between pt-2">
                  <span className="text-base font-medium text-gray-900">Remaining</span>
                  <span
                    className={`text-xl font-bold ${
                      results.remaining >= 0 ? "text-emerald-600" : "text-red-600"
                    }`}
                  >
                    {formatCurrency(results.remaining)}
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
                          ? "bg-emerald-600"
                          : results.savingsRate >= 10
                            ? "bg-amber-500"
                            : "bg-red-500"
                      }`}
                      style={{ width: `${Math.min(100, (results.savingsRate / 20) * 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ResultsSection>
      )}
    </div>
  );
}
