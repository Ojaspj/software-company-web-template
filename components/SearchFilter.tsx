// SearchFilter.tsx

import React, { useState } from 'react';
import { Input } from './ui/input';

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

const SearchFilter: React.FC<SearchFilterProps> = ({ courses, onFilterChange, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange(event.target.value);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="mb-4">
      <Input
        type="text"
        placeholder="Search by course name"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button
        className="p-2 bg-blue-500 text-white border border-blue-500 rounded"
        onClick={() => onSearch(searchTerm)}
      >
        Search
      </button>
      <select onChange={handleFilterChange} className="p-2 border ml-2">
        <option value="">All Categories</option>
        <option value="programming">Programming</option>
        <option value="tech">Tech</option>
        <option value="photography">Photography</option>
        <option value="science">Science</option>
      </select>
    </div>
  );
};

export default SearchFilter;
