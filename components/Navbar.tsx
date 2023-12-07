"use client";
import React, { useState } from "react";
import Wrapper from "./Wrapper";
import { MobNavMenu, NavMenu } from "./NavMenu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="w-full h-24 shadow-md flex items-center">
      <Wrapper>
        <div className="flex  pr-4 h-full w-full  flex-row justify-between items-center">
          {/* logo  */}
          <div className="">
            <div className="">
              <img
                className="h-20 w-auto"
                src="https://silicontechnepal.com.np/static/media/silicontech-transparent.69d53de28e59ff4b6157.png"
                alt="logo"
              />
            </div>
          </div>
          {/* nav menus  */}
          <div className="">
            <NavMenu />
          </div>
          {/* dark :213872 */}
          {/* base :344A80  */}
          {/* build  button */}
          <div className="hidden md:block">
            <Button className="bg-[#344A80] hover:bg-[#213872] text-white h-14 w-auto rounded-none ">
              Build With Us
            </Button>
          </div>
          {/* mobile menu  */}
          <div className="block md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Menu size={30} />
              </SheetTrigger>
              <SheetContent side={"left"} className="flex">
                <div className="flex flex-col w-full">
                  <img
                    className="h-20 w-auto"
                    src="https://silicontechnepal.com.np/static/media/silicontech-transparent.69d53de28e59ff4b6157.png"
                    alt="logo"
                  />
                  <div className="my-8">
                    <MobNavMenu />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Wrapper> 
    </div>
  );
}
