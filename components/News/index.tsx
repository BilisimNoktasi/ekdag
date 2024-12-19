'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeader from '../Common/SectionHeader'
import { Link } from '@/i18n/routing'
import { NewsCard } from '@/types'
import { useTranslations } from 'next-intl'
import { getRequest } from '@/services/requestService'
import { useParams } from 'next/navigation'

export default function News() {
  const params = useParams()
  const t = useTranslations("new")

  const [newsData, setNewsData] = useState<NewsCard[]>([])

  useEffect(() => {
    getRequest({
      controller: 'haberlers',
      sort: ['createdAt'],
      pagination: { page: 1, pageSize: 15 },
      locale: `${params?.locale === 'tr' ? 'tr-TR' : 'en'}`,
      populate: '*'
    }).then((res) => {
      setNewsData(res.data)
    })
  }, [])

  return (
    <div className='bg-[#65b9fe] bg-opacity-10'>
      <div className="animate_top pt-8 mx-auto text-center">
        <SectionHeader
          headerInfo={{
            title: t("news"),
            subtitle: ``,
            description: ``,
          }}
        />
      </div>

      <Swiper autoplay modules={[Autoplay]}>
        {newsData?.map((item, index) => (
          <SwiperSlide key={index}>
            <section className="overflow-hidden mt-12 pb-12">
              <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
                <div className="flex flex-col md:flex-row lg:flex-row gap-8"> 

                <div className="md:w-full lg:w-1/2">
                    <div className="relative w-full">
                      {item.haberResmi ? (
                        <img
                          className="shadow-solid-l sm:h-[300px] md:h-[400px] lg:h-[400px] w-full dark:hidden rounded-lg"
                          src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.haberResmi?.url}`}
                          alt="Hero"
                        />
                      ) : null}
                    </div>
                  </div>

                  <div className="md:w-ful lg:w-1/2"> 
                    <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                      {item.haberBaslik} {"   "}
                    </h1>
                    <p className="mb-6">
                      {item.altBaslik}
                    </p>
                    <Link href={`/news/detail/${item?.slug}`} className='border rounded-full py-1.5 px-4 transition-all hover:bg-black hover:text-white'>
                      {t("detail")}
                    </Link>
                  </div>

                  
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}