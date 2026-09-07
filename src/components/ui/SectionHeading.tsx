import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto flex flex-col items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow tone={tone} className={cn(align === "center" && "justify-center")}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-4xl lg:text-[2.9rem]",
          tone === "light" ? "text-ink" : "text-paper",
        )}
      >
        {title}
      </h2>
      {lead && (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", tone === "light" ? "text-slate" : "text-mist")}>
          {lead}
        </p>
      )}
    </div>
  );
}