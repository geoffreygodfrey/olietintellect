"use client";

import { useState } from "react";
import { Check, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterForm({ tone = "dark" }: { tone?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("loading");
    try {
      await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } finally {
      setState("done");
    }
  }

  if (state === "done") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 text-sm",
          tone === "dark" ? "text-paper" : "text-ink",
        )}
      >
        <span className="grid h-8 w-8 place-items-center rounded-full bg-brand text-white">
          <Check className="h-4 w-4" />
        </span>
        You are on the list. Welcome to The Oliet Letter.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
      <label htmlFor={`newsletter-${tone}`} className="sr-only">
        Email address
      </label>
      <input
        id={`newsletter-${tone}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className={cn(
          "w-full rounded-sm border px-4 py-3 text-sm outline-none transition-colors focus:ring-2 focus:ring-brand",
          tone === "dark"
            ? "border-linedark bg-ink-soft text-paper placeholder:text-mist focus:border-brand"
            : "border-line bg-cream text-ink placeholder:text-slate focus:border-brand",
        )}
      />
      <button
        type="submit"
        disabled={state === "loading"}
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-soft disabled:opacity-60"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {state === "loading" ? "Subscribing…" : "Subscribe"}
      </button>
    </form>
  );
}