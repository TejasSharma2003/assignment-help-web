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


export default function MarketingPage({ children }) {
    const featuredBlogs = [
        {
            title: "Assignment Services",
            brief: "Explore a variety of assignment services tailored to your needs. From technical assignments to programming tasks, our experts are here to help you succeed.",
            publishedAt: "October 15, 2023",
            comments: 10,
        },
        {
            title: "Assignment Types",
            brief: "Discover specialized assignment types designed to cater to different subjects and requirements. Whether it's academic writing, online assignments, or business management tasks, we've got you covered.",
            publishedAt: "October 15, 2023",
            comments: 10,
        },
        {
            title: "Mastering Programming Languages",
            brief: "From Python and Java to data structures and algorithms, delve into the world of programming with our expert guidance. Enhance your coding skills and tackle intricate programming assignments with confidence.",
            publishedAt: "October 15, 2023",
            comments: 10,
        }

    ]
    return (
        <main>
            <Hero />
            <Process/>
            <Cta/>
            <DoubtSolve/>
            <Support/>
            {/* <Sample featuredBlogs={featuredBlogs}/> */}
            <UpdatesEmail/>
            <Testimonial/>
            <Faq faqs={assignmentHelpFAQs}/>
        </main>
    )

}
