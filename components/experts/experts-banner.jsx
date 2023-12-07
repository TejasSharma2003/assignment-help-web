'use client'

import { cn } from "@/lib/utils";
import Image from "next/image";
import DiagonalLines from "../ui/diagonal-lines";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BookOpenCheck, User, CheckCircle } from "lucide-react";
import Dialog from "../dialog";
import HeroMain from "../ui/hero-main";
import LinesWave from "../ui/lines-wave";

export default function ExpertsBanner() {
    const iconClass = "w-7 h-7 stroke-white stroke-[1.1]"
    return (
        <HeroMain className="relative bg-secondary-dark pb-5 md:pb-10">
            <LinesWave className="absolute top-0 right-0 -scale-x-100 opacity-10 " />
            <div className="relative container text-center z-10">
                <h1 className="text-3xl md:text-[2.5rem] leading-tight md:leading-[3.4rem] font-poppins-bold sm:text-4xl  text-white">Welcome to our Experts page where academic excellence meets expertise! </h1>
                <p className="my-3 sm:text-xl/relaxed text-white/70">Experts are assignment are well qualified to solve any doubts and get assignment done in no time.</p>
                <Dialog />
            </div>
            <div className="px-4 relative z-20 grid gap-5 mt-8 lg:mt-16 sm:grid-cols-3 sm:grid-rows-expert-layout-rows lg:grid-cols-expert-layout-cols lg:justify-center">
                <Image className="hidden  lg:block lg:col-start-1 lg:row-start-2 lg:row-end-4  h-full rounded-lg object-cover" src="/expert-with-smile.jpg" width={400} height={348} quality={90} />
                <Image className="hidden sm:block sm:w-full sm:h-full sm:row-start-1 sm:row-end-3  rounded-lg  object-cover" src="/expert-girl-glasses.jpg" width={200} height={300} quality={90} />
                <Image className="hidden sm:block sm:w-full sm:h-full sm:row-start-2 sm:row-end-3 rounded-lg object-cover" src="/expert-with-marker.jpg" width={200} height={158} quality={90} />
                <div className="sm:col-start-1 sm:row-start-3 lg:col-start-2 flex flex-col items-center bg-secondary-700 rounded-xl   p-4 shadow-light hover:-translate-y-2 transition-transform duration-300 focus:outline-none focus:ring" >
                    <span className="inline-block rounded-lg p-3 ">
                        <User className={iconClass} />
                    </span>
                    <h2 className=" text-white my-2 text-lg font-bold text-center">100s of Applications</h2>
                    <p className="text-center text-white/70 text-base  flex-1">New applicant applies to join as expert.</p>
                </div>
                <div className="sm:col-start-2 sm:row-start-3 lg:col-start-3 flex flex-col items-center bg-secondary-700 rounded-xl   p-4 shadow-light hover:-translate-y-2 transition-transform duration-300 focus:outline-none focus:ring" >
                    <span className=" inline-block rounded-lg p-3 ">
                        <BookOpenCheck className={iconClass} />
                    </span>
                    <h2 className="my-2 text-lg font-bold text-white text-center">Basic Test</h2>
                    <p className="text-center text-base  text-white/70 flex-1">Only 20% pass the basic test.</p>
                </div>
                <div className="sm:row-start-3 flex flex-col items-center bg-secondary-700 rounded-xl   p-4 shadow-light hover:-translate-y-2 transition-transform duration-300 focus:outline-none focus:ring" >
                    <span className="flex items-center rounded-lg p-3 ">
                        <User className={iconClass} />
                        <CheckCircle className="w-5 h-5 stroke-white stroke-[1.5]" />
                    </span>
                    <h2 className="my-2 text-lg font-bold text-white text-center">Expert Selection</h2>
                    <p className="text-center text-base  text-white/70 flex-1">Only 5% quality applicant are selected.</p>
                </div>
            </div>
        </HeroMain>
    )
}
