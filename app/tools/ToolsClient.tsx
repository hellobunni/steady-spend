'use client'

import Link from 'next/link'
import { Calculator, DollarSign, ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

type Tool = {
  icon: typeof Calculator
  title: string
  description: string
  link: string
  status: 'live' | 'coming-soon'
  gradient: string
  pill?: string
}

const tools: Tool[] = [
  {
    icon: Calculator,
    title: 'Monthly Budget Calculator',
    description:
      'Create a personalized budget, balance your categories, and see how changes affect your monthly cash flow.',
    link: '/tools/monthly-budget',
    status: 'live',
    gradient: 'from-emerald-500 to-teal-500',
    pill: 'Popular',
  },
  {
    icon: Calculator,
    title: '50/30/20 Budget Calculator',
    description:
      'Split your income into 50% needs, 30% wants, and 20% savings. A simple budgeting method for beginners.',
    link: '/tools/50-30-20',
    status: 'live',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    icon: DollarSign,
    title: 'Take-Home Pay Calculator',
    description:
      'Estimate what actually lands in your account after taxes and deductions so you can plan with confidence.',
    link: '/tools/take-home-pay-calculator',
    status: 'coming-soon',
    gradient: 'from-sky-500 to-blue-500',
  },
]

export default function ToolsClient() {
  return (
    <div className="bg-white">
      <section className="py-16 lg:py-24 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary">
              <Sparkles className="w-4 h-4" />
              Free financial tools
            </span>
            <div className="space-y-4">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground">
                Financial calculators that feel calm and clear
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Pick a calculator, adjust a few numbers, and see where your money goes. No accounts,
                no pressure—just straightforward guidance.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-foreground">
              <span className="px-3 py-1 rounded-full bg-white/70 border border-border/60">
                No sign-up needed
              </span>
              <span className="px-3 py-1 rounded-full bg-white/70 border border-border/60">
                Runs in your browser
              </span>
              <span className="px-3 py-1 rounded-full bg-white/70 border border-border/60">
                Reset anytime
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
            {tools.map((tool) => {
              const Icon = tool.icon
              const isComingSoon = tool.status === 'coming-soon'

              return (
                <div
                  key={tool.title}
                  className={`glass-card p-8 lg:p-9 h-full flex flex-col transition-all duration-300 ${
                    isComingSoon ? 'opacity-80' : 'hover:-translate-y-1 hover:shadow-glow'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-6 min-h-[80px]">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-linear-to-br ${tool.gradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                          {isComingSoon ? 'Coming soon' : 'Live tool'}
                        </p>
                        <h2 className="font-display text-2xl font-semibold text-foreground">
                          {tool.title}
                        </h2>
                      </div>
                    </div>
                    {tool.pill ? (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium flex-shrink-0">
                        {tool.pill}
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium flex-shrink-0 opacity-0 pointer-events-none">
                        Placeholder
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">{tool.description}</p>

                  <div className="flex flex-wrap items-center gap-3 mt-auto">
                    {isComingSoon ? (
                      <Button variant="outline" disabled className="w-full sm:w-auto">
                        Coming Soon
                      </Button>
                    ) : (
                      <Button asChild className="w-full sm:w-auto group">
                        <Link href={tool.link}>
                          Open calculator
                          <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="max-w-4xl mx-auto mt-14 text-center space-y-3">
            <h3 className="font-display text-2xl font-semibold text-foreground">
              More calm money tools are on the way
            </h3>
            <p className="text-muted-foreground">
              We&apos;re adding payoff planners, savings trackers, and gentle reminders to help you
              stay consistent. Have a request? Reach out and we&apos;ll prioritize it.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
