import React from 'react'
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";


export default function Services() {
  return (
    <div>
        <div className="mx-0 w-full h-auto lg:h-[80vh] rounded-xl p-4 md:p-10 my-8 flex flex-col bg-black text-white ">
        <div className=" text-left">
          <h1 className=" text-6xl font-bold font-serif "></h1>
          <h2 className=" flex items-center  font-light my-4 text-lg md:text-xl  md:tracking-tighter">
            Choose from our broad selection of services
            <Separator className="block w-[30%] md:w-[70%] md:ml-7 bg-gray-700 " />
          </h2>
        </div>
        <div className=" w-full h-auto flex flex-wrap gap-6 my-4 ">
          <Card className=" bg-black text-white border-gray-700 hover:bg-[#213872]  hover:border-none  w-full lg:w-[49%] h-[290px]  lg:h-[210px] py-6 font-serif rounded-md   hover:text-white cursor-pointer">
            <CardContent>
              <h1 className=" font-extrabold md:font-bold text-3xl md:text-5xl tracking-tight ">
                Web Development
              </h1>

              <ul className="px-8 list-disc font-light mt-2 text-lg md:text-lg tracking-wide">
                <li>Building dynamic and responsive web solutions</li>
                <li>Scalable web app development services </li>
              </ul>

              <Button
                variant={"link"}
                className=" w-32 border p-2 transition-transform hover:border-white hover:scale-110 rounded-full border-gray-700 bg-black hover:bg-[#213872] text-white hover:text-white  tracking-tight text-lg my-4 hover:no-underline cursor-pointer"
              >
                Learn more
              </Button>
            </CardContent>
          </Card>
          <Card className=" bg-black text-white border-gray-700 hover:bg-[#213872]  hover:border-none  w-full lg:w-[49%] h-[290px] lg:h-[210px] py-6 font-serif rounded-md   hover:text-white cursor-pointer">
            <CardContent>
              <h1 className=" font-extrabold md:font-bold text-3xl md:text-5xl tracking-tight ">
                Mobile App Development
              </h1>

              <ul className="px-8 list-disc font-light mt-2 text-lg tracking-wide">
                <li>Crafting innovative mobile experiences</li>
                <li>iOS and android app development services</li>
              </ul>

              <Button
                variant={"link"}
                className=" w-32 border p-2 transition-transform hover:border-white hover:scale-110 rounded-full border-gray-700 bg-black hover:bg-[#213872] text-white hover:text-white  tracking-tight text-lg my-4 hover:no-underline cursor-pointer"
              >
                Learn more
              </Button>
            </CardContent>
          </Card>
          <Card className=" bg-black text-white border-gray-700 hover:bg-[#213872]  hover:border-none  w-full lg:w-[49%] h-[290px] lg:h-[210px] py-6 font-serif rounded-md   hover:text-white cursor-pointer">
            <CardContent>
              <h1 className=" font-extrabold md:font-bold text-3xl md:text-5xl tracking-tight ">
                E-commerce Solutions
              </h1>

              <ul className="px-8 list-disc font-light mt-2 text-lg tracking-wide">
                <li>Creating seamless online shopping experiences</li>
                <li>End-to-end e-commerce development services</li>
              </ul>

              <Button
                variant={"link"}
                className=" w-32 border p-2 transition-transform hover:border-white hover:scale-110 rounded-full border-gray-700 bg-black hover:bg-[#213872] text-white hover:text-white  tracking-tight text-lg my-4 hover:no-underline cursor-pointer"
              >
                Learn more
              </Button>
            </CardContent>
          </Card>
          <Card className=" bg-black text-white border-gray-700 hover:bg-[#213872]  hover:border-none  w-full lg:w-[49%] h-[290px] lg:h-[210px] py-6 font-serif rounded-md   hover:text-white cursor-pointer">
            <CardContent>
              <h1 className=" font-extrabold md:font-bold text-3xl md:text-5xl tracking-tight ">
                UI/UX Design
              </h1>

              <ul className="px-8 list-disc font-light mt-2 text-lg tracking-wide">
                <li>User-centric design for seamless experiences</li>
                <li>Intuitive and engaging interface design</li>
              </ul>

              <Button
                variant={"link"}
                className=" w-32 border p-2 transition-transform hover:border-white hover:scale-110 rounded-full border-gray-700 bg-black hover:bg-[#213872] text-white hover:text-white  tracking-tight text-lg my-4 hover:no-underline cursor-pointer"
              >
                Learn more
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
