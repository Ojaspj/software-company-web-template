import Wrapper from "@/components/Wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses } from "@/lib/courses-data";
import { Share2, Users } from "lucide-react";
import React from "react";

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
                    </div>
                  </Tabs>
                </div>
                {/* right section  */}
                <div className=" w-full md:w-[30%] h-[600px] ">
                  <div className="flex justify-between items-center w-full h-[12%] bg-[#344A80]">
                    <h1 className="text-xl font-semibold  text-white p-4">
                      Course Value
                    </h1>
                    <h1 className="text-xl font-semibold  text-white p-4">
                      $ 77.00
                    </h1>
                  </div>
                  <div className="flex flex-col w-full h-[77%] shadow-2xl  mt-12 p-8">
                    <div className="flex justify-between my-4">
                      <h1 className="font-light text-lg text-gray-400">
                        Enrolled :{" "}
                        <span className="font-semibold text-md text-gray-600">
                          4 students
                        </span>{" "}
                      </h1>
                      <Users className="text-[#344A80]" />
                    </div>
                    <Separator />
                    <div className="flex justify-between my-4">
                      <h1 className="font-light text-lg text-gray-400">
                        Time span :{" "}
                        <span className="font-semibold text-md text-gray-600">
                          32 Hours
                        </span>{" "}
                      </h1>
                      <Users className="text-[#344A80]" />
                    </div>
                    <Separator />
                    <div className="flex justify-between my-4">
                      <h1 className="font-light text-lg text-gray-400">
                        Lectures :{" "}
                        <span className="font-semibold text-md text-gray-600">
                          10
                        </span>{" "}
                      </h1>
                      <Users className="text-[#344A80]" />
                    </div>
                    <Separator />
                    <div className="flex justify-between my-4">
                      <h1 className="font-light text-lg text-gray-400">
                        Video Lessons :{" "}
                        <span className="font-semibold text-md text-gray-600">
                          2 Hours
                        </span>{" "}
                      </h1>
                      <Users className="text-[#344A80]" />
                    </div>
                    <Separator />
                    <div className="flex justify-between my-4">
                      <h1 className="font-light text-lg text-gray-400">
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
