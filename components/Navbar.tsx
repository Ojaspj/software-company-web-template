"use client";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
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
  // console.log(open)

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
              <Link href="/contact">Build With Us </Link>
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
                      <NavigationMenuList className="flex flex-col w-full  gap-3">
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
                          <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                              <AccordionTrigger>Service</AccordionTrigger>
                              <AccordionContent>
                                <div className="ml-6 mt-2 flex flex-col -space-y-3 text-gray-500">
                                  <Link
                                    href={"/services/web-development"}
                                    onClick={() => setOpen(false)}
                                  >
                                    Web Development
                                  </Link>{" "}
                                  <br />
                                  <Link
                                    href={"/services/web-development"}
                                    onClick={() => setOpen(false)}
                                  >
                                    Mobile App Development
                                  </Link>{" "}
                                  <br />
                                  <Link
                                    href={"/services/web-development"}
                                    onClick={() => setOpen(false)}
                                  >
                                    Ecommerce Solutions
                                  </Link>{" "}
                                  <br />
                                  <Link
                                    href={"/services/web-development"}
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
                          <Link href="/blog" legacyBehavior passHref>
                            <NavigationMenuLink
                              className={navigationMenuTriggerStyle()}
                            >
                              Blogs
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
                        <NavigationMenuItem onClick={() => setOpen(false)}>
                          <Link href="/contact" legacyBehavior passHref>
                            <Button className="bg-[#344A80] hover:bg-[#213872] text-white h-14 w-56 my-4 rounded-none ">
                              Build With Us
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
