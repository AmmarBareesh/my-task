import React from "react";
import { Course } from "../../common/interfaces/course.interface";

import "./course-card.component.css";

const CourseCard: React.FC<{ courses: Course }> = ({
  courses,
}: {
  courses: Course;
}) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <img src={courses.image} className="img-thumbnail" alt=""></img>
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-12">
                <p>{courses.title}</p>
              </div>
            </div>
            <hr />
            <div className="row text-lg-center">
              <div className="col-lg-3 col-md-4">
                <span>Start Date :</span>
                <br />
                <span>{courses.start_date}</span>
              </div>
              <div className="col-lg-3 col-md-4">
                <span>End Date :</span>
                <br />
                <span>{courses.end_date}</span>
              </div>
              <div className="col-lg-3 col-md-4">
                <span>Weeks :</span>
                <br />
                <span>10</span>
              </div>
              <div className="col-lg-3 col-md-4">
                <span>Level</span>
                <br />
                <span>{courses.level}</span>
              </div>
            </div>
            <hr />
            <div className="row text-right">
              <div className="col-12">
                <span>Price € 0.00</span>
                <button className="btn btn-primary ml-2"> Book</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
