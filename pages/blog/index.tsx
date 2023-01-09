import Link from "next/link";
import Post from "../../components/post";
import { getAllPublished } from "../../lib/notion";

export default function Blog({ posts }) {
    return (
        <div className="container mx-auto">
            <div className="py-16 lg:py-20">
                <div>
                    {/* <img src="/assets/img/icon-blog.png" alt="icon envelope" /> */}
                </div>

                <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
                    Blog
                </h1>

                <div className="pt-3 sm:w-3/4">
                    <p className="font-body text-xl font-light text-primary dark:text-white">
                        Articles, tutorials, snippets, rants, and everything else. Subscribe for
                        updates as they happen.
                    </p>
                </div>


                <div className="pt-8 lg:pt-12">
                    {posts.map((post) => (
                        <Post post={post} />
                    ))}
                </div>

                {/* TODO: Add pagination */}
                {/* <div className="flex pt-8 lg:pt-16">
                    <span
                        className="cursor-pointer border-2 border-secondary px-3 py-1 font-body font-medium text-secondary">1</span>
                    <span
                        className="ml-3 cursor-pointer border-2 border-primary px-3 py-1 font-body font-medium text-primary transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-white dark:hover:border-secondary dark:hover:text-secondary">2</span>
                    <span
                        className="ml-3 cursor-pointer border-2 border-primary px-3 py-1 font-body font-medium text-primary transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-white dark:hover:border-secondary dark:hover:text-secondary">3</span>
                    <span
                        className="group ml-3 flex cursor-pointer items-center border-2 border-primary px-3 py-1 font-body font-medium text-primary transition-colors hover:border-secondary hover:text-secondary dark:border-green-light dark:text-white dark:hover:border-secondary dark:hover:text-secondary">Next
                        <i
                            className="bx bx-right-arrow-alt ml-1 text-primary transition-colors group-hover:text-secondary dark:text-white"></i></span>
                </div> */}
            </div>
        </div>
    )
}
export const getStaticProps = async () => {
    const data = await getAllPublished();
    return {
        props: {
            posts: data,
        },
        revalidate: 60,
    };
};