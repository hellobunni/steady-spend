'use client'

import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'motion/react'

interface ResultsSectionProps {
  show: boolean
  title: string
  children: ReactNode
  className?: string
}

export function ResultsSection({ show, title, children, className }: ResultsSectionProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`space-y-6 pt-6 border-t border-gray-200 ${className || ''}`}
          role="region"
          aria-labelledby="results-title"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px flex-1 bg-gray-200" aria-hidden="true" />
            <h2 id="results-title" className="text-xl font-semibold text-gray-900">
              {title}
            </h2>
            <div className="h-px flex-1 bg-gray-200" aria-hidden="true" />
          </div>
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

