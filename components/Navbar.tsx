"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { MobNavMenu, NavMenu } from "./NavMenu";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";

export default function Navbar() {
  const [shadow, setShadow] = useState(false);

  //get shadow while scroll
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={`sticky top-0 z-10 bg-white w-full h-24  flex items-center ${
        shadow ? "shadow-md" : null
      }`}
    >
      <Wrapper>
        <div
          className={`flex  pr-4 h-full w-full   flex-row justify-between items-center `}
        >
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

          {/* build  button */}
          <div className="hidden md:block">
            <Button className="bg-[#344A80] hover:bg-[#213872] text-white h-14 w-auto rounded-none ">
              <Link href="/contact">Build With Us</Link>
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
