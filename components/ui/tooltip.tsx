"use client";

import { Info } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type TooltipProps = {
  content: string;
  children?: React.ReactNode;
  className?: string;
};

export function Tooltip({ content, children, className }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-flex items-center">
      <button
        type="button"
        className={cn(
          "inline-flex items-center justify-center w-4 h-4 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-1",
          className
        )}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
        aria-label={content}
      >
        {children || <Info className="w-3 h-3" />}
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 4 }}
            transition={{
              duration: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="absolute z-50 px-3 py-2 text-xs text-white bg-gray-900/80 rounded-lg shadow-lg whitespace-normal max-w-xs bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none w-3xl"
            role="tooltip"
          >
            {content}
            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
              <div className="w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
