"use client";
import React from "react";
import { Card, CardContent } from "./ui/card";
import { BookText, Star, User } from "lucide-react";
import { useRouter } from "next/navigation";

interface CourseCardProps {
  name: string;
  category: string;
  overview: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  name,
  category,
  overview,
}) => {
  const router = useRouter();
  return (
    <Card className="p-0 rounded-none w-full lg:w-[330px] h-96 relative cursor-pointer shadow-lg border-none">
      <div className="absolute top-[140px] right-5 h-[68px] w-[68px] rounded-full bg-[#344A80] text-white flex justify-center items-center font-semibold text-sm">
        Rs. 9999
      </div>
      <CardContent className=" p-0 h-1/2 ">
        <img
          className="w-full lg:w-full h-44"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ferasmuscoursescroatia.com%2Fwp-content%2Fuploads%2F2019%2F12%2FOnline-courses.jpg&f=1&nofb=1&ipt=cae12cab96964e93bb7f2bb5b3bed70905e6cf1f5433cb929f7ec92f8ac0940e&ipo=images"
        />
        <div className="p-4">
          <p className="text-sm font-light text-gray-500 mb-2">{category}</p>
          <h3
            className="text-lg font-semibold mb-2 h-14 hover:text-[#344A80]  whitespace-normal"
            onClick={() =>
              router.push(`/course/${name.toLowerCase().replace(/\s/g, "-")}`)
            }
          >
            {name}
          </h3>
          <div className="flex items-center h-10 w-full justify-between text-sm font-light ">
            <div className="flex">
              <Star strokeWidth={1} />
              <Star strokeWidth={1} />
              <Star strokeWidth={1} />
              <Star strokeWidth={1} />
              <Star strokeWidth={1} />
            </div>
            <div>
              <h1 className="flex  gap-1 items-center  ">(0.0)</h1>
            </div>
          </div>
          <div className=" h-14 w-full  flex justify-between items-center text-sm font-light ">
            <h1 className="flex  gap-1 items-center  ">
              {" "}
              <BookText />5 Lessons
            </h1>

            <h1 className="flex gap-1 items-center">
              <User />0 Students
            </h1>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
