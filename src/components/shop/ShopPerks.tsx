import { Container } from "@/components/ui/Container";
import { Truck, RotateCcw, ShieldCheck, Mail } from "lucide-react";

const perks = [
  {
    icon: Truck,
    title: "Shipped with care",
    text: "Print books and apparel are packed properly and tracked all the way to you.",
  },
  {
    icon: Mail,
    title: "E-books, instantly",
    text: "DRM-free EPUB and PDF delivered to your inbox the moment you order.",
  },
  {
    icon: RotateCcw,
    title: "Simple returns",
    text: "If a print item arrives damaged, we replace it without argument.",
  },
  {
    icon: ShieldCheck,
    title: "Kept in confidence",
    text: "Your details stay private — we never share customer information.",
  },
] as const;

export function ShopPerks() {
  return (
    <section className="border-t border-line bg-cream">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk) => (
            <div key={perk.title} className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-brand-pale text-brand">
                <perk.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="card-headline text-black">{perk.title}</h3>
                <p className="card-subtext mt-2 text-black">{perk.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}