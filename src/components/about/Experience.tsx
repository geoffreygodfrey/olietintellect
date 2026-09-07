import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Review } from "@/lib/types";

export function Experience({ reviews }: { reviews: Review[] }) {
  return (
    <section className="border-y border-line bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="In their words" title="The view from the client's side." />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <figure key={review.author} className="flex flex-col border border-line bg-paper p-8 sm:p-10">
              <Quote className="h-6 w-6 text-brass" aria-hidden="true" />
              <blockquote className="mt-5 font-display text-xl font-medium leading-snug tracking-tight text-ink">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-line pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-sm font-semibold text-brand-soft">
                  {review.author.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-ink">{review.author}</span>
                  <span className="block text-xs text-slate">{review.context}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}