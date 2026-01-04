"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "SteadySpend completely transformed how I manage my money. I've saved over $500/month since I started!",
    author: "Sarah M.",
    role: "Marketing Manager",
    rating: 5,
  },
  {
    quote:
      "The budget calculator is so intuitive. It took me 5 minutes to set up and now I actually stick to my budget.",
    author: "James K.",
    role: "Software Developer",
    rating: 5,
  },
  {
    quote:
      "Finally, a budgeting tool that doesn't make me feel overwhelmed. Clean, simple, and effective.",
    author: "Emily R.",
    role: "Teacher",
    rating: 5,
  },
];

export function TrustSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            Loved by{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-emerald-700">
              Thousands
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">Join the community of smart spenders</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-card p-6 lg:p-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + index * 0.15}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.author[0]}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
