"use client";
import CourseList from "@/components/CourseList";
import SearchFilter from "@/components/SearchFilter";
import Wrapper from "@/components/Wrapper";
import { courses } from "@/lib/courses-data";
import React, { useState } from "react";


export default function Course() {
  const [filteredCategory, setFilteredCategory] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchedCourses, setSearchedCourses] = useState<any[]>(courses);

  const handleFilterChange = (category: string) => {
    const lowercaseCategory = category.toLowerCase();
    setFilteredCategory(lowercaseCategory);
    filterCourses(searchTerm, lowercaseCategory);
  };

  const handleSearch = (term: string) => {
    const lowercaseTerm = term.toLowerCase();
    setSearchTerm(lowercaseTerm);
    filterCourses(lowercaseTerm, filteredCategory);
  };

  const filterCourses = (term: string, category: string) => {
    const filtered = courses.filter(
      (course) =>
        (!category || course.category.toLowerCase() === category) &&
        (!term || course.name.toLowerCase().includes(term))
    );
    setSearchedCourses(filtered);
  };

  return (
    <div className="md:w-full min-h-screen relative ">
      {/* banner  */}
      <div className="w-full h-[90vh] md:h-[30vh] mb-12">
        <img
          className="w-full h-full "
          src="https://as2.ftcdn.net/v2/jpg/05/57/68/21/1000_F_557682138_AUkbntsXXtcicfZi6UI4VVzlNkonOTli.jpg"
          alt=""
        />
        <div className="absolute w-full h-[90vh] md:h-[30vh]  bg-black/20 top-0"></div>
        <Wrapper>
          <div className="  text-center  absolute  md:text-left top-52 md:top-0 p-8 text-white font-bold ">
            <h1 className=" text-xl md:text-lg tracking-tighter">START WITH</h1>
            <h1 className=" mt-4 text-5xl md:text-4xl font-serif tracking-tight lg:text-5xl">
              Professional Online <br /> Courses For Achievers
            </h1>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className="w-full h-auto">
          <div className=" md:px-8">
            <div className=" h-auto w-full my-4 flex flex-col  ">
              <SearchFilter
                courses={courses}
                onSearch={handleSearch}
                onFilterChange={handleFilterChange}
              />
              <div className="my-4">
                <h1 className="text-3xl font-bold">
                  Professional Online Courses
                </h1>
                <p className="font-sm font-light">
                  Offering miscellaneous courses and online programs for fresh
                  university graduates or <br /> college pass outs that want to
                  pursue an aspiring career.
                </p>
              </div>

              {searchedCourses.length === 0 && (
                <div className="text-center text-gray-600 text-lg my-8 font-light">
                  Course not found.
                </div>
              )}
              <CourseList courses={searchedCourses} />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
