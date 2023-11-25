import Image from "next/image";
import SectionHeading from "../section-heading";
import { cn } from "@/lib/utils";
import SideLayout from "../side-layout";
import SectionWrapper from "../ui/section-wrapper";

export default function DoubtSolve() {
    const title = "How We Help You To Get Your Doubt Clear?";
    const brief = "We promise to give our best in solving your problems. To make your doubt clear"
    const classBorder = "after:absolute after:w-full after:top-0 after:left-0 after:h-full after:border after:border-2 after:border-secondary after:rounded-lg ";
    return (
        <SectionWrapper>
            <SectionHeading title={title} brief={brief} />
            <SideLayout className="mt-5 md:mt-10 md:grid-rows-2 min-[900px]:grid-rows-none ">
                <div className="mt-5">
                    <h3 className="relative text-black text-2xl">Don&apos;t <span className="relative"> need <Image className="absolute bottom-0 left-0 translate-y-2" src="/short-highlight.svg" width={60} height={10} /> </span>to worry.
                    </h3> <p className="mt-5">Here, the World’s Leading Technical Assignment Help Platform is close to you for clearing your doubts in your research module, education as well as project development which is the main objective of our Team.</p>
                    <p className="mt-5">We are following some waterfall approach. At first, we received your doubts, then after we try to analyze your doubt to find out your particular domain expert. </p>
                    <p className="mt-5">Now the complete task will be under domain expert who will be responsible for making good content for your problem areas. After receiving the complete task from our technical team of experts, we will deliver it to you via email.</p>
                </div>
                <div className="relative flex flex-col items-center min-[900px]:items-end mt-10">
                    <div className={cn("relative md:max-w-xs w-full  min-[900px]:-translate-y-1/3 bg-white right-0  top-0 rounded-lg  shadow-light  py-6 px-3 flex",classBorder)}> <span className="text-secondary text-[1.2rem]" >01.</span> <div className="ml-5 ">
                            <p className="text-black text-lg">Collect you Doubts from bucket</p>
                            <p className="text-lg mt-2">We collect your doubts  and question from the  dashboard</p>
                        </div>
                    </div>
                    <div className={cn("relative md:max-w-xs md:absolute md:left-0 md:bottom-0 md:mt-0 min-[900px]:bottom-1/2 min-[900px]:translate-y-1/2  mt-5  w-full bg-white rounded-lg  shadow-light  py-5 px-2 flex ",classBorder)}> <span className="text-secondary text-[1.2rem] ">02.</span>
                        <div className="ml-5">
                            <p className="text-black text-lg">Assign to pure domain expert</p>
                            <p className="text-lg mt-2  ">To clear your doubts, we allocate it to domain expert</p>
                        </div>
                    </div>
                    <div className={cn("relative md:max-w-xs md:absolute md:right-0 md:bottom-0 md:mt-0 min-[900px]:translate-y-1/3  mt-5  w-full bg-white rounded-lg  shadow-light  py-5 px-2 flex ",classBorder)}> <span className="text-secondary text-[1.2rem] rounded-lg">03.</span> <div className="ml-5"> <p className="text-black text-lg">Get back to you with perfection</p> <p className="text-lg mt-2">Get your answer in mail or live session.</p> </div>
                    </div>
                </div>
            </SideLayout>
        </SectionWrapper>
    )
}
