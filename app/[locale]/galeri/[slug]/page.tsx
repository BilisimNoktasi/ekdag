"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { getRequest } from "@/services/requestService";
import Preloader from "@/components/Preloader";
import { GalleryItem } from "@/types";

export default function GalleryDetailPage() {
  const params = useParams();
  const [data, setData] = useState<GalleryItem>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getRequest({
      controller: "galeris",
      filters: { slug: params?.slug },
      populate: 'galeri_iceriks', // İlişkili verileri popüle et
    })
      .then((res) => {
        console.log("Populated Response:", res); // Yanıtı kontrol et
        setData(res?.data[0]); // Veriyi state'e aktar
      })
      .finally(() => {
        setLoading(false); // Yüklenme durumunu kaldır
      });
  }, [params?.slug]);

  if (loading) return <Preloader />;
  return (
    <div className="mt-24">
      {/* Başlık */}
      <div className="flex items-center justify-center">
        <h1 className="text-indigo-600 text-3xl font-bold">
          {data?.baslik}
        </h1>
      </div>

      <div className="z-99999 my-12 container max-w-c-1280 mx-auto">
        {/* Galeri Resimleri */}
       { params?.slug !== 'videolar' ?(
        <LightGallery
        elementClassNames="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4"
        speed={500}
        thumbnail={true}
        closable
        plugins={[lgThumbnail, lgZoom]}
      >
        {data?.galeri_iceriks?.map((item, index) => (
          <a
            key={index}
            href={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.medya?.url}`}
          >
            <img
              className="w-full h-[250px] rounded-lg"
              src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.medya?.url}`}
              alt={`Gallery image ${index}`}
            />
          </a>
        ))}
      </LightGallery>
       ):(null)
         
       }

        {/* Video ve Iframe */}
        <div className="grid grid-cols-3 gap-4 my-8">
          {params?.slug === 'videolar' ? data?.galeri_iceriks?.map((item, index) => (
            <div key={index}>
            <video
              controls
              src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.medya?.url}`}
              className="rounded-md"
              width={'100%'}
              height={100}
            ></video>
            <h1 className='text-center mt-4 font-semibold text-xl'>{item.aciklama}</h1>
            </div>
          )):(null)}
        </div>
      </div>
    </div>
  );
}