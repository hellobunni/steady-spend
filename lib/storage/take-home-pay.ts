/**
 * localStorage utilities for take-home pay calculator
 * Persists user input so they can return to their calculation later
 */

import type { TakeHomePayInputs } from "@/lib/calculations/take-home-pay";

const STORAGE_KEY = "steady-spend-take-home-pay";

const defaultData: TakeHomePayInputs = {
  grossIncome: "",
  payPeriod: "yearly",
  filingStatus: "single",
  state: "CA",
  dependents: "0",
  includeSocialSecurity: true,
  includeMedicare: true,
  retirement401k: "",
  retirement401kMode: "dollar",
  hsaContribution: "",
  hsaContributionMode: "dollar",
  preTaxHealthInsurance: "",
  preTaxHealthInsuranceMode: "dollar",
  postTaxHealthInsurance: "",
  lifeInsurance: "",
  otherDeductions: "",
  additionalWithholding: "",
  hasLocalTax: false,
  localTaxRate: "",
};

export function saveTakeHomePayData(data: TakeHomePayInputs): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Failed to save take-home pay data:", error);
  }
}

export function loadTakeHomePayData(): TakeHomePayInputs {
  if (typeof window === "undefined") return defaultData;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultData;
    return JSON.parse(stored) as TakeHomePayInputs;
  } catch (error) {
    console.error("Failed to load take-home pay data:", error);
    return defaultData;
  }
}

export function clearTakeHomePayData(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear take-home pay data:", error);
  }
}
