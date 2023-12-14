"use client";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { blogData } from "../page";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full h-auto">
      <Wrapper>
        <div className="w-full h-auto  lg:p-8 lg:py-14">
          <p>{}</p>
          {blogData.map((blog) =>
            params.slug.replace(/-/g, " ") === blog.title.toLowerCase() ? (
              <div className="lg:w-[70%] h-auto">
                <h1 className="text-4xl font-bold mt-4">{blog.title}</h1>
                <p className="text-gray-500 mt-2 mb-8">
                  Posted on : {blog.date}
                </p>
                <img
                  src={blog.image}
                  alt=""
                  className="w-full h-auto lg:h-[40vh] rounded-lg cursor-pointer"
                />
                <p className="text-gray-800 text-xl font-light my-6">
                  {blog.description}
                </p>
              </div>
            ) : null
          )}
        </div>
      </Wrapper>
    </div>
  );
}
