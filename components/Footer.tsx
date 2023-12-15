
"use client";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import Wrapper from "./Wrapper";
import { usePathname } from "next/navigation";

export default function Footer() {
  const path = usePathname();
  return (
    <div className={`
    ${
      path.startsWith("/login")
        ? " hidden "
        : "block"
    }
    ${
      path.startsWith("/signup")
        ? " hidden "
        : "block"
    }
    `}
    >
      <Separator />
      <Wrapper>
        <div className="w-full h-auto">
          {/* subscribe  */}

          <div className="flex flex-col md:flex-row md:w-full gap-4 md:items-center md:justify-between h-auto md:h-32 py-4 md:p-8">
            <h1 className=" text-2xl font-bold text-[#213872] tracking-tight">
              Stay updated <br />
              <span className="font-light text-lg">
                we'll keep you posted with the latest updates.
              </span>
            </h1>
            <div className="flex flex-col md:flex-row gap-2 md:gap-3">
              <Input
                type="text"
                placeholder="Email"
                className=" w-72 border  rounded-md h-10 border-gray-200"
              />
              <Button
                variant={"link"}
                className=" hover:bg-[#213872] border hover:text-white hover:no-underline text-[#344A80] h-10 rounded-md w-44 md:w-auto  "
              >
                <Link href="/">Subscribe for updates</Link>
              </Button>
            </div>
          </div>
          <Separator />

          <div className="w-full flex flex-wrap justify-between py-8 ">
            <div className=" h-auto w-auto">
              <img
                className="h-20 w-auto -ml-6 md:-ml-0"
                src="https://silicontechnepal.com.np/static/media/silicontech-transparent.69d53de28e59ff4b6157.png"
                alt="logo"
              />
            </div>
            <div className="flex flex-col mt-4 md:mt-0">
              <div className="flex flex-col justify-center md:flex-row w-full md:w-[1010px] md:justify-between  border-green-500 ">
                <div className="flex flex-col h-[300px] w-70  md:p-8 space-y-4  ">
                  <h1 className=" text-2xl font-bold text-gray-700 tracking-tight">
                    Company
                  </h1>
                  <ul className="text-lg tracking-tight font-light space-y-2 ">
                    <li className="hover:text-[#344A80]">
                      <Link href="/about">About Us</Link>
                    </li>
                    <li className="hover:text-[#344A80]">
                      <Link href="/services">Blogs</Link>
                    </li>
                    <li className="hover:text-[#344A80]">
                      <Link href="/career">Careers</Link>
                    </li>
                    <li className="hover:text-[#344A80]">
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    <li className="hover:text-[#344A80]">
                      <Link href="/become-an-instructor">Become an Instructor</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col h-[300px] w-70  md:p-8 space-y-4  ">
                  <h1 className=" text-2xl font-bold text-gray-700 tracking-tight">
                    What We Do
                  </h1>
                  <ul className="text-lg tracking-tight font-light space-y-2 ">
                    <li className="hover:text-[#344A80]">
                      <Link href="/services/web-development">Web Development</Link>
                    </li>
                    <li className="hover:text-[#344A80]">
                      <Link href="/services/mobile-app-development">Mobile App Development</Link>
                    </li>
                    <li className="hover:text-[#344A80]">
                      <Link href="/services/ecommerce-solutions">Ecommerce Solutions</Link>
                    </li>
                    <li className="hover:text-[#344A80]">
                      <Link href="/services/ui-ux-design">UI/UX Design</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col h-[300px] w-56  md:p-8 space-y-4  ">
                  <h1 className=" text-2xl font-bold text-gray-700 tracking-tighter">
                    Connect
                  </h1>
                  <ul className="text-lg tracking-tight font-light space-y-2 ">
                    <li className="hover:text-[#344A80]">
                      <Link href="/" className="flex items-center gap-1">
                        <FaLinkedin size={25} />
                        Linkedin
                      </Link>
                    </li>
                    <li className="hover:text-[#344A80]">
                      <Link href="/" className="flex items-center gap-1">
                        <FaFacebook size={25} />
                        Facebook
                      </Link>
                    </li>
                    <li className="hover:text-[#344A80]">
                      <Link href="/" className="flex items-center gap-1">
                        <FaTwitter size={25} />
                        Twitter
                      </Link>
                    </li>
                    <li className="hover:text-[#344A80]">
                      <Link href="/" className="flex items-center gap-1">
                        <FaInstagram size={25} />
                        Instagram
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Separator />
          <div className="w-full flex flex-col md:flex-row items-center py-4 lg:py-0 justify-between lg:h-[80px]  text-gray-600  font-light text-md tracking-tight">
            <h1>Copyright 2023, Silicon Tech Nepal Pvt Ltd.</h1>
            <Link href="/" className="hover:text-[#344A80]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
