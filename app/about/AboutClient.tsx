"use client";

import { Mail, Shield } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const trustSignals = [
  {
    emoji: "💡",
    title: "Education, not advice",
    description: "Everything I share is meant to help you learn and think through your options, not tell you what to do.",
  },
  {
    emoji: "🔍",
    title: "Clear disclosures",
    description: "If I ever use affiliate links, you'll always know—no hidden incentives, ever.",
  },
  {
    emoji: "📚",
    title: "Fact-checked & refreshed",
    description: "Content is carefully researched and reviewed regularly so it stays accurate and relevant.",
  },
  {
    emoji: "🧠",
    title: "Real experiences, shared openly",
    description: "When I talk about my own money journey, I'm transparent about what worked, what didn't, and what I'm still learning.",
  },
  {
    emoji: "💬",
    title: "Open communication",
    description: "Questions are always welcome. SteadySpend is a conversation, not a lecture.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
  mass: 1,
};

export default function AboutClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero opacity-50" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Author Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...springTransition, delay: 0.2 }}
              className="order-2 lg:order-1 flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 sm:w-80 sm:h-80 rounded-2xl bg-linear-to-br from-primary/20 to-primary/5 border border-border/50 overflow-hidden">
                  <Image
                    src="/headshot-v2.png"
                    alt="Lynae Thomas"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              </div>
            </motion.div>

            {/* Author Intro */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...springTransition, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <p className="text-primary font-medium mb-2">Meet Your Guide ✨</p>
              <h1 className="font-display text-4xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Hi, I&apos;m Lynae👋🏽
              </h1>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                In my 20s, I was earning decent money but still living paycheck to paycheck. Bills felt confusing, spending felt emotional, and budgeting advice online felt… not made for real life. So I did what I always do when something doesn&apos;t make sense—I got curious 🔍
              </p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                I started tracking where my money was actually going, questioning my habits without shame, and building systems that worked with my life instead of against it.
              </p>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Today, I help everyday people take control of their spending without complicated spreadsheets, guilt-driven rules, or restrictive budgets. My approach is practical, judgment-free, and rooted in real experience—not perfection 💫
              </p>
              <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                SteadySpend is here to help you understand your money, feel confident about your choices, and build habits that actually stick.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="gradient-primary text-primary-foreground shadow-glow">
                  <Link href="/blog">Read My Articles</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section - Trustworthiness */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              {...fadeInUp}
              transition={{ ...springTransition }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                <Shield className="w-4 h-4" />
                My Promise to You 🤍
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Transparency & Trust
              </h2>
              <p className="text-muted-foreground">
                I believe financial education should feel honest, supportive, and empowering—not confusing or salesy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="font-semibold text-foreground mb-6">
                Here&apos;s what you can always expect from me:
              </h3>
              <ul className="space-y-5">
                {trustSignals.map((signal) => (
                  <li key={signal.title} className="flex items-start gap-3">
                    <span className="text-xl shrink-0 mt-0.5">{signal.emoji}</span>
                    <div>
                      <span className="font-medium text-foreground">{signal.title}</span>
                      <p className="text-sm text-muted-foreground mt-1">{signal.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-border">
                <div className="text-center mb-4">
                  <span className="text-muted-foreground">⸻</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Friendly Disclaimer ✨</strong> The content on
                  SteadySpend is for educational purposes only and should not be considered
                  professional financial advice. I&apos;m a financial educator, not a licensed
                  financial advisor. Always consult a qualified professional for guidance specific to your personal situation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            {...fadeInUp}
            transition={{ ...springTransition }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <Mail className="w-4 h-4" />
              Let&apos;s Connect
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              I love hearing from readers! Whether you have a question about an article, want to
              suggest a topic, or just want to say hi—I&apos;d love to hear from you.
            </p>
            <Button
              asChild
              size="lg"
              className="gradient-primary text-primary-foreground shadow-glow"
            >
              <Link href="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Send Me a Message
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
