import { cn } from "@/lib/utils";
export default function({ children, className }) {
    return <section className={cn('md:py-13 py-10   ', className )}>{children}</section>
}

