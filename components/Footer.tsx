import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import Wrapper from "./Wrapper";

export default function Footer() {
  return (
    <div>
        <Separator />
      <Wrapper>
        <div className="w-full h-[70vh]">
          <div className="w-full flex flex-wrap justify-between py-8">
            <div className=" h-auto w-auto">
              <img
                className="h-20 w-auto"
                src="https://silicontechnepal.com.np/static/media/silicontech-transparent.69d53de28e59ff4b6157.png"
                alt="logo"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex flex-col justify-center md:flex-row w-full md:w-[1010px] md:justify-between  border-green-500 ">
                <div className="flex flex-col h-[300px] w-56  p-8 space-y-4  ">
                  <h1 className=" text-2xl font-bold text-gray-700 tracking-tighter">
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
                  </ul>
                </div>
                <div className="flex flex-col h-[300px] w-70  p-8 space-y-4  ">
                  <h1 className=" text-2xl font-bold text-gray-700 tracking-tighter">
                    What We Do
                  </h1>
                  <ul className="text-lg tracking-tight font-light space-y-2 ">
                    <li className="hover:text-[#344A80]">
                      <Link href="/about">Web Development</Link>
                    </li>
                    <li className="hover:text-[#344A80]">
                      <Link href="/services">Mobile App Development</Link>
                    </li>
                    <li className="hover:text-[#344A80]">
                      <Link href="/career">Ecommerce Solutions</Link>
                    </li>
                    <li className="hover:text-[#344A80]">
                      <Link href="/contact">UI/UX Design</Link>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col h-[300px] w-56  p-8 space-y-4  ">
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
              {/* subscribe  */}
              <div className="flex flex-col md:flex-row md:w-[720px] gap-4 border  rounded-md md:items-center h-auto md:h-32 p-8">
                <h1 className=" text-2xl font-bold text-gray-700 tracking-tighter">
                  Stay updated
                </h1>
                <Input type="text" placeholder="Email" className=" w-72" />
                <Button
                  variant={"link"}
                  className=" hover:bg-[#213872] border hover:text-white hover:no-underline text-[#344A80] h-10 rounded-md w-auto  "
                >
                  <Link href="/">Subscribe for updates</Link>
                </Button>
              </div>
            </div>
          </div>
          <Separator />
          <div className="w-full flex flex-col md:flex-row items-center py-4 md:py-0 justify-between md:h-[80px] text-gray-600  font-light text-md tracking-tight">
            <h1>Copyright 2023, Silicon Tech Nepal Pvt Ltd.</h1>
            <Link href="/" className="hover:text-[#344A80]">Privacy Policy</Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
