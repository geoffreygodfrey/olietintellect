import type {
  ApproachStep,
  Capability,
  CaseStudy,
  DevelopmentStage,
  Faq,
  Insight,
  Product,
  Publication,
  Service,
  ServiceGroup,
  SiteSettings,
  Value,
} from "@/lib/types";

export const siteSettingsSeed: SiteSettings = {
  name: "Oliet Intellect",
  tagline: "Building Better Businesses. Creating Knowledge That Matters.",
  heroTitle: "Building Better Businesses. Creating Knowledge That Matters.",
  heroLead:
    "We help individuals and organisations make better decisions, build stronger businesses, and turn knowledge into something useful.",
  email: "Olietolt@gmail.com",
  phone: "+91 8699251932",
  location: "Mohali, India · Harare, Zimbabwe · Remote",
  nav: {
    consultancy: "Consultancy",
    publications: "Publications",
    insights: "Insights",
    shop: "Shop",
    about: "About",
    workWithUs: "Work With Us",
  },
  footerNote:
    "Oliet Intellect is a consultancy, publishing and knowledge company helping people and organisations build with purpose. Established 2023.",
  newsletter: {
    title: "The Oliet Letter",
    description:
      "A short read on business, analysis, education and ideas worth keeping. Written by our team and connected to our publications and insights. No noise — occasionally, deliberately.",
  },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61560439392477" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/oliet-intellect-b7b889319/" },
  ],
};

export const serviceGroupsSeed: ServiceGroup[] = [
  {
    _id: "group-consultancy",
    title: "Consult",
    description:
      "Business consultancy, analysis and planning for people and organisations making important decisions.",
    items: [
      "Business Consultancy",
      "Investment Analysis",
      "Business Analysis",
      "Business Planning",
      "Business Setup & Development",
      "Project Proposals",
      "Project Management",
      "Business Turnaround / Restructuring",
    ],
    ctaLabel: "Explore Consultancy",
    ctaHref: "/consultancy",
  },
  {
    _id: "group-publishing",
    title: "Publish",
    description: "Books and educational resources across business, faith and education.",
    items: [
      "Business Books",
      "Religious Books",
      "Educational Books",
      "E-books",
      "Hardcopy Books",
      "Authoring & Writing",
    ],
    ctaLabel: "Explore Publications",
    ctaHref: "/publications",
  },
  {
    _id: "group-articles",
    title: "Share",
    description: "Articles, newsletters and perspectives on business, faith, education and society.",
    items: [
      "Business Articles",
      "Religious Articles",
      "Social Life & Society",
      "Newsletters",
      "Educational Content",
      "Pedagogical Resources",
    ],
    ctaLabel: "Read Insights",
    ctaHref: "/insights",
  },
];

export const servicesSeed: Service[] = [
  {
    _id: "service-bc",
    title: "Business Consultancy",
    slug: "business-consultancy",
    icon: "compass",
    short: "Strategic guidance for important business decisions.",
    featured: true,
    description:
      "Director-level advisory for owners and leadership teams. We help you see your business clearly, choose a defensible direction, and make decisions you can explain to your team, your partners and your conscience.",
    bullets: [
      "Strategic direction and positioning",
      "Business model diagnosis and refinement",
      "Governance and decision-making frameworks",
      "Advisory to owners, boards and leadership teams",
    ],
  },
  {
    _id: "service-inv",
    title: "Investment Analysis",
    slug: "investment-analysis",
    icon: "trending",
    short: "Assess opportunities, risks and potential returns.",
    featured: true,
    description:
      "Rigorous assessment of opportunities before capital moves. We combine financial, market and risk analysis with honest judgement — the calm second opinion every investor and serious borrower needs.",
    bullets: [
      "Investment opportunity assessment and screening",
      "Financial, market and competitor analysis",
      "Risk and return evaluation",
      "Investor-grade reports and memoranda",
    ],
  },
  {
    _id: "service-ba",
    title: "Business Analysis",
    slug: "business-analysis",
    icon: "target",
    short: "Understand performance, problems and opportunities.",
    description:
      "We map how work, money and information actually move through your organisation, then surface the gaps, wastes and risks that hold it back. Clarity comes first; change comes second.",
    bullets: [
      "Operations, process and systems mapping",
      "Performance diagnostics and gap analysis",
      "Requirements gathering and solution design",
      "Feasibility studies and market assessment",
    ],
  },
  {
    _id: "service-bp",
    title: "Business Planning",
    slug: "business-planning",
    icon: "plan",
    short: "Turn ideas and opportunities into actionable plans.",
    featured: true,
    description:
      "Plans that live beyond the boardroom. We build business plans, growth plans and project proposals with real numbers, sequenced actions and owners — documents you can raise money with and actually follow.",
    bullets: [
      "Business and growth plans",
      "Market and financial projections",
      "Implementation roadmaps and milestones",
      "Project proposals, pitch documents and investor packs",
    ],
  },
  {
    _id: "service-setup",
    title: "Business Development & Turnaround",
    slug: "business-setup-restructuring",
    icon: "layers",
    short: "Strengthen, restructure or reposition businesses.",
    description:
      "From a clean, compliant formation to a disciplined turnaround. We structure new ventures so they begin worthy of the work — and rebuild businesses under pressure so they emerge stronger, not merely patched.",
    bullets: [
      "Company formation, legal and regulatory setup",
      "Operating systems, records and controls from day one",
      "Diagnosis and turnaround assessment",
      "Operational and financial restructuring",
      "Guardrails for sustainable growth afterwards",
    ],
  },
  {
    _id: "service-pm",
    title: "Project Management",
    slug: "project-management",
    icon: "project",
    short: "Bring structure and accountability to execution.",
    featured: true,
    description:
      "From concept to close-out. We provide the discipline, documentation and steering that keeps complex initiatives moving — so projects deliver what they promised, when they promised it.",
    bullets: [
      "Project scoping, planning and resourcing",
      "Delivery governance, tracking and reporting",
      "Stakeholder, quality and risk management",
      "Change management and implementation",
    ],
  },
];

