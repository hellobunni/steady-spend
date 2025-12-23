'use client'

import { Calculator, PieChart, Wallet, TrendingUp, Target, Shield } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Calculator,
    title: "Budget Calculator",
    description: "Create personalized budgets based on your income and spending habits.",
    href: "/tools/monthly-budget",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: PieChart,
    title: "Expense Tracking",
    description: "Visualize where your money goes with intuitive charts and breakdowns.",
    href: "/tools",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Wallet,
    title: "Smart Savings",
    description: "Automated savings suggestions to help you reach your goals faster.",
    href: "/tools",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: TrendingUp,
    title: "Financial Insights",
    description: "AI-powered insights that help you make smarter financial decisions.",
    href: "/blog",
    color: "from-lime-500 to-green-600",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set and track financial goals with milestone celebrations.",
    href: "/tools",
    color: "from-emerald-400 to-teal-600",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description: "Bank-level encryption keeps your financial data safe and secure.",
    href: "/tools",
    color: "from-green-600 to-emerald-700",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-emerald-700">Master Your Money</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful tools designed to simplify your finances and help you build lasting wealth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Link
                key={feature.title}
                href={feature.href}
                className="group glass-card p-6 lg:p-8 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

