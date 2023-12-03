'use client'

import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import SectionWrapper from "../ui/section-wrapper";
import SectionHeading from "../section-heading";
import { Button, buttonVariants } from "../ui/button";
import FiveStarts from "../ui/five-stars";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";
import { ourExperts } from "@/data/experts-data";

function ExpertCard({ major, about }) {
    return (
        <div className="max-w-[400px] border py-4 px-4 rounded-lg shadow-lg flex flex-col items-center ml-8">
            <Avatar className="w-12 h-12" >
                <AvatarImage className="rounded-full" src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {/* <Image className="rounded-full w-[80px] h-[80px] object-cover " src="/expert-with-glasses.jpg" width={80} height={80} /> */}
            <div className="flex mt-4 mb-2">
                <FiveStarts />
            </div>
            <p className="text-sub-heading-fill font-semibold ">{major}</p>
            <p className="flex-1 mt-4 text-center text-lg font-medium">{about}</p>

            <Button className={cn(buttonVariants({ variant: 'primary' }),'mt-5 text-lg')}>Hire me</Button>
        </div>
    )
}

export default function Experts() {
    const iconClass = "w-8 h-8 stroke-secondary stroke-[1.4]"
    const reasons = [
        {
            "point": "Unparalleled Expertise",
            "description": "Our experts are specialists in their respective fields with advanced degrees from prestigious institutions and years of hands-on experience."
        },
        {
            "point": "Passion for Teaching and Learning",
            "description": "Beyond their academic achievements, our experts are passionate educators who thrive on guiding students through challenging concepts."
        },
        {
            "point": "Real-World Experience",
            "description": "Many of our experts have practical experience in industry or research, providing a unique perspective to academic subjects."
        },
        {
            "point": "Commitment to Excellence",
            "description": "Our experts are committed to delivering excellence in every aspect of their work, ensuring assignments that exceed expectations."
        },
        {
            "point": "Continuous Professional Development",
            "description": "Our experts actively engage in continuous learning and professional development to stay at the forefront of their fields."
        },
        {
            "point": "Positive Student Feedback",
            "description": "The success of our experts is reflected in the positive feedback we receive from students, highlighting their clarity, patience, and invaluable support."
        }
    ]
    return (
        <SectionWrapper className="">
            <div className="flex flex-col items-center">
                <SectionHeading title="Your Trusted Academic Support Partners" brief="Unlocking Academic Success Anytime, Anywhere with Our Dedicated Assignment Help Team" />
            </div>
            <Marquee className="mt-10  py-5" pauseOnHover={true}>
                {ourExperts.map((expert, index) => {
                    return <ExpertCard key={index} major={expert.major} about={expert.about} />
                })}
            </Marquee>
            <div className="mt-10 container">
                <h1 className="text-2xl text-black font-medium text-center">Why our experts are best?</h1>
                <div className="grid sm:grid-cols-2 gap-5 sm:gap-8 md:grid-cols-3 mt-10">
                    {reasons.map((reason, index) => {
                        return <div key={index} className="flex flex-col  bg-white rounded-xl border  p-4 shadow-light hover:-translate-y-2 transition-transform duration-300 focus:outline-none focus:ring" >
                            {/* <span className=" inline-block rounded-lg p-3 "> */}
                            {/*     {quality.icon} */}
                            {/* </span> */}
                            <h2 className="my-2 text-xl font-medium">{reason.point}</h2>
                            <p className="text-base  flex-1">{reason.description}</p>
                        </div>
                    })}
                </div>
            </div>
        </SectionWrapper>
    )
}
