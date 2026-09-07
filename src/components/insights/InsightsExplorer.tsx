"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Insight } from "@/lib/types";

const categories = [
  { value: "all", label: "All" },
  { value: "business", label: "Business" },
  { value: "religion", label: "Religion" },
  { value: "education", label: "Education" },
  { value: "social-life", label: "Social Life" },
] as const;

export function InsightsExplorer({ insights }: { insights: Insight[] }) {
  const [category, setCategory] = useState<(typeof categories)[number]["value"]>("all");
  const featured = insights.filter((i) => i.featured);
  const pinned = featured.slice(0, 2);

  const filtered = insights.filter((article) => category === "all" || article.category === category);

  return (
    <section className="bg-paper py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        {category === "all" && pinned.length > 0 && (
          <div className="grid gap-px overflow-hidden border border-line bg-line lg:grid-cols-2">
            {pinned.map((article) => (
              <Link
                key={article._id}
                href={`/insights/${article.slug}`}
                className="group flex flex-col justify-between bg-cream p-8 transition-colors duration-300 hover:bg-paper sm:p-12"
              >
                <div>
                  <div className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">
                    <span>Featured</span>
                    <span className="h-px w-8 bg-brand/50" aria-hidden="true" />
                    <span className="text-slate">{article.readTime}</span>
                  </div>
                  <h2 className="card-headline mt-6 text-black transition-colors group-hover:text-brand">
                    {article.title}
                  </h2>
                  <p className="card-subtext mt-4 max-w-xl text-black">{article.excerpt}</p>
                </div>
                <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
                  <span className="text-xs text-slate">{formatDate(article.publishedAt)}</span>
<span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-brand">
                    Read
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-16 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {category === "all" ? "Latest insights" : categories.find((c) => c.value === category)?.label}
          </h2>
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
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <Link
              key={article._id}
              href={`/insights/${article.slug}`}
              className="group flex flex-col border border-line bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/70 hover:shadow-[0_24px_50px_-24px_rgb(11_19_32/0.3)]"
            >
              <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.22em] text-brand">
                <span>{article.category.replace("-", " ")}</span>
                <span className="text-slate">{article.readTime}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brand">
                {article.title}
              </h3>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-slate">{article.excerpt}</p>
              <div className="mt-7 flex items-center justify-between border-t border-line pt-5">
                <span className="text-xs text-slate">{formatDate(article.publishedAt)}</span>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-brand">
                  Read
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}