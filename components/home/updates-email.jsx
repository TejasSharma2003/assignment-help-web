import SectionWrapper from "../ui/section-wrapper";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Ellipse from "../ui/ellipse";

export default function UpdatesEmail() {
    return (
        <div className="relative z-20 bg-light-gradient dark:bg-dark">
            <div className="relative z-10 overflow-hidden rounded bg-secondary-dark py-24 ">
                <div className="container flex flex-wrap items-center justify-center">
                    <div className=" max-w-5xl flex text-center flex-col ">
                        <p className="text-base mb-4 text-white">Subsribe and avail special offers.</p>
                        <h2 className="mb-6 text-2xl sm:text-3xl font-poppins-semibold leading-tight text-white">
                            Don&apos;t miss out on the academic adventure <br />join our newsletter now!
                        </h2>
                        <div className="flex justify-center w-full mt-2 items-center space-x-2">
                            <div className="flex w-full max-w-md items-center">
                                <Input type="email" placeholder="Email" className="mr-3 text-lg" />
                                <Button type="submit" className='text-lg'>Subscribe</Button>
                            </div>
                        </div>
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
    );
};


