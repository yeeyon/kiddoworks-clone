import { notFound } from "next/navigation";
import { categories, getWorksheetsByCategory, worksheets } from "@/data/worksheets";
import { WorksheetGrid } from "@/components/WorksheetGrid";
import Link from "next/link";

export function generateStaticParams() {
  return [{ slug: "all" }, ...categories.map((c) => ({ slug: c.slug }))];
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return {
    title: "Categories - SproutWorks",
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (slug === "all") {
    return (
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-emerald-600">All</span>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">All Worksheets</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">Browse every original printable worksheet in our collection.</p>
        </div>
        <div className="mt-10">
          <WorksheetGrid worksheets={worksheets} />
        </div>
      </div>
    );
  }

  if (!category) return notFound();

  const items = getWorksheetsByCategory(slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-4">
        <aside className="lg:col-span-1">
          <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Categories</h2>
            <div className="mt-4 flex flex-wrap gap-2 lg:flex-col lg:items-start">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  href={`/category/${c.slug}`}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition lg:w-full lg:rounded-lg ${
                    c.slug === slug
                      ? "bg-emerald-600 text-white shadow-sm"
                      : "bg-slate-50 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <div className="lg:col-span-3">
          <div className={`rounded-3xl bg-gradient-to-r ${category.color} p-8 text-center text-white shadow-lg`}>
            <h1 className="text-3xl font-extrabold sm:text-4xl">{category.name} Worksheets</h1>
            <p className="mx-auto mt-3 max-w-xl text-lg text-white/90">{category.description}</p>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">
              {items.length} worksheet{items.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="mt-5">
            <WorksheetGrid worksheets={items} />
          </div>
        </div>
      </div>
    </div>
  );
}
