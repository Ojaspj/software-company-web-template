import React from "react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const data = [
  {
    title: "Web Development",
    description: "Building dynamic and responsive web solutions",
    description2: "Scalable web app development services",
  },
  {
    title: "Mobile App Development",
    description: "Crafting innovative mobile experiences",
    description2: "iOS and android app development services",
  },
  {
    title: "E-commerce Solutions",
    description: "Creating seamless online shopping experiences",
    description2: "End-to-end e-commerce development services",
  },
  {
    title: "UI/UX Design",
    description: "User-centric design for seamless experiences",
    description2: "Intuitive and engaging interface design",
  },
];

export default function Services() {
  return (
    <div>
      <div className="mx-0 w-full h-auto lg:h-[80vh] rounded-xl p-4 md:p-10 my-8 flex flex-col bg-black text-white ">
        <div className=" text-left">
          <h1 className=" text-6xl font-bold  "></h1>
          <h2 className=" flex items-center  font-light my-4 text-lg md:text-xl  md:tracking-tighter">
            Choose from our broad selection of services
            <Separator className="block w-[30%] md:w-[70%] md:ml-7 bg-gray-700 " />
          </h2>
        </div>
        <div className=" w-full h-auto flex flex-wrap gap-6 my-4 ">
          {data.map((item, index) => (
            <Card className=" bg-black text-white border-gray-700 hover:bg-[#213872]  hover:border-none  w-full lg:w-[49%] h-[290px]  lg:h-[210px] py-6  rounded-md   hover:text-white cursor-pointer">
              <CardContent>
                <h1 className=" font-extrabold md:font-bold text-3xl md:text-5xl tracking-tight ">
                  {item.title}
                </h1>

                <ul className="px-8 list-disc font-light mt-2 text-lg md:text-lg tracking-wide">
                  <li>{item.description}</li>
                  <li>{item.description2}</li>
                </ul>

                <Button
                  variant={"link"}
                  className=" w-32 border p-2 transition-transform hover:border-white hover:scale-110 rounded-full border-gray-700 bg-black hover:bg-[#213872] text-white hover:text-white  tracking-tight text-lg my-4 hover:no-underline cursor-pointer"
                >
                  Learn more
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
