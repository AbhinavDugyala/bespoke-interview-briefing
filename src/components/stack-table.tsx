import type { ReactNode } from "react";

export type StackTableColumn = {
  key: string;
  header: string;
  cellClassName?: string;
};

export function StackTable({
  columns,
  rows,
  minWidthClass = "min-w-[36rem]",
}: {
  columns: StackTableColumn[];
  rows: Array<Record<string, ReactNode> & { id: string }>;
  minWidthClass?: string;
}) {
  return (
    <>
      <div className="grid gap-3 md:hidden">
        {rows.map((row) => (
          <div
            key={row.id}
            className="space-y-3 rounded-xl border border-border bg-card/50 px-4 py-3"
          >
            {columns.map((col) => (
              <div key={col.key} className="min-w-0">
                <p className="font-mono text-[11px] tracking-wide text-muted-foreground uppercase">
                  {col.header}
                </p>
                <div className={`mt-1 break-words ${col.cellClassName ?? ""}`}>
                  {row[col.key]}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="hidden overflow-x-auto overscroll-x-contain rounded-xl border border-border md:block">
        <table className={`w-full ${minWidthClass} text-left text-sm`}>
          <thead className="bg-secondary/60 text-muted-foreground">
            <tr>
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-2 font-medium">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-border">
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-4 py-2 align-top break-words ${col.cellClassName ?? ""}`}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
