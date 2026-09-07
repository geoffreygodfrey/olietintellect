import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  tone = "light",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-eyebrow text-[11px] font-bold uppercase tracking-[0.28em]",
        tone === "light" ? "text-brand" : "text-brand-soft",
        className,
      )}
    >
      <span className={cn("h-px w-8 shrink-0", tone === "light" ? "bg-brand/60" : "bg-brand-soft/60")} />
      <span>{children}</span>
      <span className={cn("h-px w-8 shrink-0", tone === "light" ? "bg-brand/60" : "bg-brand-soft/60")} />
    </p>
  );
}