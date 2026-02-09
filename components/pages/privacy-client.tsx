"use client"

import { Footer } from "@/components/footer"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function PrivacyPolicyClient() {
    useSmoothScroll()

    return (
        <main className="min-h-screen bg-[#F5F5F5] text-[#0D0D0D] font-sans">
            <div className="pt-24 md:pt-32 pb-16 md:pb-24">
                {/* Header */}
                <div className="container mx-auto px-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-lg text-gray-600 font-medium max-w-2xl">
                        Last updated: January 1, 2024
                    </p>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-[2rem] p-8 md:p-12">
                        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-black prose-p:text-gray-600 prose-a:text-[#5C82A3] hover:prose-a:text-[#4a6b8a]">
                            <p>
                                At Digital Mitra, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or use our services.
                            </p>

                            <h3>1. Information We Collect</h3>
                            <p>
                                We collect information that you voluntarily provide to us, such as your name, email address, phone number, and any other details you choose to share when you contact us, subscribe to our newsletter, or purchase our services.
                            </p>

                            <h3>2. How We Use Your Information</h3>
                            <p>
                                We use the collected information to:
                            </p>
                            <ul>
                                <li>Provide and improve our services to you.</li>
                                <li>Communicate with you regarding your inquiries, orders, or support requests.</li>
                                <li>Send you newsletters, marketing emails, and updates (you can opt-out at any time).</li>
                                <li>Analyze website usage to enhance user experience.</li>
                            </ul>

                            <h3>3. Data Security</h3>
                            <p>
                                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
                            </p>

                            <h3>4. Third-Party Sharing</h3>
                            <p>
                                We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates.
                            </p>

                            <h3>5. Your Rights</h3>
                            <p>
                                You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us at privacy@digitalmitra.com.
                            </p>

                            <h3>6. Changes to This Policy</h3>
                            <p>
                                We may update this Privacy Policy from time to time. We encourage you to review this page periodically for any changes.
                            </p>

                            <h3>7. Contact Us</h3>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at: <br />
                                Email: privacy@digitalmitra.com <br />
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
