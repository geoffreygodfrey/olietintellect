"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { BookCover } from "@/components/ui/BookCover";
import { Eyebrow } from "@/components/ui/Eyebrow";
import type { Publication } from "@/lib/types";
import { cn } from "@/lib/utils";

const categories = [
  { value: "all", label: "All" },
  { value: "business", label: "Business" },
  { value: "religious", label: "Religious" },
  { value: "education", label: "Educational" },
] as const;

const formats = [
  { value: "all", label: "All formats" },
  { value: "Print", label: "Print books" },
  { value: "E-book", label: "E-books" },
] as const;

export function BookExplorer({ publications }: { publications: Publication[] }) {
  const [category, setCategory] = useState<(typeof categories)[number]["value"]>("all");
  const [format, setFormat] = useState<(typeof formats)[number]["value"]>("all");

  const filtered = publications.filter(
    (book) =>
      (category === "all" || book.category === category) &&
      (format === "all" || book.format.includes(format)),
  );

  return (
    <section id="catalogue" className="border-t border-line bg-paper py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Eyebrow>Catalogue</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              The full shelf.
            </h2>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-5 border-y border-line py-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.value}
                type="button"
                onClick={() => setCategory(c.value)}
                className={cn(
                  "rounded-sm px-4 py-2 text-sm font-medium transition-colors",
                  category === c.value
                    ? "bg-brand text-white"
                    : "bg-cream text-slate hover:bg-paper-deep hover:text-ink",
                )}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="mr-1 text-xs uppercase tracking-[0.18em] text-slate">Format</span>
            {formats.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFormat(f.value)}
                className={cn(
                  "rounded-sm px-4 py-2 text-sm font-medium transition-colors",
                  format === f.value
                    ? "bg-brand text-white"
                    : "bg-cream text-slate hover:bg-paper-deep hover:text-ink",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((book) => (
            <a key={book._id} href={`/publications/${book.slug}`} className="group">
              <div className="relative">
                <BookCover title={book.title} author={book.author} cover={book.cover} />
                {book.status === "coming-soon" && (
                  <span className="absolute left-3 top-3 rounded-sm bg-paper px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink">
                    Coming soon
                  </span>
                )}
              </div>
              <div className="mt-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand">
                  {book.category} · {book.format.join(" · ")}
                </p>
                <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brass">
                  {book.title}
                </h3>
                <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-slate transition-colors group-hover:text-brand">
                  Details
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-12 rounded-sm border border-line bg-cream p-10 text-center text-slate">
            No titles in this combination yet. Try another filter — or tell us what to write.
          </p>
        )}
      </div>
    </section>
  );
}