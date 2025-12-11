
"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqSection() {
    const faqs = [
        {
            question: "How long does project delivery take?",
            answer: "We generally deliver projects within 5 to 14 days depending on the selected plan.",
        },
        {
            question: "How do domain and hosting renewals work?",
            answer: "Domain, hosting, and support are renewed annually.",
        },
        {
            question: "Can I upgrade my plan later?",
            answer: "Yes, you can upgrade your plan anytime as your business grows.",
        },
        {
            question: "Are social media and automation services available?",
            answer: "Yes, social media management and custom automations are available as add-ons.",
        },
        {
            question: "Do you provide training for the tools?",
            answer: "Full training is provided for CRM, billing software, and website management.",
        },
        {
            question: "Is priority support available?",
            answer: "Priority support is available through the Care+ and Pro plans for businesses needing faster responses.",
        }
    ]

    return (
        <section id="faq" className="container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        Frequently Asked <span className="bg-[#5C82A3] text-white px-3 py-1 inline-block">Questions</span>
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg">
                        Everything you need to know about our services.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-black mb-4">
                            <AccordionTrigger className="text-lg md:text-xl font-bold text-[#0B0B0B] hover:no-underline py-4 md:py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-[#393939] text-base md:text-lg pb-6">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
