import { cn } from "@/lib/utils";
export default function({ children, className }) {
    return <section className={cn('md:py-16 py-10 bg-light-gradient ', className )}>{children}</section>
}

