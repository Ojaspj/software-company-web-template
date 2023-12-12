
import React from 'react';
import CourseCard from './CourseCard';


interface Course {
  name: string;
  category: string;
  overview: string;
}

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className='  h-auto flex flex-wrap  md:p-3  gap-4 md:w-auto justify-center md:justify-normal'>
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} />
      ))}
    </div>
  );
};

export default CourseList;
