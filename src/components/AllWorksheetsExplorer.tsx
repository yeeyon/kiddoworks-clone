"use client";

import Link from "next/link";
import { categories, grades, worksheets } from "@/data/worksheets";
import { useState, useMemo } from "react";
import { WorksheetGrid } from "@/components/WorksheetGrid";
import { Search, SlidersHorizontal, X } from "lucide-react";

export function AllWorksheetsExplorer() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedGrade, setSelectedGrade] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return worksheets.filter((w) => {
      const matchesQ =
        !q ||
        w.title.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q) ||
        w.tags.some((t) => t.includes(q));
      const matchesCat = !selectedCategory || w.categorySlug === selectedCategory;
      const matchesGrade = !selectedGrade || w.grades.includes(selectedGrade);
      return matchesQ && matchesCat && matchesGrade;
    });
  }, [query, selectedCategory, selectedGrade]);

  const activeFilters = Boolean(selectedCategory || selectedGrade);

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search worksheets..."
            className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-4 text-sm outline-none ring-indigo-500 transition focus:border-indigo-500 focus:ring-2"
          />
        </div>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          <SlidersHorizontal className="h-4 w-4" /> Filters
          {activeFilters && (
            <span className="ml-1 rounded-full bg-indigo-600 px-1.5 py-0.5 text-[10px] text-white">
              {[selectedCategory, selectedGrade].filter(Boolean).length}
            </span>
          )}
        </button>
      </div>

      {showFilters && (
        <div className="mt-4 flex flex-wrap gap-3 border-t border-slate-100 pt-4">
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-slate-500">Category</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500"
            >
              <option value="">All categories</option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-xs font-medium text-slate-500">Grade</span>
            <select
              value={selectedGrade}
              onChange={(e) => setSelectedGrade(e.target.value)}
              className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500"
            >
              <option value="">All grades</option>
              {grades.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>
          {activeFilters && (
            <button
              onClick={() => {
                setSelectedCategory("");
                setSelectedGrade("");
              }}
              className="self-end rounded-lg px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50"
            >
              Clear filters
            </button>
          )}
        </div>
      )}

      <div className="mt-6">
        <p className="mb-3 text-sm text-slate-500">
          Showing {filtered.length} worksheet{filtered.length !== 1 ? "s" : ""}
        </p>
        <WorksheetGrid
          worksheets={filtered}
          empty={
            <div className="py-12 text-center">
              <p className="text-lg font-semibold text-slate-700">No worksheets found</p>
              <p className="mt-1 text-slate-500">Try changing your search or filters.</p>
            </div>
          }
        />
      </div>
    </section>
  );
}
