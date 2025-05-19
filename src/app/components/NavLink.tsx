"use client";
import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

function NavLink({ href, title }:{href:string , title:string}) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={
        pathname === href
          ? "text-sm md:px-2 lg:px-6 py-2 cursor-pointer font-medium duration-200 ease-in-out  tranzition-all rounded-full bg-orange-600 text-white "
          : "text-black text-sm font-medium  hover:text-orange-700 hover:bg-gray-200 rounded-full md:px-2 lg:px-6 py-2 border-1 hover:border-gray-400 cursor-pointer duration-200 ease-in-out"
      }
    >
      {" "}
      {title}
    </Link>
  );
}

export default NavLink;
