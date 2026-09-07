import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ArrowLink } from "@/components/ui/CardArrow";
import type { Faq } from "@/lib/types";

export function FaqSection({ faqs }: { faqs: Faq[] }) {
  return (
    <section id="faq" className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Questions"
          title="Before we talk, you may be asking…"
          lead="The questions people usually raise before their first conversation."
        />
        <div className="mt-12 max-w-3xl">
          <FaqAccordion items={faqs} />
          <div className="mt-8">
            <ArrowLink href="/work-with-us">Ask your own question</ArrowLink>
          </div>
        </div>
      </Container>
    </section>
  );
}