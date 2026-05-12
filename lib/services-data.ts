export interface ServiceItem {
    title: string;
    slug: string;
    description: string;
    category: string;
    features: string[];
    icon: string;
    seoMeta?: {
        title: string;
        description: string;
        keywords: string[];
    };
}

export interface ServiceCategory {
    title: string;
    slug: string;
    description: string;
    icon: string;
    color: string;
}

export const serviceCategories: ServiceCategory[] = [
    {
        title: "Business Launch",
        slug: "business-launch",
        description: "Everything you need to get your business started the right way.",
        icon: "Rocket",
        color: "#FF6B6B"
    },
    {
        title: "Web & App Development",
        slug: "web-app-development",
        description: "Custom digital solutions built for performance and scale.",
        icon: "Code",
        color: "#4ECDC4"
    },
    {
        title: "Branding & Creative",
        slug: "branding-creative",
        description: "Building memorable brands that stand out in the market.",
        icon: "Palette",
        color: "#FFE66D"
    },
    {
        title: "Digital Marketing",
        slug: "digital-marketing",
        description: "Data-driven marketing to grow your online presence.",
        icon: "Megaphone",
        color: "#FF9F43"
    },
    {
        title: "Automation & AI",
        slug: "automation-ai",
        description: "Streamline your workflows with intelligent automation.",
        icon: "Cpu",
        color: "#5C82A3"
    },
    {
        title: "NFC & QR Ecosystem",
        slug: "nfc-qr-ecosystem",
        description: "Connect the physical and digital world seamlessly.",
        icon: "Smartphone",
        color: "#A29BFE"
    }
];

export const servicesData: ServiceItem[] = [
    {
        title: "Company Registration",
        slug: "company-registration",
        category: "Business Launch",
        description: "Professional assistance with Pvt Ltd, LLP, and GST registration to give your business a legal foundation.",
        features: ["Company/LLP Registration", "GST Registration", "MSME/Udyam Registration", "Trademark Filing", "Startup Consultation"],
        icon: "Building2",
        seoMeta: {
            title: "Company Registration Services Kerala | Pvt Ltd, LLP, GST | Digital Mitra",
            description: "Fast and expert company registration in Kerala. Pvt Ltd, LLP, GST, MSME registration for businesses in Kochi, Trivandrum, Calicut, and all of Kerala.",
            keywords: ["company registration Kerala", "Pvt Ltd registration Kerala", "GST registration Kerala", "LLP registration Kerala", "MSME registration Kerala", "business registration Kochi", "startup registration Kerala"],
        },
    },
    {
        title: "Business Websites",
        slug: "business-websites",
        category: "Web & App Development",
        description: "High-performance websites tailored to your business goals, from landing pages to complex platforms.",
        features: ["Premium Landing Pages", "E-commerce Websites", "Custom Web Apps", "Admin Dashboards", "Booking Systems"],
        icon: "Globe",
        seoMeta: {
            title: "Business Website Development Kerala | Kochi, Trivandrum, Calicut | Digital Mitra",
            description: "Professional business website development for Kerala businesses. Fast, SEO-optimized websites starting from ₹12,999. Serving Kochi, Trivandrum, Calicut, Thrissur and all of Kerala.",
            keywords: ["web development Kerala", "website design Kochi", "business website Kerala", "e-commerce website Kerala", "web development company Trivandrum", "professional website Kerala"],
        },
    },
    {
        title: "Brand Identity Design",
        slug: "brand-identity",
        category: "Branding & Creative",
        description: "Comprehensive branding solutions including logos, identity systems, and UI/UX design.",
        features: ["Logo Design", "Packaging Design", "Social Media Branding", "UI/UX Design", "Motion Graphics"],
        icon: "PenTool",
        seoMeta: {
            title: "Logo & Brand Identity Design in Kerala | Kochi, Trivandrum | Digital Mitra",
            description: "Professional logo design and brand identity for Kerala businesses. Build a brand that stands out in Kochi, Trivandrum, Calicut, and across Kerala.",
            keywords: ["logo design Kerala", "brand identity Kerala", "logo design Kochi", "branding agency Kerala", "graphic design Kerala", "logo designer Trivandrum"],
        },
    },
    {
        title: "SEO & Local Search",
        slug: "seo-local-search",
        category: "Digital Marketing",
        description: "Get found by customers in your area and across the web with our expert SEO services.",
        features: ["Local SEO", "Google Ads", "Meta Ads", "Content Marketing", "Lead Generation"],
        icon: "Search",
        seoMeta: {
            title: "SEO Services Kerala | Local SEO, Google Rankings | Digital Mitra",
            description: "Expert SEO services for Kerala businesses. Rank on page 1 of Google for searches in Kochi, Trivandrum, Calicut, Thrissur, and all of Kerala.",
            keywords: ["SEO services Kerala", "local SEO Kerala", "SEO company Kochi", "Google ranking Kerala", "digital marketing Kerala", "SEO agency Trivandrum"],
        },
    },
    {
        title: "Business Automation",
        slug: "business-automation",
        category: "Automation & AI",
        description: "Automate your customer interactions and internal workflows using WhatsApp and AI.",
        features: ["WhatsApp Automation", "AI Chatbots", "CRM Automation", "Workflow Automation", "AI Customer Support"],
        icon: "Zap",
        seoMeta: {
            title: "Business Automation Kerala | WhatsApp Automation, AI Chatbots | Digital Mitra",
            description: "Automate your Kerala business with WhatsApp automation, AI chatbots, and CRM systems. Serving businesses in Kochi, Trivandrum, Calicut, and all of Kerala.",
            keywords: ["business automation Kerala", "WhatsApp automation Kerala", "AI chatbot Kerala", "CRM setup Kerala", "workflow automation Kerala", "lead automation Kochi"],
        },
    },
    {
        title: "NFC Business Cards",
        slug: "nfc-business-cards",
        category: "NFC & QR Ecosystem",
        description: "Modern networking tools that allow you to share your profile with a single tap.",
        features: ["NFC Smart Cards", "Google Review QR Systems", "WhatsApp QR Systems", "Smart QR Standees", "Restaurant QR Menus"],
        icon: "CreditCard",
        seoMeta: {
            title: "NFC Business Cards Kerala | Smart Digital Cards Kochi | Digital Mitra",
            description: "Premium NFC smart business cards and QR systems for professionals in Kochi, Trivandrum, Calicut, and all of Kerala. Tap to share your profile instantly.",
            keywords: ["NFC business cards Kerala", "NFC cards Kochi", "digital business cards Kerala", "smart visiting cards Kerala", "QR standees Kerala", "Google review QR Kerala"],
        },
    }
];
