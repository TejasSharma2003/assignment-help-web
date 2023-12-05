import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "../ui/button"
import { formatDate } from "../../lib/utils"
import { dummyBlogs } from "../../data/dummy-blogs"

function BlogCard({ title, brief, date, slug, image }) {
    return (
        <article className="border relative flex bg-white transition duration-300 hover:shadow-light  rounded-lg overflow-hidden">
            <div className="hidden sm:block sm:basis-56">
                <img
                    alt="Image"
                    src={image}
                    className="aspect-square h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-1 flex-col justify-between">
                <div className="sm:border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                    <h3 className="font-semibold text-black/70 tracking-wide">
                        {title}
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-muted-foreground">
                        {brief}
                    </p>
                </div>
                <div className="text-right p-4 sm:p-6">
                    <p className="text-sm text-muted-foreground">
                        Published on {formatDate(date)}
                    </p>
                </div>
            </div>
            <Link href={`/blogs/${slug}`} className="absolute inset-0">
                <span className="sr-only">Read Blog</span>
            </Link>
        </article >
    )
}

export default function Blogs({ previewBlogs, className }) {
    return (
        <div className={cn(className)}>
            {previewBlogs.map((blog, index) => {
                return <BlogCard key={blog.slug} {...blog} />
            })}
        </div>
    )

}

