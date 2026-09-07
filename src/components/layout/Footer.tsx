import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { NewsletterForm } from "@/components/ui/NewsletterForm";
import type { SiteSettings } from "@/lib/types";

export function Footer({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="border-t border-linedark bg-black text-mist">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-md text-[15px] leading-relaxed">{settings.footerNote}</p>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-brass-soft">
              The Intellect Veins
            </p>
            <div className="mt-8">
              <h3 className="font-display text-lg font-semibold text-paper">{settings.newsletter.title}</h3>
              <p className="mt-2 max-w-sm text-sm leading-relaxed">{settings.newsletter.description}</p>
              <div className="mt-5">
                <NewsletterForm />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-soft">Explore</h3>
            <ul className="mt-5 space-y-3">
              {[
                { href: "/consultancy", label: "Consultancy" },
                { href: "/publications", label: "Publications" },
                { href: "/insights", label: "Insights" },
                { href: "/shop", label: "Shop" },
                { href: "/about", label: "About" },
                { href: "/work-with-us", label: "Work With Us" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-brand-soft">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-soft">Offerings</h3>
            <ul className="mt-5 space-y-3">
              {[
                { href: "/consultancy#services", label: "Services" },
                { href: "/consultancy#approach", label: "Our Approach" },
                { href: "/consultancy#development", label: "Start · Strengthen · Rebuild" },
                { href: "/consultancy#case-studies", label: "Case Studies" },
                { href: "/consultancy#faq", label: "FAQs" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm transition-colors hover:text-brand-soft">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.26em] text-brand-soft">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" aria-hidden="true" />
                <a href={`mailto:${settings.email}`} className="transition-colors hover:text-paper">
                  {settings.email}
                </a>
              </li>
              {settings.phone && (
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" aria-hidden="true" />
                  <span>{settings.phone}</span>
                </li>
              )}
              {settings.location && (
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft" aria-hidden="true" />
                  <span>{settings.location}</span>
                </li>
              )}
            </ul>
            <Link
              href="/work-with-us"
              className="mt-7 inline-flex items-center gap-2 rounded-sm border border-brand/40 px-5 py-2.5 text-sm font-semibold text-brand-soft transition-colors hover:bg-brand hover:text-white"
            >
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-linedark/60">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 px-5 py-6 sm:flex-row sm:items-center sm:px-8">
          <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-6">
            <p className="text-xs text-mist/80">© {new Date().getFullYear()} {settings.name}. All rights reserved.</p>
            <Link href="/privacy" className="text-xs text-mist/80 transition-colors hover:text-brand-soft">
              Privacy Policy
            </Link>
          </div>
          <div className="flex gap-6">
            {settings.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-mist/80 transition-colors hover:text-brand-soft"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}