export type BookCategory = "business" | "religious" | "education";
export type InsightCategory = "business" | "religion" | "education" | "social-life";
export type ProductType = "book" | "apparel";
export type ProductCategory = "books" | "apparel";

export interface NavLinks {
  consultancy: string;
  publications: string;
  insights: string;
  shop: string;
  about: string;
  workWithUs: string;
}

export interface SiteSettings {
  name: string;
  tagline: string;
  heroTitle: string;
  heroLead: string;
  email: string;
  phone?: string;
  location?: string;
  nav: Partial<NavLinks>;
  footerNote: string;
  newsletter: {
    title: string;
    description: string;
  };
  social: { label: string; href: string }[];
}

export interface ServiceGroup {
  _id?: string;
  title: string;
  description: string;
  items: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface Service {
  _id?: string;
  title: string;
  slug: string;
  icon: string;
  short: string;
  description: string;
  bullets: string[];
  featured?: boolean;
}

export interface DevelopmentStage {
  title: string;
  audience: string;
  description: string;
  outcomes: string[];
}

export interface ApproachStep {
  step: string;
  title: string;
  description: string;
}

export interface CoverStyle {
  background: string;
  accent: string;
  pattern: "diagonal" | "sunburst" | "grid" | "dots" | "waves";
  image?: string;
}

export interface Publication {
  _id: string;
  title: string;
  slug: string;
  category: BookCategory;
  format: string[];
  status: "available" | "coming-soon";
  excerpt: string;
  description: string;
  author: string;
  pages?: number;
  price?: number;
  currency?: string;
  featured?: boolean;
  cover: CoverStyle;
}

export type BlockStyle = "normal" | "h2" | "h3" | "quote" | "bullets";

export interface PortableTextBlock {
  _type: "block";
  style: BlockStyle;
  children: { text: string }[];
}

export interface Insight {
  _id: string;
  title: string;
  slug: string;
  category: InsightCategory;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  author: string;
  body: PortableTextBlock[];
}

export interface CaseStudy {
  _id: string;
  client: string;
  sector: string;
  headline: string;
  summary: string;
  outcomes: string[];
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Product {
  _id: string;
  title: string;
  slug: string;
  type: ProductType;
  category: ProductCategory;
  price?: number;
  currency?: string;
  description: string;
  featured?: boolean;
  cover?: CoverStyle;
  swatch?: string;
  options?: { label: string; values: string[] }[];
  bookSlug?: string;
}

export interface TeamMember {
  _id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
}

export interface Capability {
  icon: string;
  title: string;
  description: string;
}

export interface Value {
  title: string;
  text: string;
}

export interface Review {
  quote: string;
  author: string;
  context: string;
}