"use client";
import Preloader from "@/components/Preloader";
import client, { urlFor } from "@/sanity/lib/client";
import { getRequest } from "@/services/requestService";
import { NewsDetail } from "@/types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function NewsDetailPage() {
  const params = useParams();
  const [newsData, setNewsData] = useState<NewsDetail>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getRequest({
      controller: "haberlers",
      filters: { slug: params?.slug },
      populate: "*",
      locale: `${params?.locale === "tr" ? "tr-TR" : "en"}`,
    })
      .then((res) => {
        setNewsData(res.data[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params?.slug]);

  if (loading) return <Preloader />;
  
  return (
    <>
      <section className="pb-20 lg:pb-25 xl:pb-30 pt-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div
            className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative w-full h-max">
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${newsData?.haberResmi?.url}`}
                      alt="Kobe Steel plant that supplied"
                      width={500}
                      height={500}
                      layout="responsive"
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  {newsData?.haberBaslik}
                </h2>

                <div className="blog-details">
                <BlocksRenderer content={newsData?.haberDetayi as []} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
