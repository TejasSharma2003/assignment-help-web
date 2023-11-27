import Image from "next/image";
import SectionHeading from "@/components/section-heading";
import ExpertsBanner from "@/components/experts/experts-banner";

export default function ExpertsPage() {
    return (
        <>
            <ExpertsBanner/>
            {/* <div className="flex flex-col items-center"> */}
            {/*     <SectionHeading title="Your Trusted Academic Support Partners" brief="Unlocking Academic Success Anytime, Anywhere with Our Dedicated Assignment Help Team" /> */}
            {/*     <Image src="/experts.png" width={130} height={80} className="mt-5"/> */}
            {/* </div> */}
        </>
    )
}
