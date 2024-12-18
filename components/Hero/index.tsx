"use client";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { HomeData } from "@/types";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { getRequest } from "@/services/requestService";

const Hero = () => {
  const [images, setImages] = useState<HomeData[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
     getRequest({
      controller:'mansets',
      pagination:{page:1,pageSize:10},
      populate:'*'
    }).then((res)=> {
      setImages(res.data)
    })
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Mobil cihaz genişliği
    };

    handleResize(); // İlk değer
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Masaüstü için Swiper */}
      {!isMobile && (
        <Swiper
          className="custom-swiper"
          modules={[EffectFade, Autoplay, Pagination]}
          effect="fade"
          pagination={{
            clickable: true,
          }}
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true} // Döngü aktif
          autoplay={{
            delay: 4000, // Otomatik geçiş süresi (ms cinsinden)
            disableOnInteraction: false, // Kullanıcı müdahale ettiğinde durmasın
          }}
        >
          {images?.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="relative deactive-mobile">
              <Link href={`/${item.category.toString()}/${item?.slug}`}>
                <Image
                width={1000}
                height={500}
                objectFit="center"
                layout="responsive"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.sliderGenis?.url}`}
                  alt={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.sliderGenis?.url}`}
                />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Mobil için Swiper */}
      {isMobile && (
        <Swiper
          className="custom-swiper"
          modules={[EffectFade, Autoplay, Pagination]}
          effect="fade"
          pagination={{
            clickable: true,
          }}
          fadeEffect={{ crossFade: true }}
          spaceBetween={0}
          slidesPerView={1}
          loop={true} // Döngü aktif
          autoplay={{
            delay: 4000, // Otomatik geçiş süresi (ms cinsinden)
            disableOnInteraction: false, // Kullanıcı müdahale ettiğinde durmasın
          }}
        >
          {images?.map((item, index) => (
            <SwiperSlide key={index} className="relative">
              <div className="relative active-mobile">
                <Link href={`/${item.category}/${item?.slug}`}>
                <Image
                width={1000}
                height={500}
                objectFit="center"
                layout="responsive"
                src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.sliderMobil?.url}`}
                  alt={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.sliderMobil?.url}`}
                />
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Hero;