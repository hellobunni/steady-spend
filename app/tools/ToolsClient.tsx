'use client'

import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calculator, ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'motion/react'

export default function ToolsClient() {
  const tools = [
    {
      icon: Calculator,
      title: 'Monthly Budget Calculator',
      description:
        'Track your income and expenses. See where your money goes and how much you can save each month.',
      link: '/tools/monthly-budget',
      tags: ['Budgeting', 'Planning'],
      status: 'available',
    },
    // Placeholder for future tools
  ]

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Free Financial Tools
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Smart Tools for
            <span className="bg-linear-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent">
              {' '}
              Better Decisions
            </span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Simple calculators and tools to help you understand your finances and make confident
            choices.
          </p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-sm bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-linear-to-br from-emerald-100 to-emerald-50 flex items-center justify-center shrink-0">
                        <tool.icon className="w-7 h-7 text-emerald-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-semibold text-gray-900 mb-2">
                          {tool.title}
                        </CardTitle>
                        <div className="flex gap-2 mb-3">
                          {tool.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                  <Link href={tool.link}>
                    <Button className="bg-linear-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl">
                      Use This Tool
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Card className="border-0 shadow-sm bg-linear-to-br from-gray-50 to-emerald-50/30 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">More Tools Coming Soon</h3>
              <p className="text-gray-600">
                We&apos;re working on more calculators and tools to help you with savings, debt
                payoff, retirement planning, and more.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
