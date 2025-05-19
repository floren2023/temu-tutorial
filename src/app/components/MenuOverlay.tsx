
"use client"
import React from "react";
import { usePathname } from "next/navigation";
import {motion} from "framer-motion"
import Link from "next/link";

interface linkNav
  {
    href:string,
    title:string
  }



function MenuOverlay({ links }:{links:linkNav[]}) {
     const pathname = usePathname();
  return (
    <motion.ul
    whileInView={{opacity:1, y:0}}
    initial={{opacity:0, y:-100}}
    transition={{duration:0.5}}
      className=" lg:hidden    md:flex md:flex-col sm:flex sm:flex-col w-[250px]
         items-center  fixed top-20  right-4 mx-auto z-50  bg-gray-300 
          rounded-md  "
    >
      {links.map((link, index) => (
        <li
          key={index}
          className="border-b-2 border-gray-200 text-center w-full  "
        >
          <Link
           
            href={link.href} 
                >
                    <div 
            className={
              pathname ===link.href
                ? "text-md  cursor-pointer bg-gray-200 text-orange-400  uppercase py-10 w-full duration-300 ease-in-out"
                : "text-gray-500 text-md   hover:text-orange-600 hover:bg-gray-200 cursor-pointer duration-300 ease-in-out hover:ease-[cubic-bezier(0.95,0.05,0.795,0.035)] uppercase py-10 w-full"
            }
          >
            {" "}
            {link.title}
            </div>
          </Link>
        </li>
      ))}
    </motion.ul>
  );
}

export default MenuOverlay;
