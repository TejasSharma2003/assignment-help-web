import Image from "next/image"
export default function SectionHeading({ title, brief }) {
    return (
        <div className="flex flex-col items-center ">
            <div className="flex items-center">
                <Image src="/left-divide.svg" width={60} height={8}/>
                <h2 className="mx-3 text-3xl text-sub-heading-fill font-poppins-medium ">
                    {title}
                </h2>
                <Image className="-scale-x-[1]" src="/left-divide.svg" width={60} height={8}/>
            </div>
            <p>{brief}</p>
        </div>
    )
}
