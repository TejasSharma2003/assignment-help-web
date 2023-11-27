import SectionWrapper from "../ui/section-wrapper"
import SectionHeading from "../section-heading"
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { buttonVariants } from "../ui/button";
import RenderFromTemplateContext from "next/dist/client/components/render-from-template-context";
import { reviews } from "@/data/reviews";
import Review from "../review";

export default function Testimonial() {
    const title = ' Read trusted reviews from our students';
    const brief = 'Incase you are still having any confusion';

    return <SectionWrapper className="bg-background-gray">
        <SectionHeading title={title} brief={brief} />
        <div className="px-4">
            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 min-[1200px]:grid-cols-4">
                {reviews.map((review, index) => {
                    return <Review key={index} comment={review.comment} name={review.author} brief={review.brief} />
                })}
            </div>

            <div className="flex justify-center mt-8">
                <Button
                    className={cn(buttonVariants({ variant: 'link' }), "mt-5 text-lg")}>
                    <span className="font-medium text-white"> Read all reviews </span>
                </Button>
            </div>
        </div>
    </SectionWrapper>
}
