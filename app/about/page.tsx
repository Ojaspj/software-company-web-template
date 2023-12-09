import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";

const data = [
  {
    id: 1,
    name: "Mr.Joshi",
    role: "CEO",
    link: "https://linkedin.com",
    image:
      "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 1,
    name: "Mr.Joshi",
    role: "CEO",
    link: "https://linkedin.com",

    image:
      "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 1,
    name: "Mr.Joshi",
    role: "CEO",
    link: "https://linkedin.com",

    image:
      "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 1,
    name: "Mr.Joshi",
    role: "CEO",
    link: "https://linkedin.com",

    image:
      "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 1,
    name: "Mr.Joshi",
    role: "CEO",
    link: "https://linkedin.com",

    image:
      "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 1,
    name: "Mr.Joshi",
    role: "CEO",
    link: "https://linkedin.com",

    image:
      "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function About() {
  return (
    <div className="w-full min-h-screen h-auto ">
      <Wrapper>
        <div className="  w-full h-full px-2 md:px-6 py-8 md:py-14">
          {/* main front */}
          <div className="flex h-screen md:h-[70vh]">
            {/* left part  */}
            <div className="w-full  flex flex-col items-center justify-center">
              <h1 className=" text-xl tracking-tighter text-gray-600 font-bold">ABOUT US</h1>
              <h1 className=" text-center mt-4 text-5xl font-serif font-bold tracking-tight lg:text-7xl">
                <span className="   text-[#344A80]">Designing</span> the future <br />
                with excellence.
              </h1>
              <h2 className=" text-gray-500 font-light my-4 text-lg md:text-xl text-center">
                <span className="text-[#344A80] font-semibold">
                  Silicon Tech
                </span>
                , formed by a team of highly skilled and experienced developers, <br />
                designers and project managers. We are passionate about building
                great products and worked <br /> with startups and enterprises to help
                them build their products and launch faster.
              </h2>
              <div>
                <Button
                  variant={"link"}
                  className="  ring-2 ring-[#344A80] hover:bg-[#344A80] hover:text-white  font-semibold tracking-tight text-xl my-4 text-[#344A80] hover:no-underline cursor-pointer"
                >
                  <Link href="/contact">GET IN TOUCH</Link>
                </Button>
              </div>
            </div>
            {/* right part  */}
            {/* <div className="w-1/2 h-full border flex flex-col justify-center"></div> */}
          </div>
        </div>
      </Wrapper>
      {/* years client and teams number  */}
      <div className="flex flex-col md:flex-row justify-center gap-10 w-auto p-20 h-auto bg-accent  my-8  font-bold text-5xl">
        <div className="  flex flex-col justify-center items-center w-auto md:w-60 h-24 ">
          <h1 className="text-[#344A80] font-serif">100+</h1>
          <h2 className=" text-gray-500 font-light my-2 text-lg tracking-tighter  text-left">
            Delighted Partnerships
          </h2>
        </div>
        <div className="  flex flex-col justify-center items-center w-auto md:w-60 h-24 ">
          <h1 className="text-[#344A80] font-serif">4+</h1>
          <h2 className=" text-gray-500 font-light my-2 text-lg tracking-tighter  text-left">
            Years of innovation
          </h2>
        </div>
        <div className="  flex flex-col justify-center items-center w-auto md:w-60 h-24 ">
          <h1 className="text-[#344A80] font-serif">10+</h1>
          <h2 className=" text-gray-500 font-light my-2 text-lg tracking-tighter  text-left">
            Team Member
          </h2>
        </div>
      </div>
      {/* <WhyUs /> */}
      {/* teams  */}
      <Wrapper>
        <div className="w-full h-auto  px-6 py-8 ">
          <div className="flex flex-col justify-center items-center">
            <h1 className=" text-gray-600 text-xl tracking-tighter font-bold text-center">
              TEAM
            </h1>
            <h2 className="  font-bold font-serif text-center my-4 text-5xl">
              Meet the <span className="text-[#344A80]">brilliant minds</span>{" "}
              <br /> behind the magic
            </h2>
            <div className="w-auto p-4  ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
                {data.map((item, index) => (
                  <div key={index} className="flex flex-col w-80 p-8  ">
                    <img
                      src={item.image}
                      alt="profile"
                      className=" w-56 h-48 rounded-tr-3xl"
                    />
                    <div className="flex">
                      <div className="flex flex-col">
                        <h1 className="text-xl text-gray-700 font-bold font-serif mt-4">
                          {item.name}
                        </h1>
                        <h2 className="text-gray-500 font-light text-lg tracking-tighter  text-left">
                          {item.role}
                        </h2>
                      </div>
                      <div className="mt-5 w-10 h-10 ml-[92px] border rounded cursor-pointer transition-transform hover:scale-105">
                        <Link href={item.link}>
                          <FaLinkedin className="text-gray-400 w-full h-full" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
