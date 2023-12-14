"use client";
import React, { useEffect, useState } from "react";

import Wrapper from "./Wrapper";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@radix-ui/react-accordion";
import { NavMenu } from "./NavMenu";

export default function Navbar() {
  const [shadow, setShadow] = useState(false);
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      className={`sticky top-0 z-20 bg-white w-full h-24  flex items-center ${
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
              <Link href={"/"}>
                <img
                  className="h-24 w-auto"
                  src="https://silicontechnepal.com.np/static/media/silicontech-transparent.69d53de28e59ff4b6157.png"
                  alt="logo"
                />
              </Link>
            </div>
          </div>
          {/* nav menus  */}
          <div className="">
            <NavMenu />
          </div>

          {/* build  button */}
          <div className="hidden md:block">
            <Button
              variant={"link"}
              className=" w-auto h-14 border p-4 transition-transform  hover:scale-110 rounded-none border-gray-700 bg-gray-700 hover:bg-[#213872] text-white hover:text-white  tracking-tight text-lg  hover:no-underline cursor-pointer"
            >
              <Link href={"/contact"}>BUILD WITH US</Link>
            </Button>
          </div>

          {/* mobile menu  */}

          <div className="block md:hidden ">
            <Sheet open={open}>
              <SheetTrigger asChild>
                <div onClick={() => setOpen(true)}>
                  <Menu size={30} />
                </div>
              </SheetTrigger>
              <SheetContent side={"left"} className="flex ">
                <div className="flex flex-col w-full relative">
                  <div
                    onClick={() => setOpen(false)}
                    className=" cursor-pointer absolute right-0 top-0 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
                  >
                    <X />
                  </div>
                  <div>
                    <img
                      onClick={() => setOpen(false)}
                      className="h-20 w-auto"
                      src="https://silicontechnepal.com.np/static/media/silicontech-transparent.69d53de28e59ff4b6157.png"
                      alt="logo"
                    />
                  </div>
                  {/* mobile menu  */}
                  <div className="my-8 ">
                    <NavigationMenu className="block md:hidden ">
                      <NavigationMenuList className=" flex flex-col w-full  gap-3">
                        <NavigationMenuItem onClick={() => setOpen(false)}>
                          <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              Home
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                          <Accordion
                            type="single"

                            collapsible
                            className=" w-[200px]"
                          >
                            <AccordionItem value="item-1">
                              <AccordionTrigger className="text-lg text-gray-500 tracking-tight outline-none  font-light ">
                                Service
                              </AccordionTrigger>
                              <AccordionContent>
                                <div className="ml-2 mt-2 flex flex-col text-gray-500">
                                  <Link
                                    href={"/services/web-development"}
                                    onClick={() => setOpen(false)}
                                  >
                                    Web Development
                                  </Link>{" "}
                                  <br />
                                  <Link
                                    href={"/services/mobile-app-development"}
                                    onClick={() => setOpen(false)}
                                  >
                                    Mobile App Development
                                  </Link>{" "}
                                  <br />
                                  <Link
                                    href={"/services/ecommerce-solutions"}
                                    onClick={() => setOpen(false)}
                                  >
                                    Ecommerce Solutions
                                  </Link>{" "}
                                  <br />
                                  <Link
                                    href={"/services/ui-ux-design"}
                                    onClick={() => setOpen(false)}
                                  >
                                    UI/UX Design
                                  </Link>
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                          
                        </NavigationMenuItem>
                        <NavigationMenuItem onClick={() => setOpen(false)}>
                          <Link href="/careers" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              Join
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem onClick={() => setOpen(false)}>
                          <Link href="/blogs" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              Blogs
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem onClick={() => setOpen(false)}>
                          <Link href="/course" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              Course
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem onClick={() => setOpen(false)}>
                          <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              About
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem className=" w-56" onClick={() => setOpen(false)}>
                          <Link href="/contact" legacyBehavior passHref>
                            <Button
                              variant={"link"}
                              className=" w-full border p-3 h-full transition-transform hover:border-white hover:scale-110 rounded-none border-gray-700 bg-gray-700 hover:bg-[#213872] text-white hover:text-white  tracking-tighter text-lg my-4 hover:no-underline cursor-pointer"
                            >
                              BUILD WITH US
                            </Button>
                          </Link>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
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
