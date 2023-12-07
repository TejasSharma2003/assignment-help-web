'use client'
import Link from "next/link"
import { company } from "@/configs/company"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { buttonVariants } from "@/components/ui/button"
import Logo from "@/components/logo"
import { Mail, Phone } from "lucide-react";
import { usePathname } from "next/navigation"
import SocialLink from "./ui/social-link"
import Hamburger from "./hamburger"
import { useState } from "react"
import MobileMenu from "./mobile-menu"


export default function MainNavbar({ variant }) {
    const pathname = usePathname();
    const [mobileNav, setMobileNav] = useState(false);
    let navbarTheme;
    if (variant == "dark") {
        navbarTheme = 'bg-secondary-dark text-white'
    }
    else {
        navbarTheme = 'bg-white text-black/70'
    }

    const mobileNavToggle = () => {
        setMobileNav(pre => !pre);
        console.log(mobileNav);
    }

    return (
        <div className={cn("relative text-lg z-50 w-full", navbarTheme)}>
            <div className="relative max-w-[89rem] mx-auto px-4 py-4 ">
                <div className="flex items-center ">
                    <Logo className="relative -translate-y-2" />
                    <div className="py-[8px] px-4 hidden flex-[0] lg:flex-1 lg:block">
                        <div className="flex items-center text-base flex-wrap">
                            <div className="flex items-center mr-5 mb-2 min-[430px]:mb-0">
                                <Phone className="stroke-secondary w-4 h-4 mr-2" />
                                +916398284253
                            </div>
                            <div className="flex items-center">
                                <Mail className="stroke-secondary w-4 h-4 mr-2" />
                                <a href="mailto:help.assignmentwallah@gmail.com">help.assignmentwallah@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <nav className="hidden ml-auto md:flex flex-nowrap">
                        {company.mainLinks.map((item, index) => {
                            return <Link key={index} href={item.href}
                                className={cn("ml-4 first:ml-0  ", { 'text-secondary': item.href === pathname })} >
                                {item.title}
                            </Link>
                        })}
                    </nav>
                    <div className="w-[2px] h-5 bg-black/30 hidden md:block mx-4"></div>
                    <Button asChild className={cn(
                        buttonVariants({ variant: "primary" }),
                        ' rounded-lg text-lg hidden md:block'
                    )} >
                        <Link href="/contact">
                            Contact Us
                        </Link>
                    </Button>

                    {/* Mobile hamburger */}
                    <div className={cn("absolute right-0 md:hidden pr-4 z-50", {
                        'fixed': mobileNav

                    })} onClick={mobileNavToggle}>
                        <Hamburger mobileNav={mobileNav}/>
                    </div>

                    {/* overlay */}
                    <div className={cn("hidden w-screen min-h-screen fixed top-0 left-0 bg-black/30",
                        {
                            'block': mobileNav
                        })} onClick={() => mobileNavToggle()}>
                    </div>

                    <div className={cn("md:hidden border translate-x-full transition-transform duration-300  fixed top-0 right-0 w-full max-w-[400px] min-h-screen bg-white", {
                        'translate-x-0': mobileNav
                    })}>
                        <MobileMenu mobileNavToggle={mobileNavToggle} />
                    </div>
                </div>
            </div>
        </div>
    )
}
