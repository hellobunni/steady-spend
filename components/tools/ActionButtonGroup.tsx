"use client";

import { Calculator, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActionButtonGroupProps {
  onCalculate: () => void;
  onReset: () => void;
  isLoading?: boolean;
  calculateLabel?: string;
  resetLabel?: string;
  disabled?: boolean;
}

export function ActionButtonGroup({
  onCalculate,
  onReset,
  isLoading = false,
  calculateLabel = "Calculate",
  resetLabel = "Reset",
  disabled = false,
}: ActionButtonGroupProps) {
  return (
    <fieldset className="flex flex-col sm:flex-row gap-3 pt-2 border-0 p-0 m-0">
      <legend className="sr-only">Calculator actions</legend>
      <Button
        onClick={onCalculate}
        disabled={isLoading || disabled}
        className="flex-1 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-base font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        aria-busy={isLoading}
      >
        {isLoading ? (
          <>
            <div
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
              aria-hidden="true"
            />
            <span>Calculating...</span>
          </>
        ) : (
          <>
            <Calculator className="w-5 h-5" aria-hidden="true" />
            {calculateLabel}
          </>
        )}
      </Button>
      <Button
        onClick={onReset}
        variant="outline"
        disabled={isLoading}
        className="sm:w-auto h-12 px-6 rounded-lg text-base font-medium"
        aria-label={resetLabel}
      >
        <RotateCcw className="w-4 h-4" aria-hidden="true" />
        {resetLabel}
      </Button>
    </fieldset>
  );
}
