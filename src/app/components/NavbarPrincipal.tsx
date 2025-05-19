"use client";
import React, { useState } from "react";


import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/shop",
    title: "Shop",
  },
   {
    href: "/arrivals",
    title: "New Arrivals",
  },
  {
    href: "/discounts",
    title: "Discounts",
  },
  {
    href: "/sales",
    title: "Sales",
  },
 
  
];

export default function NavPrincipal() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="text-gray-600 z-60  flex  pl-6 pr-6 ">      
         
      <div className="menu   hidden md:w-auto lg:flex" id="navbar">
        <ul className="lg:flex gap-2  lg:text-md md:flex  py-2.5 pb-3 flex-wrap">
          {navLinks.map((navLink, index) => (
            <li key={index}>
              <NavLink href={navLink.href} title={navLink.title} />
            </li>
          ))}
        </ul>
      </div>
      
      <div className="mobile-menu block md:hidden mr-4 ml-2 ">
      {navbarOpen && <MenuOverlay links={navLinks} />}
        {navbarOpen ? (
          <button
            onClick={() => setNavbarOpen(false)}
            className="items-end p-2 border-2 border-gray-400 text-gray-400 rounded-md "
          >
            <MdOutlineClose className="w-5 h-5" />
            
          </button>
        ) : (
          <button
            onClick={() => setNavbarOpen(true)}
            className="items-end p-2 border-2 border-gray-400 text-gray-400 rounded-md"
          >
            <GiHamburgerMenu className="w-5 h-5" />
          </button>
        )}
       
      
      </div>
     
    </nav>
  );
}
