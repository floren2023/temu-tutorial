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
    href: "/products",
    title: "Products",
  },
  {
    href: "/discounts",
    title: "Discounts",
  },
  {
    href: "/sales",
    title: "Sales",
  },
  {
    href: "/about",
    title: "About",
  },

 
  {
    href: "/contact",
    title: "Contact",
  },
  
];

export default function NavPrincipal() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="text-gray-600 z-60">      
         
      <div className="menu  md:block hidden md:w-auto lg:flex" id="navbar">
        <ul className="lg:flex md:gap-2 lg:gap-4 md:text-sm lg:text-md md:flex md:space-x-2 py-2 ">
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
            className="items-end p-2 border-2 border-slate-200 text-slate-200 rounded-md "
          >
            <MdOutlineClose className="w-5 h-5" />
            
          </button>
        ) : (
          <button
            onClick={() => setNavbarOpen(true)}
            className="items-end p-2 border-2 border-slate-200 text-slate-200 rounded-md"
          >
            <GiHamburgerMenu className="w-5 h-5" />
          </button>
        )}
       
      
      </div>
     
    </nav>
  );
}
