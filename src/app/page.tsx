import Link from "next/link";
import Image from "next/image";
import { categories, worksheets } from "@/data/worksheets";
import { WorksheetGrid } from "@/components/WorksheetGrid";
import { Search, Sparkles, BookOpen, Palette, Calculator, PenTool, Leaf, Sun, Sprout } from "lucide-react";

export default function HomePage() {
  const recent = [...worksheets].sort((a, b) => +new Date(b.dateAdded) - +new Date(a.dateAdded)).slice(0, 8);
  const popular = [...worksheets].sort((a, b) => b.downloads - a.downloads).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white">
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
                <Sprout className="h-4 w-4" /> Original printable learning resources
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
                Help little minds <span className="text-lime-300">sprout</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg text-emerald-100">
                Original worksheets for preschool, kindergarten and early elementary. Print, play and grow — no sign-up needed.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/category/alphabets"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-emerald-600 shadow-lg transition hover:bg-emerald-50"
                >
                  <BookOpen className="h-5 w-5" /> Browse Worksheets
                </Link>
                <Link
                  href="/worksheet-generator"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/20"
                >
                  <PenTool className="h-5 w-5" /> Create Your Own
                </Link>
              </div>

              <form action="/search" method="GET" className="mt-10 max-w-md">
                <div className="flex items-center gap-2 rounded-full bg-white/10 p-1.5 ring-1 ring-white/30 backdrop-blur">
                  <Search className="ml-3 h-5 w-5 text-emerald-100" />
                  <input
                    name="q"
                    type="text"
                    placeholder="Search e.g. addition, tracing..."
                    className="flex-1 bg-transparent px-2 py-2 text-white placeholder:text-emerald-100 outline-none"
                  />
                  <button
                    type="submit"
                    className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-emerald-600 hover:bg-emerald-50"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-square rotate-3 rounded-3xl border-4 border-white/20 bg-white p-4 shadow-2xl transition hover:rotate-0">
                <div className="grid h-full grid-cols-2 gap-3">
                  <div className="flex flex-col items-center justify-center rounded-2xl bg-emerald-100 p-4 text-emerald-700">
                    <Leaf className="h-10 w-10" />
                    <span className="mt-2 text-sm font-bold">Grow</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-2xl bg-sky-100 p-4 text-sky-700">
                    <span className="text-5xl font-black">Aa</span>
                    <span className="mt-2 text-sm font-bold">Alphabet</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-2xl bg-amber-100 p-4 text-amber-700">
                    <Calculator className="h-10 w-10" />
                    <span className="mt-2 text-sm font-bold">Math</span>
                  </div>
                  <div className="flex flex-col items-center justify-center rounded-2xl bg-rose-100 p-4 text-rose-700">
                    <Palette className="h-10 w-10" />
                    <span className="mt-2 text-sm font-bold">Create</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-slate-900">Explore by Category</h2>
          <p className="mt-3 text-slate-600">Jump into a learning topic and find the perfect worksheet.</p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {categories
            .filter((c) => c.slug !== "worksheet-generator")
            .map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group relative overflow-hidden rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-900/5 transition hover:shadow-md"
              >
                <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cat.color} text-white shadow-md`}>
                  <span className="text-lg font-black">{cat.name[0]}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-600">{cat.name}</h3>
              </Link>
            ))}
        </div>
      </section>

      {/* Recently Added */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900">Recently Added Worksheets</h2>
            <p className="mt-1 text-slate-600">Fresh practice sheets for your little sprout.</p>
          </div>
          <Link href="/category/all" className="hidden text-sm font-semibold text-emerald-600 hover:underline sm:inline">
            View all →
          </Link>
        </div>
        <div className="mt-8">
          <WorksheetGrid worksheets={recent} />
        </div>
        <div className="mt-6 text-center sm:hidden">
          <Link href="/search" className="text-sm font-semibold text-emerald-600 hover:underline">
            View all worksheets →
          </Link>
        </div>
      </section>

      {/* Popular */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-slate-900">Most Popular This Week</h2>
          <p className="mt-2 text-center text-slate-600">Worksheets other parents and teachers are loving right now.</p>
          <div className="mt-10">
            <WorksheetGrid worksheets={popular} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-emerald-50 p-6">
            <h3 className="text-lg font-bold text-emerald-900">Free for Everyone</h3>
            <p className="mt-2 text-sm text-emerald-700">No sign-up required. Browse, print and download original worksheets instantly.</p>
          </div>
          <div className="rounded-2xl bg-teal-50 p-6">
            <h3 className="text-lg font-bold text-teal-900">Skill-Building Fun</h3>
            <p className="mt-2 text-sm text-teal-700">Activities shaped around preschool to grade 5 milestones.</p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-6">
            <h3 className="text-lg font-bold text-amber-900">Playful Themes</h3>
            <p className="mt-2 text-sm text-amber-700">Nature, animals and cheerful characters keep kids curious.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-emerald-900 to-teal-900 py-16 text-white">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold">Start growing today!</h2>
          <p className="mt-4 text-lg text-emerald-100">
            Build confidence in reading, writing, math and creativity with our library of original printable worksheets.
          </p>
          <Link
            href="/search"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-8 py-3 font-bold text-white shadow-lg transition hover:bg-emerald-400"
          >
            Explore Worksheets
          </Link>
        </div>
      </section>
    </>
  );
}
