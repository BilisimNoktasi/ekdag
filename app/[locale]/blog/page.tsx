"use client";
import BlogItem from "@/components/Blog/BlogItem";
import Preloader from "@/components/Preloader";
import client from "@/sanity/lib/client";
import { getRequest } from "@/services/requestService";
import { Blog } from "@/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading,setLoading] = useState<boolean>(true)

  useEffect(() => {
    getRequest({
      controller: "blogs",
      sort: ["createdAt"],
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
  
  if(loading) return <Preloader />

  return (
    <>
      <div className="flex justify-center custom-swiper deactive-mobile relative w-full h-[500px] md:aspect-[16/5]">
        <Image src="/images/BLOG.webp" fill alt="ekdag-gozde-logo.jpg" />
      </div>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section>
        <div className="mx-auto my-24 max-w-c-1280 sm:mt-24 px-4 md:px-8 xl:px-0">
          <h1 className="text-2xl font-bold text-center mb-12">{t("ekdagBlog")}</h1>
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {blogs.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
