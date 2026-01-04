"use client";

import { ArrowRight, Calculator, DollarSign, Sparkles } from "lucide-react";
import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

type Tool = {
  icon: typeof Calculator;
  title: string;
  description: string;
  link: string;
  status: "live" | "coming-soon";
  gradient: string;
  pill?: string;
};

const tools: Tool[] = [
  {
    icon: Calculator,
    title: "Monthly Budget Planner & Cash Flow Calculator",
    description:
      "Take control of your monthly spending. Use this tool to track expenses, identify savings opportunities, and visualize your cash flow in real-time.",
    link: "/tools/monthly-budget",
    status: "live",
    gradient: "from-emerald-500 to-teal-500",
    pill: "Popular",
  },
  {
    icon: Calculator,
    title: "50/30/20 Rule Calculator for Beginners",
    description:
      "Simplify your finances using the popular 50/30/20 budgeting method. Automatically allocate your income toward Needs (50%), Wants (30%), and Financial Goals (20%).",
    link: "/tools/50-30-20",
    status: "live",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: DollarSign,
    title: "Salary & Take-Home Pay Calculator (After-Tax)",
    description:
      "Calculate your net income after federal and state taxes. Perfect for planning your budget based on your actual paycheck instead of your gross salary.",
    link: "/tools/take-home-pay-calculator",
    status: "live",
    gradient: "from-sky-500 to-blue-500",
  },
];

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
                Free Personal Finance Tools & Budgeting Calculators
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Master your money with simple, ad-free financial tools. From calculating your
                take-home pay to mastering the 50/30/20 rule, our clear-cut calculators help you
                make informed financial decisions without the stress
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
              const Icon = tool.icon;
              const isComingSoon = tool.status === "coming-soon";

              return (
                <div
                  key={tool.title}
                  className={`glass-card p-8 lg:p-9 h-full flex flex-col transition-all duration-300 ${
                    isComingSoon ? "opacity-80" : "hover:-translate-y-1 hover:shadow-glow"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4 mb-6 min-h-[80px]">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-linear-to-br ${tool.gradient} flex items-center justify-center shrink-0`}
                        aria-label={`Icon for ${tool.title.toLowerCase()}`}
                      >
                        <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                          {isComingSoon ? "Coming soon" : "Live tool"}
                        </p>
                        <h2 className="font-display text-2xl font-semibold text-foreground">
                          {tool.title}
                        </h2>
                      </div>
                    </div>
                    {tool.pill ? (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium shrink-0">
                        {tool.pill}
                      </span>
                    ) : (
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium shrink-0 opacity-0 pointer-events-none">
                        Placeholder
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                    {tool.description}
                  </p>

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
              );
            })}
          </div>

          <div className="max-w-4xl mx-auto mt-20 space-y-8">
            <div className="text-center space-y-4">
              <h2 className="font-display text-3xl font-semibold text-foreground">
                Financial Success Starts with the Right Tools
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Managing your money shouldn&apos;t feel like a chore. Our free financial calculators
                are designed to give you instant clarity on your cash flow, helping you bridge the
                gap between financial goals and daily spending.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <h3 className="font-display text-2xl font-semibold text-foreground text-center">
                Frequently Asked Questions
              </h3>
              <Accordion
                items={[
                  {
                    question: "What is the best way to start a monthly budget?",
                    answer:
                      'The most effective way to start is by tracking your actual income and expenses for 30 days. Use a monthly budget planner to categorize your spending into "fixed" costs (like rent) and "variable" costs (like dining out) to see exactly where your money goes.',
                  },
                  {
                    question: "How does the 50/30/20 budgeting rule work?",
                    answer: (
                      <>
                        The 50/30/20 rule is a simple financial framework where you allocate 50% of
                        your income to needs, 30% to wants, and 20% to savings or debt repayment. It
                        is an ideal method for beginners who want a balanced lifestyle without
                        complex tracking.{" "}
                        <Link
                          href="/tools/50-30-20"
                          className="text-primary hover:underline font-medium"
                        >
                          Ready to try it? Use our 50/30/20 Calculator above.
                        </Link>
                      </>
                    ),
                  },
                  {
                    question: "How do I calculate my actual take-home pay?",
                    answer:
                      'To find your net take-home pay, you must subtract federal, state, and local taxes, as well as FICA and healthcare deductions, from your gross salary. Knowing your "after-tax" income is the only way to build an accurate budget that prevents overspending.',
                  },
                  {
                    question: "Why should I use a financial calculator instead of a spreadsheet?",
                    answer:
                      'While spreadsheets are powerful, interactive financial tools provide instant visualizations and "what-if" scenarios. They allow you to quickly see how a small change in spending today can lead to significant savings over time—without the risk of manual formula errors.',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
