import About from "@/components/about/intro";
import AboutBanner from "@/components/about/about-banner";
import Quality from "@/components/about/quality";
import FullTestomonial from "@/components/ui/full-testomonial";
import Cta from "@/components/home/call-to-action";

export default function AboutFunction() {
    return (
        <>
            <AboutBanner />
            <About />
            <Quality />
            <Cta/>
            <FullTestomonial/>
        </>
    )
}
