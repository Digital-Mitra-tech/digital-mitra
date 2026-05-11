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
        icon: "Building2"
    },
    {
        title: "Business Websites",
        slug: "business-websites",
        category: "Web & App Development",
        description: "High-performance websites tailored to your business goals, from landing pages to complex platforms.",
        features: ["Premium Landing Pages", "E-commerce Websites", "Custom Web Apps", "Admin Dashboards", "Booking Systems"],
        icon: "Globe"
    },
    {
        title: "Brand Identity Design",
        slug: "brand-identity",
        category: "Branding & Creative",
        description: "Comprehensive branding solutions including logos, identity systems, and UI/UX design.",
        features: ["Logo Design", "Packaging Design", "Social Media Branding", "UI/UX Design", "Motion Graphics"],
        icon: "PenTool"
    },
    {
        title: "SEO & Local Search",
        slug: "seo-local-search",
        category: "Digital Marketing",
        description: "Get found by customers in your area and across the web with our expert SEO services.",
        features: ["Local SEO", "Google Ads", "Meta Ads", "Content Marketing", "Lead Generation"],
        icon: "Search"
    },
    {
        title: "Business Automation",
        slug: "business-automation",
        category: "Automation & AI",
        description: "Automate your customer interactions and internal workflows using WhatsApp and AI.",
        features: ["WhatsApp Automation", "AI Chatbots", "CRM Automation", "Workflow Automation", "AI Customer Support"],
        icon: "Zap"
    },
    {
        title: "NFC Business Cards",
        slug: "nfc-business-cards",
        category: "NFC & QR Ecosystem",
        description: "Modern networking tools that allow you to share your profile with a single tap.",
        features: ["NFC Smart Cards", "Google Review QR Systems", "WhatsApp QR Systems", "Smart QR Standees", "Restaurant QR Menus"],
        icon: "CreditCard"
    }
];
