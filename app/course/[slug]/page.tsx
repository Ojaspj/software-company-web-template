
import Wrapper from "@/components/Wrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { courses } from "@/lib/courses-data";
import React from "react";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full min-h-screen">
      <Wrapper>
        <div className="w-full h-auto ">
          {courses.map((item) =>
            params.slug.replace(/-/g, " ") === item.name.toLowerCase() ? (
              <div className="flex gap-8 w-full p-8 py-12 border h-full">
                <div className="flex flex-col w-[70%] border h-full ">
                  <h1 className="font-serif text-4xl font-bold text-[#344A80] ">
                    {item.name}
                  </h1>
                  <Tabs
                    defaultValue="overview"
                    className="w-full h-auto mt-8 flex flex-col justify-center"
                  >
                    <TabsList>
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                      <TabsTrigger value="instructor">Instructor</TabsTrigger>
                      <TabsTrigger value="reviews">Reviews</TabsTrigger>
                      <TabsTrigger value="faq">Faqs</TabsTrigger>
                    </TabsList>
                    <div className="my-8 flex  border border-red-400 h-full w-full">
                      <TabsContent value="overview">
                        <div className="w-full h-auto">
                          <div>
                            <img
                              className=" w-full h-full"
                              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffarwell-consultants.com%2Fwp-content%2Fuploads%2F2018%2F09%2Felearning-header-1500x630.png&f=1&nofb=1&ipt=2ba33efcf34f49387fcd13ab0244ea6ca8286f029c91259aa6cea8b4c666d8f9&ipo=images"
                            />
                          </div>
                        </div>
                      </TabsContent>
                    </div>
                  </Tabs>
                </div>
                <div className="w-[30%] border">
                  <h1 className="font-serif text-4xl font-bold text-[#344A80] ">
                    {/* {item.name} */}
                  </h1>
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
