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
      <main>
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
    <section className="course-container">
      <h3>{course}</h3>
      <ul>
        <li>From {university}</li>
        <li>By {instructor}</li>
        <li>Located in {location}</li>
        <li>
          <a href={enroll}>See Course Detail</a>
        </li>
      </ul>
      <p>at only ${price}</p>
      <button onClick={() => props.addCourse(courseModule)}>Buy This Course</button>
      <img src={picture} alt={instructor} />
    </section>
  );
};

export default Courses;
