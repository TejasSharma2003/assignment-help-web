import Image from "next/image"
export default function SectionHeading({ title, brief }) {
    return (
        <div className="flex flex-col md:items-center px-4">
            {/* The heading and the image */}
            <div className="md:flex md:items-center">
                <Image className="hidden md:block" src="/left-divide.svg" width={60} height={8} />
                <h2 className="md:mx-3 tracking-tight text-3xl leading-[2.3rem] text-left md:text-center text-sub-heading-fill font-poppins-semibold">
                    {title}
                </h2>
                <Image className="-scale-x-[1] hidden md:block" src="/left-divide.svg" width={60} height={8} />
            </div>
            <p className="md:mt-2 mt-4 text-left md:text-center">{brief}</p>
        </div>
    )
}
