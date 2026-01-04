"use client";

import { useEffect, useRef } from "react";
import "katex/dist/katex.min.css";

type MathFormulaProps = {
  formula: string;
  display?: boolean; // true for block display, false for inline
  className?: string;
};

export default function MathFormula({ formula, display = true, className = "" }: MathFormulaProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Try to use KaTeX if available, otherwise fall back to styled display
    if (typeof window !== "undefined" && containerRef.current) {
      // Dynamic import of KaTeX (install with: pnpm add katex)
      const loadKaTeX = async () => {
        const container = containerRef.current;
        if (!container) return;
        try {
          const katex = await import("katex");
          katex.default.render(formula, container, {
            displayMode: display,
            throwOnError: false,
            errorColor: "#cc0000",
          });
        } catch {
          // KaTeX not available, use fallback: render as plain text with LaTeX-like styling
          if (containerRef.current) {
            // Simple fallback: display the LaTeX formula as-is
            // To enable full LaTeX rendering, install: pnpm add katex
            const cleanFormula = formula
              .replace(/\\text\{([^}]+)\}/g, "$1")
              .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, "($1)/($2)")
              .replace(/\\left\(|\\right\)/g, "")
              .replace(/\\times/g, "×");
            containerRef.current.innerHTML = `<span style="font-family: 'Computer Modern', 'Latin Modern Math', 'Times New Roman', serif; font-size: 1.1em;">${cleanFormula}</span>`;
          }
        }
      };
      loadKaTeX();
    }
  }, [formula, display]);

  if (display) {
    return (
      <div className={`my-6 overflow-x-auto ${className}`} style={{ textAlign: "center" }}>
        <div
          ref={containerRef}
          className="text-lg"
          style={{
            fontFamily: "'Computer Modern', 'Latin Modern Math', 'Times New Roman', serif",
            minHeight: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>
    );
  }

  return (
    <span
      ref={containerRef}
      className={`inline-block ${className}`}
      style={{
        fontFamily: "'Computer Modern', 'Latin Modern Math', 'Times New Roman', serif",
      }}
    />
  );
}
