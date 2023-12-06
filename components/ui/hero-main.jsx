import { cn } from "@/lib/utils"

export default function HeroMain({ children, className }) {
    return <section className={cn('pt-10 pb-20 md:pt-14 md:pb-32 ', className)} >
        {children}
    </section>
}
