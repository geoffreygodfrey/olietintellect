import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Philosophy() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Our philosophy</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink text-balance sm:text-4xl">
              Good advice and lasting knowledge belong together.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate">
              <p>
                Most consulting happens in the dark: advice is given, fees are billed, and the advice quietly
                disappears. We chose a different arrangement. Everything we advise, we are willing to write down,
                publish and be judged by.
              </p>
              <p>
                That is why Oliet Intellect is a dual company. The consultancy keeps us close to reality — live
                problems, real numbers, decisions with consequences. The publishing arm keeps us honest — we must say
                things clearly enough to defend, and teach things thoroughly enough to be useful.
              </p>
              <p>
                We serve people and organisations building with purpose: for profit where profit is the fuel, and for
                something more durable where the bottom line alone is not enough.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden bg-ink p-9 text-paper sm:p-12">
            <div className="relative flex h-full flex-col justify-between">
              <div>
                <span className="font-display text-6xl leading-none text-brass">&ldquo;</span>
                <p className="mt-2 font-display text-2xl font-medium leading-snug tracking-tight text-balance sm:text-[1.7rem]">
                  We operate at the intersection of business, analysis and knowledge.
                </p>
              </div>
              <p className="mt-10 border-t border-linedark pt-6 text-sm uppercase tracking-[0.2em] text-mist">
                The position we build everything from
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}