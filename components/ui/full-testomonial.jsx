import SectionWrapper from "./section-wrapper"
import Marquee from "react-fast-marquee"
import SectionHeading from "../section-heading"
import Review from "../review"
import { reviews } from "@/data/reviews"

export default function FullTestomonial() {
    return (
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
    )
}
