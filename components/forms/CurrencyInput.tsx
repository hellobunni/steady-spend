'use client'

import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import React, { forwardRef } from 'react'

interface CurrencyInputProps extends Omit<React.ComponentProps<'input'>, 'type'> {
  label?: string
  helperText?: string
  error?: string
  size?: 'sm' | 'md' | 'lg'
}

export const CurrencyInput = forwardRef<HTMLInputElement, CurrencyInputProps>(
  ({ label, helperText, error, size = 'md', className, id, ...props }, ref) => {
    const inputId = id || `currency-${Math.random().toString(36).substr(2, 9)}`
    const helperId = helperText ? `${inputId}-helper` : undefined
    const errorId = error ? `${inputId}-error` : undefined
    
    const sizeClasses = {
      sm: 'h-10 text-base',
      md: 'h-12 text-lg',
      lg: 'h-14 text-xl'
    }

    return (
      <div>
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <span 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-base font-medium"
            aria-hidden="true"
          >
            $
          </span>
          <Input
            ref={ref}
            id={inputId}
            type="number"
            inputMode="decimal"
            className={cn(
              'pl-8 rounded-lg',
              sizeClasses[size],
              error && 'border-destructive aria-invalid',
              className
            )}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={errorId || helperId}
            {...props}
          />
        </div>
        {error && (
          <p id={errorId} className="text-xs text-destructive mt-1" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="text-xs text-muted-foreground mt-1">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
CurrencyInput.displayName = 'CurrencyInput'

