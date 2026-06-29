"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { categories } from "@/data/worksheets";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-indigo-600">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-lg font-bold text-white">
              K
            </span>
            <span className="hidden text-xl font-extrabold tracking-tight sm:inline">
              KiddoWorks
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {categories.slice(0, 8).map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-indigo-600"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/worksheet-generator"
              className="rounded-lg bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-100"
            >
              Generator
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/search"
              className="rounded-full p-2 text-slate-600 hover:bg-slate-100"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Link>
            <button
              className="rounded-full p-2 text-slate-600 hover:bg-slate-100 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                onClick={() => setMobileOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/worksheet-generator"
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-indigo-600 hover:bg-indigo-50"
              onClick={() => setMobileOpen(false)}
            >
              Worksheet Generator
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
