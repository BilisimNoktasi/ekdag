"use client";
import { GalleryType } from "@/types";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import React, { useEffect, useState } from "react";
import { getRequest } from "@/services/requestService";
import Preloader from "@/components/Preloader";

export default function GalleryPage() {
  const [gallery, setGallery] = useState<GalleryType[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const t = useTranslations("HeaderLink");
  
  useEffect(() => {
    getRequest({
      controller: "galeris",
      populate: "*",
    })
      .then((res) => {
        setGallery(res.data);
      })
      .finally(() => {
        setLoading(!loading);
      });
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="mt-24">
      <div className="flex items-center justify-center">
        <h1 className="text-indigo-600 text-3xl font-bold">{t("gallery")}</h1>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 my-28 max-w-c-1280 w-full mx-auto">
        {gallery?.map((item, index) => (
          <div key={index} className="relative group w-full h-60 rounded-lg">
            <img
              className="w-full rounded-md brightness-95 h-60 transition-transform hover:cursor-pointer duration-300 group-hover:scale-105"
              src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.kartGorseli?.url}`}
              alt={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.kartGorseli?.url}`}
            />
            <div className="bg-opacity-60 rounded-b-lg hover:bg-opacity-90 w-full flex items-center justify-center text-white absolute bottom-0 bg-black ">
              <Link
                href={`/galeri/${item.slug}`}
                className="font-bold p-2 uppercase rounded-lg"
              >
                {item.baslik}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
