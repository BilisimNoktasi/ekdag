'use client'
import RelatedPost from "@/components/Blog/RelatedPost";
import Preloader from "@/components/Preloader";
import { getRequest } from "@/services/requestService";
import { Blog } from "@/types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const SingleBlogPage = () => {
  const params = useParams()
  const [singleBlog, setSingleBlog] = useState<Blog | null>(null); // Başlangıçta null verisi
  const [loading,setLoading] = useState<boolean>(true)

  useEffect(() => {
   getRequest({
           controller:'blogs',
           filters:{slug:params?.slug},
           populate:'*',
           locale:`${params?.locale === 'tr' ? 'tr-TR':'en'}`,
         }).then(res => {
           setSingleBlog(res.data[0])
           console.log(res)
          }).finally(()=> {
           setLoading(false)
          })
  }, []); // Yalnızca params.slug değiştiğinde çalışacak
  
  // Eğer blog verisi gelmediyse, yükleniyor durumu gösterin
  if(loading) return <Preloader />

  console.log(params?.slug)

  console.log(singleBlog)

  return (
    <>
      <section className="pb-20 lg:pb-25 xl:pb-30 pt-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">

              <RelatedPost />
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    {
                      singleBlog?.blogResmi ? (
                        <Image
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${singleBlog?.blogResmi?.url}`}
                      alt="Kobe Steel plant that supplied"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                      ):(null)
                    }
                    
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  {singleBlog?.blogBaslik}
                </h2>
                <div className="blog-details">
                {
                      singleBlog?.blogDetay && <BlocksRenderer content={singleBlog?.blogDetay as []} />
                    }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleBlogPage;
