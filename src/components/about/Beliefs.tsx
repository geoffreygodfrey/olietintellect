import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Value } from "@/lib/types";

export function Beliefs({ values }: { values: Value[] }) {
  return (
    <section className="border-y border-line bg-cream py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="What we believe"
          title="Four convictions we refuse to trade."
          lead="These are not slogans. They are the standards we apply to every engagement, every manuscript and every invoice."
        />

        <div className="mt-14 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <div key={value.title} className="bg-cream p-8 transition-colors duration-300 hover:bg-paper">
              <span className="font-display text-3xl font-semibold text-brass">0{i + 1}</span>
              <h3 className="card-headline mt-5 text-black">{value.title}</h3>
              <p className="card-subtext mt-3 text-black">{value.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}