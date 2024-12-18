"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden pt-20 pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                
                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/halk-ekmek/Halk-Ekmek-Fabrikasi-01.jpg"
                alt="About"
                className="rounded-lg"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Halk Ekmek Fabrikası
              </h2>
              <p>
                2006 yılında özelleştirilen Halk Ekmek Fabrikası{`'`} nın vatandaşa
                uygun fiyatlı ekmek vermemesi nedeniyle harekete geçen Başkan
                Muhittin Böcek, Antalya Büyükşehir Belediyesi{`'`} nin öz
                kaynaklarıyla ekmek üreteceği Halk Ekmek Fabrikası{`'`} nı açarak
                halkımızın hizmetine sunmuştur.14 şubatta yapımına başlanan HALK
                EKMEK Fabrikası, EKDAĞ A.Ş. tarafından 3 ay gibi kısa bir sürede
                tamamlayarak uygun fiyata kaliteli ekmek üretimine başlamıştır.
              </p>
              <div className="w-44 mt-12">
                <Link
                  href="/halkekmek"
                  className="rounded-full w-full hover:bg-black transition-all hover:text-white border font-medium p-2 px-24"
                >
                  Detay
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}
    </>
  );
};

export default About;
