export function formatCurrency(
  amount: number,
  options?: {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
    showCents?: boolean;
  }
): string {
  const { minimumFractionDigits = 0, maximumFractionDigits = 0, showCents = false } = options || {};

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: showCents ? 2 : minimumFractionDigits,
    maximumFractionDigits: showCents ? 2 : maximumFractionDigits,
  }).format(amount);
}

export function formatCurrencyAccessible(amount: number): string {
  return `${formatCurrency(amount)} dollars`;
}
