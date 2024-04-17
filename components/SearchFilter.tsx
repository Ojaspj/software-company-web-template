import React, { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface Course {
  name: string;
  category: string;
}

interface SearchFilterProps {
  courses: Course[];
  onFilterChange: (category: string) => void;
  onSearch: (searchTerm: string) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({
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
    <div className=" flex flex-col md:flex-row h-auto md:h-10 items-center mb-4 gap-4 w-full ">
      <select
        onChange={handleFilterChange}
        className=" rounded-none  w-full md:w-[300px] md:px-4 h-10 cursor-pointer border border-black text-md font-light focus-visible:outline-none "
      >
        <option value="">All Categories</option>
        <option value="programming">Programming</option>
        <option value="tech">Tech</option>
        <option value="photography">Photography</option>
        <option value="science">Science</option>
      </select>
      <Input
        type="text"
        placeholder="Enter keywords here"
        value={searchTerm}
        onChange={handleSearchChange}
        className="h-10 w-full md:w-[700px] rounded-none"
      />
      <Button className="rounded-none w-full md:w-72 bg-[#344A80] text-white p-1 text-lg">
        SEARCH COURSE
      </Button>
    </div>
  );
};

export default SearchFilter;
