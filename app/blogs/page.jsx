import fs from 'fs';
import { cn } from "@/lib/utils";
import HeroMain from "@/components/ui/hero-main";
import Blogs from "@/components/blogs/blogs";
import SeachInput from "@/components/seach-input";
import SectionHeading from "@/components/section-heading";
import SectionWrapper from "@/components/ui/section-wrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Breadcrumbs from "@/components/ui/breadcrumbs";
import { getBlogMetadata } from '@/lib/content';

export default function BlogsPage() {
    const previewBlogs = getBlogMetadata();

    return <>
        <HeroMain className="relative bg-secondary-dark md:pt-32 md:pb-16 ">
            <svg width="191" height="208" viewBox="0 0 191 208" className="absolute right-0 bottom-0" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="173" cy="178.5" rx="173" ry="178.5" fill="url(#paint0_linear)"></ellipse><defs><linearGradient id="paint0_linear" x1="-3.27832e-05" y1="87.2457" x2="255.501" y2="88.5747" gradientUnits="userSpaceOnUse"><stop stopColor="white" stopOpacity="0.07"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient></defs></svg>
            <div className="flex flex-col items-center relative container text-center z-10">
                <h1 className="mb-5 text-3xl md:text-[2.5rem] leading-tight md:leading-[3.4rem] font-poppins-bold sm:text-4xl text-white">Assignment Wallah Blogs</h1>
                <SeachInput />
            </div>
        </HeroMain>
        <SectionWrapper>
            <SectionHeading title="Popular Blogs" brief="Explore a plethora of insightful blogs brought to you by Assignment Wallah" />
            <div className="mt-14 max-w-7xl mx-auto px-4">
                <div className="mt-10">
                    <Breadcrumbs
                        breadcrumbs={[
                            { label: 'home', href: '/' },
                            { label: 'blogs', href: '/blogs', active: true },
                        ]}
                    />
                </div>
                <Blogs previewBlogs={previewBlogs} className="grid lg:grid-cols-2 gap-10 " />
            </div>
            <div className="flex justify-center mt-10 md:mt-20">
                <Button className={cn(buttonVariants({ variant: 'outline' }),' uppercase text-muted-foreground')}>show more</Button>
            </div>
        </SectionWrapper>
    </>

}
