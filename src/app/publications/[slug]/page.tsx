import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, BookMarked } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BookCover } from "@/components/ui/BookCover";
import { ButtonLink } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils";
import { getPublicationBySlug, getPublications } from "@/lib/content";
import type { Publication } from "@/lib/types";

export const revalidate = 3600;

export function generateStaticParams() {
  return getPublications().then((publications) => publications.map((p) => ({ slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const book = await getPublicationBySlug(slug);
  if (!book) return { title: "Publication not found" };
  return {
    title: book.title,
    description: book.excerpt,
  };
}

export default async function PublicationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const book = await getPublicationBySlug(slug);
  if (!book) notFound();

  const all = await getPublications();
  const related = all
    .filter((candidate: Publication) => candidate._id !== book._id && candidate.category === book.category)
    .slice(0, 2);

  const available = book.status === "available";
  const shopHref = available ? `/shop/${book.slug}` : "/shop";

  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container>
          <div className="py-24 sm:py-28">
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All publications
            </Link>

            <div className="mt-12 grid gap-14 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-20">
              <div className="mx-auto w-full max-w-[420px]">
                <BookCover title={book.title} author={book.author} cover={book.cover} priority />
              </div>

              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-brand">
                  {book.category} · {book.format.join(" · ")} · Oliet Press
                </p>
                <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl">
                  {book.title}
                </h1>
                <p className="mt-4 text-base font-medium text-body/80">By {book.author}</p>

                <p className="mt-7 text-base leading-relaxed text-slate sm:text-lg">{book.description}</p>

                <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-y border-line py-5 text-sm">
                  <span>
                    <span className="text-slate">List price — </span>
                    <span className="font-semibold text-ink">{formatPrice(book.price, book.currency)}</span>
                  </span>
                  {book.pages && (
                    <span>
                      <span className="text-slate">Pages — </span>
                      <span className="font-semibold text-ink">{book.pages}</span>
                    </span>
                  )}
                  <span>
                    <span className="text-slate">Formats — </span>
                    <span className="font-semibold text-ink">{book.format.join(" · ")}</span>
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <ButtonLink href={shopHref} size="lg" withArrow>
                    {available ? "Buy this title" : "View in shop"}
                  </ButtonLink>
                  {!available && (
                    <p className="inline-flex items-center gap-2 self-center text-sm font-medium text-brand">
                      <BookMarked className="h-4 w-4" aria-hidden="true" />
                      Coming soon — join updates via the newsletter
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">Contents</h2>
              <ol className="mt-6 space-y-0 divide-y divide-line border-y border-line">
                {book.contents.map((item, i) => (
                  <li key={item} className="flex items-baseline gap-5 py-4">
                    <span className="font-display text-sm font-semibold text-brass">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] font-medium text-body">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex flex-col items-start gap-8">
              <div className="border border-line bg-paper p-8 sm:p-10">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-brand">About this series</p>
                <p className="mt-4 text-[15px] leading-relaxed text-slate">
                  Every Oliet Press title is written by the practicing team and grounded in real advisory work — not
                  by authors who advise nothing and write about everything. Print editions are produced to standard;
                  e-books are DRM-free and readable on any device.
                </p>
              </div>

              {related.length > 0 && (
                <div className="w-full">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink">You may also read</h3>
                  <div className="mt-6 grid gap-8 sm:grid-cols-2">
                    {related.map((book) => (
                      <div key={book._id} className="group">
                        <Link href={`/publications/${book.slug}`}>
                          <BookCover
                            title={book.title}
                            author={book.author}
                            cover={book.cover}
                            compact
                            className="max-w-[180px]"
                          />
                        </Link>
                        <h4 className="mt-4 font-display text-lg font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-brass">
                          <Link href={`/publications/${book.slug}`}>{book.title}</Link>
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}