'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingDown, ArrowRight, Clock, Calculator } from 'lucide-react';

export default function TakeHomePayCalculatorPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center mx-auto mb-6">
            <TrendingDown className="w-8 h-8 text-violet-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Debt Payoff
            <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent"> Calculator</span>
          </h1>
          
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Calculate how long it will take to pay off your debt using the debt snowball or avalanche method. 
            Compare different payment strategies and see how much interest you'll save.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-0 shadow-sm bg-slate-100 rounded-2xl">
            <CardContent className="p-8 text-center">
              <Clock className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Coming Soon</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We're building this calculator to help you create a personalized debt payoff plan. 
                In the meantime, use our budget calculator to track your spending and find extra money to put toward debt.
              </p>
              <Link href="/tools/monthly-budget">
                <Button className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl">
                  <Calculator className="w-4 h-4 mr-2" />
                  Try Budget Calculator
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>


      </div>
    </div>
  );
}