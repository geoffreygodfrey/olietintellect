import type { PortableTextBlock } from "@/lib/types";

export function PortableText({ blocks }: { blocks: PortableTextBlock[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        const text = block.children.map((c) => c.text).join("");
        if (block.style === "h2") {
          return (
            <h2 key={i} className="pt-4 font-display text-2xl font-semibold tracking-tight text-ink">
              {text}
            </h2>
          );
        }
        if (block.style === "h3") {
          return (
            <h3 key={i} className="pt-2 font-display text-xl font-semibold tracking-tight text-ink">
              {text}
            </h3>
          );
        }
        if (block.style === "quote") {
          return (
            <blockquote key={i} className="border-l-2 border-brass pl-6 font-display text-xl leading-snug text-ink">
              {text}
            </blockquote>
          );
        }
        if (block.style === "bullets") {
          return (
            <ul key={i} className="space-y-3 pl-1">
              {block.children.map((child, j) => (
                <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-slate">
                  <span className="mt-2.5 inline-block h-1.5 w-1.5 shrink-0 rotate-45 bg-brass" />
                  {child.text}
                </li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="text-[16px] leading-[1.85] text-body/90">
            {text}
          </p>
        );
      })}
    </div>
  );
}