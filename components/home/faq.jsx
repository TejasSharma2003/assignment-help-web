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
        <SectionWrapper>
            <SectionHeading title={title} />
            <div className="container mt-16">
                <Accordion type="single" collapsible className="flex flex-col gap-5 ">
                    {faqs.map((faq, index) => {
                        return <AccordionItem key={index} value={`item-${index + 1}`}>
                            <AccordionTrigger className="text-sub-heading-fill hover:no-underline">{faq.question}</AccordionTrigger>
                            <AccordionContent className=" text-lg text-black">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    })}
                </Accordion>
            </div>
        </SectionWrapper>
    )
}
