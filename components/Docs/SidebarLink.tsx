"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";

const SidebarLink = () => {
  const t=useTranslations("leases")
  return (
    <>
      <li className="block">
        <Link
          href={`/kurumsal`}
          className={`flex w-full rounded-sm hover:text-blue-500 px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
        >
          Ekdağ A.Ş.
        </Link>
        <Link
          href={`/kurumsal/kiralamalar`}
          className={`flex w-full rounded-sm px-3 hover:text-blue-500 py-2 text-base text-black dark:text-white `}
        >
            {t("leases")}
        </Link>
      </li>
    </>
  );
};

export default SidebarLink;
