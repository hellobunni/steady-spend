"use client";

import { useEffect, useRef, useState } from "react";
import "katex/dist/katex.min.css";

type MathFormulaProps = {
  formula: string;
  display?: boolean; // true for block display, false for inline
  className?: string;
};

export default function MathFormula({ formula, display = true, className = "" }: MathFormulaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only render after mount to avoid hydration mismatch
    if (!isMounted || !containerRef.current) return;

    // Try to use KaTeX if available, otherwise fall back to styled display
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
  }, [formula, display, isMounted]);

  // Render placeholder on server to match client initial render
  const placeholderStyle = {
    fontFamily: "'Computer Modern', 'Latin Modern Math', 'Times New Roman', serif",
  };

  if (display) {
    return (
      <div className={`my-6 overflow-x-auto ${className}`} style={{ textAlign: "center" }}>
        <div
          ref={containerRef}
          className="text-lg"
          style={{
            ...placeholderStyle,
            minHeight: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          suppressHydrationWarning
        />
      </div>
    );
  }

  return (
    <span
      ref={containerRef}
      className={`inline-block ${className}`}
      style={placeholderStyle}
      suppressHydrationWarning
    />
  );
}
