/**
 * Extended, detail-rich schema for package and support plan detail pages.
 * - Use these objects to populate package detail pages, SEO meta, FAQs, timelines, onboarding checklists, testimonials, addons, and technical requirements.
 * - Field names are intentionally explicit so templating is easy.
 */

export const packageDetails = [
  {
    slug: "starter-growth-kit",
    title: "Starter Growth Kit",
    price: "₹7,999",
    mrp: "₹14,999",
    shortDescription:
      "Everything a new business needs to launch online quickly: website, CRM, billing, domain, and a free VyapariHub listing.",
    hero: {
      headline: "Launch your business online in 5–7 days",
      subHeadline:
        "Professional 7-page website, CRM & billing setup, SEO basics and a free VyapariHub listing — fast, simple, affordable.",
      ctaPrimary: "Get Starter Kit",
      ctaSecondary: "Request Demo",
    },
    whatsIncluded: [
      { title: "7-page responsive website", detail: "Home, About, Services, Contact, Gallery, Blog, Landing/Offer page. Mobile-first design." },
      { title: "CRM access", detail: "Basic CRM: lead capture form, contact list, lead status, manual notes." },
      { title: "Billing software", detail: "Generate invoices, GST fields, download/print, basic payment link integration." },
      { title: "Free VyapariHub listing", detail: "Standard listing with category, contact, location & photos." },
      { title: "Domain", detail: ".com or .in domain registration (1 year) — domain name purchase cost included up to ₹799" },
      { title: "On-page SEO", detail: "Meta tags, schema basics, sitemap submission, Google indexing request." },
      { title: "Banner design", detail: "1 custom marketing banner (desktop + mobile)." },
      { title: "1 year support", detail: "Email & ticket support (48-72 hour response SLA for Starter)." }
    ],
    whatsNotIncluded: [
      "Third-party paid integrations (paid Google Ads spend, premium plugins/licenses)",
      "Custom backend integrations or heavy custom development",
      "Ongoing content creation (blogging beyond setup)"
    ],
    benefits: [
      "Go-live quickly with a professional online presence",
      "Capture and manage leads without spreadsheets",
      "One vendor for website + CRM + billing"
    ],
    targetAudience: [
      "Local shops & traders",
      "Small service providers (plumbers, salons, tutors)",
      "New restaurants & cafes",
      "Freelancers beginning to accept online bookings"
    ],
    pricingBreakdown: {
      lumpsum: [
        { label: "Package fee", amount: "₹7,999" },
        { label: "Domain (included)", amount: "₹0 (up to ₹799)" },
        { label: "Hosting (1st year)", amount: "Included (basic tier)" }
      ],
      optionalAddons: [
        { slug: "extra-email", title: "Additional Email IDs", price: "₹299/year per ID" },
        { slug: "premium-hosting", title: "Faster Hosting", price: "₹999/year" }
      ]
    },
    paymentOptions: ["UPI", "Netbanking", "Card (Razorpay)", "Offline Bank Transfer"],
    timeline: {
      totalDays: "5–7",
      steps: [
        { dayRange: "Day 0–1", activity: "Agreement, domain & hosting details, project brief form" },
        { dayRange: "Day 2–4", activity: "Design & development: template selection, content placement" },
        { dayRange: "Day 5", activity: "Internal QA, client review" },
        { dayRange: "Day 6–7", activity: "Go-live & initial training" }
      ]
    },
    onboardingChecklist: [
      "Business name and logo (if available)",
      "Preferred domain options (3 choices)",
      "High-resolution photos (3–8)",
      "Service/product list with short descriptions",
      "GST/Business details for billing setup",
      "Access to business Google account (optional)"
    ],
    deliveryNotes:
      "Starter deliveries use high-quality templates with light customisation. Content writing is limited to short sections — consider an add-on for content creation.",
    technicalStack: {
      cms: "WordPress / Headless static option on request",
      hosting: "Managed Linux hosting (cPanel) or equivalent",
      crm: "Lightweight productized CRM (hosted SaaS instance)",
      billing: "SaaS billing module with GST support"
    },
    supportSLA: {
      includedSLA: "Email/ticket support — 48–72 hour response",
      responseHours: "Mon–Sat 9:30–18:30 IST",
      escalation: "Priority paid upgrades available"
    },
    faqs: [
      { q: "Can I upgrade later?", a: "Yes. You can upgrade to Booster or MAX at any time; we migrate content and settings." },
      { q: "Who owns the domain?", a: "Domains are purchased in your name; we assist with DNS and renewals." },
      { q: "What content do you write?", a: "We help craft short descriptions and headlines. Full content packs are available as an add-on." }
    ],
    testimonials: [
      { name: "Rekha Sharma, Tailor", city: "Kochi", quote: "Digital Mitra took my shop online in 6 days. I started getting calls the same week." }
    ],
    seoMeta: {
      title: "Starter Growth Kit — Website + CRM | Digital Mitra",
      description: "Launch a professional 7-page website, CRM and billing with a free VyapariHub listing. Go live in 5–7 days. Affordable for Indian small businesses.",
      keywords: ["starter website india", "small business website", "crm for small business", "Digital Mitra starter"]
    },
    socialShare: {
      title: "Starter Growth Kit by Digital Mitra",
      description: "Launch your business online in under a week — website, CRM, billing & listing.",
      image: "/api/og?slug=starter-growth-kit"
    },
    cta: { primary: "Buy Now", secondary: "Schedule a call", demoAvailable: true },
    refundPolicy:
      "If we are unable to deliver the agreed core deliverables within the maximum timeline due to our fault, you may request a partial refund. Custom refund terms defined in the agreement.",
    terms: "Standard T&Cs apply. Domain and third-party costs may be billed separately if outside included limits."
  },

  {
    slug: "business-booster-plan",
    title: "Business Booster Plan",
    price: "₹14,999",
    mrp: "₹29,999",
    shortDescription:
      "Priority visibility, more pages and automation — perfect for growing businesses that want a stronger digital footprint and better customer management.",
    hero: {
      headline: "Grow faster with priority placement and automation",
      subHeadline:
        "Expanded website, CRM automations, social presence setup, and monthly SEO reporting to fuel steady growth.",
      ctaPrimary: "Get Booster",
      ctaSecondary: "Compare Plans"
    },
    whatsIncluded: [
      { title: "12–15 page premium website", detail: "Service pages, category pages, blog, gallery, offers, and booking/contact flows." },
      { title: "Priority VyapariHub listing", detail: "Featured placement & category boost for higher visibility." },
      { title: "Google Business Profile setup", detail: "Complete GBP setup with photos, services, and verification guidance." },
      { title: "Social media setup", detail: "Facebook & Instagram profiles fully setup with branding and initial posts." },
      { title: "3 custom email IDs", detail: "Email setup via G Suite/Workspace or hosted email." },
      { title: "CRM automations", detail: "WhatsApp reminders, automated follow-ups, lead tagging & templated replies." },
      { title: "Monthly SEO reports", detail: "Traffic snapshot, keyword tracking, and quick fixes list." },
      { title: "Blog section + basic content templates", detail: "Setup plus 1 content template for posts." },
      { title: "3-month creative pack", detail: "6 social posts per month (9 posts total) for 3 months." },
      { title: "Payment link / UPI integration", detail: "Quick-pay links; optional payment gateway integration." }
    ],
    whatsNotIncluded: [
      "Ongoing ad spend (Google / FB)",
      "Custom mobile apps",
      "Extensive custom integrations requiring dev hours"
    ],
    benefits: [
      "Higher local visibility via VyapariHub priority listing",
      "Automated lead follow-ups to increase conversions",
      "Professional social presence to attract customers"
    ],
    targetAudience: [
      "Established local businesses scaling up",
      "Clinics, salons, restaurants wanting bookings",
      "Retailers aiming for online ordering"
    ],
    pricingBreakdown: {
      lumpsum: [
        { label: "Package fee", amount: "₹14,999" },
        { label: "Priority listing setup", amount: "Included" },
        { label: "Creative pack", amount: "Included (3 months)" }
      ],
      optionalAddons: [
        { slug: "local-seo", title: "Local SEO (monthly)", price: "₹4,999/month" },
        { slug: "extra-posts", title: "Extra Social Posts", price: "₹999/month for 6 posts" }
      ]
    },
    paymentOptions: ["Card", "UPI", "Netbanking", "EMI (partner)"],
    timeline: {
      totalDays: "7–10",
      steps: [
        { dayRange: "Day 0–2", activity: "Detailed kickoff & data collection (brand kit, content assets)" },
        { dayRange: "Day 3–6", activity: "Design & development, GBP & social setup" },
        { dayRange: "Day 7–9", activity: "Automation rules and CRM templates" },
        { dayRange: "Day 10", activity: "Go-live, training & report setup" }
      ]
    },
    onboardingChecklist: [
      "Brand assets (logo, fonts, color codes)",
      "List of services/products with prices",
      "3–10 high-quality images",
      "Payment details for gateway setup",
      "Google account for GBP verification"
    ],
    deliveryNotes:
      "Priority work queue for Booster clients. Includes light copy support; extended content creation recommended as an add-on for SEO-heavy industries.",
    technicalStack: {
      cms: "WordPress / React-based static if requested",
      crm: "Hosted / third-party CRM with automations",
      analytics: "Google Analytics + basic dashboard"
    },
    supportSLA: {
      includedSLA: "Email + WhatsApp support — response within 24 hours",
      escalation: "Priority queue for fixes; emergency phone support (paid)"
    },
    faqs: [
      { q: "Will you manage Google Business updates?", a: "Yes — we create and provide a maintenance plan. Ongoing posting is part of Care+ & above." },
      { q: "Can you run ads?", a: "We can set up Google Ads and recommend budgets. Ad spend is billed separately." }
    ],
    testimonials: [
      { name: "Amit Verma, Cafe Owner", city: "Noida", quote: "Booster improved our footfall and incoming calls. The automation saved time." }
    ],
    seoMeta: {
      title: "Business Booster Plan — Digital Mitra",
      description: "Priority online visibility, CRM automations and social setup for growing businesses. Get prioritized VyapariHub listing and automation.",
      keywords: ["business booster plan", "local business SEO", "crm automations india"]
    },
    socialShare: {
      title: "Business Booster — Digital Mitra",
      description: "Priority listing + automation to grow local business revenue.",
      image: "/api/og?slug=business-booster-plan"
    },
    cta: { primary: "Buy Booster", secondary: "Talk to Sales", demoAvailable: true },
    refundPolicy:
      "Refunds are considered on a case-by-case basis. If a client cancels during the design phase, partial refunds may apply. See contract for details.",
    terms:
      "Boosted listing visibility may depend on category saturation; guaranteed impressions are not promised. Client must provide required assets to meet timelines."
  },

  {
    slug: "mitra-max-suite",
    title: "Mitra MAX Suite",
    price: "₹29,999",
    mrp: "₹59,999",
    shortDescription:
      "Full digital transformation: advanced e-commerce/booking, AI chatbot, lead scoring, inventory billing, branding and 6-month SEO growth program.",
    hero: {
      headline: "Turn your business into a growth engine",
      subHeadline:
        "Complete automation, analytics, branding and growth strategy — for businesses that want to scale fast and operate efficiently.",
      ctaPrimary: "Get Mitra MAX",
      ctaSecondary: "Speak to an Expert"
    },
    whatsIncluded: [
      { title: "E-commerce/Booking website (up to 20 pages)", detail: "Product pages, categories, checkout flow, coupon engine, booking calendar." },
      { title: "AI Chatbot (Website + WhatsApp)", detail: "Lead capture, FAQs, menu navigation and handover to agent." },
      { title: "Advanced CRM", detail: "Lead scoring, multi-pipeline support, task automation and sales reporting." },
      { title: "Inventory-enabled billing", detail: "Stock alerts, SKU management, GST invoicing." },
      { title: "6-month SEO growth plan", detail: "Content calendar, 6 blogs, technical SEO fixes, backlink outreach." },
      { title: "Google Ads setup", detail: "Campaign creation, conversion tracking, ad account configuration." },
      { title: "Full Brand Kit", detail: "Logo, color palette, typography, business card design." },
      { title: "Reputation management", detail: "Review monitoring and response templates." },
      { title: "Custom analytics dashboard", detail: "KPI dashboard with conversions, traffic and revenue insights." },
      { title: "1 year priority support", detail: "Dedicated manager and SLA-backed response." }
    ],
    whatsNotIncluded: [
      "Large-scale bespoke development beyond agreed scope",
      "Monthly ad management (available as add-on)",
      "Onsite photography or video production"
    ],
    benefits: [
      "Automate sales and reduce manual work",
      "Data-driven decisions with analytics",
      "Stronger brand presence and customer experience"
    ],
    targetAudience: [
      "Established retailers expanding online",
      "Service businesses with heavy bookings",
      "Brands wanting consolidated digital operations"
    ],
    pricingBreakdown: {
      lumpsum: [
        { label: "Package fee", amount: "₹29,999" },
        { label: "SEO Growth program (6 months)", amount: "Included" },
        { label: "Priority support (1 year)", amount: "Included" }
      ],
      optionalAddons: [
        { slug: "monthly-ads-management", title: "Ads Management", price: "From ₹9,999/month" },
        { slug: "custom-dev", title: "Custom Development", price: "Quoted per requirement" }
      ]
    },
    paymentOptions: ["Card", "UPI", "Bank Transfer", "EMI (partner finance)"],
    timeline: {
      totalDays: "10–14",
      steps: [
        { dayRange: "Day 0–3", activity: "Deep-dive kickoff, technical scoping and integrations planning" },
        { dayRange: "Day 4–9", activity: "Design, e-commerce flow & API integrations" },
        { dayRange: "Day 10–12", activity: "AI chatbot setup, CRM & inventory sync" },
        { dayRange: "Day 13–14", activity: "Testing, analytics setup, staff training & go-live" }
      ]
    },
    onboardingChecklist: [
      "Full product/service catalog (CSV for products)",
      "Bank/Gateway account details for payments",
      "GST & business billing details",
      "Shipping partner info (if applicable)",
      "Access to existing accounts (Google, Facebook, previous site)"
    ],
    deliveryNotes:
      "Mitra MAX projects require active client involvement for product data and approvals. Complex integrations may extend timelines and be quoted separately.",
    technicalStack: {
      cms: "React / Next.js front-end with headless CMS or WordPress + WooCommerce (client preference)",
      chatbot: "Third-party AI chatbot integration & WhatsApp Business API connector",
      crm: "Connected cloud CRM with API support",
      analytics: "Google Analytics 4 + custom BI dashboard (or Looker/Metabase integration)"
    },
    supportSLA: {
      includedSLA: "Support via dedicated manager — response within 12 hours for critical issues",
      uptimeCommitment: "We aim for 99.5% uptime on managed hosting (subject to host provider SLA)",
      escalation: "Direct line to account manager for urgent incidents"
    },
    faqs: [
      { q: "Do you integrate WhatsApp Business API?", a: "Yes. We help with registration and integration; third-party fees and approval timeline apply." },
      { q: "Who owns the brand assets?", a: "Final design files are delivered to the client on project completion." }
    ],
    testimonials: [
      { name: "Karan Patel, Home Furnishing", city: "Ahmedabad", quote: "Mitra MAX changed how we operate — automation reduced manual errors and improved order fulfillment speed." }
    ],
    seoMeta: {
      title: "Mitra MAX Suite — Complete Automation | Digital Mitra",
      description: "Complete digital transformation for businesses: ecommerce, AI chatbot, CRM automation, SEO growth & branding. Scale your operations.",
      keywords: ["ecommerce builder india", "ai chatbot small business", "crm automation india"]
    },
    socialShare: {
      title: "Mitra MAX by Digital Mitra",
      description: "Complete automation and growth plan for scaling businesses.",
      image: "/api/og?slug=mitra-max-suite"
    },
    cta: { primary: "Start Mitra MAX", secondary: "Book a Strategy Call", demoAvailable: true },
    refundPolicy:
      "Due to the strategic nature of Mitra MAX, refunds are limited. If delivery milestones are missed due to provider issues, we provide credits or partial refunds according to the contract.",
    terms:
      "Third-party API approvals (WhatsApp Business API, payment gateways) are out of our direct control and may affect timelines."
  }
];

