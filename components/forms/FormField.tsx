'use client'

import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import React, { forwardRef } from 'react'

interface FormFieldProps {
  label: string
  helperText?: string
  error?: string
  required?: boolean
  children: React.ReactElement
  className?: string
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  ({ label, helperText, error, required, children, className }, ref) => {
    const fieldId = React.useId()
    const helperId = helperText ? `${fieldId}-helper` : undefined
    const errorId = error ? `${fieldId}-error` : undefined

    return (
      <div ref={ref} className={cn('space-y-1.5', className)}>
        <Label htmlFor={fieldId} className="text-sm font-medium text-gray-700">
          {label}
          {required && (
            <span className="text-destructive ml-1" aria-label="required">
              *
            </span>
          )}
        </Label>
        {React.cloneElement(children, {
          id: fieldId,
          'aria-describedby': errorId || helperId,
          'aria-invalid': error ? 'true' : 'false',
        })}
        {error && (
          <p id={errorId} className="text-xs text-destructive" role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p id={helperId} className="text-xs text-muted-foreground">
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
FormField.displayName = 'FormField'

