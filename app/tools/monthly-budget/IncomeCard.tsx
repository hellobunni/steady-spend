"use client";

import { DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

type IncomeCardProps = {
  income: string;
  setIncome: (value: string) => void;
};

export default function IncomeCard({ income, setIncome }: IncomeCardProps) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3 mb-0">
          <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-emerald-700" />
          </div>
          <div>
            <CardTitle>Monthly Income</CardTitle>
            <CardDescription>Enter your total monthly income after taxes</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg font-medium">
            $
          </span>
          <Input
            type="number"
            inputMode="decimal"
            placeholder="0"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="pl-8 text-lg h-12"
            aria-label="Monthly income"
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Include your take-home pay from your job, freelance work, or any other regular income you
          receive each month.
        </p>
      </CardContent>
    </Card>
  );
}
