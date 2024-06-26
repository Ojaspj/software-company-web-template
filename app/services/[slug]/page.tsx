"use client";
import Wrapper from "@/components/Wrapper";
import { Separator } from "@/components/ui/separator";
import { components } from "@/lib/service-data";
import Link from "next/link";
import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full min-h-screen">
      <Wrapper>
        {components.map((component) => (
          <div key={component.title}>
            {component.title.substring(0, 25).toLowerCase() ===
            params.slug.replace(/-/g, " ") ? (
              <div className="w-full h-auto  lg:p-8 py-20">
                <div>
                  <h1 className="text-lg md:text-xl tracking-tight text-gray-600 font-bold">
                    SERVICES
                  </h1>
                  <h1 className="text-4xl lg:text-6xl tracking-tight my-2 font-bold  ">
                    {component.title}
                  </h1>
                  <p className="font-light text-xl tracking-tight my-2 text-gray-500">
                    {component.description}
                  </p>
                  <Separator />
                  <h1 className="text-2xl font-bold  mt-10">Overview</h1>
                  <p className="text-lg lg:text-xl font-light mt-4 text-gray-800 ">
                    {component.overview}
                  </p>
                  <h1 className="text-2xl font-bold  mt-8">What we offer ?</h1>
                  <div className="text-lg lg:text-xl font-light px-5 mt-4">
                    {component.offers.map((item) => (
                      <ul className=" list-disc my-1">
                        <li className="text-lg lg:text-xl font-light text-gray-800 ">
                          {item}
                        </li>
                      </ul>
                    ))}
                  </div>

                  <h1 className="text-2xl font-bold  mt-8">Why us ?</h1>
                  <div className="text-lg md:text-xl font-light mt-4">
                    {component.whyUs}
                  </div>
                  <h1 className="text-2xl font-bold mt-8">
                    Let's Build Your Digital Presence
                  </h1>
                  <div>
                    <p className="text-lg md:text-xl font-light  mt-4  text-gray-800">
                      Ready to elevate your online presence? Whether you need a
                      brand-new website, an e-commerce platform, or a revamp of
                      your existing site, we have the expertise to turn your
                      vision into reality. Let's embark on a journey of digital
                      transformation together.{" "}
                      <Link href={"/contact"}>
                        <span className="text-[#344A80] font-semibold">
                          Contact us
                        </span>
                      </Link>{" "}
                      today to discuss your web development needs and take the
                      first step toward a powerful online presence.
                    </p>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </Wrapper>
    </div>
  );
}
