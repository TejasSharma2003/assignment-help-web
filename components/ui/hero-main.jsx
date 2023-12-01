import { cn } from "@/lib/utils"

export default function HeroMain({ children, className }) {
    return <section className={cn('pt-32 pb-20 md:pt-40 md:pb-32 ', className)} >
            {children}
    </section>
}
