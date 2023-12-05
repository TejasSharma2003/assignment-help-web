import Image from "next/image"
import { cn } from "@/lib/utils"
export default function SectionHeading({ title, brief, className }) {
    return (
        <div className={cn("flex flex-col md:items-center px-4", className)}>
            {/* The heading and the image */}
            <div className="md:flex md:items-center">
                <svg className="hidden md:block" width="68" height="11" viewBox="0 0 68 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="28" y1="1.5" x2="68" y2="1.5" stroke="#5B48C5" stroke-width="3" />
                    <line x1="-1.31134e-07" y1="9.5" x2="68" y2="9.49999" stroke="#5B48C5" stroke-width="3" />
                </svg>
                <h2 className="md:mx-3 tracking-tight text-3xl leading-[2.3rem] text-left md:text-center text-sub-heading-fill font-poppins-semibold">
                    {title}
                </h2>
                <svg className="hidden md:block" width="68" height="11" viewBox="0 0 68 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="-1.5" x2="40" y2="-1.5" transform="matrix(-1 0 0 1 40 3)" stroke="#5B48C5" stroke-width="3" />
                    <line y1="-1.5" x2="68" y2="-1.5" transform="matrix(-1 -8.74228e-08 -8.74228e-08 1 68 11)" stroke="#5B48C5" stroke-width="3" />
                </svg>
            </div>
            <p className="md:mt-2 mt-4 text-left md:text-center">{brief}</p>
        </div>
    )
}
