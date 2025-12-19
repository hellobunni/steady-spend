"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Sparkles, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function GuidesClient() {
  const guides = [
    {
      title: "Getting Started with Budgeting",
      description: "Learn the basics of creating a budget that actually works for your lifestyle.",
      readTime: "5 min",
      category: "Budgeting"
    },
    {
      title: "Understanding Your Spending Habits",
      description: "Discover where your money goes and identify opportunities to save more.",
      readTime: "7 min",
      category: "Spending"
    },
    {
      title: "Building an Emergency Fund",
      description: "Step-by-step guide to creating a safety net for unexpected expenses.",
      readTime: "6 min",
      category: "Savings"
    },
  ];

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
            Financial Guides
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learn at
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-700 bg-clip-text text-transparent"> Your Own Pace</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Simple, actionable guides to help you master your money without the jargon.
          </p>
        </motion.div>

        {/* Guides Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide, index) => (
            <motion.div
              key={guide.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-0 shadow-sm bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full cursor-pointer">
                <CardHeader>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
                      {guide.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">{guide.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{guide.readTime} read</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Card className="border-0 shadow-sm bg-gradient-to-br from-gray-50 to-emerald-50/30 rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">More Guides Coming Soon</h3>
              <p className="text-gray-600">
                We&apos;re creating more in-depth guides on topics like debt management, investing basics, retirement planning, and more.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
