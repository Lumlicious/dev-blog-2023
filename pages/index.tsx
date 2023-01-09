import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { getAllPublished } from "../lib/notion";
import Image from "next/image";

export default function Home({ posts }) {
  if (!posts) return <h1>No posts</h1>;
  return (
    <>
      <div className="border-b border-grey-lighter py-16 lg:py-20">
        <div className="relative h-16 w-16">
          <Image src="/img/author.png" className="h-16 w-16" alt="author" fill />
        </div>
        <h1 className="pt-3 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
          Hi, I’m Chad Lumley.
        </h1>
        <p className="pt-3 font-body text-xl font-light text-primary dark:text-white">
          A senior front end engineer consultant enjoying life in Dallas, Texas.
        </p>
        {/* <a href="/"
          className="mt-12 block bg-secondary px-10 py-4 text-center font-body text-xl font-semibold text-white transition-colors hover:bg-green sm:inline-block sm:text-left sm:text-2xl">
          Say Hello!
        </a> */}
      </div>

      <div className="border-b border-grey-lighter py-16 lg:py-20">
        <div className="flex items-center pb-6">
          <img src="/assets/img/icon-story.png" alt="icon story" />
          <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
            My Story
          </h3>
        </div>
        <div>
          <p className="font-body font-light text-primary dark:text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
            mattis molestie. Et leo duis ut diam. Sit amet tellus cras adipiscing
            enim eu turpis. Adipiscing at in tellus integer feugiat.
            <br />
            <br />
            Maecenas accumsan lacus vel facilisis. Eget egestas purus viverra
            accumsan in nisl nisi scelerisque eu. Non tellus orci ac auctor augue
            mauris augue neque gravida. Auctor augue mauris augue neque gravida in
            fermentum et sollicitudin. Tempus urna et pharetra pharetra massa massa
            ultricies mi quis. Amet mauris commodo quis imperdiet massa. Integer
            vitae justo eget magna fermentum iaculis eu non.
          </p>
        </div>
      </div>

      <div className="py-16 lg:py-20">
        <div className="flex items-center pb-6">
          <img src="/assets/img/icon-story.png" alt="icon story" />
          <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
            Recent Posts
          </h3>
          <a href="/blog"
            className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary">
            All posts
            <img src="/assets/img/long-arrow-right.png" className="ml-3" alt="arrow right" />
          </a>
        </div>
        <div className="">
          {posts.map((post, index) => (
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
                  4 min read
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
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
