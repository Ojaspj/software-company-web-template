import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses } from "@/lib/courses-data";
import { Globe, Mail, Share2, Users } from "lucide-react";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full min-h-screen">
      <Wrapper>
        <div className="w-full h-auto ">
          {courses.map((item) =>
            params.slug.replace(/-/g, " ") === item.name.toLowerCase() ? (
              <div className="flex flex-col md:flex-row gap-8 w-full md:p-8 py-12  h-full">
                {/* left part  */}
                <div className="flex flex-col w-full md:w-[70%]  h-full ">
                  <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#344A80] ">
                    {item.name}
                  </h1>
                  <Tabs
                    defaultValue="overview"
                    className="w-full h-auto mt-8 flex flex-col justify-center"
                  >
                    <TabsList className="flex justify-start p-0 items-start bg-accent">
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                      <TabsTrigger value="instructor">Instructor</TabsTrigger>
                      <TabsTrigger value="reviews">Reviews</TabsTrigger>
                      <TabsTrigger value="faq">Faqs</TabsTrigger>
                    </TabsList>
                    <div className="my-4 md:my-4 flex h-full w-full">
                      <TabsContent value="overview">
                        <div className="w-full h-auto">
                          <div>
                            <img
                              className=" w-full h-48 md:h-full"
                              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffarwell-consultants.com%2Fwp-content%2Fuploads%2F2018%2F09%2Felearning-header-1500x630.png&f=1&nofb=1&ipt=2ba33efcf34f49387fcd13ab0244ea6ca8286f029c91259aa6cea8b4c666d8f9&ipo=images"
                            />
                          </div>
                          <div className="my-4  h-auto w-full ">
                            <p className="text-md md:text-lg font-light mt-4 ">
                              {item.overview}
                            </p>
                            <h1 className="text-2xl font-bold font-serif mt-10">
                              COURSE DESCRIPTION{" "}
                            </h1>

                            <p className="text-md md:text-lg font-light mt-4 ">
                              {item.description}
                            </p>
                            <h1 className="text-2xl font-bold font-serif mt-10">
                              MAIN FEATURES{" "}
                            </h1>
                            <div className="text-md md:text-lg font-light mt-4 px-4 ">
                              <ul>
                                {item.features.map((item) => (
                                  <li className="list-disc">{item}</li>
                                ))}
                              </ul>
                            </div>
                            <h1 className="text-2xl font-bold font-serif mt-10">
                              WHAT IS THE TARGET AUDIENCE?
                            </h1>
                            <p className="text-md md:text-lg font-light mt-4 ">
                              {item.content}
                            </p>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="instructor">
                        <div className="flex  flex-col md:flex-row w-full h-auto gap-14 md:gap-6">
                          <div className="w-full md:w-[330px] h-auto md:h-[65vh]">
                            <div className="flex flex-col ">
                              {/* teacher image  */}
                              <div className="border w-full h-auto">
                                <img
                                  src="https://static.vecteezy.com/system/resources/previews/005/836/460/original/cute-male-teacher-funny-cartoon-illustration-free-vector.jpg"
                                  alt="teacher image"
                                />
                              </div>
                              <h1 className="text-2xl font-serif font-bold mt-4">
                                John Smith
                              </h1>
                              <h1 className="text-md font-light text-gray-500 mt-2">
                                Full Stack Developer
                              </h1>
                              <div className="flex flex-col my-2 gap-1">
                                <div className="flex text-gray-700 font-light gap-2 mt">
                                  <Mail color="gray" /> abc@xyz.com
                                </div>
                                <div className="flex text-gray-700 font-light gap-2 mt">
                                  <Globe color="gray" /> abc@xyz.com
                                </div>
                              </div>
                              <div className=" flex gap-4 text-gray-500 text-2xl mt-2">
                                <FaFacebookF className="cursor-pointer" />
                                <FaTwitter className="cursor-pointer" />
                                <FaInstagram className="cursor-pointer" />
                                <FaPinterest className="cursor-pointer" />
                              </div>
                            </div>
                          </div>
                          <div className=" w-full md:w-[485px] h-auto md:h-[65vh]">
                            <h1 className="text-4xl font-serif font-bold ">
                              John Smith
                            </h1>
                            <Separator className="my-4" />
                            <div>
                              <h1 className="font-bold text-xl font-serif">
                                About Instructor
                              </h1>
                              <p className="text-md md:text-lg font-light my-2">
                                John is one of our highly experienced and
                                talented in-house educational consultants that
                                excel in all forms of career counselling as well
                                as consultancy. She is a graduate in Mass
                                Communications from UCLA, and also holds a
                                degree in Statistics from MIT . Meeting her for
                                the first time would instill a sense of faith,
                                trust and bonding that is unparalleled. She
                                perfectly understands your requirement by being
                                in your shoes, and thereby tailoring an
                                extensive educational package. Sophia is very
                                well-informed in all aspects of career
                                consultancy, thus can guide you through some of
                                the best educational institutions in Europe and
                                the Americas.
                              </p>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                      <TabsContent value="faq">
                        <div className="flex  flex-col w-[335px] md:w-[860px]  h-auto gap-14 md:gap-6">
                          <Accordion
                            type="single"
                            collapsible
                            className="md:w-full flex flex-col gap-2"
                          >
                            <AccordionItem value="item-1" className="border p-2 ">
                              <AccordionTrigger className="font-semibold text-gray-900 hover:text-gray-900">
                                Is it accessible?
                              </AccordionTrigger>
                              <AccordionContent className="px-4">
                                Yes. It adheres to the WAI-ARIA design pattern.
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border p-2">
                              <AccordionTrigger className="font-semibold text-gray-900 hover:text-gray-900" >Is it styled?</AccordionTrigger>
                              <AccordionContent className="px-4">
                                Yes. It comes with default styles that matches
                                the other components&apos; aesthetic.
                              </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border p-2">
                              <AccordionTrigger className="font-semibold text-gray-900 hover:text-gray-900">
                                Is it animated?
                              </AccordionTrigger>
                              <AccordionContent className="px-4">
                                Yes. It&apos;s animated by default, but you can
                                disable it if you prefer.
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </TabsContent>
                    </div>
                  </Tabs>
                </div>
                {/* right section  */}
                <div className=" w-full md:w-[30%] h-[600px] ">
                  <div className="flex justify-between items-center w-full h-[12%] bg-[#344A80] text-lg md:text-xl font-semibold  text-white p-4">
                    <h1 className="">Course Value</h1>
                    <h1 className="">$ 77.00</h1>
                  </div>
                  <div className="flex flex-col w-full h-[77%] shadow-2xl  mt-12 p-8">
                    <div className="flex justify-between my-4">
                      <h1 className="font-light text-md md:text-lg text-gray-400">
                        Enrolled :{" "}
                        <span className="font-semibold text-md text-gray-600">
                          4 students
                        </span>{" "}
                      </h1>
                      <Users className="text-[#344A80]" />
                    </div>
                    <Separator />
                    <div className="flex justify-between my-4">
                      <h1 className="font-light text-md md:text-lg text-gray-400">
                        Time span :{" "}
                        <span className="font-semibold text-md text-gray-600">
                          32 Hours
                        </span>{" "}
                      </h1>
                      <Users className="text-[#344A80]" />
                    </div>
                    <Separator />
                    <div className="flex justify-between my-4">
                      <h1 className="font-light text-md md:text-lg text-gray-400">
                        Lectures :{" "}
                        <span className="font-semibold text-md text-gray-600">
                          10
                        </span>{" "}
                      </h1>
                      <Users className="text-[#344A80]" />
                    </div>
                    <Separator />
                    <div className="flex justify-between my-4">
                      <h1 className="font-light text-md md:text-lg text-gray-400">
                        Video Lessons :{" "}
                        <span className="font-semibold text-md text-gray-600">
                          2 Hours
                        </span>{" "}
                      </h1>
                      <Users className="text-[#344A80]" />
                    </div>
                    <Separator />
                    <div className="flex justify-between my-4">
                      <h1 className="font-light text-md md:text-lg text-gray-400">
                        Level :{" "}
                        <span className="font-semibold text-md text-gray-600">
                          Advanced
                        </span>{" "}
                      </h1>
                      <Users className="text-[#344A80]" />
                    </div>
                    <Separator />
                    <Button className="w-full h-10 bg-[#344A80] text-white font-semibold rounded-none text-lg mt-6 p-4">
                      Buy This Course
                    </Button>
                    <Button
                      variant={"link"}
                      className=" mt-3 text-[#344A80] font-semibold text-lg hover:no-underline  p-4 py-5"
                    >
                      Share This Course <Share2 />
                    </Button>
                  </div>
                </div>
              </div>
            ) : null
          )}
        </div>
      </Wrapper>
      {/* {params.slug.replace(/-/g, " ")} */}
    </div>
  );
}
