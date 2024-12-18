'use client'
import React from "react";
import Image from "next/image";
import YonetimCard from "@/components/YonetimCard";

export default function page() {
  return (
    <>
       <div className="flex justify-center custom-swiper deactive-mobile relative w-full page-md-h">
        <Image src="/images/pages/kurumsal_page.webp" className="brightness-90" fill alt="ekdag-gozde-logo.jpg" />
      </div>

      <div className="flex justify-center active-mobile custom-swiper relative w-full page-sm-h">
        <Image src="/images/pages/kurumsal_mob_page.webp" className="brightness-90" fill alt="ekdag-gozde-logo.jpg" />
      </div>

      <div className="max-w-c-1390 w-full mx-auto">
      <section className="pb-16 pt-16 md:pb-20 md:pt-16 lg:pb-24 lg:pt-16">
        <div className="w-full px-4">
        
          <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
           <div className="grid md:grid-cols-2 gap-x-6 sm:grid-cols-1">
                <YonetimCard link='/kurumsal/yonetim/muhittin-bocek' title='Başkanımız | Muhittin BÖCEK' mainImage={"/images/yonetim/muhittin-bocek.jpg"} metadata={''} />
                <YonetimCard link='/kurumsal/yonetim/mehmet-manavoglu' title='Yön. Kur. Bşk. | Mehmet MANAVOĞLU' mainImage={"/images/yonetim/mehmet-manavoglu.jpg"} metadata={''} />
           </div>
            
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
