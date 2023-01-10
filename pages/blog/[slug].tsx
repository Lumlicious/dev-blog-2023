import { getSingleBlogPostBySlug, getAllPublished } from "../../lib/notion";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { json } from "stream/consumers";
import Tag from "../../components/tag";
import Image from "next/image";

const CodeBlock = ({ language, codestring }) => {
  return (
    <SyntaxHighlighter language={language} style={vscDarkPlus} PreTag="div">
      {codestring}
    </SyntaxHighlighter>
  );
};

export default function Post({ post }) {
  return (
    <>
      <div className="pt-16 lg:pt-20">
        <div className='relative z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video mb-10'>
          <Image src={post.metadata.cover} fill alt={'Image'} />
        </div>
        <div className="border-b border-grey-lighter pb-8 sm:pb-12">
          {
            post.metadata.tags.map((tag, i) => (
              <Tag key={`${i}-tags`} name={tag.name} color={tag.color} />))
          }
          <h2
            className="block font-body text-3xl font-semibold leading-tight text-primary dark:text-white sm:text-4xl md:text-5xl">
            {post.metadata.title}
          </h2>
          <div className="flex items-center pt-5 sm:pt-8">
            <p className="pr-2 font-body font-light text-primary dark:text-white">
              {post.metadata.date}
            </p>
            <span className="vdark:text-white font-body text-grey">//</span>
            <p className="pl-2 font-body font-light text-primary dark:text-white">
              {`${Math.ceil(parseInt(post.metadata.wordCount) / 200)} min read`}
            </p>
          </div>
        </div>
      </div>
      <div className="prose prose max-w-none border-b border-grey-lighter py-8 dark:prose-dark sm:py-12">
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
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const post = await getSingleBlogPostBySlug(params.slug);

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const posts = await getAllPublished();
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return {
    paths,
    fallback: "blocking",
  };
};
