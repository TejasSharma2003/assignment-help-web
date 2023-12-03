import SectionHeading from "../section-heading";
import SideLayout from "../side-layout";
import SectionWrapper from "../ui/section-wrapper";
import Stats from "./stats";

export default function About() {
    const title = "Why should you trust us?"
    const brief = "A brief introduction of assignment wallah and there achievements"
    return (
        <SectionWrapper>
            <SectionHeading title={title} brief={brief} />
            <SideLayout>
                <Stats />
                <div className="mt-5 min-[900px]:mt-0">
                    <div>
                        <h3 className="text-2xl text-black">We are the force of truth.</h3>
                        <p> Assignment Wallah is an online educational research platform that connects students with experienced researchers who can assist them in high-quality projects that will help them score well. Our team of experts creates non-plagiarized content for study papers and online classes, which helps students enhance their knowledge.</p>
                    </div>
                    <div className="mt-10">
                        <h3 className="text-2xl text-black">We are concernd about you</h3>
                        <p>The personal life of students is a very important part of their education. Students need to be able to learn in a stress-free environment where they can focus on their studies without worrying about what is happening at home. Student life is important to academic achievement. The study environment should be one in which students can focus on their studies with fewer outside distractions.</p>
                    </div>
                </div>
            </SideLayout>
        </SectionWrapper>
    )
}
