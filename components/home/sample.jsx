import Link from "next/link";
import SectionHeading from "../section-heading";
import SectionWrapper from "../ui/section-wrapper";
import Ellipse from "../ui/ellipse";

export default function Sample({ featuredBlogs }) {
    const title = "Some of our Sample";
    const brief = "We are constantly giving our best to make you informative"
    return (
        <SectionWrapper>
            <SectionHeading title={title} brief={brief} />
            <div className="max-w-4xl mx-auto mt-16">
                {featuredBlogs.map((blog, index) => {
                    return <div className="last:mb-0 mb-10 rounded-lg cursor-pointer py-5 px-4 border border-muted transition-colors duration-300 ">
                        <Link href="#">
                            <h2 className="font-poppins-light text-black text-2xl sm:text-[1.4rem] sm:leading-tight mb-2">{blog.title}</h2>
                            <p>{blog.brief}</p>
                            <div className="text-base flex flex-col mt-3">
                                <span>Published on <span>{blog.publishedAt}</span></span>
                                <span><span>{blog.comments}</span> Comments</span>
                            </div>
                        </Link>
                    </div>

                })}
            </div>
        </SectionWrapper >
    )

}
