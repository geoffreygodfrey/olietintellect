import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { ArrowLink } from "@/components/ui/CardArrow";
import type { Service } from "@/lib/types";

export function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="border-y border-line bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title="Six disciplines, one standard of care."
          lead="Every engagement is scoped, priced and delivered by senior practitioners."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service._id}
              className="group flex flex-col border border-line bg-paper p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/70 hover:shadow-[0_24px_50px_-24px_rgb(11_19_32/0.3)]"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-sm bg-ink text-brand-soft transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
              </div>
              <h3 className="card-headline mt-7 text-black">{service.title}</h3>
              <p className="card-subtext mt-3 text-black">{service.short}</p>
              <div className="mt-8 flex flex-1 items-end pt-2">
                <ArrowLink href={`/consultancy/${service.slug}`}>Learn more</ArrowLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}