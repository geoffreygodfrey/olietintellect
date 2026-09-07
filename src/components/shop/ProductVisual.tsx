import { BookCover } from "@/components/ui/BookCover";
import type { Product } from "@/lib/types";
import { cn } from "@/lib/utils";

export function ProductVisual({
  product,
  className,
  priority = false,
}: {
  product: Product;
  className?: string;
  priority?: boolean;
}) {
  if (product.type === "book" && product.cover) {
    return (
      <BookCover
        title={product.title.replace(/ \((Print|E-book)\)$/, "")}
        author="Diouf I. Mhlanga"
        cover={product.cover}
        className={className}
        priority={priority}
      />
    );
  }

  return (
    <div
      className={cn(
        "relative flex aspect-[2/3] w-full select-none flex-col justify-between overflow-hidden rounded-sm p-5 shadow-[0_18px_40px_-16px_rgb(0_0_0/0.35)]",
        className,
      )}
      style={{ background: product.swatch ?? "#f6f3ec", color: "var(--color-ink)" }}
    >
      <div className="flex items-center justify-between">
        <span
          className="text-[9px] font-semibold uppercase tracking-[0.26em]"
          style={{ opacity: 0.6 }}
        >
          Oliet Intellect
        </span>
        <span className="inline-block h-2.5 w-2.5 rotate-45" style={{ background: "var(--color-brass)" }} aria-hidden="true" />
      </div>
      <div className="flex flex-1 items-center">
        <p className="font-display text-2xl font-semibold leading-tight tracking-tight text-balance">
          {product.title.replace(" T-Shirt", "").replace(" Cap", "").replace(" Tote", "")}
        </p>
      </div>
      <div className="border-t border-ink/20 pt-3">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em]" style={{ opacity: 0.6 }}>
          {product.type === "apparel" ? "Apparel" : "Book"}
        </p>
      </div>
    </div>
  );
}