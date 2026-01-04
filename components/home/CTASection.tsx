"use client";

import { ArrowRight, BookOpen, Calculator } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-primary opacity-95" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="container-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-6">
            Ready to Build a Better Budget?
          </h2>
          <p className="text-lg text-white/80 mb-10 max-w-4xl mx-auto">
            Start using our{" "}
            <Link href="/tools" className="text-white underline hover:text-white/90 font-medium">
              free financial tools
            </Link>{" "}
            today and join others mastering their{" "}
            <strong className="text-white">money management</strong>. <br /> Explore practical
            guides, tips, and calculators designed to help you spend smarter and save more.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold shadow-xl group"
              asChild
            >
              <Link href="/tools/monthly-budget">
                <Calculator className="w-5 h-5 mr-2" />
                Try Budget Calculator
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold bg-transparent group"
              asChild
            >
              <Link href="/blog">
                <BookOpen className="w-5 h-5 mr-2" />
                Explore Financial Guides
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
