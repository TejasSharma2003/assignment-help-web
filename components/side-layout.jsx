import { cn } from "@/lib/utils"

export default function SideLayout({ children, className }) {
    return (
        <div className={cn("grid  grid-cols-1 min-[900px]:grid-cols-2 min-[900px]:gap-x-10 lg:gap-x-28 container mx-auto mt-10 ", className)}>
            {children}
        </div>
    )
}
