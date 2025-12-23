'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Calculator,
  RotateCcw,
  Shield,
  ChevronDown,
  ChevronUp,
  TrendingDown,
} from 'lucide-react'
import { Tooltip } from '@/components/ui/tooltip'
import {
  calculateTakeHomePay,
  STATE_TAX_RATES,
  type TakeHomePayInputs,
  type TakeHomePayResults,
} from '@/lib/calculations/take-home-pay'
import {
  saveTakeHomePayData,
  loadTakeHomePayData,
  clearTakeHomePayData,
} from '@/lib/storage/take-home-pay'

const defaultInputs: TakeHomePayInputs = {
  grossIncome: '',
  payPeriod: 'yearly',
  filingStatus: 'single',
  state: 'CA',
  dependents: '0',
  includeSocialSecurity: true,
  includeMedicare: true,
  retirement401k: '',
  retirement401kMode: 'dollar',
  hsaContribution: '',
  hsaContributionMode: 'dollar',
  preTaxHealthInsurance: '',
  preTaxHealthInsuranceMode: 'dollar',
  postTaxHealthInsurance: '',
  lifeInsurance: '',
  otherDeductions: '',
  additionalWithholding: '',
  hasLocalTax: false,
  localTaxRate: '',
}

export default function TakeHomePayCalculator() {
  // Load data from localStorage using lazy initialization
  const [inputs, setInputs] = useState<TakeHomePayInputs>(() => {
    if (typeof window !== 'undefined') {
      return loadTakeHomePayData()
    }
    return defaultInputs
  })
  const [showResults, setShowResults] = useState(false)
  const [results, setResults] = useState<TakeHomePayResults | null>(null)
  const [viewMode, setViewMode] = useState<'annual' | 'paycheck'>('annual')
  const [expandedSections, setExpandedSections] = useState({
    preTax: true,
    postTax: false,
    advanced: false,
  })

  // Save data whenever it changes
  useEffect(() => {
    if (inputs.grossIncome || Object.values(inputs).some((val) => val)) {
      saveTakeHomePayData(inputs)
    }
  }, [inputs])

  const updateInput = <K extends keyof TakeHomePayInputs>(
    key: K,
    value: TakeHomePayInputs[K]
  ) => {
    setInputs((prev) => ({ ...prev, [key]: value }))
  }

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9.]/g, '')
    updateInput('grossIncome', value)
  }

  const handleNumberInput = (
    key: keyof TakeHomePayInputs,
    value: string
  ) => {
    const cleaned = value.replace(/[^0-9.]/g, '')
    updateInput(key, cleaned)
  }

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const handleCalculate = () => {
    if (inputs.grossIncome && parseFloat(inputs.grossIncome) > 0) {
      const calculated = calculateTakeHomePay(inputs)
      setResults(calculated)
      setShowResults(true)
    }
  }

  const handleReset = () => {
    setInputs({
      grossIncome: '',
      payPeriod: 'yearly',
      filingStatus: 'single',
      state: 'CA',
      dependents: '0',
      includeSocialSecurity: true,
      includeMedicare: true,
      retirement401k: '',
      retirement401kMode: 'dollar',
      hsaContribution: '',
      hsaContributionMode: 'dollar',
      preTaxHealthInsurance: '',
      preTaxHealthInsuranceMode: 'dollar',
      postTaxHealthInsurance: '',
      lifeInsurance: '',
      otherDeductions: '',
      additionalWithholding: '',
      hasLocalTax: false,
      localTaxRate: '',
    })
    setShowResults(false)
    setResults(null)
    clearTakeHomePayData()
  }

  return (
    <div className="space-y-6">
      {/* Basic Information */}
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                Gross Income
                <Tooltip content="Your total income before any taxes or deductions are taken out. This is your salary or wages before anything is withheld." />
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <Input
                  type="text"
                  value={inputs.grossIncome}
                  onChange={handleIncomeChange}
                  placeholder="75,000"
                  className="pl-8"
                />
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                Pay Period
                <Tooltip content="How often you get paid. Select yearly if you know your annual salary, monthly for monthly paychecks, or bi-weekly if you're paid every two weeks." />
              </label>
              <Select
                value={inputs.payPeriod}
                onValueChange={(value) =>
                  updateInput('payPeriod', value as TakeHomePayInputs['payPeriod'])
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="yearly">Yearly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="biweekly">Bi-weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                Filing Status
                <Tooltip content="Your tax filing status affects your tax brackets and standard deduction. Single is for unmarried individuals, Married is for married couples filing jointly." />
              </label>
              <Select
                value={inputs.filingStatus}
                onValueChange={(value) =>
                  updateInput(
                    'filingStatus',
                    value as TakeHomePayInputs['filingStatus']
                  )
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="married">Married</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                State
                <Tooltip content="The state where you work and pay taxes. State income tax rates vary, and some states (like Florida, Texas, and Nevada) don't have state income tax." />
              </label>
              <Select
                value={inputs.state}
                onValueChange={(value) => updateInput('state', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="max-h-[300px]">
                  {Object.keys(STATE_TAX_RATES)
                    .sort()
                    .map((st) => (
                      <SelectItem key={st} value={st}>
                        {st}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                Dependents
                <Tooltip content="The number of qualifying children or dependents you claim on your tax return. Each dependent can reduce your tax liability through the child tax credit." />
              </label>
              <Input
                type="number"
                value={inputs.dependents}
                onChange={(e) => updateInput('dependents', e.target.value)}
                placeholder="0"
                min="0"
              />
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              <Checkbox
                id="social-security"
                checked={inputs.includeSocialSecurity}
                onCheckedChange={(checked) =>
                  updateInput('includeSocialSecurity', checked === true)
                }
              />
              <label
                htmlFor="social-security"
                className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
              >
                Include Social Security Tax (6.2%)
                <Tooltip content="Social Security tax is 6.2% of your income up to $168,600 (2025 limit). Most employees pay this, but some government workers and certain other groups are exempt." />
              </label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox
                id="medicare"
                checked={inputs.includeMedicare}
                onCheckedChange={(checked) =>
                  updateInput('includeMedicare', checked === true)
                }
              />
              <label
                htmlFor="medicare"
                className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
              >
                Include Medicare Tax (1.45% + 0.9% over $200k)
                <Tooltip content="Medicare tax is 1.45% of all your income. If you earn over $200,000 (single) or $250,000 (married), you pay an additional 0.9% on income above that threshold." />
              </label>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pre-Tax Deductions */}
      <Card>
        <CardHeader
          className="cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => toggleSection('preTax')}
        >
          <div className="flex items-center justify-between">
            <CardTitle>Pre-Tax Deductions</CardTitle>
            <motion.div
              animate={{ rotate: expandedSections.preTax ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {expandedSections.preTax ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </motion.div>
          </div>
          <p className="text-sm text-gray-600 mt-1">Reduce your taxable income</p>
        </CardHeader>
        <AnimatePresence>
          {expandedSections.preTax && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  401(k) / 403(b) Contribution
                  <Tooltip content="The amount you contribute to your retirement account. You can enter either a dollar amount per pay period or a percentage of your gross income. This reduces your taxable income, so you pay less in taxes now." />
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    {inputs.retirement401kMode === 'dollar' ? (
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        $
                      </span>
                    ) : (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                        %
                      </span>
                    )}
                    <Input
                      type="text"
                      value={inputs.retirement401k}
                      onChange={(e) =>
                        handleNumberInput('retirement401k', e.target.value)
                      }
                      placeholder={inputs.retirement401kMode === 'dollar' ? '500' : '5'}
                      className={inputs.retirement401kMode === 'dollar' ? 'pl-8' : 'pr-8'}
                    />
                  </div>
                  <Select
                    value={inputs.retirement401kMode}
                    onValueChange={(value) =>
                      updateInput('retirement401kMode', value as 'dollar' | 'percentage')
                    }
                  >
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dollar">$</SelectItem>
                      <SelectItem value="percentage">%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  HSA / FSA Contribution
                  <Tooltip content="Health Savings Account (HSA) or Flexible Spending Account (FSA) contributions. These are pre-tax deductions used for medical expenses. You can enter either a dollar amount per pay period or a percentage of your gross income." />
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    {inputs.hsaContributionMode === 'dollar' ? (
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                        $
                      </span>
                    ) : (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                        %
                      </span>
                    )}
                    <Input
                      type="text"
                      value={inputs.hsaContribution}
                      onChange={(e) =>
                        handleNumberInput('hsaContribution', e.target.value)
                      }
                      placeholder={inputs.hsaContributionMode === 'dollar' ? '200' : '2'}
                      className={inputs.hsaContributionMode === 'dollar' ? 'pl-8' : 'pr-8'}
                    />
                  </div>
                  <Select
                    value={inputs.hsaContributionMode}
                    onValueChange={(value) =>
                      updateInput('hsaContributionMode', value as 'dollar' | 'percentage')
                    }
                  >
                    <SelectTrigger className="w-24">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dollar">$</SelectItem>
                      <SelectItem value="percentage">%</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                Pre-Tax Health Insurance Premium
                <Tooltip content="Health insurance premiums that are deducted from your paycheck before taxes. This reduces your taxable income. You can enter either a dollar amount per pay period or a percentage of your gross income." />
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  {inputs.preTaxHealthInsuranceMode === 'dollar' ? (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                      $
                    </span>
                  ) : (
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                      %
                    </span>
                  )}
                  <Input
                    type="text"
                    value={inputs.preTaxHealthInsurance}
                    onChange={(e) =>
                      handleNumberInput('preTaxHealthInsurance', e.target.value)
                    }
                    placeholder={inputs.preTaxHealthInsuranceMode === 'dollar' ? '300' : '3'}
                    className={inputs.preTaxHealthInsuranceMode === 'dollar' ? 'pl-8' : 'pr-8'}
                  />
                </div>
                <Select
                  value={inputs.preTaxHealthInsuranceMode}
                  onValueChange={(value) =>
                    updateInput('preTaxHealthInsuranceMode', value as 'dollar' | 'percentage')
                  }
                >
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dollar">$</SelectItem>
                    <SelectItem value="percentage">%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* Post-Tax Deductions */}
      <Card>
        <CardHeader
          className="cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => toggleSection('postTax')}
        >
          <div className="flex items-center justify-between">
            <CardTitle>Post-Tax Deductions</CardTitle>
            <motion.div
              animate={{ rotate: expandedSections.postTax ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {expandedSections.postTax ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </motion.div>
          </div>
          <p className="text-sm text-gray-600 mt-1">Deductions after taxes</p>
        </CardHeader>
        <AnimatePresence>
          {expandedSections.postTax && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  Post-Tax Health/Dental/Vision
                  <Tooltip content="Health, dental, or vision insurance premiums that are deducted after taxes are calculated. These don't reduce your taxable income. Enter the amount per pay period." />
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    type="text"
                    value={inputs.postTaxHealthInsurance}
                    onChange={(e) =>
                      handleNumberInput('postTaxHealthInsurance', e.target.value)
                    }
                    placeholder="100"
                    className="pl-8"
                  />
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                  Life/Disability Insurance
                  <Tooltip content="Life insurance or disability insurance premiums deducted from your paycheck. These are typically post-tax deductions. Enter the amount per pay period." />
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    type="text"
                    value={inputs.lifeInsurance}
                    onChange={(e) =>
                      handleNumberInput('lifeInsurance', e.target.value)
                    }
                    placeholder="50"
                    className="pl-8"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                Other Deductions (Union Dues, Garnishments, etc.)
                <Tooltip content="Any other deductions from your paycheck, like union dues, wage garnishments, or other post-tax deductions. Enter the total amount per pay period." />
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <Input
                  type="text"
                  value={inputs.otherDeductions}
                  onChange={(e) =>
                    handleNumberInput('otherDeductions', e.target.value)
                  }
                  placeholder="0"
                  className="pl-8"
                />
              </div>
            </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* Advanced Settings */}
      <Card>
        <CardHeader
          className="cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => toggleSection('advanced')}
        >
          <div className="flex items-center justify-between">
            <CardTitle>Advanced Settings</CardTitle>
            <motion.div
              animate={{ rotate: expandedSections.advanced ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {expandedSections.advanced ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </motion.div>
          </div>
        </CardHeader>
        <AnimatePresence>
          {expandedSections.advanced && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <CardContent className="space-y-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                Additional Withholding per Period
                <Tooltip content="Extra federal tax you want withheld from each paycheck. You might do this if you expect to owe taxes at the end of the year or want a larger refund. Enter the amount per pay period." />
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <Input
                  type="text"
                  value={inputs.additionalWithholding}
                  onChange={(e) =>
                    handleNumberInput('additionalWithholding', e.target.value)
                  }
                  placeholder="0"
                  className="pl-8"
                />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Checkbox
                  id="local-tax"
                  checked={inputs.hasLocalTax}
                  onCheckedChange={(checked) =>
                    updateInput('hasLocalTax', checked === true)
                  }
                />
                <label
                  htmlFor="local-tax"
                  className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer"
                >
                  I pay local/city income tax
                  <Tooltip content="Some cities and local jurisdictions charge income tax in addition to state and federal taxes. Check your pay stub or local tax office to see if this applies to you." />
                </label>
              </div>

              <AnimatePresence>
                {inputs.hasLocalTax && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div>
                      <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
                        Local Tax Rate (%)
                        <Tooltip content="The percentage rate for your local or city income tax. This is usually a flat percentage of your taxable income. You can find this on your pay stub or by contacting your local tax office." />
                      </label>
                      <Input
                        type="text"
                        value={inputs.localTaxRate}
                        onChange={(e) =>
                          handleNumberInput('localTaxRate', e.target.value)
                        }
                        placeholder="2.5"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Button
          onClick={handleCalculate}
          className="flex-1 h-12 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-base font-medium"
        >
          <Calculator className="w-5 h-5" />
          Calculate Take-Home Pay
        </Button>
        <Button
          onClick={handleReset}
          variant="outline"
          className="sm:w-auto h-12 px-6 rounded-lg text-base font-medium"
        >
          <RotateCcw className="w-4 h-4" />
          Reset
        </Button>
      </div>

      {/* Privacy Notice */}
      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
        <Shield className="w-4 h-4 text-emerald-600" />
        <span>Your data is saved locally and never leaves your device.</span>
      </div>

      {/* Results Section */}
      <AnimatePresence>
        {showResults && results && results.annualGross > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6 pt-6 border-t border-gray-200"
          >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px flex-1 bg-gray-200" />
            <h2 className="text-xl font-semibold text-gray-900">
              Your Take-Home Pay
            </h2>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* View Toggle */}
          <div className="flex justify-center gap-2">
            <Button
              variant={viewMode === 'annual' ? 'default' : 'outline'}
              onClick={() => setViewMode('annual')}
              className={
                viewMode === 'annual'
                  ? 'bg-emerald-600 hover:bg-emerald-700'
                  : ''
              }
            >
              Annual
            </Button>
            <Button
              variant={viewMode === 'paycheck' ? 'default' : 'outline'}
              onClick={() => setViewMode('paycheck')}
              className={
                viewMode === 'paycheck'
                  ? 'bg-emerald-600 hover:bg-emerald-700'
                  : ''
              }
            >
              Per Paycheck
            </Button>
          </div>

          {/* Main Results */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <Card className="bg-emerald-50 border-emerald-200">
              <CardContent className="p-6">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">
                  {viewMode === 'annual'
                    ? 'Annual'
                    : inputs.payPeriod === 'monthly'
                      ? 'Monthly'
                      : 'Bi-weekly'}{' '}
                  Take-Home
                </p>
                <p className="text-4xl font-bold text-emerald-700 mb-4">
                  $
                  {(viewMode === 'annual'
                    ? results.annualTakeHome
                    : inputs.payPeriod === 'monthly'
                      ? results.monthlyTakeHome
                      : results.biweeklyTakeHome
                  ).toLocaleString('en-US', {
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  })}
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-emerald-200">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Annual</p>
                    <p className="text-lg font-semibold text-gray-900">
                      $
                      {results.annualTakeHome.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Monthly</p>
                    <p className="text-lg font-semibold text-gray-900">
                      $
                      {results.monthlyTakeHome.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Bi-weekly</p>
                    <p className="text-lg font-semibold text-gray-900">
                      $
                      {results.biweeklyTakeHome.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </p>
                  </div>
                </div>
              </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Detailed Breakdown */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Card>
              <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Detailed Breakdown
                </h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Gross Income</span>
                  <span className="font-semibold text-gray-900">
                    $
                    {results.annualGross.toLocaleString('en-US', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>

                {results.totalPreTaxDeductions > 0 && (
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Pre-Tax Deductions</span>
                    <span className="text-blue-600">
                      -$
                      {results.totalPreTaxDeductions.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </span>
                  </div>
                )}

                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Federal Income Tax</span>
                  <span className="text-red-600">
                    -$
                    {results.federalTax.toLocaleString('en-US', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>

                {inputs.includeSocialSecurity && (
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">
                      Social Security (6.2%)
                    </span>
                    <span className="text-red-600">
                      -$
                      {results.socialSecurity.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </span>
                  </div>
                )}

                {inputs.includeMedicare && (
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">
                      Medicare (1.45%
                      {results.additionalMedicare > 0 ? ' + 0.9%' : ''})
                    </span>
                    <span className="text-red-600">
                      -$
                      {(results.medicare + results.additionalMedicare).toLocaleString(
                        'en-US',
                        {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        }
                      )}
                    </span>
                  </div>
                )}

                {results.stateTax > 0 && (
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">
                      State Tax ({inputs.state})
                    </span>
                    <span className="text-red-600">
                      -$
                      {results.stateTax.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </span>
                  </div>
                )}

                {results.localTax > 0 && (
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Local Tax</span>
                    <span className="text-red-600">
                      -$
                      {results.localTax.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </span>
                  </div>
                )}

                {parseFloat(inputs.additionalWithholding) > 0 && (
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">
                      Additional Withholding
                    </span>
                    <span className="text-red-600">
                      -$
                      {(() => {
                        const annual =
                          inputs.payPeriod === 'yearly'
                            ? parseFloat(inputs.additionalWithholding) || 0
                            : inputs.payPeriod === 'monthly'
                              ? (parseFloat(inputs.additionalWithholding) || 0) *
                                12
                              : (parseFloat(inputs.additionalWithholding) || 0) *
                                26
                        return annual.toLocaleString('en-US', {
                          minimumFractionDigits: 0,
                          maximumFractionDigits: 0,
                        })
                      })()}
                    </span>
                  </div>
                )}

                {results.totalPostTaxDeductions > 0 && (
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Post-Tax Deductions</span>
                    <span className="text-orange-600">
                      -$
                      {results.totalPostTaxDeductions.toLocaleString('en-US', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0,
                      })}
                    </span>
                  </div>
                )}

                <div className="flex justify-between py-3 border-t-2 border-gray-300 font-bold text-lg">
                  <span className="text-gray-900">Total Taxes</span>
                  <span className="text-red-600">
                    -$
                    {results.totalTaxes.toLocaleString('en-US', {
                      minimumFractionDigits: 0,
                      maximumFractionDigits: 0,
                    })}
                  </span>
                </div>

                <div className="bg-gray-50 rounded-lg p-3 mt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">
                      Effective Tax Rate
                    </span>
                    <span className="text-lg font-semibold text-emerald-600">
                      {results.effectiveTaxRate.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>
              </CardContent>
            </Card>
          </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

