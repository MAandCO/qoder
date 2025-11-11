'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Calculator, Info, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface TaxCalculation {
  grossIncome: number;
  personalAllowance: number;
  taxableIncome: number;
  incomeTax: number;
  nationalInsurance: number;
  totalTax: number;
  netIncome: number;
  effectiveRate: number;
}

export default function TaxEstimatorPage() {
  const [income, setIncome] = useState<string>('');
  const [employmentType, setEmploymentType] = useState<string>('');
  const [pensionContributions, setPensionContributions] = useState<string>('');
  const [calculation, setCalculation] = useState<TaxCalculation | null>(null);

  const calculateTax = () => {
    const grossIncome = parseFloat(income) || 0;
    const pension = parseFloat(pensionContributions) || 0;
    
    // 2024/25 tax rates and allowances
    const personalAllowance = grossIncome > 125140 ? 0 : 
                             grossIncome > 100000 ? Math.max(0, 12570 - ((grossIncome - 100000) * 0.5)) : 
                             12570;
    
    const adjustedIncome = grossIncome - pension;
    const taxableIncome = Math.max(0, adjustedIncome - personalAllowance);
    
    // Income tax calculation
    let incomeTax = 0;
    if (taxableIncome > 125140) {
      incomeTax = 37700 + (taxableIncome - 125140) * 0.45; // Additional rate 45%
    } else if (taxableIncome > 50270) {
      incomeTax = 7540 + (taxableIncome - 50270) * 0.40; // Higher rate 40%
    } else {
      incomeTax = taxableIncome * 0.20; // Basic rate 20%
    }
    
    // National Insurance calculation (2024/25)
    let nationalInsurance = 0;
    if (employmentType === 'employed') {
      if (grossIncome > 50270) {
        nationalInsurance = (50270 - 12570) * 0.12 + (grossIncome - 50270) * 0.02;
      } else if (grossIncome > 12570) {
        nationalInsurance = (grossIncome - 12570) * 0.12;
      }
    } else if (employmentType === 'self-employed') {
      // Class 2 NI
      const class2 = grossIncome >= 6515 ? 164 : 0;
      // Class 4 NI
      let class4 = 0;
      if (grossIncome > 50270) {
        class4 = (50270 - 12570) * 0.09 + (grossIncome - 50270) * 0.02;
      } else if (grossIncome > 12570) {
        class4 = (grossIncome - 12570) * 0.09;
      }
      nationalInsurance = class2 + class4;
    }
    
    const totalTax = incomeTax + nationalInsurance;
    const netIncome = grossIncome - totalTax;
    const effectiveRate = grossIncome > 0 ? (totalTax / grossIncome) * 100 : 0;
    
    setCalculation({
      grossIncome,
      personalAllowance,
      taxableIncome,
      incomeTax,
      nationalInsurance,
      totalTax,
      netIncome,
      effectiveRate
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 mb-12">
        <div className="flex justify-center mb-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Calculator className="h-8 w-8" />
          </div>
        </div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          UK Tax Estimator
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Calculate your estimated income tax and National Insurance contributions for the 2024/25 tax year. 
          Get an instant estimate of your tax liability.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Calculator Form */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calculator className="mr-2 h-5 w-5" />
              Tax Calculator
            </CardTitle>
            <CardDescription>
              Enter your details below to calculate your estimated tax liability for 2024/25.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="income">Annual Gross Income *</Label>
              <Input
                id="income"
                type="number"
                placeholder="e.g. 50000"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Enter your total income before tax and deductions
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="employment-type">Employment Type *</Label>
              <Select value={employmentType} onValueChange={setEmploymentType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select employment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employed">Employed (PAYE)</SelectItem>
                  <SelectItem value="self-employed">Self-Employed</SelectItem>
                  <SelectItem value="director">Company Director</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="pension">Pension Contributions (Annual)</Label>
              <Input
                id="pension"
                type="number"
                placeholder="e.g. 5000"
                value={pensionContributions}
                onChange={(e) => setPensionContributions(e.target.value)}
              />
              <p className="text-xs text-muted-foreground">
                Workplace or personal pension contributions
              </p>
            </div>

            <Button 
              onClick={calculateTax} 
              className="w-full" 
              disabled={!income || !employmentType}
            >
              Calculate Tax
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="flex items-start space-x-2 p-4 bg-blue-50 dark:bg-blue-950 rounded-lg">
              <Info className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div className="text-sm text-blue-700 dark:text-blue-300">
                <p className="font-medium mb-1">Disclaimer</p>
                <p>
                  This calculator provides estimates based on 2024/25 tax rates and allowances. 
                  Results are for guidance only and should not be relied upon for tax planning. 
                  Consult a qualified accountant for accurate calculations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card>
          <CardHeader>
            <CardTitle>Tax Calculation Results</CardTitle>
            <CardDescription>
              {calculation ? 'Your estimated tax breakdown for 2024/25' : 'Complete the form to see your tax estimate'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {calculation ? (
              <div className="space-y-6">
                {/* Summary */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {formatCurrency(calculation.totalTax)}
                    </div>
                    <div className="text-sm text-muted-foreground">Total Tax</div>
                  </div>
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {formatCurrency(calculation.netIncome)}
                    </div>
                    <div className="text-sm text-muted-foreground">Take Home</div>
                  </div>
                </div>

                <Separator />

                {/* Detailed Breakdown */}
                <div className="space-y-4">
                  <h3 className="font-semibold">Detailed Breakdown</h3>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Gross Income</span>
                      <span className="font-medium">{formatCurrency(calculation.grossIncome)}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Personal Allowance</span>
                      <span>-{formatCurrency(calculation.personalAllowance)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Taxable Income</span>
                      <span className="font-medium">{formatCurrency(calculation.taxableIncome)}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between">
                      <span>Income Tax</span>
                      <span className="font-medium text-red-600">{formatCurrency(calculation.incomeTax)}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>National Insurance</span>
                      <span className="font-medium text-red-600">{formatCurrency(calculation.nationalInsurance)}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Net Income</span>
                      <span className="text-green-600">{formatCurrency(calculation.netIncome)}</span>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Effective Tax Rate</span>
                      <span>{calculation.effectiveRate.toFixed(1)}%</span>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Monthly Breakdown */}
                <div className="space-y-3">
                  <h3 className="font-semibold">Monthly Breakdown</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Monthly Gross</div>
                      <div className="font-medium">{formatCurrency(calculation.grossIncome / 12)}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Monthly Net</div>
                      <div className="font-medium text-green-600">{formatCurrency(calculation.netIncome / 12)}</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 text-muted-foreground">
                <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Enter your details to calculate your tax estimate</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Additional Information */}
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tax Planning Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <p className="text-sm">Maximise pension contributions to reduce taxable income</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <p className="text-sm">Consider salary sacrifice schemes for tax efficiency</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <p className="text-sm">Claim all available allowances and reliefs</p>
            </div>
            <div className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <p className="text-sm">Plan dividend vs salary for company directors</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Need Professional Help?</CardTitle>
            <CardDescription>
              Get expert tax planning advice from our qualified accountants
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              This calculator provides basic estimates. For comprehensive tax planning, 
              including allowances, reliefs, and strategies to minimise your tax burden, 
              speak to our expert team.
            </p>
            <div className="flex flex-col space-y-2">
              <Button asChild>
                <Link href="/contact">
                  Get Professional Advice
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/services/personal-tax">
                  Personal Tax Services
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}