'use client'

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import HightLight from "../hightlight"
import Dialog from "../dialog"
import MainNavbar from "@/components/main-navbar"
import { Button } from "@/components/ui/button"


export default function MarketingPage() {
    return (
        <section className="bg-hero-image  sm:bg-center lg:min-h-max bg-cover  bg-no-repeat relative before:absolute before:h-full before:w-full before:top-0 before:left-0 before:bg-overlay " >
            <div className=" container relative z-10 max-w-7xl mx-auto md:text-center">
                <div className="max-w-3xl pt-36 pb-40">
                    <h1 className="text-[2.5rem] sm:text-3xl sm:leading-tight  font-poppins-bold text-white leading-tight">Empowering Education Your <br/> Source for Assignment <span className="relative">Success!<HightLight className="absolute bottom-0 left-0 translate-y-3" /></span></h1>
                    <p className="max-w-xl mt-4 mb-5 text-white/[.6]">Hey students! The World’s Leading Technical Assignment Help Platform is close to you for clearing your doubts in your research module.</p>
                    <Dialog />
                    <Button className={cn(buttonVariants({ variant: "outline", size: "lg" }), 'ml-5 sm:hidden text-lg text-white bg-transparent')} >
                        Know us more
                    </Button>
                </div>
            </div>
        </section>
    )
}