export const supportPlanDetails = [
  {
    slug: "mitra-care",
    title: "Mitra Care",
    price: "₹99",
    period: "month",
    shortDescription: "Entry-level maintenance for uptime and basic fixes.",
    includedServices: [
      { title: "Website monitoring", detail: "Automated uptime checks, HTTP error monitoring." },
      { title: "Essential fixes", detail: "Minor bug fixes and patch updates (fair usage)." },
      { title: "Monthly backups", detail: "Site and DB backup retained for 30 days." },
      { title: "Email/chat support (48h)", detail: "Ticket-based support with 48-hour response." },
      { title: "VyapariHub updates", detail: "Basic listing information updates once a month." }
    ],
    exclusions: [
      "Design overhauls or major feature changes",
      "Emergency SLA response",
      "Third-party license renewal costs"
    ],
    sla: {
      responseTime: "48–72 hours",
      criticalIssueHandling: "Escalation possible with upgrade to Care+ or Pro",
      supportHours: "Mon–Sat 9:30–18:30 IST"
    },
    onboarding: [
      "Access to hosting & CMS",
      "Admin user for CMS",
      "Business contact for tickets"
    ],
    upgradePath: ["mitra-care-plus", "mitra-pro", "mitra-max-support"],
    cancellation: "Cancel any time. Service continues until the end of paid billing cycle.",
    faqs: [
      { q: "Can you restore if my site breaks?", a: "Yes — we will attempt restoration from the latest backup. If restoration fails, additional dev charges may apply." }
    ],
    seoMeta: {
      title: "Mitra Care — Affordable Maintenance | Digital Mitra",
      description: "Basic maintenance plan for business websites: monitoring, backups and essential fixes. Affordable monthly support."
    },
    socialShare: {
      title: "Mitra Care — Affordable Maintenance | Digital Mitra",
      description: "Basic maintenance plan for business websites.",
      image: "/api/og?slug=mitra-care"
    }
  },

  {
    slug: "mitra-care-plus",
    title: "Mitra Care+",
    price: "₹299",
    period: "month",
    shortDescription: "Popular support plan with regular updates and faster response.",
    includedServices: [
      { title: "Everything in Mitra Care", detail: "All base-level services included." },
      { title: "3 monthly website edits", detail: "Small content/section changes (text/images) — up to 3 per month." },
      { title: "CRM & Billing support", detail: "Help with workflows, invoice templates and payment link issues." },
      { title: "Priority response (same-day)", detail: "Tickets in the Care+ queue are handled same day during business hours." },
      { title: "WhatsApp helpdesk access", detail: "Quick clarifications and small requests via WhatsApp." },
      { title: "Monthly SEO checks", detail: "Quick technical checks and suggestions for immediate improvement." }
    ],
    exclusions: [
      "Major content writing beyond small edits",
      "Large UI/UX redesigns",
      "Paid third-party service fees"
    ],
    sla: {
      responseTime: "Same-day during business hours (Mon–Sat)",
      criticalIssueHandling: "Priority handling; emergency phone support available as paid option"
    },
    onboarding: [
      "Direct WhatsApp connection",
      "Access to CRM admin",
      "Preferred contacts for approvals"
    ],
    upgradePath: ["mitra-pro", "mitra-max-support"],
    cancellation: "Cancel any time. We will bill the current month and stop renewals.",
    faqs: [
      { q: "Can Care+ handle urgent changes?", a: "Yes — same-day response for small urgent fixes. Complex tasks may require a quote." }
    ],
    seoMeta: {
      title: "Mitra Care+ — Priority Support | Digital Mitra",
      description: "Priority monthly support plan with website edits, CRM help and faster response times. Ideal for active businesses."
    },
    socialShare: {
      title: "Mitra Care+ — Priority Support | Digital Mitra",
      description: "Priority monthly support plan with website edits and CRM help.",
      image: "/api/og?slug=mitra-care-plus"
    }
  },

  {
    slug: "mitra-pro",
    title: "Mitra Pro",
    price: "₹799",
    period: "month",
    shortDescription: "Comprehensive support and growth-focused maintenance for serious businesses.",
    includedServices: [
      { title: "Unlimited content changes", detail: "Fair usage policy applies; typical small updates fulfilled within SLA." },
      { title: "Monthly SEO optimization", detail: "On-page improvements, meta updates and technical fixes." },
      { title: "1 blog post/month", detail: "Short blog (500–700 words) to support SEO efforts." },
      { title: "CRM automation improvements", detail: "Refinements to workflows and templates." },
      { title: "Google Business Profile fixes", detail: "Issue resolution and guidance for GBP." },
      { title: "1 creative design/month", detail: "Banner/graphic for social or website use." },
      { title: "Dedicated support manager", detail: "Single point of contact for requests and strategy." },
      { title: "Phone support", detail: "Phone calls for urgent discussions during business hours." }
    ],
    exclusions: ["Large custom development beyond support scope", "Ongoing ad management (available separately)"],
    sla: {
      responseTime: "12–24 hours for most issues",
      criticalIssueHandling: "Dedicated manager triages and coordinates resolution",
      supportHours: "Extended hours available for Pro clients"
    },
    onboarding: [
      "Kickoff call with account manager",
      "Shared ticketing & priority channels",
      "Access to analytics & ad accounts if needed"
    ],
    upgradePath: ["mitra-max-support"],
    cancellation: "30-day notice recommended for smooth handover.",
    faqs: [
      { q: "What does 'unlimited' mean?", a: "Unlimited small changes within a fair usage policy. Large feature builds are quoted separately." }
    ],
    seoMeta: {
      title: "Mitra Pro — Growth Support | Digital Mitra",
      description: "Full-service monthly support with unlimited small updates, SEO optimization and a dedicated account manager."
    },
    socialShare: {
      title: "Mitra Pro — Growth Support | Digital Mitra",
      description: "Full-service monthly support with unlimited small updates and SEO optimization.",
      image: "/api/og?slug=mitra-pro"
    }
  },

  {
    slug: "mitra-max-support",
    title: "Mitra MAX Support",
    price: "₹1,499",
    period: "month",
    shortDescription: "Top-tier support including strategic consulting, AI maintenance and highest priority response.",
    includedServices: [
      { title: "All Pro features", detail: "Everything in Mitra Pro included." },
      { title: "AI chatbot updates", detail: "Ongoing training, flow updates and handover rules." },
      { title: "Monthly strategy call", detail: "30–60 minute call to review performance and plan next actions." },
      { title: "Performance reporting", detail: "Monthly KPI reports and recommendations." },
      { title: "Top-priority support", detail: "Fastest SLA and direct escalation to senior engineers." }
    ],
    exclusions: ["Paid ad spend, major bespoke platform rebuilds"],
    sla: {
      responseTime: "Critical issues: within 4–8 hours; General: within 12 hours",
      criticalIssueHandling: "Immediate escalation to engineering & manager",
      supportHours: "24x6 for critical issues (Mon–Sat)"
    },
    onboarding: [
      "Dedicated onboarding call and plan",
      "Integration review for AI/chatbot",
      "Account health check & optimisation plan"
    ],
    upgradePath: [],
    cancellation: "Requires 30 days notice. Performance review prior to cancellation is offered.",
    faqs: [
      { q: "Is strategic consulting included?", a: "Yes — monthly strategy calls and ad-hoc recommendations are part of the plan." }
    ],
    seoMeta: {
      title: "Mitra MAX Support — Premium | Digital Mitra",
      description: "Premium monthly support for businesses that want strategic guidance, AI maintenance and top-tier SLAs.",
    },
    socialShare: {
      title: "Mitra MAX Support — Premium | Digital Mitra",
      description: "Premium monthly support for businesses that want strategic guidance.",
      image: "/api/og?slug=mitra-max-support"
    }
  }
];

/**
 * Helper: export a compact listing array (useful for lists & cards).
 * These are concise and reference the detailed objects above by slug.
 */
export const packages = packageDetails.map(p => ({
  slug: p.slug,
  title: p.title,
  price: p.price,
  description: p.shortDescription,
  features: p.whatsIncluded.slice(0, 6).map(f => f.title),
  image: `/images/${p.slug}.svg`,
  popular: p.slug === "business-booster-plan",
  longDescription: p.shortDescription
}));

export const supportPlans = supportPlanDetails.map(sp => ({
  slug: sp.slug,
  title: sp.title,
  price: sp.price,
  period: `/${sp.period}`,
  description: sp.shortDescription,
  features: sp.includedServices.slice(0, 6).map(s => s.title),
  highlight: sp.slug === "mitra-care-plus",
  longDescription: sp.shortDescription
}));

