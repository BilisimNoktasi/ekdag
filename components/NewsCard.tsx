import type { NewsCard } from '@/types';
import React from 'react'
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NewsCard({news}: {news: NewsCard}) {
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link href={`/news/detail/${news.slug}`} className="relative block aspect-[368/239]">
          <Image src={news.haberResmi ? `${process.env.NEXT_PUBLIC_IMAGE_URI}${news.haberResmi?.url}` : '/path/to/placeholder-image.jpg'} alt={'asdsd.png'} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-md font-bold text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/news/detail/${news.slug}`}>
              {`${news?.haberBaslik}`}
            </Link>
          </h3>
          <p className="line-clamp-3">{`${news.altBaslik}`}</p>
        </div>
      </motion.div>
    </>
  );
}
