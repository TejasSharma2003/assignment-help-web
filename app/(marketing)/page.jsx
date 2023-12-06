import DoubtSolve from "@/components/home/doubt-solve";
import Faq from "@/components/home/faq";
import Hero from "@/components/home/hero";
import Process from "@/components/home/process";
import Sample from "@/components/home/sample";
import Support from "@/components/home/support";
import Cta from "@/components/home/call-to-action";
import UpdatesEmail from "@/components/home/updates-email";
import { assignmentHelpFAQs } from "@/data/faq";
import Testimonial from "@/components/home/testimonial";


export default function MarketingPage() {
    return (
        <main>
            <Hero />
            <Process/>
            <Cta/>
            <DoubtSolve/>
            <UpdatesEmail/>
            <Support/>
            <Testimonial/>
            <Faq faqs={assignmentHelpFAQs}/>
        </main>
    )

}
