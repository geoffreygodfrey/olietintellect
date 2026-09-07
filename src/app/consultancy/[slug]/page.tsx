import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/Icon";
import { ButtonLink } from "@/components/ui/Button";
import { CtaBand } from "@/components/ui/CtaBand";
import { Approach } from "@/components/consultancy/Approach";
import { FaqSection } from "@/components/consultancy/FaqSection";
import { getApproach, getFaqs, getServices } from "@/lib/content";
import type { Service } from "@/lib/types";

export const revalidate = 3600;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = (await getServices()).find((s: Service) => s.slug === slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} · Oliet Intellect Consultancy`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [services, steps, faqs] = await Promise.all([getServices(), getApproach(), getFaqs()]);
  const service = services.find((s: Service) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container>
          <div className="py-16 sm:py-24">
            <Link
              href="/consultancy"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate transition-colors hover:text-ink"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              All consultancy services
            </Link>

            <div className="mt-12 max-w-3xl">
              <span className="grid h-14 w-14 place-items-center rounded-sm bg-ink text-brand-soft">
                <Icon name={service.icon} className="h-6 w-6" />
              </span>
              <Eyebrow className="mt-8">Consultancy</Eyebrow>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink text-balance sm:text-5xl">
                {service.title}
              </h1>
              <p className="mt-5 font-display text-xl font-medium tracking-tight text-body/90">{service.short}</p>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">{service.description}</p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <ButtonLink href="/work-with-us" size="lg" withArrow>
                  Talk to us
                </ButtonLink>
                <ButtonLink href="#included" size="lg" variant="outline">
                  What&apos;s included
                </ButtonLink>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="included" className="border-b border-line bg-cream py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeading
                eyebrow="What it includes"
                title="A clear scope of work."
                lead="Every engagement is scoped to the question you are actually asking. Typical work includes:"
              />
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-line border-y border-line">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-4 py-5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" aria-hidden="true" />
                    <span className="text-base leading-relaxed text-body">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <Approach steps={steps} />

      <CtaBand
        eyebrow="The next step"
        title="Every engagement begins with a conversation."
        lead="Tell us where you are, what you're trying to achieve, and what's getting in the way."
        primaryLabel="Start a Conversation"
        primaryHref="/work-with-us"
      />

      <FaqSection faqs={faqs} />
    </>
  );
}