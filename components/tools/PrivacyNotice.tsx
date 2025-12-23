import { Shield } from 'lucide-react'

export function PrivacyNotice({ className }: { className?: string }) {
  return (
    <div
      className={`flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 rounded-lg p-3 ${className || ''}`}
      role="status"
      aria-live="polite"
    >
      <Shield className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
      <span>Your data is saved locally and never leaves your device.</span>
    </div>
  )
}

