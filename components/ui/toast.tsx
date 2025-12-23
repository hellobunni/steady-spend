'use client'

import * as React from 'react'
import { useToast } from '@/hooks/use-toast'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const Toast = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    title?: React.ReactNode
    description?: React.ReactNode
    onClose?: () => void
  }
>(({ className, title, description, onClose, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border bg-card p-6 pr-8 shadow-lg transition-all',
        className
      )}
      {...props}
    >
      <div className="grid gap-1">
        {title && <div className="text-sm font-semibold">{title}</div>}
        {description && <div className="text-sm text-muted-foreground opacity-90">{description}</div>}
      </div>
      {onClose && (
        <button
          className="absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
})
Toast.displayName = 'Toast'

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
    <div
      className="pointer-events-none fixed bottom-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
      aria-live="polite"
      aria-atomic="true"
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          title={toast.title}
          description={toast.description}
          onClose={() => dismiss(toast.id)}
          className="pointer-events-auto"
        />
      ))}
    </div>
  )
}

export { Toast }

