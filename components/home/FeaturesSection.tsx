'use client'

import { Calculator, BookOpen, DollarSign, Lock, Sparkles, Heart, type LucideIcon } from "lucide-react";
import Link from "next/link";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  color: string;
  badge?: string;
};

const features: Feature[] = [
  {
    icon: Calculator,
    title: "Monthly Budget Calculator",
    description: "Create a personalized budget based on your income and expenses. Free and easy to use.",
    href: "/tools/monthly-budget",
    color: "from-primary to-accent",
    badge: "Live",
  },
  {
    icon: DollarSign,
    title: "Take Home Calculator",
    description: "Calculate your actual take-home pay after taxes and deductions.",
    href: "/tools",
    color: "from-accent to-primary",
    badge: "Coming Soon",
  },
  {
    icon: BookOpen,
    title: "Financial Insights",
    description: "Expert tips and guides to help you master budgeting, saving, and smart spending.",
    href: "/blog",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: Lock,
    title: "100% Private",
    description: "Your data stays on your device. No accounts, no tracking, no selling your info.",
    href: "#",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Sparkles,
    title: "Free Forever",
    description: "All our tools and content are completely free. No hidden fees or premium tiers.",
    href: "#",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Heart,
    title: "Made for Everyone",
    description: "Simple, jargon-free tools designed for real people, not finance experts.",
    href: "#",
    color: "from-lime-500 to-green-600",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
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
            <span className="text-transparent bg-clip-text gradient-primary">Master Your Money</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful tools designed to simplify your finances and help you build lasting wealth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isClickable = feature.href !== "#";

            const cardContent = (
              <>
                {feature.badge && (
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium mb-3 ${
                      feature.badge === "Live" ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {feature.badge}
                  </span>
                )}

                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 ${
                    isClickable ? "group-hover:scale-110" : ""
                  } transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3
                  className={`font-display font-semibold text-xl mb-2 text-foreground ${
                    isClickable ? "group-hover:text-primary" : ""
                  } transition-colors`}
                >
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </>
            );

            if (isClickable) {
              return (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="group glass-card p-6 lg:p-8 transition-all duration-300 hover:shadow-glow hover:-translate-y-1 cursor-pointer opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  {cardContent}
                </Link>
              );
            }

            return (
              <div
                key={feature.title}
                className="group glass-card p-6 lg:p-8 transition-all duration-300 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

