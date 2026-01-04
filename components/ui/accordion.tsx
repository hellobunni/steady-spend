"use client";

import { ChevronDown } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  question: string;
  answer: string | React.ReactNode;
  defaultOpen?: boolean;
}

function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const itemRef = React.useRef<HTMLDivElement>(null);
  const wasOpenRef = React.useRef(isOpen);

  // Generate a stable ID for accessibility
  const contentId = React.useMemo(
    () => `accordion-content-${question.slice(0, 20).replace(/\s/g, "-").toLowerCase()}`,
    [question]
  );

  // Check if answer is a string or ReactNode
  const isStringAnswer = typeof answer === "string";

  const handleToggle = () => {
    const willBeOpen = !isOpen;
    setIsOpen(willBeOpen);

    // Scroll into view when opening (not when closing)
    if (willBeOpen && !wasOpenRef.current) {
      // Small delay to let the animation start
      setTimeout(() => {
        itemRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "nearest",
        });
      }, 100);
    }

    wasOpenRef.current = willBeOpen;
  };

  return (
    <div ref={itemRef} className="border-b border-gray-200 last:border-b-0">
      <button
        type="button"
        onClick={handleToggle}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded-md px-2 -mx-2 cursor-pointer transition-colors duration-200 hover:bg-gray-50/50"
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <h3 className="text-xl font-semibold text-gray-900 pr-4">{question}</h3>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-gray-600 shrink-0 transition-transform duration-300 ease-in-out",
            isOpen && "transform rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      <div
        id={contentId}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        )}
        aria-hidden={!isOpen}
      >
        <div className="pb-4">
          {isStringAnswer ? (
            <p className="text-base leading-relaxed text-gray-700">{answer}</p>
          ) : (
            <div className="text-base leading-relaxed text-gray-700 prose prose-slate max-w-none">
              {answer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{ question: string; answer: string | React.ReactNode }>;
  className?: string;
}

export function Accordion({ items, className }: AccordionProps) {
  return (
    <div className={cn("space-y-0", className)}>
      {items.map((item, index) => (
        <AccordionItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
