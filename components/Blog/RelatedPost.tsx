'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types";
import client, { urlFor } from "@/sanity/lib/client";
import { useTranslations } from "next-intl";

const RelatedPost = () => {

  const [blogs,setBlogs] = useState<Blog[]>([])

  useEffect(()=> {
    const getUrl = async () => {
      const data = await client.fetch(`
        *[_type == "blog"]{
          blogTitle,
          subTitle,
          slug,
          blogImage,
          blogDescription,
          createdAt
        }`);
        setBlogs(data);
    };
    getUrl();
  },[])
const t =useTranslations("ekdagBlog")
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
         {t("otherBlogs")}
        </h4>

        <div>
          {blogs.slice(0, 3).map((post, key) => (
            <div
              className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
              key={key}
            >
              <div className="max-w-45 relative h-18 w-45">
                {post.blogImage ? (
                  <Image fill src={urlFor(post.blogImage).url()} alt="Blog" />
                ) : (
                  "No image"
                )}
              </div>
              <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <Link href={`/blog/${post.slug.current}`}>
                  {" "}
                  {post.blogTitle.slice(0, 40)}...
                </Link>
              </h5>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedPost;
