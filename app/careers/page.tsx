import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const jobData = [
  {
    post: "Senior Full Stack Developer",
    location: "Remote",
  },
  {
    post: "Senior Frontend Developer",
    location: "Remote",
  },
  {
    post: "Mobile App Developer",
    location: "Remote",
  },
  {
    post: "Mobile App Developer",
    location: "Remote",
  },
];

export default function Careers() {
  return (
    <div className="w-full min-h-screen">
      <Wrapper>
        <div className="w-full h-auto  md:p-8  pt-20 ">
          <div className="flex h-screen md:h-[77vh] ">
            <div className="w-full  flex flex-col md:items-center md:justify-center">
              <h1 className="text-left md:text-center text-lg md:text-xl tracking-tighter text-gray-600 font-bold">
                CAREERS
              </h1>
              <h1 className=" text-left md:text-center mt-4 text-4xl font-serif font-bold tracking-tight lg:text-7xl">
                Unlock your{" "}
                <span className="text-[#344A80] font-semibold">potential,</span>{" "}
                <br /> Building tomorrow's tech <br className="hidden md:block" /> with us.
              </h1>
              <h2 className=" text-gray-500 font-light my-4 text-md md:text-xl md:text-center">
                Explore careers in software development at{" "}
                <span className="text-[#344A80] font-semibold">
                  Silicon Tech
                </span>{" "}
                , where innovation meets ambition. <br className="hidded md:block" /> Join a dynamic team,
                shape cutting-edge projects, and code your future with purpose."
              </h2>
              <div>
                <Button
                  variant={"link"}
                  className="  ring-2 ring-[#344A80] hover:bg-[#344A80] hover:text-white  font-semibold tracking-tight text-md md:text-xl my-4 text-[#344A80] hover:no-underline cursor-pointer"
                >
                  <Link href="#career">VIEW OPENINGS</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
      {/* job openings  */}
      <div className="w-full h-auto  my-8 bg-accent rounded-xl">
        <Wrapper>
          <div className=" w-full  flex pt-8 md:p-8 flex-col ">
            <h1
              id="career"
              className="text-center  text-4xl md:text-5xl tracking-tight font-serif font-semibold"
            >
              Current openings
            </h1>
            <h2 className=" text-gray-400 font-light my-2 tracking-tight text-lg md:text-xl text-center">
              Join us on the journey of innovation and growth.
            </h2>
            <div className="flex flex-col md:p-8  md:px-10 my-8 h-auto w-auto">
              <div className="md:w-full h-auto ">
                {jobData.length === 0 && (
                  <div className="w-full h-full flex justify-center items-center">
                    <h1 className="text-2xl  font-light tracking-tight">
                      No jobs available.
                    </h1>
                  </div>
                )}
                {jobData.map((job) => (
                  <div className="flex flex-col md:flex-row md:justify-between  md:items-center w-auto md:w-full h-auto p-2 border-b my-4 border cursor-pointer hover:border-[#344A80] rounded md:p-4 ">
                    <div className="md:w-1/2 h-full ">
                      <h1 className="text-2xl text-gray-700 font-semibold tracking-tight">
                        {job.post}
                      </h1>
                      <h2 className="text-lg font-light tracking-tighter text-gray-500">
                        {job.location}
                      </h2>
                    </div>
                    <div className="w-1/2 h-full  flex md:justify-end md:items-center">
                      <Button
                        variant={"link"}
                        className="  ring-2 ring-[#344A80] hover:bg-[#344A80] hover:text-white  font-semibold tracking-tight text-lg my-3 text-[#344A80] hover:no-underline cursor-pointer"
                      >
                        <Link href="/contact">APPLY</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}
