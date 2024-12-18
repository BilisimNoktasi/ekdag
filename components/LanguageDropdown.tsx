"use client";
import { Link } from "@/i18n/routing";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function LanguageDropdown({
  navigationOpen,
  stickyMenu,
}: {
  navigationOpen: boolean;
  stickyMenu: boolean;
}) {
  const params = useParams();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`${stickyMenu ? 'text-black': navigationOpen ? 'text-black':'text-white'} border uppercase flex flex-row items-center rounded px-2`}
      >
        {params?.locale} <IoIosArrowDown />
      </button>
      <ul
        className={`${open ? "flex flex-col w-full bg-white absolute items-center rounded border border-black" : "hidden"} text-black`}
      >
        <li className="border-b hover:text-blue-600">
          <Link href="/" locale="tr">
            TR
          </Link>
        </li>
        <li className="border-b hover:text-blue-600">
          <Link href="/" locale="en">
            EN
          </Link>
        </li>
      </ul>
    </div>
  );
}
