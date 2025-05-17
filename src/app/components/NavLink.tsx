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
          ? "text-md  cursor-pointer  text-amber-700 duration-200 ease-in-out"
          : "text-gray-400 text-md   hover:text-amber-700 hover:bg-gray-200 rounded-full pt-1 pb-2 px-3 hover:border-1 hover:border-gray-400 cursor-pointer duration-300 ease-in-out"
      }
    >
      {" "}
      {title}
    </Link>
  );
}

export default NavLink;
