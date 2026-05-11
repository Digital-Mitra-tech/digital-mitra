/**
 * Extended, detail-rich schema for package and support plan detail pages.
 * - Use these objects to populate package detail pages, SEO meta, FAQs, timelines, onboarding checklists, testimonials, addons, and technical requirements.
 * - Field names are intentionally explicit so templating is easy.
 */

export const packageDetails = [
  {
    slug: "launch-plan",
    title: "Launch Plan",
    price: "₹12,999",
    isRecurring: false,
    mrp: "",
    shortDescription: "Everything a new business needs to launch online quickly: 1-page website, social media, and Google Business Profile setup.",
    hero: {
      headline: "Launch your business online in 7 days",
      subHeadline: "Professional 1-page website, brand identity, and social media setup — fast, simple, affordable.",
      ctaPrimary: "Get Launch Plan",
      ctaSecondary: "Request Demo",
    },
    whatsIncluded: [
      { title: "1-page professional website", detail: "Custom designed one-page website." },
      { title: "Logo + brand identity", detail: "Professional logo and brand guidelines." },
      { title: "Instagram & Facebook setup", detail: "Complete profile setup for social media." },
      { title: "WhatsApp Business setup", detail: "Business profile and automated replies." },
      { title: "Google Business Profile setup", detail: "Local SEO listing." },
      { title: "5 content posts", detail: "Initial content for your social media." }
    ],
    whatsNotIncluded: [
      "Ongoing ad spend",
      "Monthly maintenance",
      "Advanced CRM"
    ],
    benefits: [
      "Quick 7-day delivery",
      "All-in-one setup",
      "Professional brand identity"
    ],
    targetAudience: [
      "New businesses",
      "Freelancers",
      "Local shops"
    ],
    pricingBreakdown: {
      lumpsum: [
        { label: "One-time fee", amount: "₹12,999" }
      ],
      optionalAddons: []
    },
    paymentOptions: ["UPI", "Netbanking", "Card"],
    timeline: {
      totalDays: "7",
      steps: [
        { dayRange: "Day 1", activity: "Brand Discovery & Strategy: Finalize logo identity and social media details" },
        { dayRange: "Day 2-4", activity: "Design & Content Preparation: Create 1-page website layout and draft content posts" },
        { dayRange: "Day 5", activity: "Development & Integration: Setup website, WhatsApp Business, and social profiles" },
        { dayRange: "Day 6", activity: "Optimization & Quality Check: Google Business Profile setup and testing" },
        { dayRange: "Day 7", activity: "Final Handover & Launch: Go-live and staff walkthrough" }
      ]
    },
    onboardingChecklist: [
      "Business name and details",
      "Preferred domain",
      "Images and content"
    ],
    deliveryNotes: "Delivered in 7 working days.",
    technicalStack: {
      cms: "Modern web stack",
      hosting: "Included"
    },
    supportSLA: {
      includedSLA: "Basic support during setup"
    },
    faqs: [] as { q: string; a: string }[],
    testimonials: [] as { name: string; city: string; quote: string }[],
    seoMeta: {
      title: "Launch Plan | Digital Mitra",
      description: "Launch your business online with our 1-page professional website and social media setup.",
      keywords: ["launch plan", "website setup"]
    },
    socialShare: {
      title: "Launch Plan | Digital Mitra",
      description: "Launch your business online.",
      image: "/api/og?slug=launch-plan"
    },
    cta: { primary: "Buy Now", secondary: "Schedule a call", demoAvailable: false },
    refundPolicy: "Standard refund policy.",
    terms: "Standard T&Cs apply."
  },
  {
    slug: "monthly-growth-plan",
    title: "Monthly Growth Plan",
    price: "₹14,999/mo",
    isRecurring: true,
    mrp: "",
    shortDescription: "Meta Ads Upsell: ₹6,000/month management fee (Client ad budget separate).",
    hero: {
      headline: "Consistent growth with monthly content and updates",
      subHeadline: "Website updates, 12 content pieces/month, WhatsApp lead system, and more.",
      ctaPrimary: "Get Growth Plan",
      ctaSecondary: "Compare Plans",
    },
    whatsIncluded: [
      { title: "Website updates", detail: "Regular maintenance and updates." },
      { title: "12 content pieces/month", detail: "Social media and blog content." },
      { title: "Monthly content calendar", detail: "Planned content strategy." },
      { title: "WhatsApp lead system", detail: "Lead capture and management." },
      { title: "Monthly performance report", detail: "Analytics and insights." },
      { title: "Strategy review call", detail: "Monthly consultation." },
      { title: "Meta Ads Upsell", detail: "₹6,000/month management fee (Ad budget separate)." }
    ],
    whatsNotIncluded: [
      "Client ad budget",
      "Major website redesigns"
    ],
    benefits: [
      "Consistent online presence",
      "Lead generation",
      "Strategic growth"
    ],
    targetAudience: [
      "Growing businesses",
      "Service providers"
    ],
    pricingBreakdown: {
      lumpsum: [
        { label: "Monthly fee", amount: "₹14,999/month" }
      ],
      optionalAddons: [
        { slug: "meta-ads", title: "Meta Ads Management", price: "₹6,000/month" }
      ]
    },
    paymentOptions: ["Card", "UPI"],
    timeline: {
      totalDays: "Monthly",
      steps: [
        { dayRange: "Week 1", activity: "Strategy & Planning: Monthly content calendar and strategy review call" },
        { dayRange: "Week 2", activity: "Content Production: Creation of 12 content pieces and website updates" },
        { dayRange: "Week 3", activity: "Campaign Execution: WhatsApp lead system monitoring and ad management" },
        { dayRange: "Week 4", activity: "Review & Reporting: Monthly performance report and optimization" }
      ]
    },
    onboardingChecklist: [
      "Access to social accounts",
      "Brand assets",
      "Goals and KPIs"
    ],
    deliveryNotes: "Ongoing monthly service.",
    technicalStack: {
      cms: "Existing website",
      analytics: "Google Analytics & Meta Pixel"
    },
    supportSLA: {
      includedSLA: "Priority email and WhatsApp support"
    },
    faqs: [] as { q: string; a: string }[],
    testimonials: [] as { name: string; city: string; quote: string }[],
    seoMeta: {
      title: "Monthly Growth Plan | Digital Mitra",
      description: "Consistent growth with monthly content, website updates, and lead systems.",
      keywords: ["monthly growth", "digital marketing"]
    },
    socialShare: {
      title: "Monthly Growth Plan | Digital Mitra",
      description: "Consistent growth for your business.",
      image: "/api/og?slug=monthly-growth-plan"
    },
    cta: { primary: "Subscribe", secondary: "Talk to Sales", demoAvailable: false },
    refundPolicy: "Cancel anytime.",
    terms: "Monthly billing."
  },
  {
    slug: "business-automation-system",
    title: "Business Automation System",
    price: "₹49,999 setup",
    isRecurring: true,
    mrp: "",
    shortDescription: "Plus ₹9,999/month maintenance. Advanced multi-page website, WhatsApp automation, CRM, and more.",
    hero: {
      headline: "Complete business automation",
      subHeadline: "Advanced multi-page website, WhatsApp automation, CRM setup, and lead dashboard.",
      ctaPrimary: "Get Automation System",
      ctaSecondary: "Speak to an Expert",
    },
    whatsIncluded: [
      { title: "Advanced multi-page website", detail: "Custom, fully-featured website." },
      { title: "WhatsApp automation", detail: "Automated workflows and replies." },
      { title: "CRM setup", detail: "Customer relationship management." },
      { title: "Lead dashboard", detail: "Track and manage leads effectively." },
      { title: "Staff training", detail: "Training for your team to use the system." },
      { title: "Priority support", detail: "Dedicated support channel." }
    ],
    whatsNotIncluded: [
      "Ad spend",
      "Custom software development outside scope"
    ],
    benefits: [
      "Streamlined operations",
      "Automated lead management",
      "Scalable system"
    ],
    targetAudience: [
      "Established businesses",
      "Enterprises"
    ],
    pricingBreakdown: {
      lumpsum: [
        { label: "Setup fee", amount: "₹49,999" },
        { label: "Maintenance", amount: "₹9,999/month" }
      ],
      optionalAddons: []
    },
    paymentOptions: ["Card", "Bank Transfer"],
    timeline: {
      totalDays: "14-21",
      steps: [
        { dayRange: "Phase 1", activity: "Requirements Gathering: Multi-page website planning and CRM mapping" },
        { dayRange: "Phase 2", activity: "Core Development: Building website and WhatsApp automation flows" },
        { dayRange: "Phase 3", activity: "CRM & Dashboard Setup: Lead dashboard integration and data sync" },
        { dayRange: "Phase 4", activity: "Training & Support: Staff training sessions and priority support setup" },
        { dayRange: "Phase 5", activity: "Final Testing & Go-Live: Quality assurance and system deployment" }
      ]
    },
    onboardingChecklist: [
      "Business processes documentation",
      "Team access",
      "Integration requirements"
    ],
    deliveryNotes: "Requires active client involvement for setup.",
    technicalStack: {
      cms: "Advanced CMS",
      crm: "Integrated CRM",
      automation: "WhatsApp API & Zapier/Make"
    },
    supportSLA: {
      includedSLA: "Priority support with dedicated manager"
    },
    faqs: [] as { q: string; a: string }[],
    testimonials: [] as { name: string; city: string; quote: string }[],
    seoMeta: {
      title: "Business Automation System | Digital Mitra",
      description: "Advanced multi-page website, WhatsApp automation, CRM setup, and lead dashboard.",
      keywords: ["business automation", "CRM setup"]
    },
    socialShare: {
      title: "Business Automation System | Digital Mitra",
      description: "Complete business automation for your company.",
      image: "/api/og?slug=business-automation-system"
    },
    cta: { primary: "Start Automation", secondary: "Book a Strategy Call", demoAvailable: true },
    refundPolicy: "Case-by-case basis.",
    terms: "Setup fee is non-refundable after work begins."
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
  image: `/images/${p.slug}.png`,
  popular: p.slug === "monthly-growth-plan",
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

