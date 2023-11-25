import Image from "next/image";
import SectionHeading from "../section-heading";
import SideLayout from "../side-layout";
import SectionWrapper from "../ui/section-wrapper";
import Marquee from "react-fast-marquee";

export default function Support() {
    const title = "Elevating Academic Excellence with Trust";
    const brief = "Our team, Assignment Wallah, is renowned for its unwavering trust among prestigious universities.";
    return (
        <SectionWrapper className="">
            <SectionHeading title={title} brief={brief} />
            <SideLayout className="items-center">
                <div className="relative after:absolute after:top-0 after:left-0 after:h-full after:w-36 after:z-10 after:bg-fade-left before:absolute before:top-0  before:right-0 before:h-full before:w-36 before:z-10 before:bg-fade-right ">
                    <Marquee pauseOnClick={true} pauseOnHover={true} play={true}>
                        <Image src="/universities.png" width={1200} height={500} />
                    </Marquee>
                </div>
                <div className="mt-10 md:mt-0">
                    <h3 className="text-2xl text-black mb-5">Trust
                        <span className="relative"> earned <Image className="absolute bottom-0 left-0 translate-y-1 translate-x-5" src="/short-highlight.svg" width={60} height={10} /></span>
                        through trust.</h3>
                    <p>We help more than 150000+ students belonging to the shown prestigious universities in their education and research-oriented works. We are always here available for students.</p>
                    <p className="mt-5">Students are able to save money thanks to the fact that we provide the most competitively priced solutions for their assignments. We support students to achieve their goals in careers with higher academics grade.</p>
                </div>
            </SideLayout>
        </SectionWrapper>
    )
}
