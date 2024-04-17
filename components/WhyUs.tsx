import React from "react";
import { Card, CardContent } from "./ui/card";
import Wrapper from "./Wrapper";
import { FaArrowTrendUp } from "react-icons/fa6";

const data = [
  {
    title: "Latest technologies",
    description: "Crafting innovative mobile experiences",
  },
  {
    title: "Fast and quality delivery",
    description:
      "We design solutions that prioritize simplicity and efficiency, offering a seamless experience for our clients.",
  },
  {
    title: "Focused on long term relationships",
    description: "Creating seamless online shopping experiences",
  },
  {
    title: "Certified Developers",
    description: "User-centric design for seamless experiences",
  },
];

export default function WhyUs() {
  return (
    <div className="">
      <div className="mx-0 w-full h-auto lg:h-[50vh] rounded-xl p-4 md:p-10 my-8 flex flex-col  ">
        <Wrapper>
          <div className=" text-center">
            <h2 className=" flex items-center text-center  font-bold my-4 text-lg md:text-xl  md:tracking-tighter">
              OUR FOCUS
            </h2>
          </div>
          <div className=" w-full h-auto flex flex-wrap gap-4 my-4 ">
            <Card className=" p-4 w-full lg:w-[35%] h-[290px]  lg:h-[150px] font-serif rounded-md    cursor-pointer">
              <CardContent className="p-0 flex flex-col gap-4  items-center text-gray-700">
                <FaArrowTrendUp size={30} className="text-[#344A80]" />

                <h1 className=" text-gray-700 font-extrabold md:font-bold text-3xl md:text-3xl tracking-tight ">
                  Latest technologies
                </h1>
              </CardContent>
            </Card>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
