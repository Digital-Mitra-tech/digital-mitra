/**
 * Extended, detail-rich schema for package and support plan detail pages.
 * - Use these objects to populate package detail pages, SEO meta, FAQs, timelines, onboarding checklists, testimonials, addons, and technical requirements.
 * - Field names are intentionally explicit so templating is easy.
 */

export const packageDetails = [
  {
    slug: "launch-plan",
    title: "The 7-Day Launch Plan",
    price: "₹12,999",
    isRecurring: false,
    mrp: "",
    shortDescription: "A complete 'done-for-you' digital presence package to get your business online, build instant trust, and drive real enquiries in just one week.",
    hero: {
      headline: "Take Your Business Online & Start Getting Customers in 7 Days",
      subHeadline: "Stop losing potential customers to your competitors. We build your entire digital presence from scratch—fast, professional, and optimized for growth.",
      ctaPrimary: "Book Your Launch Slot",
      ctaSecondary: "Chat with Us on WhatsApp",
    },
    whatsIncluded: [
      { title: "High-Converting Professional Website", detail: "Mobile-first, lightning fast, with integrated Click-to-WhatsApp and basic SEO foundation." },
      { title: "Google Business Profile Domination", detail: "Complete setup, verification, and local SEO optimization so you rank on Google Maps and Search." },
      { title: "Automated WhatsApp Business Machine", detail: "Professional setup with auto-replies, away messages, and a digital product catalogue (up to 10 items)." },
      { title: "Optimized Social Media Engine", detail: "Fully branded Facebook & Instagram profile setup with optimized bios and contact buttons." },
      { title: "Premium Brand Identity & Logo Design", detail: "A custom logo (with 2 revision rounds) and cohesive branding across all platforms." },
      { title: "Launch-Ready Content Pack", detail: "5 professionally designed social media posts with engaging captions ready to publish immediately." },
      { title: "Premium Domain Registration", detail: "Free .com or .in domain included for the 1st year." }
    ],
    whatsNotIncluded: [
      "Ongoing ad spend",
      "Monthly maintenance",
      "Advanced CRM"
    ],
    benefits: [
      "Launch quickly in just 7 working days",
      "Look like a million bucks (without spending it)",
      "Automated lead capture system in place"
    ],
    targetAudience: [
      "New Businesses & Startups",
      "Local Service Providers (Plumbers, Salons, etc.)",
      "Retail Shops & Restaurants",
      "Clinics & Consultants"
    ],
    pricingBreakdown: {
      lumpsum: [
        { label: "One-time investment", amount: "₹12,999" }
      ],
      optionalAddons: []
    },
    paymentOptions: ["UPI", "Netbanking", "Card"],
    timeline: {
      totalDays: "7",
      steps: [
        { dayRange: "Day 1-2", activity: "Brand Discovery: Finalize logo, brand identity, and gather business details." },
        { dayRange: "Day 3-4", activity: "Design & Development: Build the high-converting website and create social media creatives." },
        { dayRange: "Day 5", activity: "Systems Integration: Setup WhatsApp Business, auto-replies, and digital catalogue." },
        { dayRange: "Day 6", activity: "Profile Optimization: Google Business Profile setup, verification, and Social Media branding." },
        { dayRange: "Day 7", activity: "Final Handover & Launch: You are officially open for business online!" }
      ]
    },
    onboardingChecklist: [
      "Basic business information & contact details",
      "Preferred domain name",
      "List of up to 10 products/services for WhatsApp",
      "Any existing images/logos"
    ],
    deliveryNotes: "Delivered fully within 7 working days upon receipt of onboarding details.",
    technicalStack: {
      cms: "Modern, high-speed web stack",
      hosting: "Included for 1st year"
    },
    supportSLA: {
      includedSLA: "Basic support during the 7-day setup phase"
    },
    faqs: [] as { q: string; a: string }[],
    testimonials: [] as { name: string; city: string; quote: string }[],
    seoMeta: {
      title: "7-Day Launch Plan | Get Your Business Online | Digital Mitra",
      description: "Get your business online in 7 days with our complete Launch Plan. Includes website, logo, Google Business Profile, and WhatsApp automation.",
      keywords: ["launch plan", "website setup", "business online", "digital presence package"]
    },
    socialShare: {
      title: "The 7-Day Launch Plan | Digital Mitra",
      description: "Stop losing customers to your competitors. Get your business online in 7 days.",
      image: "/api/og?slug=launch-plan"
    },
    cta: { primary: "Launch Now", secondary: "Schedule a Call", demoAvailable: false },
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

