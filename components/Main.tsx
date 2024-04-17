"use client";
import React from "react";
import Wrapper from "./Wrapper";
import Lottie from "lottie-react";
import hero from "../public/hero.json";
import { Button } from "./ui/button";
import Services from "./Services";
import { courses } from "@/lib/courses-data";

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
import { CourseBanner } from "./CourseBanner";
import CourseCard from "./CourseCard";
import { ClientsReviewSlider } from "./ClientsReviewSlider";
import CourseCategoryBanner from "./CourseCategoryBanner";

export default function Main() {
  return (
    <div className="w-full h-auto ">
      <Wrapper>
        {/* front banner  */}
        <div className="flex w-full h-auto ">
          {/* left part  */}
          <div className="flex flex-col  mt-28 mb-60 md:justify-center w-full  md:w-1/2 h-full ">
            <div>
              <h1 className=" text-5xl lg:text-8xl   tracking-tighter ">
                Bringing your{" "}
                <span className="   text-[#344A80]">ideas and</span>{" "}
                <span className="  text-[#344A80]">innovations</span> to
                life.
              </h1>
              <h2 className=" text-gray-500 font-light tracking-tight my-4 text-lg md:text-xl">
                From small upgrades to complete structural transformations,{" "}
                <br /> we have the expertise to bring your vision to reality.
              </h2>
            </div>
            <div>
              <Button
                variant={"link"}
                className="  ring-2 ring-[#344A80] hover:bg-[#344A80] hover:text-white  font-semibold tracking-tight text-md md:text-xl my-4 text-[#344A80] hover:no-underline cursor-pointer"
              >
                <Link href="/contact">GET STARTED</Link>
              </Button>
            </div>
          </div>
          {/* right part  */}
          <div className="hidden  md:flex items-center justify-center w-1/2 h-full">
            <div className="w-auto h-auto ">
              <Lottie animationData={hero} />
            </div>
          </div>
        </div>
        {/* trsuted by companies  */}
        <div className="w-full h-[70vh] text-center md:p-10 my-0 md:my-14 flex flex-col  items-center">
          <h1 className=" text-3xl lg:text-6xl font-bold  ">
            Trusted by <span className="text-[#344A80]">100+</span> companies{" "}
            <br className="hidden md:block" />
            and new ventures
          </h1>
          <h2 className=" text-gray-500 font-light my-4 tracking-tight text-lg lg:text-xl">
            We have helped many companies and startups to{" "}
            <br className="hidden md:flex" /> build their products and launch
            faster.
          </h2>
          <div className="flex flex-wrap gap-20 mt-8 border w-full md:w-[800px] h-[300px] justify-center items-center">
            <h1 className="font-light text-gray-500  text-lg">logos here</h1>
          </div>
        </div>
      </Wrapper>
      {/* our services  */}
      <Services />
      {/* tech stack  */}
      <Wrapper>
        <div className="flex flex-col w-full h-auto py-20">
          <div>
            <h1 className=" text-4xl lg:text-6xl font-bold  text-center">
              Tech Stack
            </h1>
            <h2 className=" text-gray-500 font-light my-2 tracking-tight text-lg md:text-xl text-center">
              We use latest technologies <br /> to build product.
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
      </Wrapper>
      <CourseCategoryBanner />
      <CourseBanner />
      <Wrapper>
        <div className="w-full h-auto my-20 ">
          <div>
            <h1 className=" text-4xl lg:text-6xl font-bold  text-center">
              Top Courses
            </h1>
            <h2 className=" text-gray-500 font-light my-2 tracking-tight text-lg md:text-xl text-center">
              We offer a variety of courses to help you get started.
            </h2>
          </div>
          <div className="flex flex-wrap gap-8 justify-center my-12">
            {courses.slice(0, 3).map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </div>
        {/* clients  */}
        <div className="  w-full h-auto my-20 bg-accent py-12 rounded-xl ">
          <div className="flex flex-col justify-center items-center ">
            <div className="">
              <h1 className=" text-4xl md:text-6xl font-bold  text-center">
                Client Reviews
              </h1>
              <h2 className=" text-gray-500 font-light my-2 tracking-tight text-lg md:text-xl text-center">
                We have worked with many clients.
              </h2>
            </div>
            <div className="flex justify-center my-8 ">

            <ClientsReviewSlider />
            </div>

            
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
