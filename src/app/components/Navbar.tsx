
import Link from "next/link";
import React from "react";
import { CgShoppingCart } from "react-icons/cg";
import { Button } from "@/components/ui/button";
import {Session} from "@/lib/auth"
import SignOutButton from "./SignOutButton";
import { Badge } from "@/components/ui/badge"

import NavPrincipal from "./NavbarPrincipal";
import SearchBar from "./SearchBar";

//componente de client mira siempre session cliente
async function Navbar({session}:{session:Session|null}) {
  
  return (
    <div className="flex flex-col w-full bg-white sticky  fixed-top top-0  z-50 ">
    

      <nav className="text-xl p-4 flex w-full md:gap-4 lg:gap-10 p-x-20 justify-between md:pl-4 md:pr-4 lg:pl-20 lg:pr-20 z-50">
     
        <Link href="/"><div className="text-3xl text-orange-700 items-start md:pl-2 lg:pl-4 font-bold">SHOP<span className="text-gray-500 ">APP</span></div></Link>
     
      {!session ?  <NavPrincipal/> : "Hello " + session?.user.name||session?.user.email}

      {!session ? (
        <div className="flex gap-4 items-center justify-center">
          <SearchBar/>
          <div className="flex  pb-3">
           < CgShoppingCart  className="text-black text-xl absolute w-8 h-8 items-center"/>
          <Badge className="bg-black text-xs text-white -my-1 mx-5 relative">0</Badge>
         
          </div>
          <Link href="/sign-in">
            <Button variant="default" className=" pt-1 pb-2 px-6 border-1
             hover:border-orange-600 text-sm rounded-full bg-orange-600 hover:bg-gray-100
              text-white hover:text-orange-600 transition-all duration-100 ease-in-out">Sign In</Button>
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
