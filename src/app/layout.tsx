import type { Metadata } from "next";
import { Inter, Merriweather, Nunito } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getSiteSettings } from "@/lib/content";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["300", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Oliet Intellect — We Build Businesses. We Build Knowledge.",
    template: "%s — Oliet Intellect",
  },
  description:
    "Business consultancy, investment analysis, project management, publishing and educational content for people and organisations building with purpose.",
  keywords: [
    "business consultancy",
    "investment analysis",
    "business planning",
    "project management",
    "publishing",
    "Oliet Intellect",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Oliet Intellect — We Build Businesses. We Build Knowledge.",
    description:
      "Business consultancy, investment analysis, publishing and educational content for people and organisations building with purpose.",
    siteName: "Oliet Intellect",
    type: "website",
  },
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const settings = await getSiteSettings();

  return (
    <html lang="en" className={`${merriweather.variable} ${inter.variable} ${nunito.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer settings={settings} />
      </body>
    </html>
  );
}