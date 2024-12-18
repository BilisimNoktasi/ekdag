import Link from "next/link";
import React from "react";

export default function NewsCard() {
  return (
    <Link
      href="#"
      className="block max-w-sm bg-white border border-gray-200 rounded-lg shadow"
    >
        <img src="/images/ataturk-park/ataturk-park-sosyal-tesis-1.jpg" />
      <h5 className="p-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal px-3 py-2 text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Link>
  );
}
