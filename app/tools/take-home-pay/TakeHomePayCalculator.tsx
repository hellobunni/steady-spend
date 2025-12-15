'use client'

import { useState, useEffect } from 'react'
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

export default function TakeHomePayCalculator() {
  const [inputs, setInputs] = useState<TakeHomePayInputs>(() =>
    loadTakeHomePayData()
  )
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
      hsaContribution: '',
      preTaxHealthInsurance: '',
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Gross Income
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pay Period
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filing Status
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                State
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Dependents
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
                className="text-sm text-gray-700 cursor-pointer"
              >
                Include Social Security Tax (6.2%)
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
                className="text-sm text-gray-700 cursor-pointer"
              >
                Include Medicare Tax (1.45% + 0.9% over $200k)
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
            {expandedSections.preTax ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">Reduce your taxable income</p>
        </CardHeader>
        {expandedSections.preTax && (
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  401(k) / 403(b) Contribution
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    type="text"
                    value={inputs.retirement401k}
                    onChange={(e) =>
                      handleNumberInput('retirement401k', e.target.value)
                    }
                    placeholder="500"
                    className="pl-8"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  HSA / FSA Contribution
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <Input
                    type="text"
                    value={inputs.hsaContribution}
                    onChange={(e) =>
                      handleNumberInput('hsaContribution', e.target.value)
                    }
                    placeholder="200"
                    className="pl-8"
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pre-Tax Health Insurance Premium
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
                  $
                </span>
                <Input
                  type="text"
                  value={inputs.preTaxHealthInsurance}
                  onChange={(e) =>
                    handleNumberInput('preTaxHealthInsurance', e.target.value)
                  }
                  placeholder="300"
                  className="pl-8"
                />
              </div>
            </div>
          </CardContent>
        )}
      </Card>

      {/* Post-Tax Deductions */}
      <Card>
        <CardHeader
          className="cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => toggleSection('postTax')}
        >
          <div className="flex items-center justify-between">
            <CardTitle>Post-Tax Deductions</CardTitle>
            {expandedSections.postTax ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">Deductions after taxes</p>
        </CardHeader>
        {expandedSections.postTax && (
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Post-Tax Health/Dental/Vision
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Life/Disability Insurance
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Other Deductions (Union Dues, Garnishments, etc.)
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
        )}
      </Card>

      {/* Advanced Settings */}
      <Card>
        <CardHeader
          className="cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => toggleSection('advanced')}
        >
          <div className="flex items-center justify-between">
            <CardTitle>Advanced Settings</CardTitle>
            {expandedSections.advanced ? (
              <ChevronUp className="w-5 h-5 text-gray-500" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500" />
            )}
          </div>
        </CardHeader>
        {expandedSections.advanced && (
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Withholding per Period
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
                  className="text-sm text-gray-700 cursor-pointer"
                >
                  I pay local/city income tax
                </label>
              </div>

              {inputs.hasLocalTax && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Local Tax Rate (%)
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
              )}
            </div>
          </CardContent>
        )}
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
      {showResults && results && results.annualGross > 0 && (
        <div className="space-y-6 pt-6 border-t border-gray-200">
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

          {/* Detailed Breakdown */}
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
        </div>
      )}
    </div>
  )
}

