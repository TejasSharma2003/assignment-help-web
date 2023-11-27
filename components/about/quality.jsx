import { cn } from "@/lib/utils";
import Dialog from "../dialog"
import SectionHeading from "../section-heading"
import SideLayout from "../side-layout";
import SectionWrapper from "../ui/section-wrapper"
import HightLight from "../hightlight";
import { History, Underline } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { LibraryBig } from 'lucide-react';
import { User } from "lucide-react";
import { BookOpenCheck } from 'lucide-react';
import { CircleDollarSign } from 'lucide-react';

export default function() {
    const title = "Quality Assignment Help with Value Added Guarantees"
    const iconClass = "w-8 h-8 stroke-secondary stroke-[1.4]"

    const qualities = [
        {
            icon: <History className={iconClass} />,
            title: 'Timely Delivery',
            brief: 'This is something i will add tomorrow.'

        },
        {
            icon: <GraduationCap className={iconClass} />,
            title: '24X7 support',
            brief: 'This is something i will add tomorrow.'
        },
        {
            icon: <User className={iconClass} />,
            title: 'Assistance',
            brief: 'This is something i will add tomorrow.'
        },
        {
            icon: <LibraryBig className={cn(iconClass, 'stroke-1')} />,
            title: 'Support',
            brief: 'This is something i will add tomorrow.'
        },
        {
            icon: <BookOpenCheck className={cn(iconClass, 'w-7 h-7')} />,
            title: 'Authenticity',
            brief: 'This is something i will add tomorrow.'
        },
        {
            icon: <CircleDollarSign className={cn(iconClass)} />,
            title: 'Affordable',
            brief: 'This is something i will add tomorrow.'
        },
    ]

    return <SectionWrapper>
        <SectionHeading title={title} />
        <div className="container px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="flex flex-col justify-center mx-auto md:text-left lg:mx-0 text-left " >
                    <div className="text-center">
                        <h2 className="text-2xl text-black">Find your<span className="relative"> carrer <HightLight className="absolute bottom-0 left-0 translate-y-2" /> </span> path</h2>
                        <p className="my-4 text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vero
                            aliquid sint distinctio iure ipsum cupiditate? Quis, odit assumenda?
                            Deleniti quasi inventore, libero reiciendis minima aliquid tempora.
                            Obcaecati, autem.
                        </p>
                        <Dialog />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 sm:gap-8 sm:grid-cols-3 mt-10">
                    {qualities.map((quality, index) => {
                        return <div className="flex flex-col items-center rounded-xl border  p-4 shadow-light hover:-translate-y-2 transition-transform duration-300 focus:outline-none focus:ring" >
                            <span className=" inline-block rounded-lg bg-gray-50 p-3 ">
                                {quality.icon}
                            </span>
                            <h2 className="my-2 text-lg font-bold text-center">{quality.title}</h2>
                            <p className="text-center text-base self-baseline flex-1">{quality.brief}</p>
                        </div>
                    })}
                </div>
        </div>
    </SectionWrapper>
}