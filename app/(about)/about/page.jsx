import About from "@/components/about/intro";
import AboutBanner from "@/components/about/about-banner";
import Quality from "@/components/about/quality";
import SectionWrapper from "@/components/ui/section-wrapper";
import SectionHeading from "@/components/section-heading";
import { reviews } from "@/data/reviews";
import Review from "@/components/review";
import Marquee from "react-fast-marquee";
import Cta from "@/components/home/call-to-action";

export default function AboutFunction() {
    return (
        <>
            <AboutBanner />
            <About />
            <Quality />
            <Cta/>
            <SectionWrapper>
                <SectionHeading title="Still can't decide?" brief="See more feedback from our students" />
                <div className="mt-14">
                    <Marquee >
                        {reviews.map((review, index) => {
                            return <div className="max-w-sm w-full h-full mx-5 ">
                                <Review comment={review.comment} name={review.author} brief={review.brief} />
                            </div>
                        })}
                    </Marquee>
                    <Marquee className="mt-10" direction="right">
                        {reviews.map((review, index) => {
                            return <div className="max-w-sm w-full h-full mx-5">
                                <Review comment={review.comment} name={review.author} brief={review.brief} />
                            </div>
                        })}
                    </Marquee>
                </div>
            </SectionWrapper>

        </>
    )
}
