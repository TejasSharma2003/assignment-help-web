'use client'
import SectionHeading from "../section-heading"
import SectionWrapper from "../ui/section-wrapper"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq({ faqs }) {
    const title = "Frequently Asked Questions (FAQ)"
    return (
        <SectionWrapper className="relative">
            <SectionHeading title={title} />
            <div className="max-w-5xl mx-auto mt-16  px-5">
                <Accordion type="single" collapsible className="flex flex-col gap-5">
                    {faqs.map((faq, index) => {
                        return <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger className="text-sub-heading-fill hover:no-underline text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className=" text-lg text-black/90">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    })}
                </Accordion>
            </div>
        </SectionWrapper>
    )
}
