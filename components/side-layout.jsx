import { cn } from "@/lib/utils"

export default function SideLayout({ children, className }) {
    return (
        <div className={cn("grid gap-x-32 grid-cols-2 container  mx-auto mt-16", className)}>
            {children}
        </div>
    )
}
