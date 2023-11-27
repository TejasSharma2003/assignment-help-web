'use client'

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import HightLight from "../hightlight"
import Dialog from "../dialog"
import MainNavbar from "@/components/main-navbar"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function MarketingPage() {
    return (

        <section className="bg-hero-image bg-top lg:min-h-max bg-cover  bg-no-repeat relative before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-overlay " >
            <div className=" container relative z-10 max-w-7xl mx-auto text-center md:text-left">
                <div className="max-w-3xl md:pt-36 py-20">
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
        </section>
    )
}
