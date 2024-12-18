"use client";
import React, { useEffect, useState } from "react";
import FacilityCard from "@/components/Facility/FacilityCard";
import Image from "next/image";
import { getRequest } from "@/services/requestService";
import { useParams } from "next/navigation";
import Preloader from "@/components/Preloader";
import { SosyalTesisler } from "@/types";

export default function Page() {
  const params = useParams()
  const [facilityData, setFacilityData] = useState<SosyalTesisler[]>([]);
  const [loading,setLoading] = useState<boolean>(true)

  useEffect(() => {
    getRequest({
      controller: "sosyal-tesislers",
      populate: "*",
      locale:`${params?.locale === 'tr' ? 'tr-TR':'en'}`,
    })
      .then((res) => {
        setFacilityData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if(loading) return <Preloader />
  console.log(facilityData)
  return (
    <>
      <div className="mx-auto max-w-c-1315">
        <div className="flex w-full justify-center mt-24">
          <Image
            src="/ekdag-gozde-logo.jpg"
            width={150}
            height={150}
            alt="ekdag-gozde-logo.jpg"
          />
        </div>
        <div className="grid mx-4 md:grid-cols-3 sm:grid-cols-1 gap-7.5 mt-12">
          {facilityData?.map((item, index) => (
            <FacilityCard key={index} facility={item} />
          ))}
        </div>
      </div>
    </>
  );
}
