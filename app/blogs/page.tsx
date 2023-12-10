import Wrapper from "@/components/Wrapper";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const blogData = [
  {
    title: "Introducing  Labs: Innovation That Fuels the Way We Work",
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
  {
    title: "The Future of Work",
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
            <span className="text-[#344A80] font-semibold">Navigating</span>{" "}
            insights, trends, and innovations
          </h1>
        </div>
        <div className="flex justify-center md:p-14 w-full h-auto">
          <div className="grid grid-cols-1 gap-0 md:gap-6 mt-8 md:grid-cols-3">
            {blogData.map((blog) => (
              <Card className="h-[380px] shadow-none border-none  md:w-[380px]  rounded-xl ">
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
                    {/* <p className="mt-4 text-gray-800 text-lg line-clamp-3 font-light">
                      {blog.description}
                    </p> */}
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