export const developmentStagesSeed: DevelopmentStage[] = [
  {
    title: "Start",
    audience: "For new ventures and first-time founders.",
    description: "For new ventures that need structure, direction and a viable plan.",
    outcomes: [
      "Business model and structure that holds up",
      "A first plan with real numbers",
      "Early systems, records and controls",
      "Confidence to make the first big hires",
    ],
  },
  {
    title: "Strengthen",
    audience: "For growing businesses that want to be more deliberate.",
    description: "For established businesses looking to improve performance, systems or strategy.",
    outcomes: [
      "Clearer positioning and sharper operations",
      "Management systems scaled to the next level",
      "Better information for faster decisions",
      "A growth plan with sequencing, not hype",
    ],
  },
  {
    title: "Rebuild",
    audience: "For businesses under pressure or going through change.",
    description: "For businesses facing significant operational, strategic or structural challenges.",
    outcomes: [
      "An honest, evidence-based turnaround assessment",
      "Operational and financial restructuring",
      "Stabilisation of cash, cost and confidence",
      "A recovery path with clear guardrails",
    ],
  },
];

export const approachSeed: ApproachStep[] = [
  {
    step: "01",
    title: "Understand",
    description: "Define the situation and the decision.",
  },
  {
    step: "02",
    title: "Analyse",
    description: "Examine the evidence, assumptions and constraints.",
  },
  {
    step: "03",
    title: "Strategise",
    description: "Determine the most practical direction.",
  },
  {
    step: "04",
    title: "Plan",
    description: "Translate the strategy into action.",
  },
  {
    step: "05",
    title: "Execute",
    description: "Support implementation where required.",
  },
];

