import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { getSiteSettings } from "@/lib/content";

export const revalidate = 3600;

const sections = [
  {
    title: "What we collect",
    items: [
      "Enquiry form — your name, email address, company (optional), the type of work you are requesting, and the message you send.",
      "Newsletter form — your email address only.",
      "No cookies, trackers or analytics are set on your visit to this site.",
    ],
  },
  {
    title: "How we use it",
    items: [
      "To respond to your enquiry and carry out any work we agree with you.",
      "To send the Oliet Letter if you subscribe — every email includes a way to unsubscribe.",
      "We never sell, rent or trade your information.",
    ],
  },
  {
    title: "Who we share it with",
    items: [
      "We only share data with third parties when it is required to deliver our services (for example, an email delivery provider) or where the law requires it.",
    ],
  },
  {
    title: "How long we keep it",
    items: [
      "Enquiry and subscription information is kept only for as long as it is needed to serve you, or as long as the law requires.",
    ],
  },
  {
    title: "Your rights",
    items: [
      "You can ask us at any time for a copy of the information we hold about you, to correct it, or to have it deleted. Write to us at the address below and we will act promptly.",
    ],
  },
];

export default async function PrivacyPage() {
  const settings = await getSiteSettings();

  return (
    <section className="border-b border-line bg-paper">
      <Container>
        <div className="max-w-3xl py-24 sm:py-32">
          <Eyebrow>Privacy policy</Eyebrow>
          <h1 className="mt-7 font-display text-[2.4rem] font-semibold leading-[1.08] tracking-tight text-ink text-balance sm:text-5xl">
            How we handle your information.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
            Oliet Intellect is a consultancy, publishing and knowledge company. This policy is a plain-English summary
            of what we collect on this website and what we do with it.
          </p>
          <p className="mt-4 text-sm text-slate">
            Last updated: 7 September 2026. If anything here reads like a legal document you have paid for, we
            apologise — this one is written for people.
          </p>
        </div>

        <div className="border-t border-line pb-20 sm:pb-28">
          <div className="mt-12 flex flex-col gap-12">
            {sections.map((section) => (
              <section key={section.title} className="grid gap-4 lg:grid-cols-[220px_1fr] lg:gap-10">
                <h2 className="font-display text-xl font-semibold tracking-tight text-ink">{section.title}</h2>
                <ul className="flex flex-col gap-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-baseline gap-4 text-[15px] leading-relaxed text-body">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45 bg-brand" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-16 border border-line bg-cream p-8 sm:p-10">
            <h2 className="font-display text-xl font-semibold tracking-tight text-ink">Questions or requests</h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-slate">
              For anything related to your personal data — access, correction or deletion — email us directly:
            </p>
            <a
              href={`mailto:${settings.email}`}
              className="mt-4 inline-block text-base font-semibold text-brand underline decoration-brand/40 decoration-2 underline-offset-4 transition-colors hover:text-brand-soft"
            >
              {settings.email}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}