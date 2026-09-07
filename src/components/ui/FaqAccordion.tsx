import { Plus } from "lucide-react";
import type { Faq } from "@/lib/types";

export function FaqAccordion({ items }: { items: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => (
        <details key={item.question} name="faq" className="group" open={i === 0}>
          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-6 py-6 text-left [&::-webkit-details-marker]:hidden">
            <span className="font-display text-lg font-medium tracking-tight text-ink sm:text-xl">{item.question}</span>
            <Plus
              className="h-5 w-5 shrink-0 text-brand transition-transform duration-300 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <div className="pb-6">
            <p className="max-w-3xl text-[15px] leading-relaxed text-slate">{item.answer}</p>
          </div>
        </details>
      ))}
    </div>
  );
}