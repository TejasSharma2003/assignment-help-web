import Link from "next/link"
import { company } from "@/configs/company"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { buttonVariants } from "@/components/ui/button"
import Logo from "@/components/logo"
import WorkBar from "./work-bar"

export default function MainNavbar({ variant }) {
    let navbarTheme;
    if (variant == "dark") {
        navbarTheme = 'bg-secondary-dark text-white'
    }
    else {
        navbarTheme = 'bg-none text-white'
    }
    return (
        <div className={cn("absolute px-5 text-lg z-50 w-full",navbarTheme)}>
            <div className="relative py-5 max-w-[89rem] mx-auto ">
                <div className="flex items-center ">
                    <span className="">
                        <Logo />
                    </span>
                    <nav className="hidden ml-16 md:block ">
                        {company.mainLinks.map((item, index) => {
                            return <Link key={index} href={item.href}
                                className={cn("ml-4",
                                )} >
                                {item.title}
                            </Link>
                        })}
                    </nav>
                    <Button className={cn(
                        buttonVariants({ variant: "primary" }),
                        'ml-auto rounded-lg text-lg'
                    )} >
                        Contact Us
                    </Button>
                </div>
                {/* <div className="mt-5 hidden lg:block"> */}
                {/*     <WorkBar /> */}
                {/* </div> */}
            </div>
        </div>
    )
}
