"use client";

import Link from "next/link";
import { Search, Menu, X, Leaf } from "lucide-react";
import { useState } from "react";
import { categories } from "@/data/worksheets";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-100 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 text-emerald-700">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-md">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="hidden text-xl font-extrabold tracking-tight sm:inline">
              SproutWorks
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {categories.slice(0, 8).map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700"
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/worksheet-generator"
              className="ml-2 rounded-full bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700"
            >
              Generator
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/search"
              className="rounded-full p-2 text-slate-500 transition hover:bg-emerald-50 hover:text-emerald-700"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Link>
            <button
              className="rounded-full p-2 text-slate-500 transition hover:bg-emerald-50 lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-emerald-100 bg-white lg:hidden">
          <div className="mx-auto max-w-7xl space-y-1 px-4 py-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-emerald-50"
                onClick={() => setMobileOpen(false)}
              >
                {cat.name}
              </Link>
            ))}
            <Link
              href="/worksheet-generator"
              className="block rounded-lg px-3 py-2 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
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
