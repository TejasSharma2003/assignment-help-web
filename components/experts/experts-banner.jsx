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
        <HeroMain className="relative bg-secondary-dark md:pb-10">
            <LinesWave className="absolute top-0 right-0 -scale-x-100 opacity-10 " />
            <div className="relative container text-center z-10">
                <h1 className="text-3xl md:text-[2.5rem] leading-tight md:leading-[3.4rem] font-poppins-bold sm:text-4xl  text-white">Welcome to our Experts page where academic excellence meets expertise! </h1>
                <p className="my-3 sm:text-xl/relaxed text-white/70">Experts are assignment are well qualified to solve any doubts and get assignment done in no time.</p>
                <Dialog />
            </div>
            <div className="relative grid z-10  gap-5 grid-rows-expert-layout-rows grid-cols-expert-layout-cols justify-center">
                <Image className="rounded-lg row-start-3 row-end-5 h-full object-cover" src="/expert-with-smile.jpg" width={400} height={348} quality={90} />
                <Image className="rounded-lg row-start-3 row-end-4 col-start-3 h-full object-cover" src="/expert-with-marker.jpg" width={200} height={300} quality={90} />
                <Image className="rounded-lg row-start-2 row-end-4 h-full object-cover" src="/expert-girl-glasses.jpg" width={200} height={158} quality={90} />
                <div className="flex row-start-4 col-start-2 flex-col items-center bg-secondary-700 rounded-xl   p-4 shadow-light hover:-translate-y-2 transition-transform duration-300 focus:outline-none focus:ring" >
                    <span className="inline-block rounded-lg p-3 ">
                        <User className={iconClass} />
                    </span>
                    <h2 className="text-white my-2 text-lg font-bold text-center">100s of Applications</h2>
                    <p className="text-center text-white/70 text-base  flex-1">New applicant applies to join as expert.</p>
                </div>
                <div className="flex row-start-4 col-start-3 flex-col items-center bg-secondary-700 rounded-xl   p-4 shadow-light hover:-translate-y-2 transition-transform duration-300 focus:outline-none focus:ring" >
                    <span className=" inline-block rounded-lg p-3 ">
                        <BookOpenCheck className={iconClass} />
                    </span>
                    <h2 className="my-2 text-lg font-bold text-white text-center">Basic Test</h2>
                    <p className="text-center text-base  text-white/70 flex-1">Only 20% pass the basic test.</p>
                </div>
                <div className="flex row-start-4 col-start-4 flex-col items-center bg-secondary-700 rounded-xl   p-4 shadow-light hover:-translate-y-2 transition-transform duration-300 focus:outline-none focus:ring" >
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