export const publicationsSeed: Publication[] = [
  {
    _id: "pub-jehovah-rapha",
    title: "Jehovah Rapha",
    slug: "jehovah-rapha",
    category: "religious",
    format: ["Print", "E-book"],
    status: "available",
    excerpt:
      "A study of healing and restoration — the God who mends bodies, hearts, households and the long history of what was broken.",
    description:
      "Jehovah Rapha — the Lord who heals — is one of the earliest names by which God is known in scripture. This book walks the reader through what that name actually promises: healing that begins where the pain began, that reaches beyond the body into spirit and memory, and that makes whole the people and households broken in ways no prescription can reach. Written for the weary, and for those who want to understand what faith says to suffering.",
    author: "Diouf I. Mhlanga",
    pages: 208,
    price: 999,
    currency: "INR",
    featured: true,
    cover: {
      background: "#16202e",
      accent: "#c9a45c",
      pattern: "sunburst",
      image: "/jehovahraphacover.webp",
    },
    contents: [
      "The name that begins with a wound",
      "Healing for the body",
      "Healing for the heart",
      "Healing for households",
      "The long restoration",
      "Living healed",
    ],
  },
  {
    _id: "pub-eureka",
    title: "Eureka",
    slug: "eureka",
    category: "education",
    format: ["Print", "E-book"],
    status: "available",
    excerpt:
      "On the moment of finding — how discovery happens, and how to cultivate a mind that finds what it was not looking for.",
    description:
      "Every breakthrough is a moment of finding. Eureka is a meditation on the mechanics of that moment: the preparation that precedes it, the patience that surrounds it, and the habit of attention that invites it to return. A book for thinkers, builders and students who want to understand how insight actually arrives.",
    author: "Diouf I. Mhlanga",
    pages: 172,
    price: 999,
    currency: "INR",
    featured: true,
    cover: {
      background: "#1d1a2b",
      accent: "#d6b678",
      pattern: "waves",
    },
    contents: [
      "The anatomy of the moment",
      "Preparation that makes room",
      "The discipline of attention",
      "Patience and the half-found",
      "Recognising what you have found",
    ],
  },
  {
    _id: "pub-noise",
    title: "Be Noise To Your Self",
    slug: "be-noise-to-your-self",
    category: "religious",
    format: ["Print", "E-book"],
    status: "available",
    excerpt:
      "A call to disturb the comfortable voices within — the ones that keep you small, quiet and safely unbothered.",
    description:
      "The loudest obstacle to growth is often the voice inside that agrees too easily with everything you already are. Be Noise To Your Self is an invitation to interrupt that voice — to disturb your own assumptions, question the self that has made peace with mediocrity, and build an inner life that refuses to settle for the merely comfortable.",
    author: "Diouf I. Mhlanga",
    pages: 184,
    price: 999,
    currency: "INR",
    featured: true,
    cover: {
      background: "#2b1a10",
      accent: "#e0b878",
      pattern: "dots",
    },
    contents: [
      "The noise that keeps you safe",
      "Interrupting the inner editor",
      "Disturbing comfortable beliefs",
      "Listening past your own echo",
      "Becoming a disturbance for good",
    ],
  },
  {
    _id: "pub-father",
    title: "Learn From The Father",
    slug: "learn-from-the-father",
    category: "religious",
    format: ["Print", "E-book"],
    status: "available",
    excerpt:
      "On learning wisdom from the Father — discipline, patience and the long apprenticeship of being shaped from above.",
    description:
      "Most of what we know of building character is caught from someone further along the road. This book is about what it means to learn from the Father: the patience of the apprenticeship, the hours when nothing seems to move, and the formation that happens when you place yourself under a teacher more concerned with your becoming than your performance.",
    author: "Diouf I. Mhlanga",
    pages: 192,
    price: 999,
    currency: "INR",
    featured: true,
    cover: {
      background: "#0e241c",
      accent: "#d6b678",
      pattern: "grid",
    },
    contents: [
      "Sitting under a teacher",
      "The patience of the apprenticeship",
      "Learning from correction",
      "Imitation that becomes character",
      "Growing into what you were taught",
    ],
  },
  {
    _id: "pub-spirit",
    title: "Language Of The Spirit",
    slug: "language-of-the-spirit",
    category: "religious",
    format: ["Print", "E-book"],
    status: "available",
    excerpt:
      "A guide to prayer, worship and the interior language by which the soul speaks and listens to God.",
    description:
      "Faith has a mother tongue, spoken in prayer, in worship and in the quiet certainties beneath our words. Language Of The Spirit is a study of that interior language: how it is learned, how it is spoken when words fail, and how it attunes a person to hear what the world cannot. A work for those who want their devotional life to be real rather than routine.",
    author: "Diouf I. Mhlanga",
    pages: 210,
    price: 999,
    currency: "INR",
    featured: false,
    cover: {
      background: "#12293b",
      accent: "#c9a45c",
      pattern: "diagonal",
    },
    contents: [
      "A language older than words",
      "Learning to pray",
      "Worship as speech and silence",
      "When words fail",
      "Hearing in the language of the spirit",
    ],
  },
  {
    _id: "pub-desire",
    title: "The Desire Of My Heart",
    slug: "the-desire-of-my-heart",
    category: "religious",
    format: ["Print", "E-book"],
    status: "available",
    excerpt:
      "On the longings that shape a life — what they are, where they come from, and what to do with the ones that will not go away.",
    description:
      "Every life is steered by its desires. The Desire Of My Heart looks honestly at the longing that sits underneath ambition, restlessness and fear — and asks what it means to bring that longing before God rather than bury it or feed it. A patient book about wanting well.",
    author: "Diouf I. Mhlanga",
    pages: 196,
    price: 999,
    currency: "INR",
    featured: false,
    cover: {
      background: "#241d12",
      accent: "#e0b878",
      pattern: "sunburst",
    },
    contents: [
      "Desire as native language",
      "Reading your own longing",
      "Ambition, restlessness and fear",
      "Bringing desire before God",
      "Wanting well",
    ],
  },
  {
    _id: "pub-care",
    title: "Why Do I Care",
    slug: "why-do-i-care",
    category: "religious",
    format: ["Print", "E-book"],
    status: "available",
    excerpt:
      "An honest inquiry into what deserves your care — and the quiet courage of caring for the right things.",
    description:
      "We care about more than we can carry, and about many things that will not matter. Why Do I Care is an inquiry into the discipline of concern: how to tell what deserves your heart, how to stop spending it on what does not, and how to care well — deeply, deliberately, without being crushed.",
    author: "Diouf I. Mhlanga",
    pages: 168,
    price: 999,
    currency: "INR",
    featured: false,
    cover: {
      background: "#0f2b33",
      accent: "#c9a45c",
      pattern: "grid",
    },
    contents: [
      "The economy of concern",
      "What deserves your heart",
      "Caring without being crushed",
      "The discipline of indifference",
      "Caring well",
    ],
  },
  {
    _id: "pub-wise",
    title: "Words Of The Wise",
    slug: "words-of-the-wise",
    category: "religious",
    format: ["Print", "E-book"],
    status: "available",
    excerpt:
      "Collected wisdom on money, speech, work and character — the sayings of the wise, made to be lived.",
    description:
      "Wisdom is best carried in small, durable sentences. Words Of The Wise gathers the kind of counsel that survives translation and time: on money held loosely, speech that builds, work done honestly and character kept intact. Each short chapter lives long enough to become a habit rather than a note.",
    author: "Diouf I. Mhlanga",
    pages: 224,
    price: 999,
    currency: "INR",
    featured: false,
    cover: {
      background: "#1d1a2b",
      accent: "#d6b678",
      pattern: "dots",
    },
    contents: [
      "On money held loosely",
      "On speech that builds",
      "On honest work",
      "On friends and counsel",
      "On character kept intact",
    ],
  },
];

