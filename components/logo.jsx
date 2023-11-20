import Image from "next/image";
import logo from '@/public/main-logo.png'


export default function Logo() {
    return (
        <Image
            src={logo}
            width={150}
            height={150}
            alt="Assignment help logo"

        />
    )

}
