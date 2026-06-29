import { WorksheetCard } from "@/components/WorksheetCard";
import type { Worksheet } from "@/data/worksheets";

export function WorksheetGrid({ worksheets, empty }: { worksheets: Worksheet[]; empty?: React.ReactNode }) {
  if (worksheets.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
        {empty ?? <p className="text-slate-500">No worksheets found.</p>}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
      {worksheets.map((w) => (
        <WorksheetCard key={w.id} worksheet={w} />
      ))}
    </div>
  );
}
