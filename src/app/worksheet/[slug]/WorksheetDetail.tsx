"use client";

import Image from "next/image";
import Link from "next/link";
import type { Worksheet } from "@/data/worksheets";
import { getRelatedWorksheets, categories } from "@/data/worksheets";
import { WorksheetGrid } from "@/components/WorksheetGrid";
import { Download, Heart, Printer, Share2, Calendar, GraduationCap, Tag } from "lucide-react";

export default function WorksheetDetail({ worksheet: ws }: { worksheet: Worksheet }) {
  const related = getRelatedWorksheets(ws, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <nav className="text-sm text-slate-500">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/category/${ws.categorySlug}`} className="hover:text-indigo-600">{ws.category}</Link>
        <span className="mx-2">/</span>
        <span className="text-slate-800">{ws.title}</span>
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-5">
        {/* Left image */}
        <div className="lg:col-span-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <Image
              src={ws.image}
              alt={ws.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>

        {/* Right details */}
        <div className="lg:col-span-3">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">{ws.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">{ws.description}</p>

          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5">
              <Calendar className="h-4 w-4" /> Added {new Date(ws.dateAdded).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5">
              <GraduationCap className="h-4 w-4" /> {ws.grades.join(", ")}
            </span>
            <span className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1.5">
              <Heart className="h-4 w-4" /> {ws.likes.toLocaleString()} likes
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700"
            >
              <Printer className="h-5 w-5" /> Print Worksheet
            </button>
            <a
              href={ws.image}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Download className="h-5 w-5" /> Download PDF
            </a>
            <button
              onClick={async () => {
                try {
                  await navigator.share({ title: ws.title, text: ws.description, url: window.location.href });
                } catch {
                  navigator.clipboard.writeText(window.location.href);
                }
              }}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              <Share2 className="h-5 w-5" /> Share
            </button>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
            <h3 className="font-bold text-slate-900">Worksheet info</h3>
            <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-500">Subject</span>
                <Link href={`/category/${ws.categorySlug}`} className="font-medium text-indigo-600 hover:underline">
                  {ws.category}
                </Link>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-500">Grade</span>
                <span className="font-medium text-slate-900">{ws.grades.join(", ")}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-500">Downloads</span>
                <span className="font-medium text-slate-900">{ws.downloads.toLocaleString()}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-500">Type</span>
                <span className="font-medium text-slate-900">Printable PDF</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="mb-3 flex items-center gap-2 font-bold text-slate-900">
              <Tag className="h-4 w-4" /> Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {ws.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-extrabold text-slate-900">Related Worksheets</h2>
          <div className="mt-6">
            <WorksheetGrid worksheets={related} />
          </div>
        </section>
      )}
    </div>
  );
}
