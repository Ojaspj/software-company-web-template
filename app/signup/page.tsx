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
  first_name: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
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
    <div className="w-full h-auto">
      <Wrapper>
        <div className="w-full h-auto  flex justify-center py-10 lg:p-4">
          <div className=" lg:p-24 lg:shadow-xl lg:border rounded-xl w-full lg:w-1/2 flex flex-col items-center ">
            <h1 className="text-4xl">Sign Up</h1>
            <h1 className="text-lg font-light my-4">
              Already have an account?{" "}
              <Link
                href={"/login"}
                className="hover:text-[#344A80] hover:underline"
              >
                Login
              </Link>{" "}
            </h1>
            <div className="w-full  my-8">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <FormField
                    control={form.control}
                    name="first_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="First name"
                            className="lg:h-14"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="last_name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Last name"
                            className="lg:h-14"
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
                            placeholder="Email"
                            className="lg:h-14"
                            {...field}
                          />
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
                  <Button
                    type="submit"
                    variant={"link"}
                    className="w-auto h-auto border p-3 px-4 transition-transform  hover:scale-110 rounded-xl border-gray-700 bg-gray-700  hover:bg-[#213872] text-white hover:text-white  tracking-wide text-lg  hover:no-underline cursor-pointer"
                  >
                    Sign up
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
