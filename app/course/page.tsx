// pages/course/index.tsx

"use client";
import CourseList from "@/components/CouseList";
import SearchFilter from "@/components/SearchFilter";
import Wrapper from "@/components/Wrapper";
import React, { useState } from "react";

const courses = [
  {
    name: "Programming in C",
    category: "Programming",
    overview: "Overview of Course 1",
  },
  { name: "Computer", category: "Tech", overview: "Overview of Course 2" },
  {
    name: "Python",
    category: "Photography",
    overview: "Overview of Course 3",
  },
  { name: "Environment", category: "Science", overview: "Overview of Course 4" },
];

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
    <div className="w-full h-auto ">
      <Wrapper>
        <div className="w-full h-[80vh] border p-8">
          <h1 className=" text-lg md:text-xl tracking-tighter text-gray-600 font-bold">
            COURSES
          </h1>
          <div className="container mx-auto p-4">
            <SearchFilter
              courses={courses}
              onSearch={handleSearch}
              onFilterChange={handleFilterChange}
            />
            {searchedCourses.length === 0 && (
              <div className="text-center text-gray-600 font-bold">
                No courses found
              </div>
            )}
            <CourseList courses={searchedCourses} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
