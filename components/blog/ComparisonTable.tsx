type ComparisonTableProps = {
  headers: string[];
  rows: string[][];
  className?: string;
  source?: {
    link: string;
    title: string;
  };
  lastUpdated?: string;
};

export default function ComparisonTable({
  headers,
  rows,
  className = "",
  source,
  lastUpdated,
}: ComparisonTableProps) {
  return (
    <>
      <div
        className={`mt-8 mb-3 overflow-x-auto rounded-lg border border-slate-200 shadow-sm ${className}`}
      >
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-slate-200 bg-slate-50">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={`px-4 py-3 text-sm font-semibold text-slate-900 first:pl-6 last:pr-6 ${
                    index === 0 ? "text-left" : "text-center"
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50/50 transition-colors"
              >
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`px-4 py-3 text-sm text-slate-700 first:pl-6 last:pr-6 ${
                      cellIndex === 0 ? "text-left" : "text-center"
                    }`}
                    dangerouslySetInnerHTML={{ __html: cell }}
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {(source || lastUpdated) && (
        <div className="space-y-1">
          {source?.link && source.title && (
            <p className="text-xs text-slate-500">
              <span className="font-medium">Source:</span>{" "}
              <a
                href={source.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-slate-900 underline"
              >
                {source.title}
              </a>
            </p>
          )}
          {lastUpdated && (
            <p className="text-xs text-slate-500">
              <span className="font-medium">Last updated:</span> {lastUpdated}
            </p>
          )}
        </div>
      )}
    </>
  );
}
