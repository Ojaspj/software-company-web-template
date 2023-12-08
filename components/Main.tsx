"use client";
import React from "react";
import Wrapper from "./Wrapper";
import Lottie from "lottie-react";
import hero from "../public/hero.json";
import { Button } from "./ui/button";
import Services from "./Services";

export default function Main() {
  return (
    <div className="w-full h-auto ">
      <Wrapper>
        {/* front banner  */}
        <div className="flex w-full h-[650px] ">
          {/* left part  */}
          <div className="flex flex-col justify-center w-full  md:w-1/2 h-full ">
            <div>
              <h1 className="  scroll-m-20 text-4xl font-serif font-bold tracking-tight lg:text-7xl">
                Bringing your{" "}
                <span className="  italic text-[#344A80]">ideas and</span>{" "}
                <span className="italic text-[#344A80]">innovations</span> to
                life.
              </h1>
              <h2 className=" text-gray-500 font-light my-4 text-xl">
                From small upgrades to complete structural transformations, we
                have the expertise to bring your vision to reality.
              </h2>
            </div>
            <div>
              <Button
                variant={"link"}
                className="  ring-2 ring-[#344A80] hover:bg-[#344A80] hover:text-white  font-semibold tracking-tight text-xl my-4 text-[#344A80] hover:no-underline cursor-pointer"
              >
                BUILD WITH US
              </Button>
            </div>
          </div>
          {/* right part  */}
          <div className="hidden  md:flex items-center justify-center w-1/2 h-full order border-red-500">
            <div className="w-auto h-auto borer border-green-300">
              <Lottie animationData={hero} />
            </div>
          </div>
        </div>
        {/* trsuted by companies  */}
        <div className="w-full h-[80vh] border-2 text-center p-10 my-8 flex flex-col  items-center">
          <h1 className=" text-6xl font-bold font-serif ">
            Trusted by <span className="text-[#344A80]">100+</span> companies
            and new ventures
          </h1>
          <h2 className=" text-gray-500 font-light my-4 text-xl">
            We have helped many companies and startups to build their products
            and launch faster.
          </h2>
        </div>
      </Wrapper>
      {/* our services  */}
      <Services />
    </div>
  );
}
