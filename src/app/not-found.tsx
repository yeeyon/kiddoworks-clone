import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <h1 className="text-7xl font-black text-indigo-600">404</h1>
      <h2 className="mt-4 text-2xl font-bold text-slate-900">Page not found</h2>
      <p className="mt-2 text-slate-600">Oops! We couldn&apos;t find the page you were looking for.</p>
      <Link href="/" className="mt-6 rounded-full bg-indigo-600 px-6 py-3 font-semibold text-white hover:bg-indigo-700">
        Go back home
      </Link>
    </div>
  );
}
