import type { Metadata } from "next";
import Script from "next/script";
import ToolsClient from "./ToolsClient";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.steadyspend.com";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best way to start a monthly budget?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'The most effective way to start is by tracking your actual income and expenses for 30 days. Use a monthly budget planner to categorize your spending into "fixed" costs (like rent) and "variable" costs (like dining out) to see exactly where your money goes.',
      },
    },
    {
      "@type": "Question",
      name: "How does the 50/30/20 budgeting rule work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The 50/30/20 rule is a simple financial framework where you allocate 50% of your income to needs, 30% to wants, and 20% to savings or debt repayment. It is an ideal method for beginners who want a balanced lifestyle without complex tracking. Ready to try it? Use our 50/30/20 Calculator above.",
      },
    },
    {
      "@type": "Question",
      name: "How do I calculate my actual take-home pay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'To find your net take-home pay, you must subtract federal, state, and local taxes, as well as FICA and healthcare deductions, from your gross salary. Knowing your "after-tax" income is the only way to build an accurate budget that prevents overspending.',
      },
    },
    {
      "@type": "Question",
      name: "Why should I use a financial calculator instead of a spreadsheet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: 'While spreadsheets are powerful, interactive financial tools provide instant visualizations and "what-if" scenarios. They allow you to quickly see how a small change in spending today can lead to significant savings over time—without the risk of manual formula errors.',
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Free Financial Tools & Calculators | SteadySpend",
  description:
    "Free financial tools and calculators to help you budget, track expenses, and make confident money decisions. Calculate your take-home pay, create monthly budgets, and use the 50/30/20 rule. No sign-up required.",
  keywords: [
    "financial tools",
    "budget calculator",
    "money calculator",
    "expense tracker",
    "financial planning tools",
    "free financial calculators",
  ],
  alternates: {
    canonical: `${baseUrl}/tools`,
  },
  openGraph: {
    title: "Free Financial Tools & Calculators | SteadySpend",
    description:
      "Free financial tools and calculators to help you budget, track expenses, and make confident money decisions. Calculate your take-home pay, create monthly budgets, and use the 50/30/20 rule.",
    url: `${baseUrl}/tools`,
    siteName: "SteadySpend",
    images: [
      {
        url: `${baseUrl}/logo-vertical.png`,
        width: 1200,
        height: 630,
        alt: "SteadySpend Financial Tools",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Financial Tools & Calculators | SteadySpend",
    description:
      "Free financial tools and calculators to help you budget, track expenses, and make confident money decisions. Calculate your take-home pay, create monthly budgets, and use the 50/30/20 rule. No sign-up required.",
    images: [`${baseUrl}/logo-vertical.png`],
  },
};

export default function Tools() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ToolsClient />
    </>
  );
}
