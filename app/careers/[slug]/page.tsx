"use client";
import ApplyNowButton from "@/components/ApplyNowButton";
import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { jobData } from "@/lib/job-data";
import { BadgeCheck, Briefcase, Clock } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full min-h-screen">
      <Wrapper>
        <div className="w-full h-auto  lg:p-8">
          {/* image banner  */}
          <div className="w-full h-auto my-4">
            <img
              className="w-full h-full rounded-xl "
              src="https://jthemes.com/themes/wp/jobbox/wp-content/uploads/2023/02/job-single.svg"
              alt=""
            />
          </div>
          <div className="flex flex-col h-auto md:w-full mt-6 ">
            {jobData.map((job) =>
              params.slug.replace(/-/g, " ") === job.post.toLowerCase() ? (
                <div className="py-8 flex flex-col  lg:flex-row lg:justify-between">
                  <div className="flex flex-col">
                    <h1 className="font-bold text-4xl ">{job.post}</h1>
                    <h1 className="flex gap-4 text-sm text-gray-400  my-2 ">
                      <span className="flex gap-1 items-center">
                        <Briefcase size={20} /> Full Time
                      </span>
                      <span className="flex gap-1 items-center">
                        <Clock size={20} /> Posted 1hr ago
                      </span>{" "}
                    </h1>
                  </div>
                  <ApplyNowButton  />
                </div>
              ) : null
            )}

            <Separator />

            <div className=" flex flex-col lg:flex-row justify-between w-full h-auto py-8 ">
              {/* left  */}
              {jobData.map((job) =>
                params.slug.replace(/-/g, " ") === job.post.toLowerCase() ? (
                  <div className=" w-full lg:w-[65%] h-auto">
                    <h1 className="text-3xl font-bold ">
                      Welcome to Silicon Team
                    </h1>
                    <p className=" text-xl font-light my-4 text-gray-800">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Vero adipisci quae id? Consectetur sit dolore aut tempora
                      cupiditate laudantium, excepturi eligendi ut earum quas
                      vero fugiat placeat impedit beatae? Cum.
                    </p>
                    <h1 className="text-3xl font-bold  ">
                      Essential Knowledge, Skills and Experience
                    </h1>
                    <div className="mt-4">
                      {job.responsibilities.map((requirement) => (
                        <ul className="list-disc">
                          <li className=" text-xl ml-4 text-gray-800 font-light my-2">
                            {requirement}
                          </li>
                        </ul>
                      ))}
                    </div>
                    <h1 className="text-3xl font-bold mt-4 ">
                      Preferred Experience
                    </h1>
                    <div className="mt-4 mb-10">
                      {job.preferred?.map((requirement) => (
                        <ul className="list-disc">
                          <li className=" text-xl ml-4 text-gray-800 font-light my-2">
                            {requirement}
                          </li>
                        </ul>
                      ))}
                    </div>
                    <Separator />
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between lg:items-center  my-10">
                      <div className="flex gap-4">
                        <ApplyNowButton  />
                        
                        <Button
                          variant={"outline"}
                          className="flex gap-2 w-auto h-14 border transition-transform hover:border-white hover:scale-110 rounded-none border-gray-700  hover:bg-[#213872] text-gray-600 hover:text-white  tracking-tighter text-lg font-semibold hover:no-underline cursor-pointer"
                        >
                          <BadgeCheck /> Save Job
                        </Button>
                      </div>
                      <div className="flex gap-2">
                        <h1 className="text-lg font-semibold">Share </h1>
                        <FaFacebook className="text-2xl hover:text-[#344A80] cursor-pointer" />
                        <FaTwitter className="text-2xl hover:text-[#344A80] cursor-pointer" />
                        <FaInstagram className="text-2xl hover:text-[#344A80] cursor-pointer" />
                        <FaLinkedin className="text-2xl hover:text-[#344A80] cursor-pointer" />
                      </div>
                    </div>
                  </div>
                ) : null
              )}
              {/* right  */}
              <div className="flex flex-col lg:w-[30%] h-full border border-gray-300 rounded-xl px-4 lg:px-6 py-9">
                <h1 className="font-bold text-3xl  ">Other Openings</h1>

                {jobData.map((job) =>
                  params.slug.replace(/-/g, " ") != job.post.toLowerCase() ? (
                    <>
                      <div className="flex flex-col">
                        <Separator className="my-4 bg-gray-300" />

                        <div className="flex flex-col ">
                          <h1 className="flex flex-col font-bold text-2xl  hover:text-[#344A80] ">
                            <Link
                              href={`/careers/${job.post
                                .toLowerCase()
                                .replace(/\s/g, "-")}`}
                            >
                              {job.post}
                            </Link>
                          </h1>
                          <h1 className="flex gap-4 text-sm text-gray-400 my-2  ">
                            <span className="flex gap-1 items-center">
                              <Briefcase size={20} /> Full Time
                            </span>
                            <span className="flex gap-1 items-center">
                              <Clock size={20} /> Posted 1hr ago
                            </span>{" "}
                          </h1>
                          <h1 className="font-light text-md my-2 text-gray-700">
                            $200/Month
                          </h1>
                        </div>
                      </div>
                    </>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
