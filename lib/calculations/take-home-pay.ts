/**
 * Take-home pay calculation utilities
 * Based on 2025 federal tax brackets and standard state tax rates
 */

// State tax rates (2025 estimates – top marginal / flat equivalents)
export const STATE_TAX_RATES: Record<string, number> = {
  AL: 0.05,
  AK: 0,
  AZ: 0.025,
  AR: 0.055,
  CA: 0.133,
  CO: 0.0425,
  CT: 0.0699,
  DE: 0.066,
  FL: 0,
  GA: 0.0549,
  HI: 0.11,
  ID: 0.058,
  IL: 0.0495,
  IN: 0.0315,
  IA: 0.039,
  KS: 0.057,
  KY: 0.045,
  LA: 0.0425,
  ME: 0.0715,
  MD: 0.0575,
  MA: 0.05,
  MI: 0.0425,
  MN: 0.0985,
  MS: 0.044,
  MO: 0.0495,
  MT: 0.069,
  NE: 0.0684,
  NV: 0,
  NH: 0,
  NJ: 0.1075,
  NM: 0.059,
  NY: 0.109,
  NC: 0.0425,
  ND: 0.029,
  OH: 0.0399,
  OK: 0.0475,
  OR: 0.099,
  PA: 0.0307,
  RI: 0.0599,
  SC: 0.064,
  SD: 0,
  TN: 0,
  TX: 0,
  UT: 0.0455,
  VT: 0.0875,
  VA: 0.0575,
  WA: 0,
  WV: 0.065,
  WI: 0.0765,
  WY: 0,
}

export type PayPeriod = 'yearly' | 'monthly' | 'biweekly'
export type FilingStatus = 'single' | 'married'

export type DeductionMode = 'dollar' | 'percentage'

export type TakeHomePayInputs = {
  grossIncome: string
  payPeriod: PayPeriod
  filingStatus: FilingStatus
  state: string
  dependents: string
  includeSocialSecurity: boolean
  includeMedicare: boolean
  retirement401k: string
  retirement401kMode: DeductionMode
  hsaContribution: string
  hsaContributionMode: DeductionMode
  preTaxHealthInsurance: string
  preTaxHealthInsuranceMode: DeductionMode
  postTaxHealthInsurance: string
  lifeInsurance: string
  otherDeductions: string
  additionalWithholding: string
  hasLocalTax: boolean
  localTaxRate: string
}

export type TakeHomePayResults = {
  annualGross: number
  totalPreTaxDeductions: number
  taxableIncome: number
  federalTax: number
  socialSecurity: number
  medicare: number
  additionalMedicare: number
  totalFICA: number
  stateTax: number
  localTax: number
  totalTaxes: number
  totalPostTaxDeductions: number
  annualTakeHome: number
  monthlyTakeHome: number
  biweeklyTakeHome: number
  effectiveTaxRate: number
}

/**
 * Convert income to annual based on pay period
 */
function convertToAnnual(amount: number, payPeriod: PayPeriod): number {
  if (payPeriod === 'yearly') return amount
  if (payPeriod === 'monthly') return amount * 12
  return amount * 26 // biweekly
}

/**
 * Calculate federal income tax based on 2025 brackets
 */
function calculateFederalTax(
  taxableIncome: number,
  filingStatus: FilingStatus
): number {
  const standardDeduction = filingStatus === 'single' ? 14600 : 29200
  const federalTaxableIncome = Math.max(0, taxableIncome - standardDeduction)

  if (filingStatus === 'single') {
    if (federalTaxableIncome <= 11600) {
      return federalTaxableIncome * 0.1
    } else if (federalTaxableIncome <= 47150) {
      return 1160 + (federalTaxableIncome - 11600) * 0.12
    } else if (federalTaxableIncome <= 100525) {
      return 5426 + (federalTaxableIncome - 47150) * 0.22
    } else if (federalTaxableIncome <= 191950) {
      return 17168.5 + (federalTaxableIncome - 100525) * 0.24
    } else if (federalTaxableIncome <= 243725) {
      return 39110.5 + (federalTaxableIncome - 191950) * 0.32
    } else if (federalTaxableIncome <= 609350) {
      return 55678.5 + (federalTaxableIncome - 243725) * 0.35
    } else {
      return 183647.25 + (federalTaxableIncome - 609350) * 0.37
    }
  } else {
    // married filing jointly
    if (federalTaxableIncome <= 23200) {
      return federalTaxableIncome * 0.1
    } else if (federalTaxableIncome <= 94300) {
      return 2320 + (federalTaxableIncome - 23200) * 0.12
    } else if (federalTaxableIncome <= 201050) {
      return 10852 + (federalTaxableIncome - 94300) * 0.22
    } else if (federalTaxableIncome <= 383900) {
      return 34337 + (federalTaxableIncome - 201050) * 0.24
    } else {
      return 78221 + (federalTaxableIncome - 383900) * 0.32
    }
  }
}

