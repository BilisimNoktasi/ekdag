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
import Preloader from "@/components/Preloader";
import { GalleryItem } from "@/types";
import { getRequest } from "@/services/requestService";

export default function GalleryDetailPage() {
  const params = useParams();
  const [data, setData] = useState<GalleryItem>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getRequest({
      controller: "galeris",
      filters: { slug: params?.slug },
      populate: '*', // İlişkili verileri popüle et
    })
      .then((res) => {
        setData(res?.data[0]); // Veriyi state'e aktar
      })
      .finally(() => {
        setLoading(false); // Yüklenme durumunu kaldır
      });  //&populate[galeri_iceriks][populate]=medya
    // const getData = async() => {
    //   await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URI}/galeris?filters[slug][$eq]=${params?.slug}`).then(async res=> {
    //     const response = await res.json()
    //     setData(response.data[0])
    //   }).finally(()=> {
    //     setLoading(false)
    //   })
    // }
    // getData()
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
        elementClassNames="grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 mx-4 gap-4"
        speed={500}
        thumbnail={true}
        closable
        plugins={[lgThumbnail, lgZoom]}
      >
        {data?.galeriResimler?.map((item, index) => (
          <a
          key={index}
            href={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.url}`}
          >
            <img
              className="w-full h-[250px] rounded-lg"
              src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.url}`}
              alt={`Gallery image ${index}`}
            />
          </a>
        ))}
      </LightGallery>
       ):(null)
         
       }

        {/* Video ve Iframe */}
        <div className="grid grid-cols-3 gap-4 my-8">
          {params?.slug === 'videolar' ? data?.galeriResimler?.map((item, index) => (
            <div key={index}>
            <video
              controls
              src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item?.url}`}
              className="rounded-md"
              width={'100%'}
              height={100}
            ></video>
            </div>
          )):(null)}
        </div>
      </div>
    </div>
  );
}