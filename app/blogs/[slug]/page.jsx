import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import Breadcrumbs from "@/components/ui/breadcrumbs"
import { getBlogContent, getBlogMetadata } from "@/lib/content"
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

export const generateStaticParams = async () => {
    const blogs = getBlogMetadata();
    return blogs.map((blog) => ({
        slug: blog.slug,
    }));
};

export default function BlogDetailPage({ params }) {
    const blogSlug = params.slug;
    const blogContent = getBlogContent(blogSlug);
    const { title, date, image } = blogContent.data;
    const authors = [];
    return (
        <>
            <div className="container relative max-w-4xl pt-32 lg:pt-32">
                <Breadcrumbs
                    breadcrumbs={[
                        { label: 'home', href: '/' },
                        { label: 'blogs', href: '/blogs', },
                        { label: blogSlug, href: `/${blogSlug}`, active: true },
                    ]}
                />
                <div>
                    {date && (
                        <time
                            dateTime={date}
                            className="block text-lg text-muted-foreground"
                        >
                            Published on {formatDate(date)}
                        </time>
                    )}
                    <h1 className="font-semibold text-secondary-dark mt-2 inline-block text-3xl leading-tight lg:text-4xl">
                        {title}
                    </h1>
                    {authors?.length ? (
                        <div className="mt-4 flex space-x-4">
                            {authors.map((author) =>
                                author ? (
                                    <Link
                                        key={author._id}
                                        href={`https://twitter.com/${author.twitter}`}
                                        className="flex items-center space-x-2 text-sm"
                                    >
                                        <Image
                                            src={author.avatar}
                                            alt={author.title}
                                            width={42}
                                            height={42}
                                            className="rounded-full bg-white"
                                        />
                                        <div className="flex-1 text-left leading-tight">
                                            <p className="font-medium">{author.title}</p>
                                            <p className="text-[12px] text-muted-foreground">
                                                @{author.twitter}
                                            </p>
                                        </div>
                                    </Link>
                                ) : null
                            )}
                        </div>
                    ) : null}
                </div>
                {image && (
                    <Image
                        src={image}
                        alt={title}
                        width={720}
                        height={405}
                        className="my-8 w-full rounded-md border bg-muted transition-colors"
                        priority
                    />
                )}
                <article className="prose max-w-none">
                    <Markdown>{blogContent.content}</Markdown>
                </article>

                <hr className="mt-12" />
                <div className="flex justify-center py-6 lg:py-10">
                    <Button className={cn(buttonVariants({ variant: "outline" }), ' text-black/80 text-lg')} asChild>
                        <Link href="/blogs" >
                            See all blogs
                        </Link>
                    </Button>
                </div>
            </div>
        </>
    )
}
