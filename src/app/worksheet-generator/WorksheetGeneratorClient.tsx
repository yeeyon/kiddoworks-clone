"use client";

import { useState } from "react";
import { categories } from "@/data/worksheets";
import { Settings, Plus, Minus, RefreshCw, Download, Printer } from "lucide-react";

type Op = "addition" | "subtraction" | "multiplication" | "division";

export default function WorksheetGeneratorClient() {
  const [operation, setOperation] = useState<Op>("addition");
  const [count, setCount] = useState(10);
  const [max, setMax] = useState(10);
  const [problems, setProblems] = useState<{ a: number; b: number; op: string }[]>([]);

  const labels: Record<Op, string> = {
    addition: "Addition",
    subtraction: "Subtraction",
    multiplication: "Multiplication",
    division: "Division",
  };

  function generate() {
    const out = [];
    for (let i = 0; i < count; i++) {
      let a = Math.floor(Math.random() * max) + 1;
      let b = Math.floor(Math.random() * max) + 1;
      if (operation === "subtraction" && b > a) [a, b] = [b, a];
      if (operation === "division") {
        const prod = a * b;
        out.push({ a: prod, b, op: "÷" });
      } else {
        const op = operation === "addition" ? "+" : operation === "subtraction" ? "−" : "×";
        out.push({ a, b, op });
      }
    }
    setProblems(out);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Worksheet Generator</h1>
        <p className="mt-3 text-lg text-slate-600">Create custom math practice sheets in seconds.</p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-1">
          <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <Settings className="h-5 w-5 text-indigo-600" /> Settings
          </h2>

          <div className="mt-6 space-y-5">
            <div>
              <label className="text-sm font-medium text-slate-700">Operation</label>
              <select
                value={operation}
                onChange={(e) => setOperation(e.target.value as Op)}
                className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500"
              >
                {Object.entries(labels).map(([k, v]) => (
                  <option key={k} value={k}>
                    {v}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Number of problems: {count}</label>
              <input
                type="range"
                min={5}
                max={30}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="mt-2 w-full accent-indigo-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">Highest number: {max}</label>
              <input
                type="range"
                min={5}
                max={100}
                value={max}
                onChange={(e) => setMax(Number(e.target.value))}
                className="mt-2 w-full accent-indigo-600"
              />
            </div>

            <button
              onClick={generate}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-indigo-700"
            >
              <RefreshCw className="h-5 w-5" /> Generate Worksheet
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Preview</h2>
            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                disabled={problems.length === 0}
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-50"
              >
                <Printer className="h-4 w-4" /> Print
              </button>
              <button
                disabled={problems.length === 0}
                className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 disabled:opacity-50"
              >
                <Download className="h-4 w-4" /> Download
              </button>
            </div>
          </div>

          {problems.length > 0 ? (
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
              {problems.map((p, i) => (
                <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                  <div className="text-xl font-bold tabular-nums text-slate-900">
                    {p.a} {p.op} {p.b} =
                  </div>
                  <div className="mt-3 h-8 border-b border-slate-300" />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10 flex flex-col items-center justify-center rounded-xl border border-dashed border-slate-300 bg-slate-50 py-16 text-center">
              <RefreshCw className="h-10 w-10 text-slate-300" />
              <p className="mt-3 text-slate-500">Adjust settings and click Generate to see your worksheet.</p>
            </div>
          )}
        </div>
      </div>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-indigo-50 p-6">
          <h3 className="font-bold text-indigo-900">1. Choose your topic</h3>
          <p className="mt-2 text-sm text-indigo-700">Pick an operation and set the difficulty range.</p>
        </div>
        <div className="rounded-2xl bg-emerald-50 p-6">
          <h3 className="font-bold text-emerald-900">2. Make it yours</h3>
          <p className="mt-2 text-sm text-emerald-700">Customize the number of problems to match your lesson plan.</p>
        </div>
        <div className="rounded-2xl bg-amber-50 p-6">
          <h3 className="font-bold text-amber-900">3. Print or download</h3>
          <p className="mt-2 text-sm text-amber-700">Use the sheet instantly in class or at home.</p>
        </div>
      </section>
    </div>
  );
}
