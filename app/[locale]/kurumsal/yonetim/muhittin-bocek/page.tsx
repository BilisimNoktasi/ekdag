"use client"
import {useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import {getRequest} from "@/services/requestService";
import {useParams} from "next/navigation";
import Preloader from "@/components/Preloader";
import {BlocksRenderer} from "@strapi/blocks-react-renderer";

export default function DocsPage() {
    const params = useParams()
  const t =useTranslations("president")
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState();

    useEffect(() => {
        getRequest({
            controller: "presidents",
            populate: "*",
            locale:`${params?.locale === 'tr' ? 'tr-TR':'en'}`,
        })
            .then((res) => {
                if (res?.data?.[0]?.presidentDetail) {
                    setDetail(res.data[0].presidentDetail);
                } else {
                    setDetail([]); // Fallback to empty array
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if(loading) return <Preloader />
    console.log(detail)
  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto flex md:flex-row flex-col sm:flex-col">
            <div className="w-full px-4 md:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4  transition-all  dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <img src="/images/yonetim/muhittin-bocek-01.jpg" />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-3/4 sm:w-full">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h3>{t("title")}</h3>
                <h1>Muhittin BÖCEK</h1>
                <BlocksRenderer content={detail} />
              </div>
            </div>
          </div>
      </section>
    </>
  );
}