export const insightsSeed: Insight[] = [
  {
    _id: "ins-decisions",
    title: "Good Businesses Are Built in the Decisions Nobody Sees",
    slug: "good-businesses-are-built-in-decisions-nobody-sees",
    category: "business",
    excerpt:
      "The visible decisions get the applause. The invisible ones get the business. A short study of what quietly separates durable companies from loud ones.",
    publishedAt: "2026-07-14",
    readTime: "7 min read",
    featured: true,
    author: "Diouf I. Mhlanga",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "There is a kind of business that is always in the room: the founder on the panel, the office on the right street, the brand on the right side of the platform. And there is a kind of business that quietly compounds. The difference is rarely talent and almost never luck.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ text: "The decisions that matter" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "The visible decisions — the launch, the rebrand, the funding round — are usually the easy ones, because everyone can see them coming. The decisions that actually shape a business are the ones nobody claps for: whether to say no to a good client, whether to fix the cash book before the website, whether to have the honest conversation now or the expensive one later.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ text: "Discipline is a business model" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "In our advisory work, the pattern repeats itself. Businesses that install quiet discipline — weekly numbers, clear owners, honest reviews — do not merely survive; they become easier to run, easier to fund and easier to trust. Businesses that skip these find the same twelve problems arriving with more expensive names each year.",
          },
        ],
      },
      {
        _type: "block",
        style: "quote",
        children: [
          {
            text: "The visible decisions get the applause. The invisible ones get the business.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "If you are building, audit your invisible decisions this week: the data you actually look at, the person accountable for cash, the meeting you keep postponing. That is where the next level of your business is being built — before anyone applauds.",
          },
        ],
      },
    ],
  },
  {
    _id: "ins-analysis",
    title: "Analysis Is a Discipline Before It Is a Tool",
    slug: "analysis-is-a-discipline-before-it-is-a-tool",
    category: "business",
    excerpt:
      "Software has made analysis faster and shallower at the same time. The cure for shallow analysis is not another tool — it is a temperament.",
    publishedAt: "2026-05-02",
    readTime: "6 min read",
    featured: false,
    author: "Diouf I. Mhlanga",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "Every spreadsheet in the world now has a faster cousin. Yet the quality of decisions has not visibly improved. This should tell us something uncomfortable: analysis was never a tool problem.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ text: "The temperament underneath" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "Analysis is a temperament before it is a technique. It is the willingness to let the evidence inconvenience you. It is the patience to read the question carefully before reaching for the answer. It is the humility to mark your own assumptions, and the courage to write down the number that embarrasses the plan.",
          },
        ],
      },
      {
        _type: "block",
        style: "bullets",
        children: [
          { text: "Ask better questions before better tools." },
          { text: "Label every assumption; forecast in ranges, not false precision." },
          { text: "Revisit old decisions honestly — this is how judgement compounds." },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "Technology can hand you a faster answer to the wrong question. Discipline hands you a slower, better one. In a world of fast answers, the slow and honest analyst is the rare asset — which is, happily, excellent news for anyone willing to be one.",
          },
        ],
      },
    ],
  },
  {
    _id: "ins-work-purpose",
    title: "Work, Purpose and the Inner Life",
    slug: "work-purpose-and-the-inner-life",
    category: "religion",
    excerpt:
      "Religious traditions have thought about work longer than management theory has existed. A reflection on what the older texts still have to teach a busy professional.",
    publishedAt: "2026-03-18",
    readTime: "5 min read",
    featured: false,
    author: "Diouf I. Mhlanga",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "Before there were KPIs, there was the question of why human beings work at all. And the world's oldest books already answered it: to serve, to build, to provide — and, for the believer, as an act of devotion.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ text: "Work as worship, quietly" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "There is a tradition that treats honest work as a form of worship: done well, for the right reasons, it is not separate from spiritual life but part of it. This reframes the professional day entirely. Excel becomes a place of discipline. A difficult client becomes a test of character. Delivery becomes a promise kept.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "None of this requires grandiosity. It requires the small daily decision to do the work as if it mattered — because, in the accounts that matter, it does. The professional who recovers this frame stops burning out, because they are no longer working only for the output, but for the order it keeps the inner life in.",
          },
        ],
      },
    ],
  },
  {
    _id: "ins-founder",
    title: "What Every Young Founder Should Learn Before the Money Comes",
    slug: "what-every-young-founder-should-learn-before-the-money-comes",
    category: "education",
    excerpt:
      "Money arriving early can accelerate a bad system as efficiently as a good one. The habits worth building before your first serious raise.",
    publishedAt: "2026-01-11",
    readTime: "8 min read",
    featured: true,
    author: "Diouf I. Mhlanga",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "Every founder dreams of the round that makes things easy. A harder truth: capital is an accelerant. It accelerates whatever system you already installed — including the messy one.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ text: "Install the boring systems first" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "Before the money arrives, learn to read your own cash position from memory. Build the habit of weekly numbers, even if they live in a notebook. Write your decisions down. Hire slowly and set expectations clearly. These are not impressive skills; they are the difference between money building a company and money building a monument to bad habits.",
          },
        ],
      },
      {
        _type: "block",
        style: "bullets",
        children: [
          { text: "Know your cash number cold — always." },
          { text: "Keep decisions written, dated and reviewed." },
          { text: "Fund the product before funding the prestige." },
          { text: "Treat investor money as equity, never as victory." },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "The founder who arrives at investors with discipline, not need, will find good money at sensible terms. The founder who arrives with need and a patchwork will find expensive money that demands more than money can fix. Build the discipline now; the market will pay for it later.",
          },
        ],
      },
    ],
  },
  {
    _id: "ins-society",
    title: "The Quiet Infrastructure of a Healthy Society",
    slug: "the-quiet-infrastructure-of-a-healthy-society",
    category: "social-life",
    excerpt:
      "Markets, schools and even friendships depend on infrastructure nobody films. Why the unglamorous layer deserves more of our attention.",
    publishedAt: "2025-11-20",
    readTime: "5 min read",
    featured: false,
    author: "Diouf I. Mhlanga",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "Everyone photographs the bridge on opening day. Few inspect the joints that keep it standing. The same is true of societies: they run on quiet infrastructure — courtesies, records, trust, repair — that only becomes visible when it fails.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ text: "Tending the layer below" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "A business that pays dues on time, keeps its word to suppliers, and writes things down is not merely virtuous; it is infrastructure in a society that runs on trust. The habit of the measured enterprise — order, honesty, and the willingness to do one's part — compounds far beyond any single transaction.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "We often ask what the country should do. The stronger question is what the institutions, businesses and families that constitute the country should start doing quietly this month. That is how durable societies are repaired — not in seasons of grand speeches, but in the long, unglamorous work of keeping the joints trustworthy.",
          },
        ],
      },
    ],
  },
  {
    _id: "ins-plan",
    title: "Why Your Business Plan Fails When It Is Only a Document",
    slug: "why-your-business-plan-fails-when-it-is-only-a-document",
    category: "business",
    excerpt:
      "A plan is a working instrument, not a filing achievement. What separates plans that run the business from plans that decorate the shelf.",
    publishedAt: "2025-09-08",
    readTime: "6 min read",
    featured: false,
    author: "Diouf I. Mhlanga",
    body: [
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "There is a reason most business plans are bestsellers that nobody reads again: they were built to impress, not to run. A plan written for lenders and one written for this quarter's operations are almost different species.",
          },
        ],
      },
      {
        _type: "block",
        style: "h2",
        children: [{ text: "The test of a working plan" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "A working plan passes three tests. First, it has an owner for every line — a name, not a team. Second, it has a number that will be checked against reality this month. Third, it is designed to be wrong, in the sense that it will be revised the moment reality disagrees with it.",
          },
        ],
      },
      {
        _type: "block",
        style: "bullets",
        children: [
          { text: "Every action has a named owner." },
          { text: "Every objective has a number that is reviewed monthly." },
          { text: "Revision is scheduled, not shameful." },
          { text: "The plan is a tool of conversation, not decoration." },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            text: "When the plan becomes the working instrument of the Monday meeting, something changes: the business stops drifting and starts steering. That is the entire difference between a document and a discipline.",
          },
        ],
      },
    ],
  },
];

