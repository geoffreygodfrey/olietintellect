"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/layout/Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "/consultancy", label: "Consultancy" },
  { href: "/publications", label: "Publications" },
  { href: "/insights", label: "Insights" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled || open
          ? "border-linedark bg-ink/95 backdrop-blur-md"
          : "border-linedark/60 bg-ink",
      )}
    >
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium tracking-tight transition-colors",
                  active ? "text-brand-soft" : "text-mist hover:text-paper",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Link
            href="/work-with-us"
            className="inline-flex items-center gap-2 rounded-sm bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-[inset_0_-2px_0_rgb(0_0_0/0.18)] transition-colors hover:bg-brand-soft"
          >
            Work With Us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-sm text-paper transition-colors hover:bg-ink-soft lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-linedark/70 bg-ink transition-all duration-300 lg:hidden",
          open ? "max-h-[420px] border-t" : "max-h-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-5 py-6 sm:px-8" aria-label="Mobile navigation">
          {links.map((link) => {
            const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-sm px-3 py-3 font-display text-lg tracking-tight",
                  active ? "bg-ink-soft text-brand-soft" : "text-mist",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/work-with-us"
            onClick={() => setOpen(false)}
            className="mt-3 rounded-sm bg-brand px-4 py-3.5 text-center font-semibold text-white"
          >
            Work With Us
          </Link>
        </nav>
      </div>
    </header>
  );
}