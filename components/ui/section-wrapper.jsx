import { cn } from "@/lib/utils";
export default function({ children, className }) {
    return <section className={cn('py-20 bg-light-gradient', className )}>{children}</section>
}