export const caseStudiesSeed: CaseStudy[] = [
  {
    _id: "case-retail",
    client: "A mid-sized retail and distribution business",
    sector: "Retail & Distribution",
    headline: "From overstretched to systematic.",
    summary:
      "A long-established family business running on memory, informal arrangements and heroic individual effort. Growth had quietly outgrown the management system.",
    outcomes: [
      "Turnaround and restructuring assessment within three weeks",
      "Operations, cost and cash re-architected around a clear model",
      "Board reporting rhythm installed and actually kept",
      "Business returned to planning and growth with working discipline",
    ],
  },
  {
    _id: "case-investor",
    client: "A private investor allocating growth capital",
    sector: "Investment",
    headline: "A calm, evidence-based pathway through a noisy market.",
    summary:
      "An investor facing a stream of opportunities with little structure for comparing them fairly — and no disciplined system for saying no.",
    outcomes: [
      "Sector map and screening framework built from scratch",
      "Opportunities assessed against a single honest standard",
      "The strongest candidates developed into full analyses",
      "A framework for declining — the most valuable output delivered",
    ],
  },
  {
    _id: "case-education",
    client: "A founder launching into education",
    sector: "Education & Services",
    headline: "From idea to a fundable, buildable plan.",
    summary:
      "A capable founder with a strong concept but no operating model, no realistic financial picture and no document a lender would take seriously.",
    outcomes: [
      "Market and feasibility study with honest demand assumptions",
      "Financial model stress-tested against conservative cases",
      "Investor-facing business plan and proposal pack",
      "A phased launch sequence with clear owners and milestones",
    ],
  },
  {
    _id: "case-services",
    client: "A new professional services practice",
    sector: "Professional Services",
    headline: "Started clean, so it could grow without rebuilding.",
    summary:
      "Experienced professionals starting a practice who wanted to avoid the structural mistakes their industry repeats, from day one.",
    outcomes: [
      "Legal, share and governance structure designed for partners",
      "Operating systems and records installed before the first client",
      "Pricing and engagement frameworks that protect capacity",
      "A first-year operating rhythm the team actually follows",
    ],
  },
];

