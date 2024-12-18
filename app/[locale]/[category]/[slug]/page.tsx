'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { MansetDetail } from '@/types';
import { useParams } from 'next/navigation';
import Preloader from '@/components/Preloader';
import { getRequest } from '@/services/requestService';
import { BlocksRenderer } from '@strapi/blocks-react-renderer'

export default function BasManset() {
    const params = useParams()
    const [data,setData] = useState<MansetDetail>()
    const [loading,setLoading] = useState<boolean>(true)

    useEffect(()=> {
       getRequest({
        controller:'mansets',
        filters:{slug:params?.slug},
        populate:'*',
        locale:`${params?.locale === 'tr' ? 'tr-TR':'en'}`,
      }).then(res => {
        setData(res.data[0])
       }).finally(()=> {
        setLoading(false)
       })
    }, [params?.slug])

    if(loading) {
        return <Preloader />
    }

  return (
    <>
    {
      data?.sliderGenis && data.sliderMobil ? (
        <>
          <div className="flex justify-center custom-swiper deactive-mobile relative w-full page-md-h">
            <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${data?.sliderGenis?.url}`} fill alt="ekdag-gozde-logo.jpg" />
          </div>

          <div className="flex justify-center active-mobile custom-swiper relative w-full page-sm-h">
            <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${data?.sliderMobil?.url}`} fill alt="ekdag-gozde-logo.jpg" />
          </div>
          </>
      ): (
        null
      )
    }
          <section className="pb-16 md:pb-20 lg:pb-24">
            <div className="container mx-auto">
              
    
                <div className="max-w-c-1280 w-full mt-12 mx-auto">
                  <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                    <h1>{data?.mansetAdi}</h1>
                    {
                      data?.detailContent && <BlocksRenderer content={data?.detailContent as []} />
                    }
                    
                  </div>
                </div>
            </div>
          </section>
        </>
  )
}
