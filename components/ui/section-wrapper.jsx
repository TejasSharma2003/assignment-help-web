import { cn } from "@/lib/utils";
export default function({ children, className }) {
    return <section className={cn('py-20 md:py-10 bg-light-gradient ', className )}>{children}</section>
}

