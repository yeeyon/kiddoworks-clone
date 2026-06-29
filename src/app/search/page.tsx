"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { searchWorksheets } from "@/data/worksheets";
import { WorksheetGrid } from "@/components/WorksheetGrid";
import { Search } from "lucide-react";

function SearchResults({ q }: { q: string }) {
  const results = useMemo(() => searchWorksheets(q), [q]);
  return (
    <>
      <p className="mb-4 text-sm text-slate-500">
        {results.length} result{results.length !== 1 ? "s" : ""} for &quot;{q}&quot;
      </p>
      <WorksheetGrid
        worksheets={results}
        empty={
          <div className="py-12 text-center">
            <p className="text-lg font-semibold text-slate-700">No worksheets found</p>
            <p className="mt-1 text-slate-500">Try a different keyword like &quot;addition&quot; or &quot;tracing&quot;.</p>
          </div>
        }
      />
    </>
  );
}

function SearchFormAndResults() {
  const params = useSearchParams();
  const initial = params.get("q") || "";
  const [query, setQuery] = useState(initial);
  const [input, setInput] = useState(initial);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(input);
    const url = new URL(window.location.href);
    url.searchParams.set("q", input);
    window.history.replaceState({}, "", url.toString());
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mx-auto mt-8 max-w-xl">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          <Search className="ml-3 h-5 w-5 text-slate-400" />
          <input
            name="q"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Try 'addition', 'alphabet' or 'maze'..."
            className="flex-1 bg-transparent px-2 py-2 text-slate-900 outline-none"
          />
          <button
            type="submit"
            className="rounded-xl bg-emerald-600 px-5 py-2.5 font-semibold text-white hover:bg-emerald-700"
          >
            Search
          </button>
        </div>
      </form>

      <div className="mt-10">
        {query ? (
          <SearchResults q={query} />
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
            <p className="text-slate-500">Type a keyword above to find worksheets.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Search Worksheets</h1>
        <p className="mt-3 text-lg text-slate-600">Find worksheets by title, topic, tag or grade.</p>
      </div>

      <Suspense fallback={<p className="mt-8 text-center text-slate-500">Loading search...</p>}>
        <SearchFormAndResults />
      </Suspense>
    </div>
  );
}
