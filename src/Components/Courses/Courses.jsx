import React, { useState } from "react";
import "./courses.css";
import CourseCount from "../CourseCount/CourseCount";

const Courses = (props) => {
  const courses = props.courseSet.content;

  //? add friend event handler with useState
  const [courseJoined, addCourse] = useState([]);
  const handleAddCourse = (user) => {
    const newList = [...courseJoined, user];
    addCourse(newList);
  };

  try {
    return (
      <main className="m-3">
        <section className="courses-container">
          {courses.map((course) => (
            <Course
              courseContent={course}
              key={course.id}
              addCourse={handleAddCourse}
            />
          ))}
        </section>
        <CourseCount coursePurchased={courseJoined} />
      </main>
    );
  } catch (err) {
    console.log(err);
  }
};

const Course = (props) => {
  const courseModule = props.courseContent;

  //? destructuring the course object
  const { course, university, instructor, location, price, enroll, picture } =
  courseModule;

  return (
    <section className="text-center p-2 rounded border border-light-subtle course-container">
      <h3 className="fs-5 m-0">{course}</h3>
      <ul className="m-0 p-0">
        <li className="py-1 px-0 fw-medium">From {university}</li>
        <li className="pb-1 pt-0 px-0">By {instructor}</li>
        <li className="pb-1 pt-0 px-0 fw-light">Located in {location}</li>
        <li>
          <a className="m-0 text-decoration-none" href={enroll}>See Course Detail</a>
        </li>
      </ul>
      <p className="my-2">at only ${price}</p>
      <button className="rounded border-0" onClick={() => props.addCourse(courseModule)}>Buy This Course</button>
      <img className="w-25 mx-auto mt-2 rounded-circle d-block" src={picture} alt={instructor} />
    </section>
  );
};

export default Courses;
