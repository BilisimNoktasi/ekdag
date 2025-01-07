'use client'
import Preloader from '@/components/Preloader';
import { getRequest } from '@/services/requestService';
import { TesisDetailData } from '@/types';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const TesisDetailSinglePage = () => {
    const params = useParams()
    const [facilityData,setFacilityData]= useState<TesisDetailData>()
    const [loading,setLoading] = useState<boolean>(true)

    useEffect(()=> {
        getRequest({
             controller: "sosyal-tesislers",
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
    },[])

    if(loading) return <Preloader />

  return (
   <div className="max-w-c-1390 w-full mx-auto">
           <section className="pb-16 md:pb-20 lg:pb-24">
             <div className="w-full px-4">
               <div className="blog-details mt-18 blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                 {/* Tesis İsmi */}
                 <h1 className='text-center'>{facilityData?.tesisAdi}</h1>
                  {
                    facilityData?.tesisDetaylar && <BlocksRenderer content={facilityData?.tesisDetaylar as []} />
                  }
                 {/* Ana Görsel */}
                 <div className="w-full items-center flex flex-wrap justify-center">
                  { facilityData?.tesisDetayResmi ? (
                      <img
                      className='object-fill'
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${facilityData.tesisDetayResmi.url}`}
                      alt="AnaGorsel.png"
                    />
                    ): (null)
                  }
                 </div>
   
                 {/* Tesis Fotoğrafları */}
                 <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-y-6 mt-12 gap-x-6">
                   {
                     facilityData?.tesisResimler?.map((item, index) => (
                       <img
                         key={index}
                         className='w-full h-[300px] object-cover'
                         src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${item.url}`}
                         alt={`Tesis Fotoğrafı ${index + 1}`}
                       />
                     ))}
                 </div>
               </div>
             </div>
           </section>
         </div>
  )
}

export default TesisDetailSinglePage