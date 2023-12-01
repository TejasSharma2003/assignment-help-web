import Image from "next/image";
import logo from '@/public/main-logo.png'
import Link from "next/link";


export default function Logo() {
    return (
        <Link href="/">
            <Image
                src={logo}
                width={150}
                height={50}
                quality={100}
                alt="Assignment help logo"

            />
        </Link>
    )

}
