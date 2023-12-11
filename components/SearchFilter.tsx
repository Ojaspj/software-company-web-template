import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface Course {
  name: string;
  category: string;
  overview: string;
}

interface SearchFilterProps {
  courses: Course[];
  onFilterChange: (category: string) => void;
  onSearch: (searchTerm: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
  courses,
  onFilterChange,
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className=" flex flex-col md:flex-row h-auto md:h-10 items-center   mb-4 gap-4 w-full ">
      <div className="  md:w-[500px]">
        <Input
          type="text"
          placeholder="Search by course name"
          value={searchTerm}
          onChange={handleSearchChange}
          className="h-10"
        />
      </div>
      <div className="flex md:flex-row gap-4 items-center">
        <select
          onChange={handleFilterChange}
          className=" rounded-md p-2 md:px-4 h-full cursor-pointer border border-black text-md font-light focus-visible:outline-none "
        >
          <option value="">All Categories</option>
          <option value="programming">Programming</option>
          <option value="tech">Tech</option>
          <option value="photography">Photography</option>
          <option value="science">Science</option>
        </select>
        <Button
          onClick={() => onSearch(searchTerm)}
          className="bg-[#344A80] hover:bg-[#213872] text-white font-bold text-md h-full   w-auto md:my-4 rounded transition-transform hover:scale-105 "
        >
          SEARCH COURSE
        </Button>
      </div>
    </div>
  );
};

export default SearchFilter;
