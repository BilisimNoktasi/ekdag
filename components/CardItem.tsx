import React from 'react'
import {motion} from 'framer-motion'
import { Feature } from '@/types';
import { Link } from '@/i18n/routing';



export default function CardItem({feature}: {feature: Feature}) {
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
        className="group relative rounded-lg pb-9 dark:bg-blacksection overflow-hidden"
      >
        {/* Image with Hover Effect */}
        <Link href={`/tesisler/main/${feature.slug}`} className="relative block aspect-[368/239]">
          {
            feature.tesisCardImage ? (
              <img
            src={`${process.env.NEXT_PUBLIC_IMAGE_URI}${feature?.tesisCardImage?.url}`}
            alt={`${process.env.NEXT_PUBLIC_IMAGE_URI}${feature?.tesisCardImage?.url}`}
            className="w-full h-[350px] rounded-3xl object-cover transition duration-300"
          />
            ):(null)
          }
          {/* Explore Button */}
          <div className="absolute inset-0 rounded-3xl flex items-center justify-center hover:backdrop-brightness-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="px-4 py-2 bg-orange-500 text-white font-medium rounded-lg shadow-lg">
              Keşfet
            </button>
          </div>
        </Link>

        {/* Content */}
        <div className="px-4 text-center">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 flex flex-row justify-center items-center text-md text-center font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
            <img src={'/ekdag-ekmek-logo-800.png'} className='w-14 h-7' />
            <Link href={`/tesisler/main/${feature.slug}`} className={`ml-4 font-extrabold text-xl`}>
              {feature.tesisAdi}
            </Link>
          </h3>
        </div>
      </motion.div>
    </>
    );
}
