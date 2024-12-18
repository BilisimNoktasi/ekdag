import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Ekdağ | Kurumsal",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

export default function DocsPage() {
  const t =useTranslations("ekdagAs")
  return (
    <>
    <div className="flex justify-center custom-swiper deactive-mobile relative w-full page-md-h">
        <Image src="/images/pages/kurumsal_page.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>

      <div className="flex justify-center active-mobile custom-swiper relative w-full page-sm-h">
        <Image src="/images/pages/kurumsal_mob_page.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>
      <section className="pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto">
          

            <div className="max-w-c-1280 w-full mx-auto">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>{t("title")}</h1>

                <p className="text-body-color dark:text-body-color-dark text-base">
                  {t("descripiton")}
                </p>
                <img
                  width={1000}
                  height={500}
                  src="/images/image.png"
                  alt="/images/image.png"
                />

                <h2 className="text-xl">{t("ourvision")}</h2>

                <p className="text-body-color dark:text-body-color-dark text-base">
                 {t("vision")}
                </p>

                <h2 className="text-xl">{t("ourmission")}</h2>

                <p className="text-body-color dark:text-body-color-dark text-base">
                 {t("mision")}
                </p>
              </div>
            </div>
        </div>
      </section>
    </>
  );
}
