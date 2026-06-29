import Image from "next/image";
import Link from "next/link";
import { Download, Heart } from "lucide-react";
import type { Worksheet } from "@/data/worksheets";
import { ClientTimestamp } from "./ClientTimestamp";

export function WorksheetCard({ worksheet }: { worksheet: Worksheet }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-emerald-200">
      <Link href={`/worksheet/${worksheet.slug}`} className="relative aspect-[4/5] overflow-hidden bg-slate-100">
        <Image
          src={worksheet.image}
          alt={worksheet.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur">
          {worksheet.grades[0]}
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <Link
          href={`/category/${worksheet.categorySlug}`}
          className="w-fit text-xs font-bold uppercase tracking-wider text-emerald-600 transition hover:text-emerald-700 hover:underline"
        >
          {worksheet.category}
        </Link>
        <h3 className="mt-2 text-base font-bold leading-snug text-slate-900 transition group-hover:text-emerald-700">
          <Link href={`/worksheet/${worksheet.slug}`}>{worksheet.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-500">{worksheet.description}</p>
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-medium text-slate-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1" title="Downloads">
              <Download className="h-3.5 w-3.5 text-emerald-500" /> {formatCount(worksheet.downloads)}
            </span>
            <span className="flex items-center gap-1" title="Likes">
              <Heart className="h-3.5 w-3.5 text-rose-400" /> {formatCount(worksheet.likes)}
            </span>
          </div>
          <span className="text-slate-400"><ClientTimestamp date={worksheet.dateAdded} /></span>
        </div>
      </div>
    </article>
  );
}

function formatCount(n: number) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : n.toString();
}
