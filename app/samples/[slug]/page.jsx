import { cn } from "@/lib/utils";
import { getSampleContent, getSampleMetadata } from "@/lib/content"
import Breadcrumbs from "@/components/ui/breadcrumbs";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";


export const generateStaticParams = async () => {
    const samples = getSampleMetadata();
    return samples.map((sample) => ({
        slug: sample.slug,
    }));
};
export default function DetailSamplePage({ params }) {
    const sampleSlug = params.slug;
    const sample = getSampleContent(sampleSlug);
    const { title, topic, downloads, pages, words, views } = sample.data;

    return (
        <div className="container relative max-w-4xl pt-5">
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'home', href: '/' },
                    { label: 'samples', href: '/samples', },
                    { label: sampleSlug, href: `/${sampleSlug}`, active: true },
                ]}
            />
            <div>
                <h1 className="font-semibold text-secondary-dark mt-2 inline-block text-3xl leading-tight lg:text-4xl">
                    {title}
                </h1>
            </div>
            <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                <div className="flex items-center flex-wrap gap-2 text-gray-500">
                    <div className="flex items-center gap-1">
                        <p className="text-xs font-medium">Views:</p>
                        <span className="text-xs font-semibold">{views}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="text-xs font-medium">Downloads:</p>
                        <span className="text-xs font-semibold">{downloads}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="text-xs font-medium">Pages</p>
                        <span className="text-xs font-semibold">{pages}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="text-xs font-medium">Words:</p>
                        <span className="text-xs font-semibold">{words}</span>
                    </div>
                </div>
            </div>
            <article className="prose max-w-none">
                <Markdown>{sample.content}</Markdown>
            </article>
            <div className="flex justify-center py-6 lg:py-10">
                <Button className={cn(buttonVariants({ variant: "outline" }), ' text-black/80 text-lg')} asChild>
                    <Link href="/samples" >
                        See all samples
                    </Link>
                </Button>
            </div>
        </div>
    )
}
