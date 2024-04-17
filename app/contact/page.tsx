"use client";
import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { IoMdMail, IoMdPhonePortrait } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";

const formSchema = z.object({
  full_name: z
    .string({
      required_error: "Your full name is required.",
    })
    .min(2, {
      message: "Name must be at least 2 characters.",
    })
    .max(50),
  email: z
    .string({
      required_error: "Your email address is required.",
    })
    .email("Please enter a valid email address."),
  subject: z
    .string({
      required_error: "Please enter subject for message.",
    })
    .min(10, {
      message: "Subject must be at least 10 characters.",
    })
    .max(50, {
      message: "Subject must not be longer than 10 characters.",
    }),
  message: z
    .string({
      required_error: " Please tell us something about your project. ",
    })
    .min(10, {
      message: "Message must be at least 10 characters.",
    })
    .max(160, {
      message: "Message must not be longer than 30 characters.",
    }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <div className="w-full h-auto  ">
      {/* banner  */}
      <div className="w-full h-auto  md:h-[40vh]  relative ">
        <img
          className="w-full h-[30vh] md:h-full "
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ideafist.com%2Fwp-content%2Fuploads%2F2013%2F05%2Fcontact-us-banner.jpg&f=1&nofb=1&ipt=b3f03f45d30d00c68b37ac652d9dc17660e297b6d439efb76e86a15e909518ec&ipo=images"
          alt=""
        />
        <div className="absolute w-full h-[30vh] md:h-[40vh]  bg-black/20 top-0"></div>
      </div>
      <div>
        <Wrapper className=" flex flex-col md:flex-row gap-40 justify-between md:px-8 h-auto ">
          <div className=" w-full md:w-[50%] my-8 h-full ">
            <h1 className=" text-lg md:text-xl tracking-tight text-gray-600 font-bold">
              CONTACT US
            </h1>
            <h1 className=" mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Are You Interested In Online Learning? Contact Us.
            </h1>
            <p className="font-light text-gray-700 text-lg mt-4">
              Contact our top-notch educationalist in the UK that has huge{" "}
              <br />
              expertise in providing futuristic solutions to all aspiring
              students <br /> coming for higher education.
            </p>
          </div>
          <div className="  w-full md:w-[40%] h-auto md:shadow-xl bg-transparent md:z-10 md:bg-white -mt-32 ">
            <div className="w-full h-full p-2 md:p-8">
              <h1 className="text-4xl font-bold  tracking-tight mb-4">
                Fill Out For Contact
              </h1>
              <p className="font-light text-gray-700 text-md my-4">
                Fill-in the contact form and get immediate assistance from our
                educational consultant.
              </p>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="full_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Email Address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="Subject"
                            min={0}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Textarea
                            placeholder="Your Message"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button className="bg-[#344A80] hover:bg-[#213872] text-white font-bold text-md h-14  w-auto my-4 rounded-none transition-transform hover:scale-105 ">
                    SEND A MESSAGE
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </Wrapper>
        {/* maps and directions  */}
        <div className="w-full bg-accent mt-[100px] h-auto text-left md:text-center ">
          
          <Wrapper className=" py-4 md:p-8">
            <h1 className="my-4 md:my-0 text-left md:text-center md:p-8 text-lg md:text-xl tracking-tighter text-gray-600 font-bold">
            MAPS & DIRECTIONS
          </h1>
          <h1 className="my-4 md:my-0 text-4xl font-bold tracking-tight  lg:text-4xl">
            Find Our Location In Town
          </h1>
          <p className="font-light text-gray-700 text-md mt-2">
            Search for our exact location and office address through <br /> this
            exclusive map listing provided below.
          </p>

            <div className="mb-8 my-4 shadow-xl w-full h-96 border flex items-center justify-center text-2xl ">
              Your map goes here.
              
            </div>
            <div className="flex flex-col md:flex-row justify-center w-full md:gap-10 ">
              <div className="flex flex-col md:flex-row gap-2 md:px-4 items-center text-center md:text-left">
                <div className="flex justify-center items-center h-24 w-24">
                  <IoLocationSharp size={50} className="text-[#344A80]" />
                </div>
                <div className="md:h-24 md:w-auto">
                  <h1 className="  text-xl font-medium">
                    Area Location
                  </h1>
                  <h1 className="text-md font-light tracking-tight my-2 ">
                    Kathmandu, Nepal <br />
                  </h1>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:px-4 items-center text-center md:text-left ">
                <div className="flex justify-center items-center h-24 w-24 ">
                  <IoMdPhonePortrait size={50} className="text-[#344A80] " />
                </div>
                <div className="h-24 w-auto">
                  <h1 className="  text-xl font-medium">Contact</h1>
                  <h1 className="text-md font-light tracking-tight my-2 ">
                    hi@ojascodes.com <br />
                    01-4488777
                  </h1>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-2 md:px-4 items-center text-center md:text-left">
                <div className="flex justify-center items-center h-24 w-24">
                  <FaRegClock size={50} className="text-[#344A80]" />
                </div>
                <div className="h-24 w-auto">
                  <h1 className=" text-xl font-medium">
                    Opening Hours
                  </h1>
                  <h1 className="text-md font-light tracking-tight my-2 ">
                    Monday-Friday <br />
                    10:00AM - 6:00PM
                  </h1>
                </div>
              </div>
            </div>
          </Wrapper>
        </div>
      </div>
    </div>
  );
}
