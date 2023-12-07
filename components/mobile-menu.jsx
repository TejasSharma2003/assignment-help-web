'use client'
import { cn } from "@/lib/utils"
import { company } from "@/configs/company"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function MobileMenu({ mobileNavToggle }) {
    const pathname = usePathname();
    return (
        <>
            <nav className="mt-28 flex text-black/50 flex-col gap-4 text-[18px] ">
                <h3 className="text-black/60 text-center text-[20px] font-semibold mb-6">Browse our site</h3>
                {company.mainLinks.map((link, index) => {
                    return <Link key={index} href={link.href} className={cn("pl-4 border-b pb-4", {'text-secondary' : pathname === link.href})} onClick={() => mobileNavToggle()}>{link.title}</Link>
                })}
            </nav>
        </>
    )
}
