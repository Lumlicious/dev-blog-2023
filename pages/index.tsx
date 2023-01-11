import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { getAllPublished } from "../lib/notion";
import Image from "next/image";
import Post from "../components/post";
import { BsArrowRight } from "react-icons/bs";
import { FaBook, FaRegNewspaper } from "react-icons/fa";

export default function Home({ posts }) {
  if (!posts) return <h1>No posts</h1>;
  return (
    <>
      <div className="border-b border-grey-lighter py-16 lg:py-20 md:flex">
        <div className="relative h-64 w-52 mx-auto">
          <Image src="/img/NewPixelMeFull.png" alt="author" fill />
        </div>
        <div className="self-end">
          <h1 className="pt-3 font-body text-4xl font-semibold text-primary dark:text-white md:text-5xl lg:text-6xl">
            Hi, I'm Chad Lumley.
          </h1>
          <p className="pt-3 font-body text-xl font-light text-primary dark:text-white">
            A senior front end engineer consultant enjoying life in Dallas, Texas.
          </p>
        </div>
      </div>

      {/* <div className="border-b border-grey-lighter py-16 lg:py-20">
        <div className="flex items-center pb-6">
          <FaBook className="text-4xl text-yellow dark:text-white" />
          <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
            My Story
          </h3>
        </div>
        <div>
          <p className="font-body font-light text-primary dark:text-white">
            I've been in software engineering for over a decade, but focused on the
            front end for the past 8 years. I've been a consultant at 8+ large, enterprise companies

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
      </div> */}

      <div className="py-16 lg:py-20">
        <div className="flex items-center pb-6">
          <FaRegNewspaper className="text-4xl text-yellow dark:text-white" />
          <h3 className="ml-3 font-body text-2xl font-semibold text-primary dark:text-white">
            Recent Posts
          </h3>
          <a href="/blog"
            className="flex items-center pl-10 font-body italic text-green transition-colors hover:text-secondary dark:text-green-light dark:hover:text-secondary">
            All posts
            <BsArrowRight className="ml-3" alt="arrow right" />
          </a>
        </div>
        <div className="">
          {posts.slice(0, 3).map((post, i) => (
            <Post key={`${i}-recent-posts`} post={post} />
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
