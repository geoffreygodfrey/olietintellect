import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center", className)} aria-label="Oliet Intellect — Home">
      <span className="grid h-10 w-auto shrink-0 place-items-center overflow-hidden rounded-md bg-[#FEFEFE] px-2 shadow-[inset_0_-1px_0_rgb(0_0_0/0.06)] ring-1 ring-white/10 transition-transform duration-300 group-hover:-rotate-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/oltloggo-transparent.svg"
          alt="Oliet Intellect"
          className="h-8 w-auto"
          fetchPriority="high"
          decoding="async"
        />
      </span>
    </Link>
  );
}
