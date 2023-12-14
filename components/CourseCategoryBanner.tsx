"use client";
import React from "react";
import Wrapper from "./Wrapper";
import { useRouter } from "next/navigation";
import { Separator } from "./ui/separator";

export default function CourseCategoryBanner() {
  const router = useRouter();
  return (
    <div className="w-full h-auto my-8 ">
      <Wrapper>
        <div className="  w-full h-auto py-8 mb-14">
          <h1 className=" text-4xl lg:text-6xl font-bold  text-center">
            Explore Your Professional
          </h1>
          <h2 className="   text-gray-500 font-light my-2 tracking-tight text-lg lg:text-xl text-center">
            Teaching students to work diligently & hard through <br /> higher
            education advice on premier colleges or universities.
          </h2>

          <div className="flex flex-wrap gap-4 w-full h-[50vh] py-8  justify-center">
            <div className="w-[24%] h-full ">
              <div
                onClick={() => router.push(`/course-category/programming`)}
                className="w-full h-1/2 relative group mb-4 cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full flex items-end justify-center bg-black bg-opacity-50 p-4 opacity-80 group-hover:opacity-100 transition-all">
                  <div className="text-white text-center">
                    <h2 className="text-2xl font-bold mb-2">Development</h2>
                  </div>
                </div>
                <img
                  className="w-full h-full"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F236%2F978%2Fnon_2x%2Ftechnology-banner-with-low-poly-plexus-design-vector.jpg&f=1&nofb=1&ipt=8ae71a8db7dfc751eecf9421c923e0d2b6b7a2a15d4047415418ee89a002c887&ipo=images"
                  alt=""
                />
              </div>
              <div
                onClick={() => router.push(`/course-category/programming`)}
                className="w-full h-1/2 relative group cursor-pointer "
              >
                <div className="absolute inset-0 w-full h-full flex items-end justify-center bg-black bg-opacity-50 p-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="text-white text-center">
                    <h2 className="text-2xl font-bold mb-2">Designing</h2>
                  </div>
                </div>
                <img
                  className="w-full h-full"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F236%2F978%2Fnon_2x%2Ftechnology-banner-with-low-poly-plexus-design-vector.jpg&f=1&nofb=1&ipt=8ae71a8db7dfc751eecf9421c923e0d2b6b7a2a15d4047415418ee89a002c887&ipo=images"
                  alt=""
                />
              </div>
            </div>
            <div
              onClick={() => router.push(`/course-category/programming`)}
              className="w-[24%] relative group h-[104%] cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full flex items-end justify-center bg-black bg-opacity-50 p-4 opacity-80 group-hover:opacity-100  transition-all ">
                <div className="text-white text-center">
                  <h2 className="text-2xl font-bold mb-2">Networking</h2>
                </div>
              </div>
              <img
                className="w-full h-full"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F236%2F978%2Fnon_2x%2Ftechnology-banner-with-low-poly-plexus-design-vector.jpg&f=1&nofb=1&ipt=8ae71a8db7dfc751eecf9421c923e0d2b6b7a2a15d4047415418ee89a002c887&ipo=images"
                alt=""
              />
            </div>
            <div className="w-[24%] h-full ">
              <div
                onClick={() => router.push(`/course-category/programming`)}
                className="w-full h-1/2 relative group mb-4 cursor-pointer"
              >
                <div className="absolute inset-0 w-full h-full flex items-end justify-center bg-black bg-opacity-50 p-4 opacity-80 group-hover:opacity-100 transition-all">
                  <div className="text-white text-center">
                    <h2 className="text-2xl font-bold mb-2">Card Title</h2>
                  </div>
                </div>
                <img
                  className="w-full h-full"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F236%2F978%2Fnon_2x%2Ftechnology-banner-with-low-poly-plexus-design-vector.jpg&f=1&nofb=1&ipt=8ae71a8db7dfc751eecf9421c923e0d2b6b7a2a15d4047415418ee89a002c887&ipo=images"
                  alt=""
                />
              </div>
              <div
                onClick={() => router.push(`/course-category/programming`)}
                className="w-full h-1/2 relative group cursor-pointer "
              >
                <div className="absolute inset-0 w-full h-full flex items-end justify-center bg-black bg-opacity-50 p-4 opacity-80 group-hover:opacity-100 transition-all">
                  <div className="text-white text-center">
                    <h2 className="text-2xl font-bold mb-2">Card Title</h2>
                  </div>
                </div>
                <img
                  className="w-full h-full"
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F236%2F978%2Fnon_2x%2Ftechnology-banner-with-low-poly-plexus-design-vector.jpg&f=1&nofb=1&ipt=8ae71a8db7dfc751eecf9421c923e0d2b6b7a2a15d4047415418ee89a002c887&ipo=images"
                  alt=""
                />
              </div>
            </div>
            <div
              onClick={() => router.push(`/course-category/programming`)}
              className="w-[24%] relative group h-[104%] cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full flex items-end justify-center bg-black bg-opacity-50 p-4 opacity-80 group-hover:opacity-100 transition-all">
                <div className="text-white text-center">
                  <h2 className="text-2xl font-bold mb-2">Programming</h2>
                </div>
              </div>
              <img
                className="w-full h-full"
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F001%2F236%2F978%2Fnon_2x%2Ftechnology-banner-with-low-poly-plexus-design-vector.jpg&f=1&nofb=1&ipt=8ae71a8db7dfc751eecf9421c923e0d2b6b7a2a15d4047415418ee89a002c887&ipo=images"
                alt=""
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
