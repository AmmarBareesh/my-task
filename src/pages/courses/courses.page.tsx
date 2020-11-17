import React from "react";

import CourseList from "../../components/course-list/course-list.component";
import SelectFilter from "../../components/select-filter/select-filter.component";

import { useGetCourses } from "../../hooks/courses/useGetCourses";

const Courses: React.FC = () => {
  const courses = useGetCourses();

  return (
    <div className="courses">
      <div className="container">
        <SelectFilter />
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <CourseList courses={courses || []} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
