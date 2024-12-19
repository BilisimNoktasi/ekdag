"use client";
import React, { useEffect, useState } from "react";
import CardItem from "../CardItem";
import Image from "next/image";
import HomeTesisCardItem from "../HomeTesisCardItem";
import { getRequest } from "@/services/requestService";
import { useParams } from "next/navigation";
import Preloader from "../Preloader";


const Feature = () => {
  const params = useParams()
  const [homeTesisData,setHomeTesisData] = useState([])
  const [loading,setLoading] = useState<boolean>(true)


  useEffect(()=> {
     getRequest({
            controller:'anasayfa-tesislers',
            populate:'*',
            filters: ['createdAt'],
            locale:`${params?.locale === 'tr' ? 'tr-TR':'en'}`,
          }).then(res => {
            setHomeTesisData(res.data)
           }).finally(()=> {
            setLoading(false)
           })
  },[])
  
  if(loading) return <Preloader />

  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-10 lg:py-10 bg-gray-100 xl:py-10"
        style={{
          background: "url(/images/ekdag-konsept-bg.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <div className="flex w-full items-center justify-center">
              <Image src="/ekdag-ekmek-logo-800.png" width={150} height={150} alt="ekdag-logo-800.png" />
            </div>
            
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-3 lg:mt-15 lg:grid-cols-4 xl:mt-20 xl:gap-6">
            {/* <!-- Features item Start --> */}
            <HomeTesisCardItem />
            {homeTesisData.map((feature, key) => (
              <CardItem feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
