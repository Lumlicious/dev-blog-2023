import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { getAllPublished } from "../lib/notion";

export default function Home({ posts }) {
  if (!posts) return <h1>No posts</h1>;
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <div className="w-full xl:w-4/6">
        <div className="flex flex-col space-y-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img
              src="https://images.unsplash.com/photo-1672681373273-64cc9c122df3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="col-span-1 h-40 w-full bg-center object-cover"
              alt="Kutty"
              loading="lazy"
            />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">
                April 16, 2020
              </p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-purple-700">
                  Process Documents Using Artificial Intelligence For RPA Bots
                </a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Earlier RPA bots used to have some limitations like it would
                take structured data for processing from excel, database, on
                these data. But with advancements in technology like OCR
                (Optical Character Recognition) and Machine Learning, RPA bots
                are capable of extracting these data …
              </p>
              <a href="#" className="btn btn-light btn-sm">
                Read More
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1664273237592-591fba2f7a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOXx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60"
              className="col-span-1 h-40 w-full bg-center object-cover"
              alt="Kutty"
              loading="lazy"
            />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">
                April 16, 2020
              </p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-purple-700">
                  Implement Dark Mode in Your Android App
                </a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Are you curious to implement the Dark Mode in Android
                Application? Here’s the perfect guideline to attain the Dark
                Mode in Android Application. Don’t waste your time; just
                implement and enjoy Dark Mode.
              </p>
              <a href="#" className="btn btn-light btn-sm">
                Read More
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img
              src="/brand/og.png"
              className="col-span-1 h-40 w-full bg-center object-cover"
              alt="Kutty"
              loading="lazy"
            />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">
                April 16, 2020
              </p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-purple-700">
                  Why is Mental Health one of the Important Issues to Address?
                </a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Mental health was one of the under spoken topics before this
                lockdown. After sitting at home for about six months I realized
                that this is one of the important issues to address not only in
                the work sector but also in daily living.
              </p>
              <a href="#" className="btn btn-light btn-sm">
                Read More
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img
              src="/brand/og-white.png"
              className="col-span-1 h-40 w-full bg-center object-cover"
              alt="Kutty"
              loading="lazy"
            />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">
                April 16, 2020
              </p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-purple-700">
                  Pattern Matching In Elixir
                </a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Pattern matching is a great way to write idiomatic functional
                code. It’s a powerful tenant of functional programming that
                makes it a joy to write conditional statements. If you don’t
                want your code to be peppered with deeply nested statements or
                multiple variations of similar business logic, use pattern
                matching!
              </p>
              <a href="#" className="btn btn-light btn-sm">
                Read More
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img
              src="/brand/og.png"
              className="col-span-1 h-40 w-full bg-center object-cover"
              alt="Kutty"
              loading="lazy"
            />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">
                April 16, 2020
              </p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-purple-700">
                  3 things you should change during your focus group interview
                </a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                We changed three things about our feedback sessions, and it
                changed everything about running customer feedback sessions.
              </p>
              <a href="#" className="btn btn-light btn-sm">
                Read More
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <img
              src="/brand/og-white.png"
              className="col-span-1 h-40 w-full bg-center object-cover"
              alt="Kutty"
              loading="lazy"
            />
            <div className="col-span-1 md:col-span-3">
              <p className="mb-2 -mt-1 text-sm font-normal text-gray-500">
                April 16, 2020
              </p>
              <h2 className="mb-2 text-xl font-extrabold leading-snug text-gray-800">
                <a href="#" className="text-gray-900 hover:text-purple-700">
                  Using Webpack with React Typescript
                </a>
              </h2>
              <p className="mb-3 text-sm font-normal text-gray-500">
                Ever wondered if there is a way to just tie up all your code
                into one single module for easy usage. If so, in this article I
                will show you how to bundle all your code into a single
                javascript module that you can easily use in any other project.
              </p>
              <a href="#" className="btn btn-light btn-sm">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-200 pt-10">
          <a href="#" className="btn btn-light btn-lg w-full md:w-auto">
            Load More
          </a>
        </div>
      </div>
    </section>
    // <section classNameName="mx-auto max-w-3xl">
    //   <ul>
    //     {posts.map((post, index) => (
    //       // <section key={index}>
    //       //   <div>
    //       //     <h2>
    //       //       <Link href={`/posts/${post.slug}`}>{post.title}</Link>
    //       //     </h2>
    //       //     <div>{post.date}</div>
    //       //   </div>
    //       //   <p>{post.description}</p>
    //       // </section>
    //       <li key={index}>
    //         <article>
    //           <dl>
    //             <dt classNameName="sr-only">Published on</dt>
    //             <dd classNameName="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
    //               <time>{posts[0].date}</time>
    //             </dd>
    //           </dl>
    //           <div classNameName="space-y-3 xl:col-span-3">
    //             <div>
    //               <h3 classNameName="text-2xl font-bold leading-8 tracking-tight">
    //                 <Link
    //                   href={`/blog/${post.slug}`}
    //                   classNameName="text-gray-900 dark:text-gray-100"
    //                 >
    //                   {post.title}
    //                 </Link>
    //               </h3>
    //               <div classNameName="flex flex-wrap">{post.tags.join(", ")}</div>
    //             </div>
    //             <div classNameName="prose max-w-none text-gray-500 dark:text-gray-400">
    //               {post.description}
    //             </div>
    //           </div>
    //         </article>
    //       </li>
    //     ))}
    //   </ul>
    // </section>
  );
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
