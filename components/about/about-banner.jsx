import Stats from "@/components/about/stats";
import Dialog from "@/components/dialog";
import SectionWrapper from "@/components/ui/section-wrapper";

export default function AboutBanner() {
    return <SectionWrapper className="">
        <div
            className="mx-auto max-w-screen-xl px-4 pb-20 lg:flex lg:items-center"
        >
            <div className="container text-center">
                <h1 className="text-3xl font-extrabold sm:text-5xl text-secondary">
                    We are Assignment Wallah.<strong className="font-extrabold text-black sm:block">Empowering Academic Excellence.</strong> </h1>

                <p className="mt-4 sm:text-xl/relaxed">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                    tenetur fuga ducimus numquam ea!
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <Dialog />
                </div>
            </div>
        </div>
    </SectionWrapper>
}
