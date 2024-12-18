import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Kurumsal | Kiralamalar",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

export default function Page() {
  const t = useTranslations("leases");
  return (
    <>
      <div className="flex justify-center custom-swiper deactive-mobile relative w-full h-[500px] md:aspect-[16/5]">
        <Image src="/images/pages/kurumsal_page.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>

      <div className="flex justify-center active-mobile custom-swiper relative w-full h-[500px] md:aspect-[16/5]">
        <Image src="/images/pages/kurumsal_mob_page.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="max-w-c-1390 w-full mx-auto">
            <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
              <h1>{t("title")}</h1>

              <p className="text-body-color dark:text-body-color-dark text-base">
                {t("one")}
              </p>
              <p>- {t("two")}</p>
              <p>- {t("three")}</p>
              <p>- {t("four")}</p>
              <p>- {t("five")}</p>
              <p>- {t("six")}</p>
              <p>- {t("seven")}</p>
              <p>- {t("eight")}</p>
              <p>- {t("nine")}</p>
              <p>- {t("ten")}</p>
              <p>- {t("eleven")}</p>
              <p>- {t("twelve")}</p>
              <p>- {t("thirteen")}</p>
              <p>- {t("fourteen")}</p>
              <p>- {t("fifteen")}</p>
              <p>- {t("sixteen")}</p>
              <p>- {t("seventeen")}</p>
              <p>- {t("eighteen")}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
