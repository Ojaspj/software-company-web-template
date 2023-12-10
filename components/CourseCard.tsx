import React from "react";
import { Card, CardContent } from "./ui/card";

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
  return (
    <Card className="w-[280px] h-96">
      <CardContent className="relative p-0 h-1/2 ">
        <img className="rounded-t-md h-44" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ferasmuscoursescroatia.com%2Fwp-content%2Fuploads%2F2019%2F12%2FOnline-courses.jpg&f=1&nofb=1&ipt=cae12cab96964e93bb7f2bb5b3bed70905e6cf1f5433cb929f7ec92f8ac0940e&ipo=images" />
        <div className="p-4">
          <p className="text-sm font-light text-gray-600 mb-2">{category}</p>
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-sm">{overview}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;
