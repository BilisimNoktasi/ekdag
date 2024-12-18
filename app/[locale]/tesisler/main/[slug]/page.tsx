"use client";
import MarkdownRenderer from "@/components/MarkDownRenderer";
import Preloader from "@/components/Preloader";
import { getRequest } from "@/services/requestService";
import { FacilityDetail } from "@/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const TesisDetailMainPage = () => {
  const params = useParams();
  const [facilityData, setFacilityData] = useState<FacilityDetail>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getRequest({
      controller: "anasayfa-tesislers",
      filters: { slug: params?.slug },
      populate: "*",
      locale: `${params?.locale === "tr" ? "tr-TR" : "en"}`,
    })
      .then((res) => {
        setFacilityData(res.data[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params]);

  if (loading) return <Preloader />;

  return (
    <div className="max-w-c-1390 w-full mx-auto">
      <section className="pb-16 md:pb-20 lg:pb-24">
        <div className="w-full px-4">
          {/* <div className="flex w-full items-center justify-center">
                    <img className="logo-sm py-12" src="/ekdag-ekmek-logo-800.png" />
                  </div> */}
          <div className="blog-details mt-18 blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
            <h1>{facilityData?.tesisAdi}</h1>

            <div className="flex w-full items-center justify-center my-12">
              {facilityData?.tesisCardImage ? (
                <img
                  className="w-96 h-96"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${facilityData?.tesisCardImage?.url}`}
                />
              ) : null}
            </div>

            <MarkdownRenderer content={facilityData?.tesisDetail} />

            <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-y-6 gap-x-6">
              {facilityData?.tesisImages?.map((item, index) => (
                <img
                  key={index}
                  width={1000}
                  height={500}
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.url}`}
                  alt="/images/image.png"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TesisDetailMainPage;
