'use client'

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import HightLight from "../hightlight"
import Dialog from "../dialog"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import HeroMain from "../ui/hero-main"
import { GraduationCap } from 'lucide-react';
import { User } from "lucide-react";
import { History } from 'lucide-react';

export default function MarketingPage() {
    const iconClass = "w-8 h-8 stroke-secondary stroke-[1.4]";
    const qualities = [
        {
            icon: <History className={iconClass} />,
            title: 'Timely Delivery',
            brief: 'Ensuring timely delivery of assignments is crucial students satisfaction and is success of assignment wallah.'

        },
        {
            icon: <GraduationCap className={iconClass} />,
            title: '24X7 support',
            brief:'We cater to students worldwide. Our 24/7 support ensures that you can reach out at a time that suits you.'
        },
        {
            icon: <User className={iconClass} />,
            title: 'Assistance',
            brief: 'Our experts are ready to provide instant assistance anytime! Get the help you need when you need it.'
        },
    ]

    return (
        <HeroMain className="relative bg-secondary-dark pb-80 sm:pb-40 md:pb-40 md:bg-hero-image bg-top lg:min-h-max bg-cover  bg-no-repeat before:absolute before:h-full before:w-full before:top-0 before:left-0 md:before:bg-overlay " >
            <div className=" container relative z-10 max-w-7xl mx-auto text-center md:text-left">
                <div className="max-w-3xl ">
                    <div className="flex flex-col items-center md:block">
                        <h1 className="text-3xl md:text-[2.5rem] leading-tight font-poppins-bold text-white ">Empowering Education Your <br /> Source for Assignment <span className="relative">Success!<HightLight className="absolute bottom-0 left-0 translate-y-3" /></span></h1>
                        <p className="max-w-xl mt-4 mb-5 text-white/[.7]  ">Hey students! The World’s Leading Technical Assignment Help Platform is close to you for clearing your doubts in your research module.</p>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                        <Dialog />
                        <Link href='/about'>
                            <Button className={cn(buttonVariants({ variant: "outline", size: "lg" }), 'ml-5 hidden md:block text-lg text-white bg-transparent')} >
                                Know us more
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white border absolute z-30 w-full left-1/2 bottom-0 translate-y-1/2 -translate-x-1/2 rounded-lg overflow-hidden max-w-6xl shadow-light">
                <dl className="grid grid-cols-1 sm:grid-cols-3 sm:divide-x sm:divide-gray-100" >
                    {qualities.map((quality, index) => {
                        return <div key={index} className=" flex flex-col items-center bg-white  py-4 px-10 focus:outline-none focus:ring" >
                            <span className=" inline-block p-3 ">
                                {quality.icon}
                            </span>
                            <h2 className="my-2 text-lg font-bold text-center">{quality.title}</h2>
                            <p className="text-center text-base  flex-1">{quality.brief}</p>
                        </div>
                    })}
                </dl>
            </div>
        </HeroMain>
    )
}
