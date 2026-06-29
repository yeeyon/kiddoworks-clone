import { getWorksheetBySlug } from "@/data/worksheets";
import WorksheetDetail from "./WorksheetDetail";

export function generateStaticParams() {
  const { worksheets } = require("@/data/worksheets");
  return worksheets.map((w: any) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ws = getWorksheetBySlug(slug);
  return {
    title: ws ? `${ws.title} - KiddoWorks` : "Worksheet - KiddoWorks",
    description: ws?.description,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const ws = getWorksheetBySlug(slug);
  if (!ws) {
    return null;
  }
  return <WorksheetDetail worksheet={ws} />;
}
