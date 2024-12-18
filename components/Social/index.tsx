'use client'
import React, { useEffect, useState } from 'react'
import { Autoplay,Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeader from '../Common/SectionHeader'


import 'swiper/css'
import 'swiper/css/autoplay'
import type { Social } from '@/types'
import { useTranslations } from 'next-intl'
import {InstagramEmbed} from 'react-social-media-embed'
import { getRequest } from '@/services/requestService'

export default function Social() {
  const t=useTranslations("socialMedia")

  const [feed, setFeed] = useState<Social[]>([]);

  useEffect(() => {
    getRequest({
         controller: "instagrams",
         populate: "*",
       })
         .then((res) => {
           setFeed(res.data);
         })

         if (typeof window !== 'undefined') {
          const script = document.createElement('script');
          script.src = 'https://www.instagram.com/embed.js';
          script.async = true;
          script.onload = () => {
            if (window.instgrm) {
              window.instgrm.Embeds.process(); // Yükleme sonrası embed işlemi
            }
          };
          document.body.appendChild(script);
        }

  }, []);

  return (
    <div className='bg-gray-100' 
    style={{
      background: 'url(/images/confetti.png)',
      backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
      }}>
    <div className='max-w-c-1390 w-full mx-auto'>
    <div className="animate_top pt-6 text-center">
          <SectionHeader
            headerInfo={{
              title: t("socialMedia"),
              subtitle: ``,
              description: ``,
            }}
          />
        </div>
    
        <Swiper
        autoplay={{ delay: 6000 }}
        pagination={{
          clickable:true
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination,Autoplay]}
        className='custom-swiper'
      >
        {
          feed?.map((item,index) => (
            <SwiperSlide key={index}>
            <InstagramEmbed url={item.url} />
            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>
    </div>
  )
}
