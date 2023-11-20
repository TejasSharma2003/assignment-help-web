import Image from "next/image";
import SectionHeading from "../section-heading";
import SideLayout from "../side-layout";
import SectionWrapper from "../ui/section-wrapper";

export default function DoubtSolve() {
    const title = "How We Help You To Get Your Doubt Clear?";
    const brief = "We promise to give our best in solving your problems. To make your doubt clear"
    return (
        <SectionWrapper>
            <SectionHeading title={title} brief={brief} />
            <SideLayout className="mt-24">
                <div className="mt-5">
                    <h3 className="relative text-black text-2xl">Don’t <span className="relative"> need <Image className="absolute bottom-0 left-0 translate-y-2" src="/short-highlight.svg" width={60} height={10} /> </span>to worry.
                    </h3> <p className="mt-5">Here, the World’s Leading Technical Assignment Help Platform is close to you for clearing your doubts in your research module, education as well as project development which is the main objective of our Team.</p>
                    <p className="mt-5">We are following some waterfall approach. At first, we received your doubts, then after we try to analyze your doubt to find out your particular domain expert. </p>
                    <p className="mt-5">Now the complete task will be under domain expert who will be responsible for making good content for your problem areas. After receiving the complete task from our technical team of experts, we will deliver it to you via email.</p>
                </div>
                <div className="relative">
                    <div className="absolute bg-white right-0 -top-0 rounded-lg -translate-y-1/3 shadow-light  py-6 px-3 flex w-2/3">
                        <span className="text-secondary text-[1.2rem]" >01.</span>
                        <div className="ml-5 max-w-xs">
                            <p className="text-black text-lg">Collect you Doubts from bucket</p>
                            <p className="text-lg mt-2">We collect your doubts  and question from the  dashboard</p>
                        </div>
                    </div>
                    <div className="absolute bg-white rounded-lg top-[50%]  -translate-y-1/2 shadow-light  py-5 px-2 flex w-2/3">
                        <span className="text-secondary text-[1.2rem] ">02.</span>
                        <div className="ml-5 max-w-xs">
                            <p className="text-black text-lg">Assign to pure domain expert</p>
                            <p className="text-lg mt-2  ">To clear your doubts, we allocate it to domain expert</p>dou
                        </div>
                    </div>
                    <div className="absolute bg-white rounded-lg right-0 bottom-0 translate-y-1/3 shadow-light  py-5 px-2 flex w-2/3">
                        <span className="text-secondary text-[1.2rem] rounded-lg">03.</span>
                        <div className="ml-5 max-w-xs">
                            <p className="text-black text-lg">Get back to you with perfection</p>
                            <p className="text-lg mt-2">Get your answer in mail or live session.</p>
                        </div>
                    </div>
                </div>
            </SideLayout>
        </SectionWrapper>
    )
}
