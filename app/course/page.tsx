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
    <div className="md:w-full min-h-screen ">
      <Wrapper>
        <div className="w-full h-auto ">
          <div className="w-auto h-auto md:p-8 py-12">
            <h1 className=" text-xl tracking-tighter text-gray-600 font-bold">
              COURSES
            </h1>
            <h1 className=" mt-4 text-5xl font-serif font-bold tracking-tight lg:text-6xl">
              <span className="text-[#344A80] font-semibold">Explore</span> our
              courses
            </h1>
          </div>
          <div className=" md:px-8">
            <div className=" h-auto w-full  md:w-full my-4 flex flex-col ">
              <SearchFilter
                courses={courses}
                onSearch={handleSearch}
                onFilterChange={handleFilterChange}
              />
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
