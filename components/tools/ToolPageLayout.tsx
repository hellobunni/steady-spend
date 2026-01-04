import type { ReactNode } from "react";
import Breadcrumbs from "@/components/layout/Breadcrumbs";

interface ToolPageLayoutProps {
  title: string;
  description: string;
  breadcrumbs: Array<{ label: string; href: string }>;
  intro?: ReactNode;
  tool: ReactNode;
  content?: ReactNode;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "4xl" | "6xl";
}

export function ToolPageLayout({
  title,
  description,
  breadcrumbs,
  intro,
  tool,
  content,
  maxWidth = "6xl",
}: ToolPageLayoutProps) {
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "4xl": "max-w-4xl",
    "6xl": "max-w-6xl",
  };

  return (
    <div className={`${maxWidthClasses[maxWidth]} mx-auto py-10 lg:py-14 px-4 sm:px-6 lg:px-8`}>
      <Breadcrumbs items={breadcrumbs} />

      {/* SEO Intro */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">{description}</p>
        {intro}
      </div>

      {/* Tool */}
      {tool}

      {/* Supporting SEO Content */}
      {content && <div className="mt-12 space-y-10 text-gray-700">{content}</div>}
    </div>
  );
}
