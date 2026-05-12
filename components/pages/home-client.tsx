"use client";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { LogoMarquee } from "@/components/logo-marquee";
import { ServicesSection } from "@/components/services-section";
import { AboutSection } from "@/components/about-section";
import { PortfolioSection } from "@/components/portfolio-section";
import { ExperienceSection } from "@/components/experience-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ArticlesSection } from "@/components/articles-section";
import { Footer } from "@/components/footer";
import { SupportSection } from "@/components/support-section";
import { FaqSection } from "@/components/faq-section";

export function HomeClient() {

    return (
        <main className="min-h-screen bg-[#FFFFFF]">

            <HeroSection />
            {/* <LogoMarquee /> */}
            <ServicesSection />
            {/* <SupportSection /> */}
            {/* <SupportSection /> */}
            <AboutSection />
            {/* <PortfolioSection /> */}
            {/* <ExperienceSection /> */}

            <TestimonialsSection />
            <FaqSection />
            <ArticlesSection />
            <Footer />
        </main>
    );
}
