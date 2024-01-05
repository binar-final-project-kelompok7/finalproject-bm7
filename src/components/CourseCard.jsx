import React from "react";
import imageimg from "../assets/img/img.png";
import level from "../assets/img/level.png";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <div className="ks-card-content" key={course.code} onClick={() => navigate(navigateTo)}>
      <img src={imageimg} alt="" className="ks-img" />
      <div className="ks-card-content-1">
        <p>{course.category}</p>
      </div>
      <p className="titlecourse">{course.name}</p>
      <p className="creator">by {course.author} </p>
      <div className="ks-card-content-2">
        <div>
          <img src={level} alt="" />
          <p>{course.level}</p>
        </div>
      </div>
      <div className={`ks-card-content-3 ${course.type.toLowerCase()}`}>{course.type}</div>
    </div>
  );
};

export default CourseCard;
