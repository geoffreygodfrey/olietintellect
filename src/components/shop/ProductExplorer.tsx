"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ProductVisual } from "@/components/shop/ProductVisual";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

const tabs = [
  { value: "all", label: "Everything" },
  { value: "books", label: "Books" },
  { value: "apparel", label: "Apparel" },
] as const;

export function ProductExplorer({ products }: { products: Product[] }) {
  const [tab, setTab] = useState<(typeof tabs)[number]["value"]>("all");

  const filtered = products.filter((product) => tab === "all" || product.category === tab);

  return (
    <section id="store" className="bg-paper py-20 sm:py-28">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Eyebrow>Store</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              A small, deliberate catalogue.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t.value}
                type="button"
                onClick={() => setTab(t.value)}
                className={cn(
                  "rounded-sm px-5 py-2.5 text-sm font-medium transition-colors",
                  tab === t.value ? "bg-brand text-white" : "bg-cream text-slate hover:bg-paper-deep hover:text-ink",
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((product) => (
            <a key={product._id} href={`/shop/${product.slug}`} className="group">
              <ProductVisual product={product} />
              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand">
                    {product.type === "book" ? "Book" : "Apparel"}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brass">
                    {product.title}
                  </h3>
                </div>
                <span className="shrink-0 text-sm font-semibold text-body">
                  {formatPrice(product.price, product.currency)}
                </span>
              </div>
              <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-slate transition-colors group-hover:text-brand">
                View product
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}