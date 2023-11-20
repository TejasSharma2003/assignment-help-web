import Image from "next/image"
export default function HightLight({ className, ...props }) {
    return <Image
        className={className}
        src="/highlight.svg"
        width={276}
        height={37}
    />
}
