import Wrapper from "@/components/Wrapper";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const blogData = [
  {
    title: "The Future of Work",
    description:
      "The future of work is a topic that has been discussed for decades, but the COVID-19 pandemic has accelerated the need for change. The pandemic has forced companies to rethink how they operate and what they need to do to survive in this new world. In this blog post, we will discuss some of the trends that are shaping the future of work and how you can prepare your business for these changes.",
    image:
      "https://fileserver.avinasolutions.com/Resources/v1/Image/329b3b9c2d1c42afb7760d8e50c79a86_eLearning.png",
    date: "July 10, 2021",
  },
  {
    title: "The Future of Work and the future is digital",
    description:
      "The future of work is a topic that has been discussed for decades, but the COVID-19 pandemic has accelerated the need for change. The pandemic has forced companies to rethink how they operate and what they need to do to survive in this new world. In this blog post, we will discuss some of the trends that are shaping the future of work and how you can prepare your business for these changes.",
    image:
      "https://fileserver.avinasolutions.com/Resources/v1/Image/329b3b9c2d1c42afb7760d8e50c79a86_eLearning.png",
    date: "July 10, 2021",
  },
  {
    title: "The Future of Work",
    description:
      "The future of work is a topic that has been discussed for decades, but the COVID-19 pandemic has accelerated the need for change. The pandemic has forced companies to rethink how they operate and what they need to do to survive in this new world. In this blog post, we will discuss some of the trends that are shaping the future of work and how you can prepare your business for these changes.",
    image:
      "https://fileserver.avinasolutions.com/Resources/v1/Image/329b3b9c2d1c42afb7760d8e50c79a86_eLearning.png",
    date: "July 10, 2021",
  },
];

export default function About() {
  return (
    <div className="w-full min-h-screen h-auto">
      <Wrapper>
        <div className="w-[70%] h-auto md:h-[30vh] p-8 py-12">
          <h1 className=" text-xl tracking-tighter text-gray-600 font-bold">
            BLOG
          </h1>
          <h1 className=" mt-4 text-5xl font-serif font-bold tracking-tight lg:text-6xl">
            Navigating insights, trends,  and innovations
          </h1>
        </div>
        <div className="flex justify-center md:p-14 w-full h-auto">
          <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2">
            {blogData.map((blog) => (
              <Card className="h-[500px] md:w-[550px] cursor-pointer rounded-xl hover:text-[#344A80]">
                <CardContent className="p-0 bg-muted h-full">
                  <div className="w-full h-1/2">
                    <img
                      src={blog.image}
                      alt="blog"
                      className="w-full h-full object-cover rounded-t-xl"
                    />
                  </div>
                  <div className="px-8 py-4 ">
                    <p className="mt-2 text-gray-600 font-light">{blog.date}</p>
                    <h1 className=" mt-3 text-2xl font-bold">{blog.title}</h1>
                    <p className="mt-4 text-gray-800 text-lg line-clamp-3 font-light">
                      {blog.description}
                    </p>
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
