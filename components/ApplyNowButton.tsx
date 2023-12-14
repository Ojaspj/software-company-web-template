import React, { useState } from "react";
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
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import { BadgeCheck } from "lucide-react";

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
  file: z.object({}),
});

export default function ApplyNowButton() {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("data:", values);
  }
  return (
    <Dialog open={open}>
      <DialogTrigger>
        <div
          onClick={() => setOpen(true)}
          className="flex gap-2 w-[60%] mt-4 lg:mt-0 items-center justify-center   lg:w-auto p-4   transition-transform  hover:scale-110 rounded-none border-gray-700 bg-gray-700 hover:bg-[#213872] text-white hover:text-white  tracking-tighter text-lg font-semibold hover:no-underline cursor-pointer"
        >
          <BadgeCheck /> Apply Now
        </div>
      </DialogTrigger>
      <DialogContent className="lg:p-14 lg:w-[900px]  overflow-y-scroll max-h-screen ">
        <DialogHeader>
          <DialogTitle className="text-center text-4xl font-bold">
            Start your career today
          </DialogTitle>
          <DialogDescription className=" text-center text-md">
            Please fill in your information and send it to the employer.
          </DialogDescription>
        </DialogHeader>
        <div className=" ">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="job_title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input type="text" placeholder="Job Title" {...field} />
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
                      <Input placeholder="Your full name" {...field} />
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
                      <Input placeholder=" Your email" {...field} />
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
              {/* <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resume</FormLabel>
                  <FormControl>
                    <Input
                      className=""
                      accept=".pdf"
                      max={2000}
                      placeholder="hey"
                      type="file"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="w-auto h-14   transition-transform hover:border-white hover:scale-110 rounded-none border-gray-700 bg-gray-700 hover:bg-[#213872] text-white hover:text-white  tracking-normal text-lg font-semibold hover:no-underline cursor-pointer"
                >
                  Submit
                </Button>
                <Button
                  onClick={() => setOpen(false)}
                  type="button"
                  variant={"outline"}
                  className=" w-auto h-14   transition-transform hover:border-white hover:scale-110 rounded-none border-gray-700  hover:bg-[#213872]  hover:text-white  tracking-normal text-lg font-semibold hover:no-underline cursor-pointer"
                >
                  Close
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
