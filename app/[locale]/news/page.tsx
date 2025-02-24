'use client'
import NewsCard from "@/components/NewsCard";
import { getRequest } from "@/services/requestService";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const t = useTranslations("new");
  const params = useParams();

  const [news, setNews] = useState([]);
  const [meta, setMeta] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSize, setDataSize] = useState(9);

  useEffect(() => {
    setLoading(true);
    getRequest({
      controller: "haberlers",
      pagination: { page: 1, pageSize: dataSize },
      locale: `${params?.locale === "tr" ? "tr-TR" : "en"}`,
      sort: ["createdAt:desc"],
      populate: "*",
    })
      .then((res) => {
        setNews((prevNews) => 
          [...prevNews, ...res.data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        );
        setMeta(res.meta.pagination.total);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [dataSize]);

  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section>
        <div className="mx-auto mt-24 mb-24 max-w-c-1280 sm:mt-24 px-4 md:px-8 xl:px-0">
          <h1 className="text-2xl my-12 font-bold text-center">{t("news")}</h1>
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {news.map((post) => (
              <NewsCard key={post.id} news={post} />
            ))}
          </div>
          <div className="flex w-full justify-center mt-12">
            {meta > news.length && (
              <button onClick={() => setDataSize(dataSize + 6)} className="bg-primary text-white p-2 rounded-lg">
                Daha Fazla...
              </button>
            )}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
