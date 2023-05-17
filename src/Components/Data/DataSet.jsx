import React, { useEffect, useState } from "react";
import Courses from "../Courses/Courses";

const Data = () => {
  //? load course content from https://mocki.io/v1/b78b2bf8-f9b4-401d-8195-11b8ce1daf32
  const [courses, setCourse] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/b78b2bf8-f9b4-401d-8195-11b8ce1daf32")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return <Courses courseSet={courses} />;
};

export default Data;
