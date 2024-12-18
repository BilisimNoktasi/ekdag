"use client";
import { GalleryItem } from "@/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

import LightGallery from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { getRequest } from "@/services/requestService";
import Preloader from "@/components/Preloader";

export default function GalleryDetailPage() {
  const params = useParams();
  const [data, setData] = useState<GalleryItem>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getRequest({
      controller: "galeris",
      filters: { slug: params?.slug },
      populate: "*",
    })
      .then((res) => {
        setData(res.data[0]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [params?.slug]); // Yalnızca params.slug değiştiğinde çalışacak

  if(loading) return <Preloader />

  return (
    <div className="mt-24">
      <div className="flex items-center justify-center">
        <h1 className="text-indigo-600 text-3xl font-bold">{data?.galeriBaslik}</h1>
      </div>

      <div className="z-99999 my-12 container max-w-c-1280 mx-auto">
        <LightGallery
          elementClassNames="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4"
          speed={500}
          thumbnail={true}
          closable
          plugins={[lgThumbnail, lgZoom]}
        >
          {data?.galeriResimler.map((item, index) => (
            <a key={index} href={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.url}`}>
              <img
                className="w-full h-[250px] rounded-lg"
                src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.url}`}
                alt={`Gallery image ${index}`}
              />
            </a>
          ))}
        </LightGallery>
      </div>

      {/* <div className="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 my-28 max-w-c-1280 w-full mx-auto">
      {data?.galleryImages.map((item, index) => (
        <div key={index} className="relative group w-full h-60 rounded-lg">
          <img
            className="w-full rounded-md brightness-95 h-60 transition-transform hover:cursor-pointer duration-300 group-hover:scale-105"
            src={urlFor(item).url()}
            alt={urlFor(item).url()}
          />
        
        </div>
      ))}
    </div> */}
    </div>
  );
}
