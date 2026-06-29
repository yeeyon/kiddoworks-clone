import Image from "next/image";
import Link from "next/link";
import { Download, Heart } from "lucide-react";
import type { Worksheet } from "@/data/worksheets";

export function WorksheetCard({ worksheet }: { worksheet: Worksheet }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <Link href={`/worksheet/${worksheet.slug}`} className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <Image
          src={worksheet.image}
          alt={worksheet.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-4">
        <Link href={`/category/${worksheet.categorySlug}`} className="text-xs font-semibold uppercase tracking-wide text-emerald-600 hover:underline">
          {worksheet.category}
        </Link>
        <h3 className="mt-1 text-base font-bold leading-snug text-slate-900">
          <Link href={`/worksheet/${worksheet.slug}`}>{worksheet.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm text-slate-600">{worksheet.description}</p>
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1" title="Downloads">
              <Download className="h-3.5 w-3.5" /> {formatCount(worksheet.downloads)}
            </span>
            <span className="flex items-center gap-1" title="Likes">
              <Heart className="h-3.5 w-3.5" /> {formatCount(worksheet.likes)}
            </span>
          </div>
          <span className="rounded-full bg-slate-100 px-2 py-1">{worksheet.grades[0]}</span>
        </div>
      </div>
    </article>
  );
}

function formatCount(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n.toString();
}