/**
 * Calculate take-home pay based on inputs
 */
export function calculateTakeHomePay(
  inputs: TakeHomePayInputs
): TakeHomePayResults {
  // Convert to annual for calculations
  const annualGross = convertToAnnual(
    parseFloat(inputs.grossIncome) || 0,
    inputs.payPeriod
  )

  // Pre-tax deductions (annual)
  // Handle percentage vs dollar amount for each deduction
  let annual401k = 0
  if (inputs.retirement401kMode === 'percentage') {
    const percentage = parseFloat(inputs.retirement401k) || 0
    annual401k = annualGross * (percentage / 100)
  } else {
    annual401k = convertToAnnual(
      parseFloat(inputs.retirement401k) || 0,
      inputs.payPeriod
    )
  }

  let annualHSA = 0
  if (inputs.hsaContributionMode === 'percentage') {
    const percentage = parseFloat(inputs.hsaContribution) || 0
    annualHSA = annualGross * (percentage / 100)
  } else {
    annualHSA = convertToAnnual(
      parseFloat(inputs.hsaContribution) || 0,
      inputs.payPeriod
    )
  }

  let annualPreTaxHealth = 0
  if (inputs.preTaxHealthInsuranceMode === 'percentage') {
    const percentage = parseFloat(inputs.preTaxHealthInsurance) || 0
    annualPreTaxHealth = annualGross * (percentage / 100)
  } else {
    annualPreTaxHealth = convertToAnnual(
      parseFloat(inputs.preTaxHealthInsurance) || 0,
      inputs.payPeriod
    )
  }

  const totalPreTaxDeductions =
    annual401k + annualHSA + annualPreTaxHealth
  const taxableIncome = annualGross - totalPreTaxDeductions

  // FICA calculations
  const socialSecurity = inputs.includeSocialSecurity
    ? Math.min(taxableIncome * 0.062, 10453.2)
    : 0
  const medicare = inputs.includeMedicare ? taxableIncome * 0.0145 : 0
  const additionalMedicare =
    inputs.includeMedicare && taxableIncome > 200000
      ? (taxableIncome - 200000) * 0.009
      : 0
  const totalFICA = socialSecurity + medicare + additionalMedicare

  // Federal tax calculation
  let federalTax = calculateFederalTax(taxableIncome, inputs.filingStatus)

  // Child tax credit (simplified)
  const numDependents = parseInt(inputs.dependents) || 0
  const childTaxCredit = numDependents * 2000
  federalTax = Math.max(0, federalTax - childTaxCredit)

  // State and local taxes
  const stateTaxRate = STATE_TAX_RATES[inputs.state] || 0
  const stateTax = taxableIncome * stateTaxRate
  const localTax = inputs.hasLocalTax
    ? taxableIncome * (parseFloat(inputs.localTaxRate) / 100 || 0)
    : 0

  // Additional withholding
  const annualAdditionalWithholding = convertToAnnual(
    parseFloat(inputs.additionalWithholding) || 0,
    inputs.payPeriod
  )

  // Total taxes
  const totalTaxes =
    federalTax +
    totalFICA +
    stateTax +
    localTax +
    annualAdditionalWithholding

  // Post-tax deductions (annual)
  const annualPostTaxHealth = convertToAnnual(
    parseFloat(inputs.postTaxHealthInsurance) || 0,
    inputs.payPeriod
  )
  const annualLifeIns = convertToAnnual(
    parseFloat(inputs.lifeInsurance) || 0,
    inputs.payPeriod
  )
  const annualOtherDed = convertToAnnual(
    parseFloat(inputs.otherDeductions) || 0,
    inputs.payPeriod
  )

  const totalPostTaxDeductions =
    annualPostTaxHealth + annualLifeIns + annualOtherDed

  // Final calculations
  const annualTakeHome =
    annualGross - totalTaxes - totalPreTaxDeductions - totalPostTaxDeductions
  const monthlyTakeHome = annualTakeHome / 12
  const biweeklyTakeHome = annualTakeHome / 26
  const effectiveTaxRate =
    annualGross > 0 ? (totalTaxes / annualGross) * 100 : 0

  return {
    annualGross,
    totalPreTaxDeductions,
    taxableIncome,
    federalTax,
    socialSecurity,
    medicare,
    additionalMedicare,
    totalFICA,
    stateTax,
    localTax,
    totalTaxes,
    totalPostTaxDeductions,
    annualTakeHome,
    monthlyTakeHome,
    biweeklyTakeHome,
    effectiveTaxRate,
  }
}

