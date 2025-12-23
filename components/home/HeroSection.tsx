'use client'

import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "motion/react";

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

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-hero">
      {/* Background Graphics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating blob */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-2xl animate-float" style={{ animationDelay: "-1.5s" }} />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...springTransition, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-none bg-white"
          >
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Free guides & tools for smarter spending</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            {...fadeInUp}
            transition={{ ...springTransition, delay: 0.2 }}
            className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
          >
            Your Guide to{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-emerald-700">
              Smarter Spending
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            {...fadeInUp}
            transition={{ ...springTransition, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Practical money tips, helpful budgeting guides, and free tools to help you take control of your finances — no signup required.
          </motion.p>

          {/* CTAs */}
          <motion.div 
            {...fadeInUp}
            transition={{ ...springTransition, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="gradient-primary text-primary-foreground shadow-glow hover:opacity-90 transition-all duration-200 px-8 py-6 text-lg font-semibold group"
              asChild
            >
              <Link href="/tools/monthly-budget">
                Read Latest Posts
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 text-lg font-semibold bg-card/50 backdrop-blur-sm hover:bg-card"
              asChild
            >
              <Link href="/tools">
                Try Our Calculators
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg 
          viewBox="0 0 1440 120" 
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,64 C480,120 960,0 1440,64 L1440,120 L0,120 Z" 
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}