export const faqsSeed: Faq[] = [
  {
    question: "What types of organisations do you work with?",
    answer:
      "Startups, established businesses, investors and organisations with specific strategic or project needs.",
  },
  {
    question: "Can you help with a business that is already struggling?",
    answer:
      "Yes. Depending on the situation, this may involve business analysis, restructuring, turnaround planning or operational improvement.",
  },
  {
    question: "Do you only provide recommendations?",
    answer:
      "No. Engagements can range from analysis and planning through to project implementation and management.",
  },
  {
    question: "How does an engagement begin?",
    answer:
      "We start with a conversation about the situation, objectives and scope before recommending an appropriate course of work.",
  },
];

export const productsSeed: Product[] = [
  {
    _id: "prod-jehovah-rapha",
    title: "Jehovah Rapha",
    slug: "jehovah-rapha",
    type: "book",
    category: "books",
    price: 999,
    currency: "INR",
    description:
      "The print and digital edition of our title on healing and restoration. Priced at ₹999 for readers in India and abroad.",
    cover: {
      background: "#16202e",
      accent: "#c9a45c",
      pattern: "sunburst",
      image: "/jehovahraphacover.webp",
    },
    bookSlug: "jehovah-rapha",
  },
  {
    _id: "prod-eureka",
    title: "Eureka",
    slug: "eureka",
    type: "book",
    category: "books",
    price: 999,
    currency: "INR",
    description:
      "The print and digital edition of Eureka, on the moment of finding and the habits that invite insight.",
    cover: {
      background: "#1d1a2b",
      accent: "#d6b678",
      pattern: "waves",
    },
    bookSlug: "eureka",
  },
  {
    _id: "prod-noise",
    title: "Be Noise To Your Self",
    slug: "be-noise-to-your-self",
    type: "book",
    category: "books",
    price: 999,
    currency: "INR",
    description:
      "The print and digital edition of Be Noise To Your Self, a call to disturb the comfortable voices within.",
    cover: {
      background: "#2b1a10",
      accent: "#e0b878",
      pattern: "dots",
    },
    bookSlug: "be-noise-to-your-self",
  },
  {
    _id: "prod-father",
    title: "Learn From The Father",
    slug: "learn-from-the-father",
    type: "book",
    category: "books",
    price: 999,
    currency: "INR",
    description:
      "The print and digital edition of Learn From The Father, on discipline, patience and the long apprenticeship.",
    cover: {
      background: "#0e241c",
      accent: "#d6b678",
      pattern: "grid",
    },
    bookSlug: "learn-from-the-father",
  },
  {
    _id: "prod-spirit",
    title: "Language Of The Spirit",
    slug: "language-of-the-spirit",
    type: "book",
    category: "books",
    price: 999,
    currency: "INR",
    description:
      "The print and digital edition of Language Of The Spirit, on prayer, worship and the interior language of faith.",
    cover: {
      background: "#12293b",
      accent: "#c9a45c",
      pattern: "diagonal",
    },
    bookSlug: "language-of-the-spirit",
  },
  {
    _id: "prod-desire",
    title: "The Desire Of My Heart",
    slug: "the-desire-of-my-heart",
    type: "book",
    category: "books",
    price: 999,
    currency: "INR",
    description:
      "The print and digital edition of The Desire Of My Heart, on the longings that shape a life.",
    cover: {
      background: "#241d12",
      accent: "#e0b878",
      pattern: "sunburst",
    },
    bookSlug: "the-desire-of-my-heart",
  },
  {
    _id: "prod-care",
    title: "Why Do I Care",
    slug: "why-do-i-care",
    type: "book",
    category: "books",
    price: 999,
    currency: "INR",
    description:
      "The print and digital edition of Why Do I Care, an inquiry into the discipline of concern.",
    cover: {
      background: "#0f2b33",
      accent: "#c9a45c",
      pattern: "grid",
    },
    bookSlug: "why-do-i-care",
  },
  {
    _id: "prod-wise",
    title: "Words Of The Wise",
    slug: "words-of-the-wise",
    type: "book",
    category: "books",
    price: 999,
    currency: "INR",
    description:
      "The print and digital edition of Words Of The Wise, on money, speech, work and character.",
    cover: {
      background: "#1d1a2b",
      accent: "#d6b678",
      pattern: "dots",
    },
    bookSlug: "words-of-the-wise",
  },
  {
    _id: "prod-tee-frame",
    title: "Frame of Mind T-Shirt",
    slug: "frame-of-mind-t-shirt",
    type: "apparel",
    category: "apparel",
    price: 29,
    currency: "USD",
    featured: true,
    description:
      "Heavyweight cotton tee in deep ink with a tonal brass print of our 'measured enterprise' grid. A shirt for people who think before they act.",
    swatch: "#101c30",
    options: [
      { label: "Size", values: ["S", "M", "L", "XL", "XXL"] },
      { label: "Fit", values: ["Regular", "Relaxed"] },
    ],
  },
  {
    _id: "prod-tee-build",
    title: "Build What Matters T-Shirt",
    slug: "build-what-matters-t-shirt",
    type: "apparel",
    category: "apparel",
    price: 29,
    currency: "USD",
    description:
      "Natural-colour heavyweight tee with our wordmark in brass. Built to outlast trends, in the same way as the things it celebrates.",
    swatch: "#f2e8d5",
    options: [
      { label: "Size", values: ["S", "M", "L", "XL", "XXL"] },
      { label: "Fit", values: ["Regular", "Relaxed"] },
    ],
  },
  {
    _id: "prod-cap",
    title: "Oliet Intellect Cap",
    slug: "oliet-intellect-cap",
    type: "apparel",
    category: "apparel",
    price: 24,
    currency: "USD",
    description:
      "A six-panel cap in ink with a tonal brass monogram. Understated, serious, and comfortable enough for long days on site or at the desk.",
    swatch: "#0b1320",
    options: [
      { label: "Fit", values: ["One size (adjustable)"] },
    ],
  },
  {
    _id: "prod-tote",
    title: "We Build. We Publish. Tote",
    slug: "we-build-we-publish-tote",
    type: "apparel",
    category: "apparel",
    price: 18,
    currency: "USD",
    description:
      "A heavy-canvas tote carrying the Oliet Intellect line. Room enough for a laptop, two books and a serious lunch.",
    swatch: "#f6f3ec",
    options: [
      { label: "Colour", values: ["Natural", "Ink"] },
    ],
  },
];

