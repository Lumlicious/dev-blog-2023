import Link from "next/link";

export default function Post({ post }) {
    return (
        <div className="border-b border-grey-lighter pb-8 pt-8">
            <span
                className="mb-4 inline-block rounded-full bg-green-light px-2 py-1 font-body text-sm text-green">category</span>
            <Link href={`/blog/${post.slug}`}
                className="block font-body text-lg font-semibold text-primary transition-colors hover:text-green dark:text-white dark:hover:text-secondary">{post.title}</Link>
            <p className="font-body font-light text-primary dark:text-white pt-2">{post.description}</p>
            <div className="flex items-center pt-4">
                <p className="pr-2 font-body font-light text-primary dark:text-white">
                    {post.date}
                </p>
                <span className="font-body text-grey dark:text-white">//</span>
                <p className="pl-2 font-body font-light text-primary dark:text-white">
                    {`${Math.ceil(parseInt(post.wordCount) / 200)} min read`}
                </p>
            </div>
        </div>
    )
}