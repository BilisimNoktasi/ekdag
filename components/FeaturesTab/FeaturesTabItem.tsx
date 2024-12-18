import React from "react";
import { FeatureTab } from "@/types/index";
import { Swiper,SwiperSlide } from "swiper/react";
import { EffectFlip } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { Link } from "@/i18n/routing";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-xl hover:text-blue-500 transition-all font-bold text-black dark:text-white xl:text-sectiontitle2">
            <Link href={`${featureTab.link}`}>{featureTab?.baslik}</Link>
          </h2>
          <p className="mb-5">{featureTab?.aciklama}</p>
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
        {
          featureTab.resim1 && featureTab.resim2 ? (
            <Swiper modules={[Autoplay,EffectFlip]} autoplay effect="flip">
          <SwiperSlide>
          <img src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${featureTab.resim1?.url}`} className="rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
          <img src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${featureTab.resim2?.url}`} className="rounded-xl" />
          </SwiperSlide>
        </Swiper>
          ):(null)
        }
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
