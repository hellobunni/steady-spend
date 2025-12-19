import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://steadyspend.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "SteadySpend - Understand your money, spend with confidence",
    template: "%s | SteadySpend",
  },
  description: "Free budgeting tools and guides to help you understand your money and spend with confidence.",
  keywords: ["budget calculator", "budgeting tools", "personal finance", "money management", "budgeting guide"],
  authors: [{ name: "SteadySpend Team" }],
  creator: "SteadySpend",
  publisher: "SteadySpend",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "SteadySpend",
    title: "SteadySpend - Understand your money, spend with confidence",
    description: "Free budgeting tools and guides to help you understand your money and spend with confidence.",
    images: [
      {
        url: `${baseUrl}/logo-vertical.png`,
        width: 1200,
        height: 630,
        alt: "SteadySpend Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SteadySpend - Understand your money, spend with confidence",
    description: "Free budgeting tools and guides to help you understand your money and spend with confidence.",
    images: [`${baseUrl}/logo-vertical.png`],
    creator: "@steadyspend",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://steadyspend.com';

  // Structured Data - Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SteadySpend",
    "url": baseUrl,
    "logo": `${baseUrl}/logo-vertical.png`,
    "description": "Free budgeting tools and guides to help you understand your money and spend with confidence.",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    }
  };

  // Structured Data - Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SteadySpend",
    "url": baseUrl,
    "description": "Free budgeting tools and guides to help you understand your money and spend with confidence.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/blog?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5741266771673267"
          crossOrigin="anonymous"
        />
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KVZ8VQQS');
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KVZ8VQQS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
