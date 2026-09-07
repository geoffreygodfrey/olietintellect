import { ArrowLink } from "@/components/ui/CardArrow";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ServiceGroup } from "@/lib/types";

export function WhatWeDo({ groups }: { groups: ServiceGroup[] }) {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Three ways we turn expertise into value."
          lead="Consultancy for the decisions, publishing for the knowledge, content for the people — one firm, three disciplines, a single standard."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {groups.map((group) => (
            <article
              key={group._id ?? group.title}
              className="relative flex flex-col overflow-hidden border border-line bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-brand/70 hover:shadow-[0_24px_50px_-24px_rgb(11_19_32/0.35)]"
            >
              <div className="relative flex h-full flex-col p-8 sm:p-10">
                <span className="card-headline text-black">{group.title}</span>
                <p className="card-subtext mt-4 text-black">{group.description}</p>
                <div className="mt-8 flex flex-1 items-end pt-2">
                  <ArrowLink href={group.ctaHref} tone="light">
                    {group.ctaLabel}
                  </ArrowLink>
                </div>
              </div>
              </article>
            ))}
        </div>
      </Container>
    </section>
  );
}