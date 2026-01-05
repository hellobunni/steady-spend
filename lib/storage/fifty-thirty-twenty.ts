/**
 * localStorage utilities for 50/30/20 calculator
 * Persists user input so they can return to their calculation later
 */

const STORAGE_KEY = "steady-spend-50-30-20";

export type FiftyThirtyTwentyData = {
  income: string;
};

const defaultData: FiftyThirtyTwentyData = {
  income: "",
};

export function saveFiftyThirtyTwentyData(data: FiftyThirtyTwentyData): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Failed to save 50/30/20 data:", error);
  }
}

export function loadFiftyThirtyTwentyData(): FiftyThirtyTwentyData {
  if (typeof window === "undefined") return defaultData;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return defaultData;
    return JSON.parse(stored) as FiftyThirtyTwentyData;
  } catch (error) {
    console.error("Failed to load 50/30/20 data:", error);
    return defaultData;
  }
}

export function clearFiftyThirtyTwentyData(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("Failed to clear 50/30/20 data:", error);
  }
}
