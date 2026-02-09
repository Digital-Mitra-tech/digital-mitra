"use client"

import { Footer } from "@/components/footer"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function TermsClient() {
    useSmoothScroll()

    return (
        <main className="min-h-screen bg-[#F5F5F5] text-[#0D0D0D] font-sans">
            <div className="pt-24 md:pt-32 pb-16 md:pb-24">
                {/* Header */}
                <div className="container mx-auto px-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
                    <p className="text-lg text-gray-600 font-medium max-w-2xl">
                        Last updated: January 1, 2024
                    </p>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-[2rem] p-8 md:p-12">
                        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-black prose-p:text-gray-600 prose-a:text-[#5C82A3] hover:prose-a:text-[#4a6b8a]">
                            <p>
                                Welcome to Digital Mitra! By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully.
                            </p>

                            <h3>1. Acceptance of Terms</h3>
                            <p>
                                By accessing this website, we assume you accept these terms and conditions. Do not continue to use Digital Mitra if you do not agree to take all of the terms and conditions stated on this page.
                            </p>

                            <h3>2. Services</h3>
                            <p>
                                Digital Mitra provides digital marketing, web development, and related technology services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice.
                            </p>

                            <h3>3. User Responsibilities</h3>
                            <p>
                                You agree to use our website and services only for lawful purposes. You must not use our site to transmit any unsolicited commercial communications or for any fraudulent or malicious activity.
                            </p>

                            <h3>4. Intellectual Property</h3>
                            <p>
                                Unless otherwise stated, Digital Mitra and/or its licensors own the intellectual property rights for all material on Digital Mitra. All intellectual property rights are reserved. You may access this from Digital Mitra for your own personal use subjected to restrictions set in these terms and conditions.
                            </p>

                            <h3>5. Limitation of Liability</h3>
                            <p>
                                In no event shall Digital Mitra, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website or our services.
                            </p>

                            <h3>6. Governing Law</h3>
                            <p>
                                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                            </p>

                            <h3>7. Changes to Terms</h3>
                            <p>
                                We reserve the right to amend these terms at any time. By continuing to use the site after such changes are posted, you accept the new terms.
                            </p>

                            <h3>8. Contact Us</h3>
                            <p>
                                If you have any questions about these Terms of Service, please contact us at: <br />
                                Email: legal@digitalmitra.com <br />
                                Phone: +91-8289835902
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
