'use client'
import React, { useEffect, useState } from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import { getRequest } from "@/services/requestService";
import type { Blog } from "@/types";

const Blog = () => {
  const [loading, setLoading] = useState<boolean>();
  const [blogs,setBlogs] = useState<Blog[]>();

  useEffect(() => {
    getRequest({
      controller: "blogs",
      sort: ['createdAt'],
      pagination: { page: 1, pageSize: 3 },
      populate: "*",
    })
      .then((res) => {setBlogs(res.data)})
      .finally(() => {
        setLoading(!loading);
      });
  }, []);

  return (
    <section className="py-10 lg:py-10 xl:py-10 mt-16">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `EKDAĞ BLOG`,
              subtitle: ``,
              description: ``,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {blogs?.map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
