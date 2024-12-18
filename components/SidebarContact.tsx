import Link from "next/link";

const SidebarContact = () => {
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
          Kiralamalar
        </Link>
      </li>
    </>
  );
};

export default SidebarContact;
