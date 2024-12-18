import Contact from "@/components/Contact";
import { Metadata } from "next";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { PiBreadThin } from "react-icons/pi";
import { IoRestaurantOutline } from "react-icons/io5";
import { IoFishOutline } from "react-icons/io5";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { PiTreePalmLight } from "react-icons/pi";

export const metadata: Metadata = {
  title: "Ekdağ | İletişim",
  description: "Ekdağ İletisim",
  // other metadata
};

export default function DocsPage() {
  return (
    <>
    <div className="flex justify-center custom-swiper deactive-mobile relative w-full h-[500px] md:aspect-[16/5]">
        <Image src="/images/iletisim.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>

      <div className="flex justify-center active-mobile custom-swiper relative w-full h-[500px] md:aspect-[16/5]">
        <Image src="/images/blog-mob.webp" className="rounded-b-3xl brightness-75" fill alt="ekdag-gozde-logo.jpg" />
      </div>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="max-w-c-1280 w-full mx-auto">
  <div className="w-full px-4">
    <div className="blog-details shadow-three rounded-sm px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
      
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        
        
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-row">
          <CiLocationOn  className="text-blue-950 w-48 h-48 mr-4"/>
          <div className="flex flex-col">
          <h4 className="font-semibold text-xl mt-2">Merkez Ofis</h4>
          <p className="text-body-color dark:text-body-color-dark text-base">
            Meltem Mah. Dumlupınar Cad.Atatürk Kültür Merkezi İçi No: 199/1 Muratpaşa / ANTALYA 
          </p>
          <div className="border-t border-gray-300 mt-2 pt-2">
      <p className="text-body-color dark:text-body-color-dark text-base">
      +90 242 311 06 94
      </p>
    </div>
          </div>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-row">
        <PiBreadThin className="text-blue-950 w-18 h-18 mt-14 mr-4"/>
         <div className="flex flex-col">
          <h4 className="font-semibold text-xl mt-2">Halk Ekmek</h4>
          <p className="text-body-color dark:text-body-color-dark text-base mt-10">
            +90 530 235 8261
          </p>
          </div>
        </div>

       
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-row">
        <IoRestaurantOutline  className="text-blue-950 w-32 h-32 mt-8 my-6 mr-4"/>
          <div className=" flex flex-col">
          <h4 className="font-semibold text-xl mt-2">Büyükşehir Belediyesi Kafeterya</h4>
          <p className="text-body-color dark:text-body-color-dark text-base">
            Yüksekalan Mahallesi Adnan Menderes Bulvarı No:20 4. Kat Kafeterya Muratpaşa / Antalya  
           
          </p>
          <div className="border-t border-gray-300 mt-2 pt-2">
          <p className="text-body-color dark:text-body-color-dark text-base">
          +90 242 249 50 00 Dahili: 6990
          </p>
           </div>
          </div>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-row">
  <PiTreePalmLight className="text-blue-950 w-32 h-32 mt-14 mr-3" />
  <div className="flex flex-col">
    <h4 className="font-semibold text-xl mt-2">Atatürk Parkı Sosyal Tesisi</h4>
    <p className="text-body-color dark:text-body-color-dark text-base">
      Bahçelievler Mahallesi Konyaaltı Caddesi Atatürk Park içi No:25/10 R1 Muratpaşa / Antalya
    </p>
    <div className="border-t border-gray-300 mt-2 pt-2">
      <p className="text-body-color dark:text-body-color-dark text-base">
        +90 242 237 07 19 | +90 530 235 82 65
      </p>
    </div>
  </div>
</div>


        
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-row">
          <IoFishOutline className="text-blue-950 w-32 h-32 my-13 mr-4" />
          <div className=" flex flex-col">
          <h4 className="font-semibold text-xl mt-2">Düden Balık Çarşısı Sosyal Tesisi</h4>
          <p className="text-body-color dark:text-body-color-dark text-base">
            Çağlayan Mahallesi Barınaklar Bulvarı Düden Park içi No: 126/9 Muratpaşa / Antalya 
          </p>
          <div className="border-t border-gray-300 mt-2 pt-2">
      <p className="text-body-color dark:text-body-color-dark text-base">
       +90 242 324 00 74
      </p>
    </div>
          </div>
        </div>

        
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-row">
          <MdOutlineFamilyRestroom className=" text-blue-950 w-32 h-32 my-12 mr-4" />
          <div className="flex flex-col">
          <h4 className="font-semibold text-xl mt-2">Barbaros Aile Çay Bahçesi</h4>
          <p className="text-body-color dark:text-body-color-dark text-base">
            Bahcelievler mah Hızır Reis cadesi No1/1, Konyaalti, 07050 Muratpasa/Antalya 
          </p>
          <div className="border-t border-gray-300 mt-2 pt-2">
      <p className="text-body-color dark:text-body-color-dark text-base">
       0530 505 58 26
      </p>
    </div>
          </div>
        </div>

      </div>
      
    </div>
    <Contact />
  </div>
</div>

      </section>
    </>
  );
}