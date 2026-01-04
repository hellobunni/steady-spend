import type { ReactNode } from 'react';

type CalloutType = 'warning' | 'tip' | 'info' | 'neutral';

type CalloutProps = {
  type: CalloutType;
  title?: string;
  children: ReactNode;
};

const typeStyles: Record<CalloutType, string> = {
  warning: 'bg-amber-50/50 border-amber-200 border-l-4 border-l-amber-400',
  tip: 'bg-emerald-50/50 border-emerald-200 border-l-4 border-l-emerald-500',
  info: 'bg-blue-50/50 border-blue-200 border-l-4 border-l-blue-400',
  neutral: 'bg-slate-50/50 border-slate-200 border-l-4 border-l-slate-400',
};

export default function Callout({ type, title, children }: CalloutProps) {
  const baseStyles = 'my-6 rounded-lg border p-5';
  const typeStyle = typeStyles[type];

  return (
    <aside
      className={`${baseStyles} ${typeStyle}`}
      role="complementary"
      aria-label={title || `${type} callout`}
    >
      {title && (
        <h3 className="mb-3 text-base font-semibold text-slate-900 not-prose">
          {title}
        </h3>
      )}
      <div className="prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&_strong]:font-semibold [&_p]:my-0 [&_p+_p]:mt-3">
        {children}
      </div>
    </aside>
  );
}

