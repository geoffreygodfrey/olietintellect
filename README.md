# Oliet Intellect — Website

Public website for **Oliet Intellect**, a consultancy and publishing company: business consultancy, investment analysis, project management, publishing and educational content.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**, and a content layer ready for **Sanity CMS**.

## Pages

| Route | Content |
| --- | --- |
| `/` | Home — hero, what we do, consultancy overview, why us, featured publications/insights, credibility, CTA |
| `/consultancy` | Services, who we help, Start/Strengthen/Rebuild, approach, case studies, FAQ |
| `/publications` | Oliet Press catalogue with category/format filters + `/publications/[slug]` book pages |
| `/insights` | Articles with category filters + `/insights/[slug]` article pages |
| `/shop` | Books & apparel store + `/shop/[slug]` product pages |
| `/about` | Philosophy, beliefs, expertise, experience, team |
| `/work-with-us` | Enquiry form → `/api/enquiry` |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Sanity CMS

The site ships with rich **seed content** in `src/lib/content/seed.ts`, so every page renders fully today. When your Sanity project is ready:

1. Copy `.env.example` to `.env.local`
2. Set `NEXT_PUBLIC_SANITY_PROJECT_ID` (and dataset/token as needed)
3. Create documents matching the queries in `src/lib/sanity/queries.ts` (types: `siteSettings`, `service`, `developmentStage`, `approachStep`, `publication`, `insight`, `product`, `caseStudy`, `faq`, `teamMember`, `value`, `capability`, `relatedPublication` for shop products)

With the project ID set, every page reads live content from Sanity with GROQ queries and falls back to seed content if a fetch fails. Without it, seed content is used. Images can be Sanity assets (auto-served via `@sanity/image-url`) or plain URLs.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run start` — serve the production build

## Notes

- Enquiry and newsletter routes (`/api/enquiry`, `/api/newsletter`) currently validate and acknowledge. Wire them to your email/CRM/provider when ready.
- Purchase buttons on the shop are catalogue-ready; connect your payment provider for checkout.
