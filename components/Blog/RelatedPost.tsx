"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types";
import { useTranslations } from "next-intl";
import { getRequest } from "@/services/requestService";
import Preloader from "../Preloader";

const RelatedPost = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getRequest({
      controller: "blogs",
      sort: ["createdAt:desc"],
      pagination: { page: 1, pageSize: 3 },
      populate: "*",
    })
      .then((res) => {
        setBlogs(res.data);
      })
      .finally(() => {
        setLoading(!loading);
      });
  }, []);

  const t = useTranslations("ekdagBlog");

  if (loading) return <Preloader />;
  console.log(blogs);
  return (
    <>
      <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
        <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white text-center">
          {t("otherBlogs")}
        </h4>

        <div>
          {blogs.slice(0, 3).map((post, key) => (
            <div
              className="mb-6 flex flex-col flex-wrap gap-4 xl:flex-nowrap"
              key={key}
            >
              <div className="relative h-44 w-full">
                {post.blogResmi ? (
                  <Image
                    fill
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${post.blogResmi?.url}`}
                    alt="Blog"
                  />
                ) : (
                  "No image"
                )}
              </div>
              <h5 className="text-xl font-semibold text-gray-500 transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
                <Link href={`/blog/${post.slug}`}>
                  {" "}
                  {post.blogBaslik.slice(0, 40)}...
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
