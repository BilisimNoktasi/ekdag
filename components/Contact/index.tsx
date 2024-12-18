"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

const Contact = () => {
  const [formData, setFormData] = useState({
    nameSurname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/submitForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      alert("Form başarıyla gönderildi!");
    } catch (error) {
      console.log(error);
    }
  };
   const t=useTranslations("contactUs")
  return (
    <>
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 -mt-28 2xl:px-0">
        <div className="relative px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full "></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <img
              src="/images/saat-kulesi.png"
              alt=""
              className="w-full sm:h-[420px] md:h-auto"
            />
            <div className="absolute top-[-50px] left-14 z-10 flex flex-row gap-4">
              <div className="flex items-center gap-2">
                <CiMail className="text-black-950 h-7 w-7" />
                <p>
                  <a href="mailto:info@ekdag.com.tr" className="text-black">
                    info@ekdag.com.tr
                  </a>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <CiPhone className="text-black-950 h-7 w-7" />
                <p>
                  <a href="tel:+902423110694" className="text-black">
                    +90 242 311 06 94
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="relative max-w-90 max-h-95 bg-blue-100 p-6 w-full shadow-lg rounded-lg transform rotate-3 ml-auto mt-28">
            <h2 className="text-lg font-bold text-black mb-4">{t("contactUs")}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 flex flex-col gap-3">
                <input
                  type="text"
                  placeholder={t("name")}
                  name="nameSurname"
                  required
                  value={formData.nameSurname}
                  onChange={handleChange}
                  className="w-full max-w-xs border-b border-stroke bg-white rounded bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white p-2"
                />

                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("mail")}
                  className="w-full max-w-xs border-b border-stroke bg-white rounded bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white p-2"
                />
              </div>

              <div className="mb-12.5 flex flex-col gap-3">
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder={t("phone")}
                  className="w-full max-w-xs border-b border-stroke bg-white rounded bg-transparent pb-3.5 focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white p-2"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  required
                  onChange={handleChange}
                  placeholder={t("message")}
                  rows={4}
                  className="w-full max-w-xs border-b border-stroke bg-white rounded bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white p-2"
                ></textarea>
              </div>
              <div className="flex flex-wrap gap-1 xl:justify-between">
                <button
                  type="submit"
                  aria-label="send message"
                  className="inline-flex items-center gap-4 rounded-full bg-black px-2 py-3 font-medium text-white duration-300 ease-in-out hover:bg-gray-800 hover:-translate-y-2 dark:bg-btndark -mt-6"
                >
                 {t("sendButton")}
                  <svg
                    className="fill-white"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.4767 6.16664L6.00668 1.69664L7.18501 0.518311L13.6667 6.99998L7.18501 13.4816L6.00668 12.3033L10.4767 7.83331H0.333344V6.16664H10.4767Z"
                      fill=""
                    />
                  </svg>
                </button>
              </div>
            </form>

            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-yellow-500 w-8 h-8 rounded-full shadow-lg"></div>
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-12 md:flex-row md:flex-nowrap md:justify-end xl:gap-40 my-35">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: 20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg p-7.5 shadow-solid-8 dark:border dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15 "
            ></motion.div>

            
          </div>
        </div>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
