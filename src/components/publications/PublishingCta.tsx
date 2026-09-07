import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowLink } from "@/components/ui/CardArrow";

export function PublishingCta() {
  return (
    <section className="border-t border-line bg-cream py-20 sm:py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            eyebrow="For organisations"
            title="Do you know what your organisation knows?"
            lead="You hold knowledge worth packaging — lessons, methods, fields of practice. We help organisations publish that knowledge: books, guides, training material and institutional histories."
          />
          <div className="flex flex-col items-start gap-5">
            <ArrowLink href="/work-with-us">Talk to us about publishing your knowledge</ArrowLink>
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate transition-colors hover:text-brand"
            >
              See the thinking behind our books →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}