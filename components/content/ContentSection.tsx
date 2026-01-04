import type { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  children: ReactNode;
  showDivider?: boolean;
  className?: string;
}

export function ContentSection({
  title,
  children,
  showDivider = true,
  className,
}: ContentSectionProps) {
  return (
    <section className={className}>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="text-base leading-relaxed text-gray-700">{children}</div>
      {showDivider && <div className="h-px bg-gray-200 my-6" />}
    </section>
  );
}
