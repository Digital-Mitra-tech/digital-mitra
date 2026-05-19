import type { Metadata } from "next"
import { FaqPageClient } from "@/components/pages/faq-page-client"

export const metadata: Metadata = {
  title: "FAQ — Digital Services Kerala | Digital Mitra",
  description: "Got questions about web development, SEO, digital marketing, or automation in Kerala? Find answers to the most common questions about Digital Mitra's services, pricing, timelines, and process.",
  keywords: [
    "digital agency FAQ Kerala",
    "web development questions Kerala",
    "SEO services FAQ",
    "digital marketing FAQ Kerala",
    "website cost Kerala",
    "Digital Mitra FAQ",
  ],
  alternates: { canonical: "https://digitalmitra.co/faq" },
  openGraph: {
    title: "Frequently Asked Questions | Digital Mitra",
    description: "Answers to common questions about our web development, SEO, digital marketing, and automation services for Kerala businesses.",
    url: "https://digitalmitra.co/faq",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Digital Mitra",
    description: "Answers to common questions about our digital services for Kerala businesses.",
  },
}

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer: "Most business websites are delivered within 5–14 days depending on the plan and complexity. A basic landing page can be ready in 5 days, while a full e-commerce site or custom web app takes 10–21 days. We share a clear timeline with every project before we start.",
  },
  {
    question: "How much does a website cost?",
    answer: "Our business website packages start from ₹12,999 for a professional launch plan. Pricing depends on the number of pages, features required, and integrations. Visit our Packages page for a full breakdown, or contact us for a custom quote.",
  },
  {
    question: "Do you work with businesses outside Kerala?",
    answer: "Yes. While we are based in Kerala and specialize in serving local businesses, we work with clients across India and internationally. We have built websites for businesses in Mumbai, Dubai, Australia, and beyond.",
  },
  {
    question: "What is included in your SEO service?",
    answer: "Our SEO service covers on-page optimization, keyword research, Google Business Profile setup, local SEO for cities like Kochi, Trivandrum, and Calicut, content strategy, backlink building, and monthly performance reporting.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely. You can start with a basic package and upgrade as your business grows. There are no lock-in contracts on most plans and we make the upgrade process seamless.",
  },
  {
    question: "Do you handle domain and hosting?",
    answer: "Yes. We can register your domain, set up hosting, and manage everything for you. Domain and hosting are renewed annually. We also offer server management and SSL certificates as part of our support plans.",
  },
  {
    question: "What is a Mitra Care support plan?",
    answer: "Mitra Care is our ongoing website support and maintenance service. It includes security updates, backups, bug fixes, content updates, and priority response times. Plans start from a monthly retainer — perfect for businesses that want peace of mind without hiring a full-time developer.",
  },
  {
    question: "Do you provide training after the project is delivered?",
    answer: "Yes. We provide full training for managing your website, CRM, billing software, and any other tools we set up. Training is done via screen share or in-person for clients in Kerala.",
  },
  {
    question: "What is WhatsApp automation and how does it help my business?",
    answer: "WhatsApp automation lets you automatically respond to customer inquiries, send order confirmations, appointment reminders, and follow-up messages — all without manual effort. This saves time, reduces missed leads, and improves customer experience. It works 24/7 even when you're offline.",
  },
  {
    question: "How do NFC business cards work?",
    answer: "NFC (Near Field Communication) smart cards let you share your contact details, portfolio, social media links, or any URL with a single tap on another person's smartphone — no app required. Just tap and it opens instantly. They are reusable and can be updated any time.",
  },
  {
    question: "Do you offer company registration services?",
    answer: "Yes. We assist with Private Limited company registration, LLP registration, GST registration, MSME/Udyam registration, and trademark filing. We guide you through the entire process so you can focus on building your business.",
  },
  {
    question: "How do I get started?",
    answer: "Simply reach out via our contact form, WhatsApp, or email at hello@digitalmitra.com. We will schedule a free consultation call to understand your requirements and recommend the right solution for your business.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FaqPageClient faqs={faqs} />
    </>
  )
}
