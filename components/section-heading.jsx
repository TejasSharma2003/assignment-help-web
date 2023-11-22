import Image from "next/image"
export default function SectionHeading({ title, brief }) {
    return (
        <div className="flex flex-col items-center md:items-start  text-center lg:text-left px-4">
            {/* The heading and the image */}
            <div className="flex items-center">
                <Image className="md:hidden" src="/left-divide.svg" width={60} height={8} />
                <h2 className="mx-3 md:mx-0 text-3xl md:text-3xl md:leading-[2.3rem] text-sub-heading-fill font-poppins-medium ">
                    {title}
                </h2>
                <Image className="-scale-x-[1] md:hidden" src="/left-divide.svg" width={60} height={8} />
            </div>
            <p className="mt-2">{brief}</p>
        </div>
    )
}
