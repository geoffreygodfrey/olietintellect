"use client";

import { useState } from "react";
import { Check, Minus, Plus, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/types";

export function ProductPurchase({ product }: { product: Product }) {
  const [selections, setSelections] = useState<Record<string, string>>({});
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  function toggle() {
    setAdded(false);
    if (product.options?.length) {
      const complete = product.options.every((opt) => selections[opt.label]);
      if (!complete) return;
    }
    setAdded(true);
    window.setTimeout(() => setAdded(false), 2400);
  }

  return (
    <div>
      {product.options?.map((option) => (
        <div key={option.label} className="mt-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate">
            {option.label}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {option.values.map((value) => {
              const active = selections[option.label] === value;
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => setSelections((s) => ({ ...s, [option.label]: value }))}
                  className={
                    active
                      ? "rounded-sm border border-ink bg-ink px-4 py-2 text-sm font-medium text-paper"
                      : "rounded-sm border border-line bg-cream px-4 py-2 text-sm font-medium text-slate transition-colors hover:border-brand hover:text-ink"
                  }
                >
                  {value}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="mt-8 flex items-center gap-5">
        <div className="flex items-center border border-line bg-cream">
          <button
            type="button"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="grid h-12 w-11 place-items-center text-slate transition-colors hover:text-ink"
            aria-label="Decrease quantity"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-8 text-center text-sm font-semibold text-ink">{qty}</span>
          <button
            type="button"
            onClick={() => setQty((q) => Math.min(20, q + 1))}
            className="grid h-12 w-11 place-items-center text-slate transition-colors hover:text-ink"
            aria-label="Increase quantity"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <button
          type="button"
          onClick={toggle}
          className={
            added
              ? "inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-sm font-semibold text-white"
              : "inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-brand px-6 py-3.5 text-sm font-semibold text-white shadow-[inset_0_-2px_0_rgb(0_0_0/0.18)] transition-colors hover:bg-brand-soft"
          }
        >
          {added ? (
            <>
              <Check className="h-4 w-4" aria-hidden="true" />
              Added to basket
            </>
          ) : (
            <>
              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
              Add to basket
            </>
          )}
        </button>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-slate">
        Orders are confirmed by email and fulfilled by our team. If the basket is currently quiet, it is because
        checkout is wired to your payment provider — the catalogue is ready.
      </p>
    </div>
  );
}