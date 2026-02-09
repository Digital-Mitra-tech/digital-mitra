"use client"

import { Footer } from "@/components/footer"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function CookiePolicyClient() {
    useSmoothScroll()

    return (
        <main className="min-h-screen bg-[#F5F5F5] text-[#0D0D0D] font-sans">
            <div className="pt-24 md:pt-32 pb-16 md:pb-24">
                {/* Header */}
                <div className="container mx-auto px-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Cookie Policy</h1>
                    <p className="text-lg text-gray-600 font-medium max-w-2xl">
                        Last updated: January 1, 2024
                    </p>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-[2rem] p-8 md:p-12">
                        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-black prose-p:text-gray-600 prose-a:text-[#5C82A3] hover:prose-a:text-[#4a6b8a]">
                            <p>
                                This Cookie Policy explains how Digital Mitra uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                            </p>

                            <h3>1. What are cookies?</h3>
                            <p>
                                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
                            </p>

                            <h3>2. Why do we use cookies?</h3>
                            <p>
                                We use first and third-party cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies. Other cookies also enable us to track and target the interests of our users to enhance the experience on our Online Properties.
                            </p>

                            <h3>3. Types of Cookies We Use</h3>
                            <ul>
                                <li><strong>Essential Cookies:</strong> These are strictly necessary to provide you with services available through our Website and to use some of its features.</li>
                                <li><strong>Analytics Cookies:</strong> These cookies collect information that is used either in aggregate form to help us understand how our Website is being used or to help us improve our Website for you.</li>
                                <li><strong>Advertising Cookies:</strong> These cookies are used to make advertising messages more relevant to you.</li>
                            </ul>

                            <h3>4. How can I control cookies?</h3>
                            <p>
                                You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                            </p>

                            <h3>5. Updates to this policy</h3>
                            <p>
                                We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                            </p>

                            <h3>6. Contact Us</h3>
                            <p>
                                If you have any questions about our use of cookies or other technologies, please email us at: <br />
                                Email: privacy@digitalmitra.com
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
