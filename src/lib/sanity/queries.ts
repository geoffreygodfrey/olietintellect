import groq from "groq";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    name,
    tagline,
    heroTitle,
    heroLead,
    email,
    phone,
    location,
    nav,
    footerNote,
    newsletter,
    social[] { label, href }
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc){
    _id,
    title,
    slug,
    icon,
    short,
    description,
    bullets,
    featured
  }
`;

export const serviceGroupsQuery = groq`
  *[_type == "serviceGroup"] | order(order asc){
    _id,
    title,
    description,
    items,
    ctaLabel,
    ctaHref
  }
`;

export const developmentStagesQuery = groq`
  *[_type == "developmentStage"] | order(order asc){
    title,
    audience,
    description,
    outcomes
  }
`;

export const approachQuery = groq`
  *[_type == "approachStep"] | order(order asc){
    step,
    title,
    description
  }
`;

export const publicationsQuery = groq`
  *[_type == "publication"] | order(featured desc, _createdAt asc){
    _id,
    title,
    slug,
    category,
    format,
    status,
    excerpt,
    description,
    author,
    pages,
    price,
    currency,
    featured,
    cover
  }
`;

export const publicationBySlugQuery = groq`
  *[_type == "publication" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    category,
    format,
    status,
    excerpt,
    description,
    author,
    pages,
    price,
    currency,
    featured,
    cover
  }
`;

export const insightsQuery = groq`
  *[_type == "insight"] | order(publishedAt desc){
    _id,
    title,
    slug,
    category,
    excerpt,
    publishedAt,
    readTime,
    featured,
    author,
    body
  }
`;

export const insightBySlugQuery = groq`
  *[_type == "insight" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    category,
    excerpt,
    publishedAt,
    readTime,
    featured,
    author,
    body
  }
`;

export const productsQuery = groq`
  *[_type == "product"] | order(featured desc, _createdAt asc){
    _id,
    title,
    slug,
    type,
    category,
    price,
    currency,
    description,
    featured,
    cover,
    swatch,
    options,
    "bookSlug": relatedPublication->slug.current
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    type,
    category,
    price,
    currency,
    description,
    featured,
    cover,
    swatch,
    options,
    "bookSlug": relatedPublication->slug.current
  }
`;

export const caseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(order asc){
    _id,
    client,
    sector,
    headline,
    summary,
    outcomes
  }
`;

export const faqsQuery = groq`
  *[_type == "faq"] | order(order asc){
    question,
    answer
  }
`;

export const teamQuery = groq`
  *[_type == "teamMember"] | order(order asc){
    _id,
    name,
    role,
    bio,
    "photo": photo.asset->url
  }
`;

export const valuesQuery = groq`
  *[_type == "value"] | order(order asc){
    title,
    text
  }
`;

export const capabilitiesQuery = groq`
  *[_type == "capability"] | order(order asc){
    icon,
    title,
    description
  }
`;