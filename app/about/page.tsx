import type { Metadata } from "next";
import AboutClient from "./AboutClient";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.steadyspend.com";

export const metadata: Metadata = {
  title: "About SteadySpend | Meet the Creator",
  description:
    "Learn about the story behind SteadySpend. Created by someone who struggled with budgeting and built simple tools to help others understand their money better.",
  keywords: [
    "about steadyspend",
    "budgeting tools creator",
    "personal finance blog",
    "money management",
  ],
  alternates: {
    canonical: `${baseUrl}/about`,
  },
  openGraph: {
    title: "About SteadySpend | Meet the Creator",
    description:
      "Learn about the story behind SteadySpend. Created by someone who struggled with budgeting and built simple tools to help others understand their money better.",
    url: `${baseUrl}/about`,
    siteName: "SteadySpend",
    images: [
      {
        url: `${baseUrl}/headshot-v2.png`,
        width: 1200,
        height: 1200,
        alt: "Lynae Thomas - Creator of SteadySpend",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SteadySpend | Meet the Creator",
    description:
      "Learn about the story behind SteadySpend. Simple budgeting tools created by someone who understands the struggle.",
    images: [`${baseUrl}/headshot-v2.png`],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
