
import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import {Session} from "../../lib/auth"
import SignOutButton from "./SignOutButton";

import Discount from "./Discount";
import NavPrincipal from "./NavbarPrincipal";

//componente de client mira siempre session cliente
async function Navbar({session}:{session:Session|null}) {
  
  return (
    <div className="flex flex-col w-full  sticky shadow1 fixed-top top-0  z-50">
      <Discount/>

      <nav className="text-xl p-4 flex w-full md:gap-4 lg:gap-10 p-x-20 justify-between md:pl-4 md:pr-4 lg:pl-20 lg:pr-20 z-50">
     
        <Link href="/"><div className="text-3xl text-amber-700 items-start md:pl-2 lg:pl-10 font-bold">SHOP<span className="text-gray-500 ">APP</span></div></Link>
     
      {!session ?  <NavPrincipal/> : "Hello " + session.user.name}
      {!session ? (
        <div className="flex gap-4">
          <Link href="/sign-in">
            <Button variant="default" className=" pt-1 pb-2 px-3 hover:border-1 hover:border-gray-400 text-sm rounded-full bg-gray-200 text-amber-600 hover:bg-gray-300 transition-all duration-100 ease-in-out">Sign In</Button>
          </Link>
          <Link href="/sign-up">
            <Button variant="default"  className=" pt-1 pb-2 px-3 hover:border-1 hover:border-gray-400 text-sm rounded-full bg-gray-200 text-amber-600 hover:bg-gray-300 transition-all duration-100 ease-in-out">Sign Up</Button>
          </Link>
        </div>
      ) : (
        <SignOutButton />
      )}

     
    </nav>
    </div>
    
  );
}

export default Navbar;
