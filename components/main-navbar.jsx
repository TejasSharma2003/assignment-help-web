'use client'
import Link from "next/link"
import { company } from "@/configs/company"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { buttonVariants } from "@/components/ui/button"
import Logo from "@/components/logo"
import { Mail, Phone } from "lucide-react";
import { usePathname } from "next/navigation"


export default function MainNavbar({ variant }) {
    const pathname = usePathname();
    let navbarTheme;
    if (variant == "dark") {
        navbarTheme = 'bg-secondary-dark text-white'
    }
    else {
        navbarTheme = 'bg-white text-black/70'
    }
    return (
        <div className={cn("relative text-lg z-50 w-full", navbarTheme)}>
            <div className="">
                <div className="text-white bg-secondary-dark py-[8px] px-4">
                    <div className="flex items-center text-base flex-wrap">
                        <div className="flex items-center mr-5 mb-2 min-[430px]:mb-0">
                            <Phone className="stroke-white w-4 h-4 mr-2" />
                            +916398284253
                        </div>
                        <div className="flex items-center">
                            <Mail className="stroke-white w-4 h-4 mr-2" />
                            <a href="mailto:help.assignmentwallah@gmail.com">help.assignmentwallah@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="relative max-w-[89rem] mx-auto px-4 py-4 ">
                    <div className="flex items-center ">
                        <Logo className="relative -translate-y-2" />
                        <nav className="hidden ml-16 font-semibold  md:block ">
                            {company.mainLinks.map((item, index) => {
                                return <Link key={index} href={item.href}
                                    className={cn("ml-4 first:ml-0  ", { 'text-secondary': item.href === pathname })} >
                                    {item.title}
                                </Link>
                            })}
                        </nav>
                        <Button className={cn(
                            buttonVariants({ variant: "primary" }),
                            'ml-auto rounded-lg text-lg hidden md:block'
                        )} >
                            Contact Us
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    )
}
