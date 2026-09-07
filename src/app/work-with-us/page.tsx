import { Mail, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { EnquiryForm } from "@/components/work-with-us/EnquiryForm";
import { getSiteSettings } from "@/lib/content";

export const revalidate = 3600;

const steps = [
  {
    step: "01",
    title: "We read it",
    text: "Your enquiry goes straight to a senior member of the team — not a mailbox that forwards nothing.",
  },
  {
    step: "02",
    title: "We reply",
    text: "Within two working days, with an honest sense of whether — and how — we can help.",
  },
  {
    step: "03",
    title: "We talk",
    text: "A structured conversation to define the real question, then a scoped proposal with clear fees.",
  },
];

export default async function WorkWithUsPage() {
  const settings = await getSiteSettings();

  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container>
          <div className="max-w-4xl py-24 sm:py-32">
            <Eyebrow>Work with us</Eyebrow>
            <h1 className="mt-7 font-display text-[2.4rem] font-semibold leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl lg:text-6xl">
              Have a business challenge, project or idea you&rsquo;d like to explore?
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
              Tell us what you are building, fixing or deciding. We read every enquiry ourselves and reply with a
              clear next step — including, when honesty requires it, a recommendation to work with someone better
              suited.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20 sm:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <EnquiryForm settings={settings} />
            </div>

            <div className="lg:col-span-5">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">What happens next</h2>
              <div className="mt-7 space-y-6">
                {steps.map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <span className="font-display text-2xl font-semibold text-brand">{item.step}</span>
                    <div className="border-t border-line pt-2">
                      <h3 className="card-headline text-black">{item.title}</h3>
                      <p className="card-subtext mt-3 text-black">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 border border-line bg-paper p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-brand">Prefer to write directly?</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-brand-pale text-brand">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <a href={`mailto:${settings.email}`} className="text-sm font-semibold text-ink transition-colors hover:text-brand">
                    {settings.email}
                  </a>
                </div>
                <p className="mt-5 flex items-center gap-3 text-sm leading-relaxed text-slate">
                  <MessageSquare className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  A short message is enough. A clear question usually deserves a direct answer.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}