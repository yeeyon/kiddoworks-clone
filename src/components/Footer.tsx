import Link from "next/link";
import { Mail, Leaf } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-emerald-100 bg-emerald-950 text-emerald-100">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-md">
                <Leaf className="h-5 w-5" />
              </span>
              <span className="text-xl font-extrabold tracking-tight">SproutWorks</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-emerald-200/80">
              Original printable worksheets that help little minds grow. Designed for homes and classrooms.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/category/alphabets" className="text-emerald-200/80 transition hover:text-white">Alphabets</Link></li>
              <li><Link href="/category/numbers" className="text-emerald-200/80 transition hover:text-white">Numbers</Link></li>
              <li><Link href="/category/maths" className="text-emerald-200/80 transition hover:text-white">Maths</Link></li>
              <li><Link href="/category/english-worksheets" className="text-emerald-200/80 transition hover:text-white">English</Link></li>
              <li><Link href="/category/coloring" className="text-emerald-200/80 transition hover:text-white">Coloring</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-emerald-200/80 transition hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="text-emerald-200/80 transition hover:text-white">Contact Us</Link></li>
              <li><Link href="/privacy" className="text-emerald-200/80 transition hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-emerald-200/80 transition hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="text-emerald-200/80 transition hover:text-white">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wide text-white">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900 text-sm font-medium text-emerald-200 transition hover:bg-emerald-800 hover:text-white" aria-label="Facebook">FB</a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900 text-sm font-medium text-emerald-200 transition hover:bg-emerald-800 hover:text-white" aria-label="Twitter">TW</a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900 text-sm font-medium text-emerald-200 transition hover:bg-emerald-800 hover:text-white" aria-label="Instagram">IG</a>
              <a href="mailto:hello@sproutworks.example" className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900 text-emerald-200 transition hover:bg-emerald-800 hover:text-white" aria-label="Email"><Mail className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-emerald-900 pt-8 text-center text-xs text-emerald-400/70">
          © {new Date().getFullYear()} SproutWorks. All rights reserved. Original educational content.
        </div>
      </div>
    </footer>
  );
}
