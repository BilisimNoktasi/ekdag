import React from 'react'
import { Link } from '@/i18n/routing'
import Image from 'next/image'
import {motion} from 'framer-motion'

export default function YonetimCard({mainImage,title,metadata,link}) {
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
      className="animate_top rounded-lg pb-9 dark:bg-blacksection"
    >
      <Link href={link} className="relative block h-[400px] sm:h-[300px] md:h-[500px]">
        <Image src={mainImage} alt={title} fill />
      </Link>

      <div className="px-4 text-center">
        <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
          <Link href={link}>
            {`${title.slice(0, 40)}`}
          </Link>
        </h3>
        <p className="line-clamp-3">{metadata}</p>
      </div>
    </motion.div>
  </>
  )
}
