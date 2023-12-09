"use client";
import React from "react";
import Wrapper from "./Wrapper";
import Lottie from "lottie-react";
import hero from "../public/hero.json";
import { Button } from "./ui/button";
import Services from "./Services";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ReactIcon,
  NextIcon,
  AngularIcon,
  PythonIcon,
  NodeIcon,
  TypescriptIcon,
  PostgresIcon,
  MongodbIcon,
  PhpIcon,
  MysqlIcon,
  FirebaseIcon,
  FlutterIcon,
  KotlinIcon,
} from "./Icon";
import Link from "next/link";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

export default function Main() {
  return (
    <div className="w-full h-auto ">
      <Wrapper>
        {/* front banner  */}
        <div className="flex w-full h-[650px] ">
          {/* left part  */}
          <div className="flex flex-col justify-center w-full  md:w-1/2 h-full ">
            <div>
              <h1 className="  scroll-m-20 text-5xl font-serif font-bold tracking-tight lg:text-7xl">
                Bringing your{" "}
                <span className="  italic text-[#344A80]">ideas and</span>{" "}
                <span className="italic text-[#344A80]">innovations</span> to
                life.
              </h1>
              <h2 className=" text-gray-500 font-light my-4 text-xl">
                From small upgrades to complete structural transformations, <br /> we
                have the expertise to bring your vision to reality.
              </h2>
            </div>
            <div>
              <Button
                variant={"link"}
                className="  ring-2 ring-[#344A80] hover:bg-[#344A80] hover:text-white  font-semibold tracking-tight text-xl my-4 text-[#344A80] hover:no-underline cursor-pointer"
              >
                <Link href="/contact">BUILD WITH US</Link>
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
          <h2 className=" text-gray-400 font-light my-4 text-xl">
            We have helped many companies and startups to <br /> build their
            products and launch faster.
          </h2>
        </div>
      </Wrapper>
      {/* our services  */}
      <Services />
      {/* tech stack  */}
      <Wrapper>
        <div className="flex flex-col w-full h-auto  py-14">
          <div>
            <h1 className=" text-5xl font-bold font-serif text-center">
              Tech Stack
            </h1>
            <h2 className=" text-gray-400 font-light my-2 text-xl text-center">
              We use the latest technologies <br /> to build product.
            </h2>
          </div>
          <Tabs
            defaultValue="frontend"
            className="w-full h-auto mt-8 flex flex-col justify-center"
          >
            <TabsList>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="database">Databases</TabsTrigger>
              <TabsTrigger value="mobile-app">
                Mobile App Development
              </TabsTrigger>
            </TabsList>
            <div className="my-4 p-4 flex items-center justify-center h-auto md:h-60 w-full">
              <TabsContent value="frontend">
                <div className="flex flex-wrap gap-8">
                  <ReactIcon />
                  <NextIcon />
                  <AngularIcon />
                </div>
              </TabsContent>
              <TabsContent value="backend">
                <div className="flex flex-wrap gap-8">
                  <PythonIcon />
                  <NodeIcon />
                  <TypescriptIcon />
                  <PhpIcon />
                </div>
              </TabsContent>
              <TabsContent value="database">
                <div className="flex flex-wrap gap-8">
                  <PostgresIcon />
                  <MongodbIcon />
                  <MysqlIcon />
                  <FirebaseIcon />
                </div>
              </TabsContent>
              <TabsContent value="mobile-app">
                <div className="flex flex-wrap  gap-8">
                  <FlutterIcon />
                  <KotlinIcon />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
        {/* footer  */}
        
        
      </Wrapper>
    </div>
  );
}
