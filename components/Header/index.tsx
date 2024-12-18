"use client";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useEffect, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";


import menuData from "./menuData";
import { useTranslations } from "next-intl";
import LanguageDropdown from "../LanguageDropdown";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({});

  const t = useTranslations('HeaderLink')
  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 30) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  const toggleDropdown = (menuId) => {
    setDropdownStates((prev) => ({
      ...prev,
      [menuId]: !prev[menuId], // İlgili menü durumunu değiştir
    }));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });
  // boxShadow: 'inset 0 50px 40px -20px rgba(0, 0, 0, 0.8)',
  return (
    <header
    className={`fixed left-0 top-0 z-999 w-full py-7 ${
      stickyMenu
        ? "bg-white !py-4 transition duration-100 shadow-md"
        : "md:shadow-[inset_0_50px_45px_-20px_rgba(0,0,0,0.7)] sm:shadow-none !py-4 border-none"
    }`}
  >
    <div className="relative mx-auto max-w-c-1390 items-center justify-between px-4 md:px-8 xl:flex 2xl:px-0">
      <div className="flex w-full items-center justify-between xl:w-1/4">
        <Link href="/">
          <Image
            src="/ekdag-ekmek-logo-800.png"
            alt="logo"
            width={119.03}
            height={30}
            className="hidden w-full dark:block"
          />
          <Image
            src="/ekdag-ekmek-logo-800.png"
            alt="logo"
            width={119.03}
            height={30}
            className="w-full dark:hidden"
          />
        </Link>
        
        {/* Hamburger Toggle BTN */}
        
        <button
          aria-label="hamburger Toggler"
          className="block xl:hidden"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          <span className="relative block h-5.5 w-5.5 cursor-pointer">
            <span className="absolute right-0 block h-full w-full">
              <span
                className={`xl:bg-white lg:bg-black sm:bg-black md:bg-black relative left-0 top-0 my-1 block h-0.5 rounded-sm delay-[0] duration-200 ease-in-out ${
                  !navigationOpen ? "!w-full delay-300 bg-black" : "w-0"
                }`}
              ></span>
              <span
                className={`xl:bg-white lg:bg-black sm:bg-black md:bg-black relative left-0 top-0 my-1 block h-0.5 rounded-sm delay-150 duration-200 ease-in-out ${
                  !navigationOpen ? "delay-400 !w-full bg-black" : "w-0"
                }`}
              ></span>
              <span
                className={`xl:bg-white lg:bg-black sm:bg-black md:bg-black relative left-0 top-0 my-1 block h-0.5 rounded-sm delay-200 duration-200 ease-in-out ${
                  !navigationOpen ? "!w-full delay-500 bg-black" : "w-0"
                }`}
              ></span>
            </span>
            <span className="du-block absolute right-0 h-full w-full rotate-45">
              <span
                className={`xl:bg-white lg:bg-black sm:bg-black md:bg-black absolute left-2.5 top-0 block h-full w-0.5 rounded-sm delay-300 duration-200 ease-in-out ${
                  !navigationOpen ? "!h-0 delay-[0] bg-black" : "h-full bg-black"
                }`}
              ></span>
              <span
                className={`xl:bg-white lg:bg-black sm:bg-black md:bg-black delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm duration-200 ease-in-out ${
                  !navigationOpen ? "!h-0 delay-200 bg-black" : "h-0.5 bg-black"
                }`}
              ></span>
            </span>
          </span>
        </button>
        {/* Hamburger Toggle BTN */}
      </div>
  
      {/* Nav Menu Start */}
      <div
        className={`invisible h-0 w-full items-center justify-between xl:visible xl:flex xl:h-auto xl:w-full ${
          navigationOpen &&
          "navbar !visible mt-4 h-auto max-h-fit rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
        }`}
      >
        <nav className="relative">
        {
            navigationOpen ? (
              <div className="absolute right-1">
            <LanguageDropdown stickyMenu={stickyMenu} navigationOpen={navigationOpen} />
            </div>
          ): null
          }
          <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
          {menuData.map((menuItem, index) => (
  <li key={index} className={menuItem.submenu && "group relative"}>
    {menuItem.submenu ? (
      <>
        <button
          onClick={() => {
            toggleDropdown(menuItem.id);
          }}
          className={`${stickyMenu ? 'text-black': navigationOpen ? 'text-black':'text-white'} uppercase font-medium flex transition-all cursor-pointer items-center justify-between gap-3 hover:text-gray-300`}
        >
          {t(menuItem.title)} 
          <span>
            <svg
              className={`${stickyMenu ? 'fill-black': navigationOpen ? 'fill-black':'fill-white'} h-3 w-3 cursor-pointer group-hover:fill-gray-300`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </span>
        </button>

        <ul className={`dropdown ${dropdownStates[menuItem.id] ? "flex" : ""}`}>
          {menuItem.submenu.map((item) => (
            <li key={item.id} className={`${stickyMenu ? 'sm:text-black md:text-black':'sm:text-black md:text-black'}`}>
              <Link
                onClick={() => setNavigationOpen(false)} // Menü kapanır
                href={item.path || "#"}
              >
                {t(item.title)}
              </Link>
            </li>
          ))}
        </ul>
      </>
    ) : (
      <Link
        onClick={() => setNavigationOpen(false)} // Menü kapanır
        href={`${menuItem.path}`}
        className={`${stickyMenu ? 'text-black': navigationOpen ? 'text-black':'text-white'} transition-all font-medium hover:text-gray-300 uppercase`}
      >
        {t(menuItem.title)}
      </Link>
    )}
  </li>
))}
          </ul>
        </nav>
  
        <div className={`mt-7 flex items-center gap-6 xl:mt-0`}>
          {
            !navigationOpen ? (<LanguageDropdown stickyMenu={stickyMenu} navigationOpen={navigationOpen} />): null
          }
        
          {/* <ThemeToggler /> */}
          <Link
            href="https://www.instagram.com/abbsosyaltesisi/"
            target="_blank"
          >
            <BsInstagram className={`${stickyMenu ? 'text-black':navigationOpen ? 'text-black':'text-white'}`} size={20} />
          </Link>
          <Link href="https://www.facebook.com/EKDAG.Tesisleri/" target="_blank">
            <FaFacebook className={`${stickyMenu ? 'text-black': navigationOpen ? 'text-black':'text-white'}`} size={20} />
          </Link>
          <Link href="https://twitter.com/abbsosyaltesisi" target="_blank">
            <FaXTwitter className={`${stickyMenu ? 'text-black': navigationOpen ? 'text-black':'text-white'}`} size={20} />
          </Link>
        </div>
      </div>
    </div>
  </header>
  );
};

// w-full delay-300

export default Header;
