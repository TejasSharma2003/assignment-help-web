import Stats from "@/components/about/stats";
import Dialog from "@/components/dialog";
import SectionWrapper from "@/components/ui/section-wrapper";
import HightLight from "../hightlight";
import HeroMain from "../ui/hero-main";

export default function AboutBanner() {
    return (
        <HeroMain className=" bg-[url('/aboutus-hero.jpg')] bg-cover bg-no-repeat bg-center relative before:absolute before:top-0 before:left-0 before:bg-overlay before:w-full before:h-full">
            <div className="mx-auto max-w-screen-xl lg:flex lg:items-center relative z-10" >
                <div className="container text-center">
                    <h1 className="text-3xl md:text-[2.5rem] leading-tight md:leading-[3.4rem] font-poppins-bold sm:text-4xl text-white">
                        We are Assignment Wallah <br/>Empowering Academic <span className="relative inline-block"><HightLight className="absolute left-0 bottom-0 translate-y-4" />Excellence</span></h1>
                    <p className="text-white/70 mt-4 sm:text-xl/relaxed">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
                        tenetur fuga ducimus numquam ea!
                    </p>

                    <div className="mt-5">
                        <Dialog />
                    </div>
                </div>
            </div>
        </HeroMain>
    )
}
