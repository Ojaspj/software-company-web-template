import CourseCard from "@/components/CourseCard";
import Wrapper from "@/components/Wrapper";
import { courses } from "@/lib/courses-data";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="w-full min">
      <Wrapper>
        <div className=" h-auto w-full lg:p-8 flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl my-14 text-left">{params.slug.toUpperCase()} COURSES</h1>
          <div className="  h-auto flex flex-wrap  gap-4 w-full ">
            {courses.map((course, index) => 
              course.category.toLowerCase() === params.slug ? (
                <div>

                  <CourseCard key={index} {...course} />
                </div>
              ) : null
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
