'use client'
import React, { useEffect, useState } from "react";
import { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { getRequest } from "@/services/requestService";
import Preloader from "@/components/Preloader";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useParams } from "next/navigation";

export default function Page() {
  const params = useParams()
  const [lasses,setLasses] = useState();
  const [loading,setLoading] = useState<boolean>(true);

  useEffect(() => {
      getRequest({
        controller: "kiralamalars",
        populate: "*",
        locale:`${params?.locale === 'tr' ? 'tr-TR':'en'}`,
      })
        .then((res) => {
          setLasses(res.data[0].kiralamalar);
        })
        .finally(() => {
          setLoading(!loading);
        });
    }, []);

  const t = useTranslations("leases");

  if(loading) return <Preloader />
    console.log(lasses)

  return (
    <>
      <div className="flex justify-center custom-swiper deactive-mobile relative w-full h-[500px] md:aspect-[16/5]">
        <Image src="/images/kiralamalar.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>

      <div className="flex justify-center active-mobile custom-swiper relative w-full h-[500px] md:aspect-[16/5]">
        <Image src="/images/kiralamaler_mob.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="max-w-c-1390 w-full mx-auto">
            <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
             <BlocksRenderer content={lasses} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
