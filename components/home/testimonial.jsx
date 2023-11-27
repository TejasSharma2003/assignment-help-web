import SectionWrapper from "../ui/section-wrapper"
import SectionHeading from "../section-heading"
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { buttonVariants } from "../ui/button";
import RenderFromTemplateContext from "next/dist/client/components/render-from-template-context";
import { reviews } from "@/data/reviews";


function Review({ comment, brief, name }) {
    return (
        <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-light rounded-lg border sm:p-8" >
            <div>
                <div className="flex gap-0.5">
                    <svg
                        className="h-5 w-5 text-secondary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg" >
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        />
                    </svg>

                    <svg
                        className="h-5 w-5 text-secondary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg" >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                        className="h-5 w-5 text-secondary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg" >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                        className="h-5 w-5 text-secondary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg" >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                        className="h-5 w-5 text-secondary"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg" >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                </div>

                <div className="mt-4">
                    <h4 className="text-[1.3rem] font-bold text-black/60">{comment}</h4>

                    <p className="mt-4 text-base leading-relaxed ">{brief}</p>
                </div>
            </div>

            <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                &mdash; {name}
            </footer>
        </blockquote>
    )
}

export default function Testimonial() {
    const title = ' Read trusted reviews from our customers';
    const brief = 'Incase you are still having any confusion';

    return <SectionWrapper>
        <SectionHeading title={title} brief={brief} />
        <div className="px-4">
            <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 min-[1200px]:grid-cols-4">
                {reviews.map((review, index) => {
                    return <Review comment={review.comment} name={review.author} brief={review.brief} />
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
