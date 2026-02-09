"use client"

import { Footer } from "@/components/footer"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function RefundPolicyClient() {
    useSmoothScroll()

    return (
        <main className="min-h-screen bg-[#F5F5F5] text-[#0D0D0D] font-sans">
            <div className="pt-24 md:pt-32 pb-16 md:pb-24">
                {/* Header */}
                <div className="container mx-auto px-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Refund Policy</h1>
                    <p className="text-lg text-gray-600 font-medium max-w-2xl">
                        Last updated: January 1, 2024
                    </p>
                </div>

                {/* Content */}
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rounded-[2rem] p-8 md:p-12">
                        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-black prose-p:text-gray-600 prose-a:text-[#5C82A3] hover:prose-a:text-[#4a6b8a]">
                            <p>
                                Thank you for choosing Digital Mitra. We strive to provide the best possible services to our clients. Please read our refund policy carefully.
                            </p>

                            <h3>1. Service Deliverables</h3>
                            <p>
                                Since we provide digital services (software development, design, marketing), our deliverables are intangible. Therefore, we generally do not offer refunds once the work has commenced or has been delivered.
                            </p>

                            <h3>2. Project Cancellations</h3>
                            <p>
                                If you wish to cancel a project before work has begun, you may be eligible for a full or partial refund of any advance payment, subject to a cancellation fee to cover administrative costs.
                                <br />
                                If work has already started, a refund will be calculated based on the amount of work completed and resources utilized up to the point of cancellation.
                            </p>

                            <h3>3. Satisfaction Guarantee</h3>
                            <p>
                                We are committed to client satisfaction. If you are not satisfied with our services, please contact us immediately so we can address your concerns and attempt to rectify the issue.
                            </p>

                            <h3>4. Refund Process</h3>
                            <p>
                                To request a refund, please email us at billing@digitalmitra.com with your order details and the reason for the request. We will review your request and notify you of the approval or rejection of your refund within 7-10 business days.
                            </p>

                            <h3>5. Late or Missing Refunds</h3>
                            <p>
                                If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company or bank, as it may take some time before your refund is officially posted. If you’ve done all of this and you still have not received your refund, please contact us.
                            </p>

                            <h3>6. Contact Us</h3>
                            <p>
                                If you have any questions about this Refund Policy, please contact us at: <br />
                                Email: billing@digitalmitra.com <br />
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
