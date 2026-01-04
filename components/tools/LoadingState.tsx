export function LoadingState({ message = "Calculating..." }: { message?: string }) {
  return (
    <div className="space-y-6 pt-6 border-t border-gray-200" role="status" aria-live="polite">
      <div className="glass-card p-6 lg:p-8">
        <div className="flex flex-col items-center justify-center py-16 space-y-4">
          <div className="relative" aria-hidden="true">
            <div className="w-16 h-16 border-4 border-emerald-100 rounded-full" />
            <div className="w-16 h-16 border-4 border-emerald-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0" />
          </div>
          <div className="text-center space-y-1">
            <p className="text-base font-medium text-gray-900">{message}</p>
            <p className="text-sm text-muted-foreground">This will just take a moment...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
