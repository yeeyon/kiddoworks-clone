import { notFound } from "next/navigation";
import { categories, getWorksheetsByCategory, worksheets } from "@/data/worksheets";
import { WorksheetGrid } from "@/components/WorksheetGrid";
import Link from "next/link";

export function generateStaticParams() {
  return [{ slug: "all" }, ...categories.map((c) => ({ slug: c.slug }))];
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return {
    title: "Categories - KiddoWorks",
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (slug === "all") {
    return (
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-center text-3xl font-extrabold text-slate-900">All Worksheets</h1>
        <p className="mt-2 text-center text-slate-600">Browse every printable worksheet in our collection.</p>
        <div className="mt-8">
          <WorksheetGrid worksheets={worksheets} />
        </div>
      </div>
    );
  }

  if (!category) return notFound();

  const items = getWorksheetsByCategory(slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className={`mx-auto max-w-3xl rounded-3xl bg-gradient-to-r ${category.color} p-8 text-center text-white shadow-lg`}>
        <h1 className="text-3xl font-extrabold sm:text-4xl">{category.name} Worksheets</h1>
        <p className="mt-3 text-lg text-white/90">{category.description}</p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {categories.map((c) => (
          <Link
            key={c.slug}
            href={`/category/${c.slug}`}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              c.slug === slug
                ? "bg-indigo-600 text-white"
                : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
            }`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      <div className="mt-10">
        <p className="mb-3 text-sm text-slate-500">{items.length} worksheet{items.length !== 1 ? "s" : ""} found</p>
        <WorksheetGrid worksheets={items} />
      </div>
    </div>
  );
}
