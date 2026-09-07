import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ProductVisual } from "@/components/shop/ProductVisual";
import { ProductPurchase } from "@/components/shop/ProductPurchase";
import { formatPrice } from "@/lib/utils";
import { getProductBySlug, getProducts } from "@/lib/content";
import type { Product } from "@/lib/types";

export const revalidate = 3600;

export function generateStaticParams() {
  return getProducts().then((products) => products.map((p) => ({ slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.title,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  const all = await getProducts();
  const related = all
    .filter((candidate: Product) => candidate._id !== product._id && candidate.category === product.category)
    .slice(0, 3);

  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container>
          <div className="py-24 sm:py-28">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back to the store
            </Link>

            <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-20">
              <div className="mx-auto w-full max-w-[420px]">
                <ProductVisual product={product} priority />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-brand">
                  {product.category} · {product.type === "book" ? "Oliet Press" : "Oliet Intellect"}
                </p>
                <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl">
                  {product.title}
                </h1>
                <p className="mt-4 font-display text-2xl font-semibold text-ink">
                  {formatPrice(product.price, product.currency)}
                </p>

                <p className="mt-6 text-base leading-relaxed text-slate sm:text-lg">{product.description}</p>

                <ProductPurchase product={product} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-cream py-16 sm:py-24">
          <Container>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">You may also like</h2>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
              {related.map((item: Product) => (
                <Link key={item._id} href={`/shop/${item.slug}`} className="group">
                  <ProductVisual product={item} />
                  <div className="mt-4 flex items-start justify-between gap-3">
                    <h3 className="font-display text-base font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brass">
                      {item.title}
                    </h3>
                    <span className="shrink-0 text-sm font-semibold text-body">
                      {formatPrice(item.price, item.currency)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}