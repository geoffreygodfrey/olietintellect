import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ApproachStep } from "@/lib/types";

export function Approach({ steps }: { steps: ApproachStep[] }) {
  return (
    <section id="approach" className="bg-paper py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="How we work" title="From analysis to action." />

        <div className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div key={step.step} className="border-t border-line pt-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand">{step.step}</p>
              <h3 className="mt-2 font-display text-[15px] font-semibold text-ink">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-body">{step.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-slate">
          The depth of each stage depends on the engagement. Some projects require analysis and planning; others require
          support through implementation.
        </p>
      </Container>
    </section>
  );
}