"use client";
import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { jobData } from "@/lib/job-data";
import { BadgeCheck, Briefcase, Clock } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  job_title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  full_name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  cover_letter: z.string().min(10, {
    message: "Please enter a valid cover letter.",
  }),
  file: z.object({
    
  })
});

{
  /* <h1>{params.slug.replace(/-/g, " ")}</h1> */
}

export default function Page({ params }: { params: { slug: string } }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
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

                  <Dialog>
                    <DialogTrigger>
                      <div className="flex gap-2 w-[60%] mt-4 lg:mt-0 items-center justify-center px-2  lg:w-auto h-14   transition-transform  hover:scale-110 rounded-none border-gray-700 bg-gray-700 hover:bg-[#213872] text-white hover:text-white  tracking-tighter text-lg font-semibold hover:no-underline cursor-pointer">
                        <BadgeCheck /> Apply Now
                      </div>
                    </DialogTrigger>
                    <DialogContent className=" lg:p-14 lg:w-[900px]  overflow-y-scroll max-h-screen ">
                      <DialogHeader>
                        <DialogTitle className="text-center text-4xl font-bold">
                          Start your career today
                        </DialogTitle>
                        <DialogDescription className=" text-center text-md">
                          Please fill in your information and send it to the
                          employer.
                        </DialogDescription>
                      </DialogHeader>
                      <div className=" ">
                        <Form {...form}>
                          <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4"
                          >
                            <FormField
                              control={form.control}
                              name="job_title"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      type="text"
                                      defaultValue={`${job.post}`}
                                      {...field}
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="full_name"
                              render={({ field }) => (
                                <FormItem>
                                  <FormControl>
                                    <Input
                                      placeholder="Your full name"
                                      {...field}
                                    />
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
                                    <Input
                                      placeholder=" Your email"
                                      {...field}
                                    />
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
                                  <FormControl>
                                    <Input
                                      type="number"
                                      className="custom-number-input"
                                      placeholder="Your phone number"
                                      {...field}
                                    />
                                  </FormControl>

                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name="cover_letter"
                              render={({ field }) => (
                                <FormItem>


                                  <FormControl>
                                    <Textarea
                                      placeholder="Your cover letter"
                                      className="resize-none"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <FormField
                              control={form.control}
                              name = "file"
                              render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Resume</FormLabel>
                                  <FormControl>
                                   <Input  className="" accept=".pdf" max={2000}  placeholder="hey" type="file" />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <Button type="submit" className=" text-md p-4 w-auto">Submit</Button>
                          </form>
                        </Form>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              ) : null
            )}

            <Separator />

            <div className=" flex flex-col lg:flex-row justify-between w-full h-auto py-8 ">
              {/* left  */}
              {jobData.map((job) =>
                params.slug.replace(/-/g, " ") === job.post.toLowerCase() ? (
                  <div className=" w-full lg:w-[65%] h-auto   text-gray-600">
                    <h1 className="text-3xl font-bold ">
                      Welcome to Silicon Team
                    </h1>
                    <p className=" text-lg font-light my-4">
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
                          <li className=" text-xl ml-4 font-light my-2">
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
                          <li className=" text-xl ml-4 font-light my-2">
                            {requirement}
                          </li>
                        </ul>
                      ))}
                    </div>
                    <Separator />
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between lg:items-center  my-10">
                      <div className="flex gap-4">
                        <Button className="flex gap-2 w-auto h-14   transition-transform hover:border-white hover:scale-110 rounded-none border-gray-700 bg-gray-700 hover:bg-[#213872] text-white hover:text-white  tracking-tighter text-lg font-semibold hover:no-underline cursor-pointer">
                          <BadgeCheck /> Apply Now
                        </Button>
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
                <h1 className="font-bold text-2xl text-gray-700  ">
                  Other Openings
                </h1>

                {jobData.map((job) =>
                  params.slug.replace(/-/g, " ") != job.post.toLowerCase() ? (
                    <>
                      <div className="flex flex-col">
                        <Separator className="my-4" />

                        <div className="flex flex-col ">
                          <h1 className="flex flex-col font-bold text-2xl text-gray-700 hover:text-[#344A80] ">
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
