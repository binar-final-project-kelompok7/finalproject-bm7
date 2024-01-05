import React from "react";
import imageimg from "../assets/img/img.png";
import level from "../assets/img/level.png";
import uiux from "../assets/img/uiux_.jpg";
import android from "../assets/img/andoid_.jpg";
import business from "../assets/img/business_.jpg";
import datascience from "../assets/img/datascience_.jpg";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ course, navigateTo }) => {
  const navigate = useNavigate();
  const categoryImageMap = {
    UIUX_DESIGN: uiux,
    DATA_SCIENCE: datascience,
    ANDROID_DEVELOPMENT: android,
    BUSINESS_INTELLIGENCE: business,
  };

  const categoryImage = categoryImageMap[course.category] || imageimg;
  return (
    <div className="ks-card-content" key={course.code} onClick={() => navigate(navigateTo)}>
      <img src={categoryImage} alt="" className="ks-img" />
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
