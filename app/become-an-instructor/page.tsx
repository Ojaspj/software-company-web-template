import Wrapper from "@/components/Wrapper";
import { Separator } from "@/components/ui/separator";
import React from "react";

export default function BecomeAnInstructor() {
  return (
    <div className="w-full h-auto">
      <Wrapper>
        <div className="w-full flex flex-col items-center h-auto  py-14">
          <h1 className="text-lg md:text-xl tracking-tight text-gray-600 font-bold my-4">
            BECOME AN INSTRUCTOR
          </h1>
          <h1 className=" text-4xl lg:text-4xl font-bold  text-center">
            Follow These Steps To Enroll Yourself As An <br /> Instructor And
            Grab Opportunity To Teach <br /> Online
          </h1>
          <h2 className=" text-gray-500 font-light mb-8 mt-4 tracking-tight text-lg md:text-xl text-center">
            Proin aliquet sapien at arcu interdum laoreet, nam sed ultricies
            lorem.
          </h2>
          <div className="flex flex-col items-center relative ">
            <div className="absolute h-20 w-20 rounded-full border-2 border-[#344A80] flex justify-center items-center  -top-2 left-44">
              <div className="rounded-full w-14 h-14 bg-[#344A80]"> </div>
            </div>
            <div className="absolute h-20 w-20 rounded-full  border-2 border-[#344A80] flex justify-center items-center -top-2  right-44">
                <div className="rounded-full w-14 h-14 bg-[#344A80]"> </div>
            </div>
            <div className="absolute h-20 w-20 rounded-full border-2 border-[#344A80] flex justify-center items-center -top-2  right-[515px]">
            <div className="rounded-full w-14 h-14 bg-[#344A80]"> </div>

            </div>
            <div className="absolute h-20 w-20  border-2 border-[#344A80] flex justify-center items-center  rounded-full -top-2  left-[515px]">
            <div className="rounded-full w-14 h-14 bg-[#344A80]"> </div>

            </div>
            <Separator className="w-[70%] my-8 h-1"  />
            <div className="flex flex-row justify-center gap-4  w-full h-auto  my-8 ">
              <div className=" lg:p-4 text-center w-[23%] h-full ">
                <h1 className="text-xl mt-2">
                  Register For A Global Certification Class
                </h1>
                <h1 className="font-light my-2">
                  Morbi gravida, leo tincidunt tempor, augue ligula imperdiet
                </h1>
              </div>

              <div className=" lg:p-4 text-center w-[23%] h-full ">
                <h1 className="text-xl mt-2">
                  Complete Obligatory Subjects In Global Program
                </h1>
                <h1 className="font-light my-2">
                  Morbi gravida, leo tincidunt tempor, augue ligula imperdiet
                </h1>
              </div>

              <div className=" lg:p-4 text-center w-[23%] h-full">
                <h1 className="text-xl mt-2">
                  Submit Your Related Documents Properly
                </h1>
                <h1 className="font-light my-2">
                  Morbi gravida, leo tincidunt tempor, augue ligula imperdiet
                </h1>
              </div>

              <div className=" lg:p-4 text-center w-[23%] h-full">
                <h1 className="text-xl mt-2">
                  Grab Global Certificate Via Postal & Emails
                </h1>
                <h1 className="font-light my-2">
                  Morbi gravida, leo tincidunt tempor, augue ligula imperdiet
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
