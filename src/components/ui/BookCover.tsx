import Image from "next/image";
import type { CoverStyle } from "@/lib/types";
import { cn } from "@/lib/utils";

function Pattern({
  pattern,
  color,
}: {
  pattern: CoverStyle["pattern"];
  color: string;
}) {
  const rgba = (alpha: number) => {
    const hex = color.replace("#", "");
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return `rgb(${r} ${g} ${b} / ${alpha})`;
  };

  if (pattern === "diagonal") {
    return (
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent 0 22px, ${rgba(0.14)} 22px 23px)`,
        }}
      />
    );
  }
  if (pattern === "sunburst") {
    return (
      <div
        className="absolute -right-16 -top-16 h-[130%] w-[130%]"
        style={{
          backgroundImage: `conic-gradient(${rgba(0.16)} 0deg 9deg, transparent 9deg 24deg, ${rgba(0.16)} 24deg 30deg, transparent 30deg 45deg, ${rgba(0.16)} 45deg 51deg, transparent 51deg 72deg)`,
        }}
      />
    );
  }
  if (pattern === "grid") {
    return (
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, ${rgba(0.12)} 1px, transparent 1px), linear-gradient(to bottom, ${rgba(0.12)} 1px, transparent 1px)`,
          backgroundSize: "26px 26px",
        }}
      />
    );
  }
  if (pattern === "dots") {
    return (
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(${rgba(0.16)} 1.5px, transparent 1.5px)`,
          backgroundSize: "22px 22px",
        }}
      />
    );
  }
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `repeating-radial-gradient(circle at 100% 0%, ${rgba(0.15)} 0 2px, transparent 2px 26px)`,
      }}
    />
  );
}

export function BookCover({
  title,
  author,
  cover,
  className,
  compact = false,
  priority = false,
}: {
  title: string;
  author: string;
  cover: CoverStyle;
  className?: string;
  compact?: boolean;
  priority?: boolean;
}) {
  if (cover.image) {
    return (
      <div
        className={cn("relative aspect-[2/3] w-full select-none overflow-hidden rounded-sm shadow-[0_18px_40px_-16px_rgb(0_0_0/0.45)]", className)}
        role="img"
        aria-label={`Cover of ${title} by ${author}`}
      >
        <Image
          src={cover.image}
          alt={`Cover of ${title} by ${author}`}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 33vw, 45vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative aspect-[2/3] w-full select-none overflow-hidden rounded-sm p-5 shadow-[0_18px_40px_-16px_rgb(0_0_0/0.45)]",
        className,
      )}
      style={{ background: cover.background, color: cover.accent }}
      role="img"
      aria-label={`Cover of ${title} by ${author}`}
    >
      <Pattern pattern={cover.pattern} color={cover.accent} />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between text-[9px] font-medium uppercase tracking-[0.26em] opacity-90">
          <span>Oliet Press</span>
          <span className="inline-block h-2.5 w-2.5 rotate-45 border" style={{ borderColor: cover.accent }} />
        </div>

        <div className="flex flex-1 items-center">
          <h3
            className={cn(
              "font-display font-semibold leading-tight tracking-tight text-balance",
              compact ? "text-lg" : "text-xl sm:text-2xl",
            )}
          >
            {title}
          </h3>
        </div>

        <div className="border-t pt-3" style={{ borderColor: cover.accent }}>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-85">{author}</p>
        </div>
      </div>
    </div>
  );
}