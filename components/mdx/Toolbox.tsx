type ToolboxProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Toolbox({
  title = 'Reader Toolbox',
  children,
  className = '',
}: ToolboxProps) {
  return (
    <aside
      className={`my-8 rounded-lg border border-slate-200 bg-slate-50 p-6 ${className}`}
      role="complementary"
      aria-label={title}
    >
      <h3 className="mb-4 text-lg font-semibold text-slate-900">
        {title}
      </h3>
      <div className="prose prose-slate prose-sm max-w-none">
        {children}
      </div>
    </aside>
  );
}

