"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
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
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import React from "react";

const formSchema = z.object({
  
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export default function Login() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="w-full h-auto ">
      <Wrapper>
        <div className="w-full h-auto flex justify-center py-14 lg:py-20 ">
          <div className=" lg:p-24 lg:shadow-xl lg:border rounded-xl w-full lg:w-1/2 flex flex-col items-center ">
            <h1 className="text-4xl">Login</h1>
            <h1 className="text-lg font-light my-4">
              New user? <Link href={"/signup"} className="hover:text-[#344A80] hover:underline">Signup Now</Link>{" "}
            </h1>
            <div className="lg:w-full my-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                 
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Email" className="lg:h-14"{...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="Password"
                            className="lg:h-14"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <h1 className="font-light text-lg text-right cursor-pointer">Forgot Password?</h1>
                  <Button
                    type="submit"
                    variant={"link"}
                    className="w-auto h-auto border p-3 px-4 transition-transform  hover:scale-110 rounded-xl border-gray-700 bg-gray-700  hover:bg-[#213872] text-white hover:text-white  tracking-wide text-lg  hover:no-underline cursor-pointer"
                  >
                    Login
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
