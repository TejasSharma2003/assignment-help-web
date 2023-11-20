import Link from "next/link"
import { company } from "@/configs/company"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { buttonVariants } from "@/components/ui/button"
import Logo from "@/components/logo"
import WorkBar from "./work-bar"

export default function MainNavbar() {
    return (
        <div className="px-10 py-5 text-black/[.8] text-lg bg-white relative z-50 after:absolute after:h-full after:w-full after:top-0 after:left-0 after:bg-background
            ">
            <div className="relative z-50">
                <div className="flex items-end">
                    <Logo />
                    <nav className="ml-16">
                        {company.mainLinks.map((item, index) => {
                            return <Link key={index} href={item.href}
                                className="ml-4" >
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
                <div className="mt-5">
                    <WorkBar />
                </div>
            </div>
        </div>
    )
}