export const teamSeed = [] as {
  _id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
}[];

export const valuesSeed: Value[] = [
  {
    title: "Clarity",
    text: "We would rather tell you a difficult truth plainly than a pleasant one vaguely. Confusion is the most expensive thing a business can buy.",
  },
  {
    title: "Analysis",
    text: "Opinion is easy; evidence is work. Every recommendation we make is traceable to a number, a fact or an explicit assumption.",
  },
  {
    title: "Craft",
    text: "We are publishers as well as consultants. We care how things read, how they look and how they age — and we accept no less in our advice.",
  },
  {
    title: "Integrity",
    text: "We take the long view because our reputation compounds like a good business. We advise as we would want to be advised.",
  },
];

export const capabilitiesSeed: Capability[] = [
  {
    icon: "strategy",
    title: "Strategy & Decision-Making",
    description:
      "Structured thinking for owners and leaders — positioning, business models and the decisions that shape what comes next.",
  },
  {
    icon: "analysis",
    title: "Investment & Financial Analysis",
    description:
      "Opportunity assessment, financial modelling and honest risk evaluation for investors, boards and serious borrowers.",
  },
  {
    icon: "publishing",
    title: "Publishing & Editorial",
    description:
      "From original books and insights to helping organisations package their knowledge into published, educational material.",
  },
  {
    icon: "delivery",
    title: "Project & Delivery Management",
    description:
      "The discipline behind ambitious work: scoping, governance, reporting and execution that finishes what it starts.",
  },
  {
    icon: "setup",
    title: "Business Setup & Structuring",
    description:
      "Formations, regulatory setup and operating systems for new ventures that want to begin clean and compliant.",
  },
  {
    icon: "education",
    title: "Education & Content",
    description:
      "Workshops, courses and written material that turn what we know into what you and your team can actually run with.",
  },
];

export const approachAgendaSeed = [
  "A structured conversation to define the real question",
  "A scoped proposal with deliverables, owners and fees set out clearly",
  "Diagnostic and analysis phase with findings presented honestly",
  "A plan you can execute, with milestones and measures agreed",
  "Delivery support that stays with you until the work works",
];

export const engagementSeed = [
  {
    title: "Project-based",
    description:
      "A defined scope, a clear deliverable, an agreed fee. Best for specific questions: plans, analyses, proposals, systems.",
  },
  {
    title: "Advisory",
    description:
      "Ongoing senior counsel for owners and leadership teams. Best for steering — regular access to clear, independent thinking.",
  },
  {
    title: "Retainer",
    description:
      "A dedicated analytical and delivery partner with capacity reserved for your business across the year. Best for sustained growth programmes.",
  },
];

export const reviewsSeed = [
  {
    quote:
      "They told us what we needed to hear, not what we wanted to hear. Twelve months later, both values and numbers are markedly better.",
    author: "Managing Director",
    context: "Retail & Distribution",
  },
  {
    quote:
      "The analysis was thorough enough that we could defend our decision to every partner — and the framework for saying no has saved us more than once.",
    author: "Principal",
    context: "Professional Services",
  },
];