import Link from "next/link";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 text-lg font-bold">
                K
              </span>
              <span className="text-xl font-extrabold tracking-tight">KiddoWorks</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Free printable worksheets for kids from preschool to grade 5. Made for teachers, parents and little learners.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/category/alphabets" className="hover:text-white">Alphabets</Link></li>
              <li><Link href="/category/numbers" className="hover:text-white">Numbers</Link></li>
              <li><Link href="/category/maths" className="hover:text-white">Maths</Link></li>
              <li><Link href="/category/english-worksheets" className="hover:text-white">English</Link></li>
              <li><Link href="/category/coloring" className="hover:text-white">Coloring</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
              <li><Link href="/disclaimer" className="hover:text-white">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Connect</h4>
            <div className="flex gap-3">
              <a href="#" className="rounded-full bg-slate-800 px-3 py-2 text-sm font-medium hover:bg-slate-700" aria-label="Facebook">FB</a>
              <a href="#" className="rounded-full bg-slate-800 px-3 py-2 text-sm font-medium hover:bg-slate-700" aria-label="Twitter">TW</a>
              <a href="#" className="rounded-full bg-slate-800 px-3 py-2 text-sm font-medium hover:bg-slate-700" aria-label="Instagram">IG</a>
              <a href="mailto:hello@kiddoworks.example" className="rounded-full bg-slate-800 p-2 hover:bg-slate-700" aria-label="Email"><Mail className="h-4 w-4" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} KiddoWorks. All rights reserved. This is a demo recreation for educational purposes.
        </div>
      </div>
    </footer>
  );
}
