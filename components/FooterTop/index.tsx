import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";


export default function FooterTop() {
  const t=useTranslations("corporateLinks")
  return (
    <div>
        <h4 className="mb-9 text-center text-itemtitle2  font-bold text-blue-950 dark:text-blue">
        {t("corporateLinks")}
      </h4>

      <div className="bg-blue-200 py-4 bg-opacity-30">
        <div className="mx-auto max-w-screen-lg px-4 md:px-8 xl:px-0 flex flex-wrap justify-between">
      <ul className="flex flex-col flex-wrap gap-y-3">
      <li className="flex items-center w-full">
  <Link
    target="_blank"
    href="https://antalya.bel.tr/"
    className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded flex items-center"
  >
   
    <img 
      src="abb.png" 
      alt="Logo" 
      className="w-8 h-6 mr-2" 
    />
    <span className="block transform transition-transform hover:translate-x-2">
      {t("AntalyaMetropolitanMunicipality")}
    </span>
  </Link>
</li>
<li className="flex items-center w-full">
  <Link
    target="_blank"
    href="	https://www.antalyaff.com/tr/"
    className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded flex items-center"
  >
   
    <img 
      src="aff.png" 
      alt="Logo" 
      className="w-6 h-4 mr-2" 
    />
    <span className="block transform transition-transform hover:translate-x-2">
    {t("antalyaFilmFestival")}
    </span>
  </Link>
</li>
<li className="flex items-center w-full">
  <Link
    target="_blank"
    href="https://apf.com.tr/"
    className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded flex items-center"
  >
   
    <img 
      src="apf.png" 
      alt="Logo" 
      className="w-10 h-8 " 
    />
    <span className="block transform transition-transform hover:translate-x-2">
    {t("antalyaTheaterFestival")}
    </span>
  </Link>
</li>
<li className="flex items-center w-full">
  <Link
    target="_blank"
    href="https://ast.gov.tr/"
    className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded flex items-center"
  >
   
    <img 
      src="asf.png" 
      alt="Logo" 
      className="w-6 h-4 mr-2" 
    />
    <span className="block transform transition-transform hover:translate-x-2">
     {t("antalyaCityTheater")}
    </span>
  </Link>
</li>
      </ul>

      <ul className="flex flex-col flex-wrap gap-y-3">
        
 <li className="flex items-center w-full">
  <Link
    target="_blank"
    href="https://www.antalyaanet.com"
    className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded flex items-center"
  >
   
    <img 
      src="anet.png" 
      alt="Logo" 
      className="w-18 h-6 mr-2" 
    />
    <span className="block transform transition-transform hover:translate-x-2">
     ANET
    </span>
  </Link>
 </li>
<li className="flex items-center w-full">
  <Link
    target="_blank"
    href="	https://anset.com.tr/"
    className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded flex items-center"
  >
   
    <img 
      src="anset.png" 
      alt="Logo" 
      className="w-18 h-6 mr-2" 
    />
    <span className="block transform transition-transform hover:translate-x-2">
     ANSET
    </span>
  </Link>
 </li>
<li className="flex items-center w-full">
  <Link
    target="_blank"
    href="https://antepeinsaat.com/"
    className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded flex items-center"
  >
   
    <img 
      src="antepe.png" 
      alt="Logo" 
      className="w-18 h-6 mr-2" 
    />
    <span className="block transform transition-transform hover:translate-x-2">
     ANTEPE
    </span>
  </Link>
 </li>
 <li className="flex items-center w-full">
  <Link
    target="_blank"
    href="https://www.antalyaulasim.com.tr/"
    className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded flex items-center"
  >
   
    <img 
      src="au.png" 
      alt="Logo" 
      className="w-18 h-11 mr-2" 
    />
    <span className="block transform transition-transform hover:translate-x-2">
    {t("antalyaTransportation")}
    </span>
  </Link>
 </li>
</ul>

<ul className="flex flex-col flex-wrap gap-y-3"> 
<li className="flex items-center w-full">
  <Link
    target="_blank"
    href="https://www.antalyakart.com.tr/"
    className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded flex items-center"
  >
   
    <img 
      src="antalyakart.png" 
      alt="Logo" 
      className="w-18 h-9 mr-2" 
    />
    <span className="block transform transition-transform hover:translate-x-2">
    {t("antalyaCard")}
    </span>
  </Link>
</li>      
<li className="flex items-center w-full">
  <Link
    target="_blank"
    href="https://antalya.com.tr/"
    className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded flex items-center"
  >
   
    <img 
      src="antalya.png" 
      alt="Logo" 
      className="w-18 h-6 mr-2" 
    />
    <span className="block transform transition-transform hover:translate-x-2">
     ANTALYA.COM.TR
    </span>
  </Link>
</li>
<li className="flex items-center w-full">
  <Link
    target="_blank"
    href="https://atasem.antalya.bel.tr/"
    className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded flex items-center"
  >
   
    <img 
      src="atasem.png" 
      alt="Logo" 
      className="w-18 h-6 mr-2" 
    />
    <span className="block transform transition-transform hover:translate-x-2">
    ATASEM
    </span>
  </Link>
</li>       
<li className="flex items-center w-full">
  <Link
    target="_blank"
    href="https://atabem.antalya.bel.tr/"
    className="hover:text-blue-600 hover:bg-blue transition-all text-black dark:text-white relative px-2 py-1 rounded flex items-center"
  >
   
    <img 
      src="atabem.png" 
      alt="Logo" 
      className="w-18 h-6 mr-2" 
    />
    <span className="block transform transition-transform hover:translate-x-2">
    ATABEM
    </span>
  </Link>
</li>      
      </ul>
      </div>
    </div>
    </div>
    
  );
}
