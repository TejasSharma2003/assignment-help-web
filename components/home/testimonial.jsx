import SectionWrapper from "../ui/section-wrapper"
import SectionHeading from "../section-heading"
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { buttonVariants } from "../ui/button";
import { reviews } from "@/data/reviews";
import Review from "../review";
import Link from "next/link";

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
                <Button asClild
                    className={cn(buttonVariants({ variant: 'secondary' }), "mt-5 text-lg")}>
                    <Link href='/about' className="font-medium text-white">React all reviews</Link>
                </Button>
            </div>
        </div>
    </SectionWrapper>
}
