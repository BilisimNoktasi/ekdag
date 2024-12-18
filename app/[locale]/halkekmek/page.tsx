import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
     <div className="flex justify-center custom-swiper deactive-mobile relative w-full page-md-h">
        <Image src="/images/pages/halkekmek_page.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>

      <div className="flex justify-center active-mobile custom-swiper relative w-full page-sm-h">
        <Image src="/images/slider/halkslider1.png" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>
      
    <div className="max-w-c-1390 w-full mx-auto">
      <section className="pb-16 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="w-full px-4">
          
          <div className="blog-details shadow-three dark:bg-gray-dark rounded-sm px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
          <div className="flex w-full items-center justify-center">
          <div className="flex w-full justify-center">
          <Image
            src="/ekdag-gozde-logo.jpg"
            width={200}
            height={200}
            alt="ekdag-gozde-logo.jpg"
          />
        </div>
          </div>
            <h1>HALK EKMEK FABRİKASI</h1>

            <p className="text-body-color dark:text-body-color-dark text-base">
              2006 yılında özelleştirilen Halk Ekmek Fabrikası{`'`} nın vatandaşa
              uygun fiyatlı ekmek vermemesi nedeniyle harekete geçen Başkan
              Muhittin Böcek, Antalya Büyükşehir Belediyesi{`'`} nin öz kaynaklarıyla
              ekmek üreteceği Halk Ekmek Fabrikası{`'`} nı açarak halkımızın
              hizmetine sunmuştur.14 şubatta yapımına başlanan HALK EKMEK
              Fabrikası, EKDAĞ A.Ş. tarafından 3 ay gibi kısa bir sürede
              tamamlayarak uygun fiyata kaliteli ekmek üretimine başlamıştır.
            </p>
            <div className="grid grid-cols-2 flex-wrap gap-y-6 gap-x-6">
              <img
                width={1000}
                height={500}
                src="/images/halk-ekmek/Halk-Ekmek-Fabrikasi-01.jpg"
                alt="/images/image.png"
              />
              <img
                width={1000}
                height={500}
                src="/images/halk-ekmek/Halk-Ekmek-Fabrikasi-03.jpg"
                alt="/images/image.png"
              />
              <img
                width={1000}
                height={500}
                src="/images/halk-ekmek/Halk-Ekmek-Fabrikasi-10.jpg"
                alt="/images/image.png"
              />
              <img
                width={1000}
                height={500}
                src="/images/halk-ekmek/Halk-Ekmek-Fabrikasi-11.jpg"
                alt="/images/image.png"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
