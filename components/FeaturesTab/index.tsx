"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";

import { motion } from "framer-motion";
import { FeatureTab } from "@/types";
import SectionHeader from "../Common/SectionHeader";
import { useTranslations } from "next-intl";
import { getRequest } from "@/services/requestService";
import { useParams } from "next/navigation";
import Preloader from "../Preloader";

const FeaturesTab = () => {
  const params = useParams()
  const [featureDataTab,setFeatureDataTab] = useState<FeatureTab[]>([])
  const [currentTab, setCurrentTab] = useState<string>();
  const [loading,setLoading] = useState<boolean>(true)
  
  useEffect(()=> {
    getRequest({
          controller: "features-tabs",
          sort: ['createdAt:desc'],
          populate: "*",
          locale:`${params?.locale === 'tr' ? 'tr-TR':'en'}`,
        })
          .then((res) => {
            setFeatureDataTab(res.data.reverse());
            setCurrentTab(res.data[0]?.baslik)
          })
          .finally(() => {
            setLoading(false);
          });
  },[])
  
  const t=useTranslations("ekdagPlant")

  if(loading) return <Preloader />

  return (
    <>
    
      {/* <!-- ===== Features Tab Start ===== --> */}
      <section className="relative">
        
        <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <SectionHeader headerInfo={{
              subtitle:t("title"),
              description: t("subTitle"),
            }} />
          <div className="absolute -top-4 -z-1 mx-auto h-[350px] w-[90%]">
            <Image
              fill
              className="dark:hidden"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted Shape"
            />
            <Image
              fill
              className="hidden dark:block"
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted Shape"
            />
          </div>

          {/* <!-- Tab Menues Start --> */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mb-15 flex flex-wrap justify-center rounded-[10px] mt-12 border border-stroke bg-orange-500 bg-opacity-50 shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 sm:flex-wrap md:flex-nowrap md:items-center lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
          >
            {
              featureDataTab?.map((item,index)=> (
                <div
                key={index}
              onClick={() => setCurrentTab(item.baslik)}
              className={`relative flex w-full cursor-pointer items-center border-b border-stroke px-2 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:py-5 ${
                currentTab === item.baslik
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-orange-600"
                  : ""
              }`}
            >
              <div className="flex w-9 h-9 mr-2 items-center justify-center rounded-full border border-orange-600 dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-semibold text-white dark:text-white">
                  0{index+1}
                </p>
              </div>
              <div className="">
                <button className="text-[13px] font-semibold text-white dark:text-white">
                  {item.baslik}
                </button>
              </div>
            </div>
              ))
            }
          </motion.div>
          {/* <!-- Tab Menues End --> */}

          {/* <!-- Tab Content Start --> */}
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="animate_top mx-auto max-w-c-1154"
          >
            {featureDataTab.map((feature, key) => (
              <div
                className={feature.baslik === currentTab ? "block" : "hidden"}
                key={key}
              >
                <FeaturesTabItem featureTab={feature} />
              </div>
            ))}
          </motion.div>
          {/* <!-- Tab Content End --> */}
        </div>
      </section>
      {/* <!-- ===== Features Tab End ===== --> */}
    </>
  );
};

export default FeaturesTab;
