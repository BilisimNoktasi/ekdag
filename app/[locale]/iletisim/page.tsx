"use client";
import Contact from "@/components/Contact";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getRequest } from "@/services/requestService";
import Preloader from "@/components/Preloader";
import { Address } from "@/types";

export default function DocsPage() {
  const [address, setAddress] = useState<Address[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getRequest({
      controller: "adreslers",
      populate: "*",
      filters: ["createdAt:desc"],
    })
      .then((res) => {
        setAddress(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Preloader />;
  return (
    <>
      <div className="flex justify-center custom-swiper deactive-mobile relative w-full h-[500px] md:aspect-[16/5]">
        <Image
          src="/images/iletisim.webp"
          className="rounded-b-3xl brightness-75"
          fill
          alt="ekdag-gozde-logo.jpg"
        />
      </div>

      <div className="flex justify-center active-mobile custom-swiper relative w-full h-[500px] md:aspect-[16/5]">
        <Image
          src="/images/blog-mob.webp"
          className="rounded-b-3xl brightness-75"
          fill
          alt="ekdag-gozde-logo.jpg"
        />
      </div>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="max-w-c-1280 w-full mx-auto">
          <div className="w-full px-4">
            <div className="blog-details shadow-three rounded-sm px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {address?.map((item, index) => (
                  <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-row">
                    <div className="flex flex-col">
                      <h4 className="font-semibold text-xl">
                        {item.adresBasligi}
                      </h4>
                      <p className="text-body-color dark:text-body-color-dark text-base mt-4">
                        {item.adresDetay}
                      </p>
                      <div className="border-t border-gray-300 mt-2 pt-2">
                        <p className="text-body-color dark:text-body-color-dark text-base">
                          {item?.telefon}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Contact />
          </div>
        </div>
      </section>
    </>
  );
}
