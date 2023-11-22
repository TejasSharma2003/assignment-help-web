import Image from "next/image"

import BookOpenIcon from "../icons/book-open"
import PencilIcon from "../icons/pencil"
import { CodeIcon } from "lucide-react"
import { GanttChartIcon } from "lucide-react"
import SideLayout from "../side-layout"
import SectionHeading from "../section-heading"
import HightLight from "../hightlight"
import SectionWrapper from "../ui/section-wrapper"
import Ellipse from "../ui/ellipse"

const items = [
    {
        icon: <BookOpenIcon className="w-6 h-6" />,
        content: 'Research design, which includes creating a conceptual framework or model'
    },
    {
        icon: <CodeIcon className="w-6 h-6 stroke-[1.6] stroke-secondary" />,
        content: 'Data analysis utilizing SPSS, STATA, R, Python, Matlab, SAS etc.'
    },
    {
        icon: <GanttChartIcon className="w-6 h-6 stroke-[1.6] stroke-secondary" />,
        content: 'Use of Matlab Simulink, NS2, NS3, ANSYS, Labview, CST, HFSS, and Weka in implementation'
    },
    {
        icon: <PencilIcon className="w-6 h-6" />,
        content: 'Chapter drafting, which includes arranging chapters with headers and subheadings'
    }
]

const Features = ({ icon, content }) => {
    return (
        <div className="py-6 px-5  rounded-lg bg-white shadow-light hover:-translate-y-[4px] transition-transform duration-300">
            {icon}
            <p className="mt-5 text-lg">
                {content}
            </p>
        </div>
    )
}
export default function Process() {
    const title = "Our Approach to deliver a perfect solution";
    const brief = "Beat The Stress By Using Thesis Writing Help For Your Coursework"

    return (
        <SectionWrapper>
            <SectionHeading title={title} brief={brief} />
            <SideLayout>
                <div className="flex md:justify-center items-center group">
                    <div className="tiny:w-4/5 relative before:absolute before:top-0 before:left-0 before:h-full before:w-full before:border-2 before:border-secondary before:rounded-lg  before:-z-10 ">
                        <Image
                            src="/working.jpg"
                            width={550}
                            height={300}
                            alt="girl working"
                            className="-translate-x-3 rounded-lg  -translate-y-3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"
                        />
                    </div>
                </div>
                <div className="">
                    <h3 className="relative text-2xl text-black ">
                        We have a process.
                        <HightLight className="absolute bottom-0 left-0 translate-y-8" />
                    </h3>
                    <div className="mt-14 grid  gap-5 grid-rows-2 grid-cols-2 tiny:grid-cols-1">
                        {items.map((item, index) => {
                            return <Features key={index} icon={item.icon} content={item.content} />
                        })}
                    </div>
                </div>
            </SideLayout>
        </SectionWrapper>
    )
}
