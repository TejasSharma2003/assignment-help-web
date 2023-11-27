import { cn } from "@/lib/utils";
export default function({ children, className }) {
    return <section className={cn('md:py-16 py-10 bg-white  ', className )}>{children}</section>
}

