import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SteadySpend - Understand your money, spend with confidence",
  description: "Free budgeting tools and guides to help you understand your money and spend with confidence.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.steadyspend.com';

  // SiteNavigationElement structured data
  const navigationSchema = {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    "name": "Main Navigation",
    "url": baseUrl,
    "hasPart": [
      {
        "@type": "SiteNavigationElement",
        "name": "Home",
        "url": `${baseUrl}/`
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Blog",
        "url": `${baseUrl}/blog`
      },
      {
        "@type": "SiteNavigationElement",
        "name": "Tools",
        "url": `${baseUrl}/tools`,
        "hasPart": [
          {
            "@type": "SiteNavigationElement",
            "name": "Monthly Budget Calculator",
            "url": `${baseUrl}/tools/monthly-budget`
          },
          {
            "@type": "SiteNavigationElement",
            "name": "Take Home Pay Calculator",
            "url": `${baseUrl}/tools/take-home-pay-calculator`
          }
        ]
      }
    ]
  };

  // Structured Data - Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SteadySpend",
    "url": baseUrl,
    "description": "Free budgeting tools and guides to help you understand your money and spend with confidence.",
    "logo": `${baseUrl}/logo-vertical.png`,
    "sameAs": [
      "https://www.facebook.com/steadyspend",
      "https://twitter.com/steadyspend",
      "https://www.instagram.com/steadyspend",
      "https://www.linkedin.com/company/steadyspend",
      "https://www.youtube.com/@steadyspend"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "English"
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(navigationSchema),
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
        className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KVZ8VQQS"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
