import React from "react";
import imageimg from "../assets/img.png";
import star from "../assets/star.png";
import level from "../assets/level.png";
import modul from "../assets/modul.png";
import timeimg from "../assets/time.png";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <div className="ks-card-content" key={course.code} onClick={() => navigate(navigateTo)}>
      <img src={imageimg} alt="" />
      <div className="ks-card-content-1">
        <p>{course.category}</p>
        <div>
          <img src={star} alt="" />
          4.7
        </div>
      </div>
      <p className="titlecourse">{course.name}</p>
      <p className="creator">by {course.author} </p>
      <div className="ks-card-content-2">
        <div>
          <img src={level} alt="" />
          <p>{course.level}</p>
        </div>
        <div>
          <img src={modul} alt="" />
          <p>10 Modul</p>
        </div>
        <div>
          <img src={timeimg} alt="" />
          <p>120 menit</p>
        </div>
      </div>
      <div className={`ks-card-content-3 ${course.type.toLowerCase()}`}>{course.type}</div>
    </div>
  );
};

export default CourseCard;
