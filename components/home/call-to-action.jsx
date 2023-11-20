import SectionWrapper from "../ui/section-wrapper";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { Button } from "../ui/button";
import Dialog from "../dialog";
import Ellipse from "../ui/ellipse";

export default function Cta() {
    return (
        <>
            <SectionWrapper className="lg:py-[120px] bg-light-gradient dark:bg-dark">
                <div className="">
                    <div className=" relative z-10 overflow-hidden rounded bg-secondary py-24  md:p-[70px]">
                        <div className="container flex flex-wrap items-center">
                            <div className="w-full flex text-center flex-col justify-center lg:w-1/2">
                                <span className="block mb-4 text-lg font-medium text-white">
                                    Get your assignemt blasignly fast with acuraccy.
                                </span>
                                <h2 className="mb-6 text-3xl font-poppins-semibold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0">
                                    Don&apos;t let deadlines stress you out – experience the difference with our expert assistance
                                </h2>
                                <Dialog />
                            </div>
                        </div>

                        <div>
                            <span className="absolute top-0 left-0 z-[-1]">
                                <Ellipse />
                            </span>
                            <span className="absolute bottom-0 right-0 z-[-1]">
                                <svg
                                    width="191"
                                    height="208"
                                    viewBox="0 0 191 208"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <ellipse
                                        cx="173"
                                        cy="178.5"
                                        rx="173"
                                        ry="178.5"
                                        fill="url(#paint0_linear)"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="paint0_linear"
                                            x1="-3.27832e-05"
                                            y1="87.2457"
                                            x2="255.501"
                                            y2="88.5747"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stop-color="white" stop-opacity="0.07" />
                                            <stop offset="1" stop-color="white" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    );
};

