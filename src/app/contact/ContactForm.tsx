"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <div className="mt-12 grid gap-10 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-1">
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Email</h3>
            <p className="text-sm text-slate-600">hello@sproutworks.example</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-teal-100 p-3 text-teal-600">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Location</h3>
            <p className="text-sm text-slate-600">Kuala Lumpur, Malaysia</p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="rounded-xl bg-amber-100 p-3 text-amber-600">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900">Phone</h3>
            <p className="text-sm text-slate-600">+60 12-345 6789</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
        {status === "sent" ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Send className="h-8 w-8" />
            </div>
            <h2 className="mt-4 text-xl font-bold text-slate-900">Message sent!</h2>
            <p className="mt-2 text-slate-600">Thanks for reaching out. We&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Name</label>
                <input required type="text" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Subject</label>
              <input required type="text" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Message</label>
              <textarea required rows={5} className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-emerald-500" />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-emerald-700 sm:w-auto"
            >
              <Send className="h-5 w-5" /> Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
