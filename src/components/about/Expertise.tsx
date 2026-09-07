import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import type { Capability } from "@/lib/types";

export function Expertise({ capabilities }: { capabilities: Capability[] }) {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Our expertise"
          title="The practices behind the advice."
          lead="Six areas of disciplined practice, developed through live engagements and reflected in our published work."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <div
              key={capability.title}
              className="group border border-line bg-cream p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand/70 hover:shadow-[0_24px_50px_-24px_rgb(11_19_32/0.3)]"
            >
              <span className="grid h-11 w-11 place-items-center rounded-sm bg-brand-pale text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                <Icon name={capability.icon} className="h-5 w-5" />
              </span>
              <h3 className="card-headline mt-6 text-black">{capability.title}</h3>
              <p className="card-subtext mt-3 text-black">{capability.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}