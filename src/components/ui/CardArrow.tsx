import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ArrowLink({
  href,
  children,
  tone = "light",
  className,
}: {
  href: string;
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 text-sm font-semibold tracking-tight transition-colors",
        tone === "light" ? "text-ink hover:text-brand" : "text-brand-soft hover:text-brand-soft/80",
        className,
      )}
    >
      <span className="underline decoration-brand/50 decoration-1 underline-offset-[6px] transition-colors group-hover:decoration-brand">
        {children}
      </span>
      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}