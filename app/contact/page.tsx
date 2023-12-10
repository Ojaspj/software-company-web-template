"use client";
import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { IoMdMail, IoMdPhonePortrait } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

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
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const formSchema = z.object({
  full_name: z
    .string({
      required_error: "Your full name is required.",
    })
    .min(2)
    .max(50),
  email: z
    .string({
      required_error: "Your email address is required.",
    })
    .email("Please enter a valid email address."),
  phone: z
    .string({
      required_error: "Please enter 10 digit phone number.",
    })
    .min(10, {
      message: "Phone number must be at least 10 characters.",
    })
    .max(10, {
      message: "Phone number must not be longer than 10 characters.",
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
    <div className="w-full h-auto border ">
      <Wrapper>
        <div className="flex h-[83vh] md:h-[80vh] ">
          <div className="w-full  flex flex-col items-center justify-center">
            <h1 className=" text-xl tracking-tighter text-gray-600 font-bold">
              CONTACT US
            </h1>
            <h1 className=" text-center mt-4 text-5xl font-serif font-bold tracking-tight lg:text-7xl">
            Let's <span className="   text-[#344A80]">build </span>  together{" "}
            </h1>
            <h2 className=" text-gray-500 font-light my-4 text-lg md:text-xl text-center">
              Reach out to our friendly team for expert assistance,
              collaboration opportunities, <br className="hidden md:block" /> or any software-related
              queries. Your journey with innovative solutions begins with a
              simple click, <br /> contact us today and let's bring your ideas
              to life.
            </h2>
          </div>
        </div>
        {/* contact details  */}
        <div className="flex flex-col md:flex-row gap-4 w-full h-auto my-8 ">
          <div className=" flex flex-col gap-14 w-auto md:w-[40%] h-full  md:p-8">
            <div className=" px-4">
              <h1 className=" flex gap-2 text-xl font-semibold tracking-tighter ">
                <IoMdMail size={25} className="text-[#344A80]" />
                Email
              </h1>
              <h1 className=" ml-8 text-lg font-light tracking-tight my-2 ">
                hi@silicontech.com <br />
                hr@silicontech.com
              </h1>
            </div>
            <div className=" p-4">
              <h1 className=" flex gap-2 text-xl font-semibold tracking-tighter ">
                <IoMdPhonePortrait size={25} className="text-[#344A80]" />
                Phone
              </h1>
              <h1 className=" ml-8 text-lg font-light tracking-tight my-2 ">
                +977 9812345678 <br />
                +977 9812345678
              </h1>
            </div>
            <div className=" p-4">
              <h1 className=" flex gap-2  text-xl font-semibold tracking-tighter ">
                <IoLocationSharp size={25} className="text-[#344A80]" />
                Address
              </h1>
              <h1 className="ml-8 text-lg font-light tracking-tight my-2 ">
                Dibyeshwori, Townplanning Pepsicola <br />
                Kathmandu, Nepal <br />
              </h1>
            </div>
            <div className=" p-4">
              <h1 className=" flex gap-2 text-[#344A80] text-2xl font-bold tracking-tighter ">
                Looking for a job ?
              </h1>
              <h1 className="text-lg font-light tracking-tight my-2 ">
                Explore our latest opening and apply now for an exciting
                opportunity.
              </h1>
              <Button
                variant={"link"}
                className=" h-8 w-28 px-2 ring-2 ring-[#344A80] hover:bg-[#344A80] hover:text-white  font-semibold tracking-tighter text-md my-2 text-[#344A80] hover:no-underline cursor-pointer"
              >
                <Link href="/careers">APPLY NOW</Link>
              </Button>
            </div>
          </div>
          {/* form  */}
          <div className="w-[60%] h-full p-2 md:p-8">
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
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="eg. Ram Bdr Thapa" {...field} />
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
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <Input placeholder="eg. you@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone number</FormLabel>
                      <FormControl>
                        <Input
                          className="custom-number-input"
                          type="number"
                          placeholder="Enter your number"
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
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your project "
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
      {/* map  */}
      <div className="my-8">
        <iframe
          width="100%"
          height="400"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Silicon%20Tech,%20Nepal+(Silicon%20Tech)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
        </iframe>
      </div>
    </div>
  );
}
