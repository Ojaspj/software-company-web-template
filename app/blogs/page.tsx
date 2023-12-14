"use client"
import Wrapper from "@/components/Wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { blogData } from "@/lib/blog-data";
import { useRouter } from "next/navigation";
import React from "react";



export default function Blogs() {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen h-auto">
      <Wrapper>
        <div className="w-[70%] h-auto md:h-[30vh] md:p-8 py-10">
          <h1 className=" text-xl tracking-tight text-gray-600 font-bold">
            BLOG
          </h1>
          <h1 className=" mt-4 text-5xl  font-bold tracking-tight lg:text-6xl">
            <span className="text-[#344A80] font-semibold">Navigating</span>{" "}
            insights, trends, and innovations
          </h1>
        </div>
        <div className="flex justify-center md:p-14 w-full h-auto">
          <div className="grid grid-cols-1 gap-0 md:gap-6 mt-8 md:grid-cols-3">
            {blogData.map((blog) => (
              <Card onClick={() => router.push(`/blogs/${blog.title.toLowerCase().replace(/\s/g, "-")}`)} 
              className="h-[380px] shadow-none border-none  md:w-[380px]  rounded-xl ">
                <CardContent className="p-0 h-auto ">
                  <div className="w-full  cursor-pointer ">
                    <img
                      src={blog.image}
                      alt="blog"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="py-4 cursor-pointer ">
                    <p className="mt-2 text-gray-600 font-light">{blog.date}</p>
                    <h1 className=" mt-3 text-2xl font-bold hover:text-[#344A80]">
                      {blog.title}
                    </h1>
                   
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
