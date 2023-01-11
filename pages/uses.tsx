import Link from "next/link";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { getSingleBlogPostBySlug } from "../lib/notion";
import { FaLaptopCode } from "react-icons/fa";

export default function Uses({ post }) {
  return (
    <div className="py-16 lg:py-20">
      {/* <div>
        <img src="/assets/img/icon-uses.png" alt="icon uses" />
      </div> */}
      <h1 className="pt-5 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl inline-flex">
        <div><FaLaptopCode className="text-6xl text-yellow dark:text-yellow hover:text-secondary dark:hover:text-secondary transition-colors" /></div>
        <div className="pl-4">/uses</div>
      </h1>
      <div className="pr-2 pt-3">
        <span className="font-body text-xl font-light text-primary dark:text-white">
          Inspired by
          <Link href="https://uses.tech/" target="_blank" className="border-b border-green">
            <span
              className="font-medium text-green hover:text-secondary dark:text-green-light dark:hover:text-secondary pl-1 pr-1">Wes
              Bos</span>
            and his project,
            <span
              className="font-medium text-green hover:text-secondary dark:text-green-light dark:hover:text-secondary pl-1 pr-1">uses.tech</span>.
          </Link>
        </span>
      </div>

      <div className="prose prose max-w-none py-8 dark:prose-dark sm:py-12">
        <ReactMarkdown
          children={post.markdown}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        />
      </div>
    </div>
  );
}

export const getStaticProps = async ({ params }) => {
  const post = await getSingleBlogPostBySlug('uses-page');

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

