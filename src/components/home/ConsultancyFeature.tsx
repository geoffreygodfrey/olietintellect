import { ArrowLink } from "@/components/ui/CardArrow";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import type { ApproachStep, Service } from "@/lib/types";

export function ConsultancyFeature({ services, steps }: { services: Service[]; steps: ApproachStep[] }) {
  const featured = services.filter((s: Service) => s.featured);
  const cards = featured.length >= 4 ? featured.slice(0, 4) : services.slice(0, 4);

  return (
    <section className="border-y border-line bg-cream py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Consultancy"
            title="Business decisions deserve more than advice."
            lead="We don't just give you recommendations. We work with you to understand the situation, identify what matters, and turn analysis into a practical plan for action."
          />
          <div className="flex shrink-0 flex-col items-start gap-4 sm:flex-row sm:items-center">
            <ArrowLink href="/consultancy">Explore Consultancy</ArrowLink>
          </div>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((service) => (
            <div key={service._id} className="group bg-paper p-8 transition-colors duration-300 hover:bg-cream">
              <span className="grid h-11 w-11 place-items-center rounded-sm bg-brand-pale text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon name={service.icon} className="h-5 w-5" />
              </span>
              <h3 className="card-headline mt-6 text-black">{service.title}</h3>
              <p className="card-subtext mt-3 text-black">{service.short}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="font-display text-xl font-semibold tracking-tight text-ink">From analysis to action.</p>
          <div className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <div key={step.step} className="border-t border-line pt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">{step.step}</p>
                <h3 className="mt-2 font-display text-[15px] font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-body">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}