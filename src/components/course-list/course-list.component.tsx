import React from "react";
import { Course } from "../../common/interfaces/course.interface";
import CourseCard from "../course-card/course-card.component";

import "./course-list.component.css";

interface CoursesListProps {
  courses: Course[];
}
const CourseList: React.FC<CoursesListProps> = ({
  courses,
}: CoursesListProps) => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <div key={course.id}>
          <CourseCard courses={course} />
        </div>
      ))}
    </div>
  );
};

export default CourseList;
