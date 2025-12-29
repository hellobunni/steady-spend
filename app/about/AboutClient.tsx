'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { 
  Award, 
  BookOpen, 
  Briefcase, 
  CheckCircle, 
  GraduationCap, 
  Heart, 
  Mail, 
  Shield, 
  TrendingUp,
  Users
} from 'lucide-react'
import { motion } from 'motion/react'

const credentials = [
  {
    icon: GraduationCap,
    title: "Bachelor's in Finance",
    description: "Formal education in financial planning and analysis",
  },
  {
    icon: Award,
    title: "Certified Financial Educator",
    description: "Accredited to teach personal finance fundamentals",
  },
  {
    icon: Briefcase,
    title: "10+ Years Experience",
    description: "Helping individuals and families manage their money",
  },
  {
    icon: Users,
    title: "1,000+ People Helped",
    description: "Through workshops, coaching, and content",
  },
]

const trustSignals = [
  "All advice is educational, not financial advice",
  "No affiliate links without disclosure",
  "Fact-checked and regularly updated content",
  "Transparent about personal experiences",
  "Easy to contact with questions",
]

const expertise = [
  "Budgeting & Cash Flow Management",
  "Debt Payoff Strategies",
  "Emergency Fund Planning",
  "Expense Tracking & Reduction",
  "Financial Goal Setting",
  "Beginner Investing Basics",
]

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 15,
  mass: 1,
}

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
                <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-border/50 overflow-hidden">
                  <Image
                    src="/headshot.jpeg"
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
              <p className="text-primary font-medium mb-2">Meet Your Guide</p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Hi, I&apos;m Lynae Thomas
              </h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I&apos;m a personal finance educator and the creator of SteadySpend. After struggling with my own finances in my 20s—living paycheck to paycheck despite a decent income—I became obsessed with understanding where money goes and how to make it work better.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, I help everyday people take control of their spending without complicated spreadsheets or restrictive budgets. My approach is practical, judgment-free, and based on real experience.
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

      {/* Experience Section - The "E" in E-E-A-T */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            transition={{ ...springTransition }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <Heart className="w-4 h-4" />
              My Story
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              From Financial Chaos to Clarity
            </h2>
          </motion.div>

          <motion.div 
            {...fadeInUp}
            transition={{ ...springTransition, delay: 0.1 }}
            className="max-w-3xl mx-auto space-y-6 text-muted-foreground"
          >
            <p className="text-lg leading-relaxed">
              In 2014, I was earning a good salary but had nothing to show for it. Credit card debt was growing, I had no emergency fund, and I dreaded checking my bank account. I felt embarrassed and stuck.
            </p>
            <p className="text-lg leading-relaxed">
              The turning point came when an unexpected car repair put me $2,000 deeper in debt. I realized I needed to completely rethink how I handled money. I read every book, took courses, and spent years testing different approaches.
            </p>
            <p className="text-lg leading-relaxed">
              Within three years, I paid off $28,000 in debt, built a six-month emergency fund, and finally felt in control. But more importantly, I discovered what actually works for regular people—not the overly complicated systems that financial experts love.
            </p>
            <p className="text-lg leading-relaxed">
              I started SteadySpend to share what I learned. Every article, tool, and resource here comes from real experience and genuine testing—not just theory.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Credentials Section - Expertise & Authoritativeness */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            {...fadeInUp}
            transition={{ ...springTransition }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
              <Award className="w-4 h-4" />
              Credentials
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why You Can Trust My Advice
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Formal education combined with real-world experience helping people just like you.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => {
              const Icon = credential.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...springTransition, delay: 0.1 + index * 0.1 }}
                  className="glass-card p-6 rounded-2xl text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{credential.title}</h3>
                  <p className="text-sm text-muted-foreground">{credential.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              {...fadeInUp}
              transition={{ ...springTransition }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                <TrendingUp className="w-4 h-4" />
                Areas of Focus
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                What I Write About
              </h2>
              <p className="text-muted-foreground mb-8">
                I focus on the fundamentals that make the biggest difference for everyday people. No get-rich-quick schemes or complex investment strategies—just practical money management.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...springTransition, delay: 0.2 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-primary" />
                <h3 className="font-display text-xl font-semibold text-foreground">Featured On</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                My work and insights have been featured in various personal finance publications and podcasts.
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>• Guest contributor to personal finance blogs</p>
                <p>• Podcast interviews on budgeting strategies</p>
                <p>• Workshop facilitator for community organizations</p>
                <p>• Regular Q&A sessions with readers</p>
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
                My Promise to You
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Transparency & Trust
              </h2>
              <p className="text-muted-foreground">
                I believe in being completely honest about what I share and why.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <ul className="space-y-4">
                {trustSignals.map((signal, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{signal}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  <strong className="text-foreground">Disclaimer:</strong> The content on SteadySpend is for educational purposes only and should not be considered professional financial advice. I&apos;m a financial educator, not a licensed financial advisor. Always consult with a qualified professional for advice specific to your situation.
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
              I love hearing from readers! Whether you have a question about an article, want to suggest a topic, or just want to say hi—I&apos;d love to hear from you.
            </p>
            <Button asChild size="lg" className="gradient-primary text-primary-foreground shadow-glow">
              <Link href="/contact">
                <Mail className="w-5 h-5 mr-2" />
                Send Me a Message
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
