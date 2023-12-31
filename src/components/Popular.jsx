import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import classImage from "../assets/img/classImage.png";
import uiux from "../assets/img/uiux_.jpg";
import android from "../assets/img/andoid_.jpg";
import business from "../assets/img/business_.jpg";
import datascience from "../assets/img/datascience_.jpg";
import axios from "axios";
import "../assets/style/Hero.css";
const Popular = () => {
  const [popularCourses, setPopularCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const categoryImageMap = {
    UIUX_DESIGN: uiux,
    DATA_SCIENCE: datascience,
    ANDROID_DEVELOPMENT: android,
    BUSINESS_INTELLIGENCE: business,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://coursein7.uc.r.appspot.com/api/v1/courses", {
          headers: {
            Accept: "application/json",
          },
        });
        setPopularCourses(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
  const filteredCourses = selectedCategory === "All" ? popularCourses : popularCourses.filter((course) => course.category === selectedCategory);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h4 className="text-start fw-bold" style={{ marginTop: "40px" }}>
            Kursus Populer
          </h4>
        </div>
        <div className="col-6 text-end">
          <button className="allButton bg-transparent fw-bolder" style={{ color: "#6148FF", marginTop: "40px" }} onClick={() => navigate("/course")}>
            Lihat Semua
          </button>
        </div>
      </div>
      <div className="navPopulars overflow-auto d-flex flex-row justify-content-start justify-content-md-start" style={{ marginTop: "20px" }}>
        <div className="navPopular" style={{ width: "100px", marginBottom: "40px" }}>
          <button style={{ backgroundColor: selectedCategory === "All" ? "#6148FF" : "#E8F1FF", color: selectedCategory === "All" ? "#fff" : "#000", fontWeight: "600" }} className="rounded-5" onClick={() => handleCategoryClick("All")}>
            All
          </button>
        </div>
        <div className="navPopular" style={{ width: "220px" }}>
          <button
            style={{ backgroundColor: selectedCategory === "DATA_SCIENCE" ? "#6148FF" : "#E8F1FF", color: selectedCategory === "DATA_SCIENCE" ? "#fff" : "#000", fontWeight: "600" }}
            className="rounded-5 "
            onClick={() => handleCategoryClick("DATA_SCIENCE")}
          >
            Data Science
          </button>
        </div>
        <div className="navPopular" style={{ width: "220px" }}>
          <button
            style={{ backgroundColor: selectedCategory === "UIUX_DESIGN" ? "#6148FF" : "#E8F1FF", color: selectedCategory === "UIUX_DESIGN" ? "#fff" : "#000", fontWeight: "600" }}
            className="rounded-5 "
            onClick={() => handleCategoryClick("UIUX_DESIGN")}
          >
            UI/UX Design
          </button>
        </div>
        <div className="navPopular" style={{ width: "280px" }}>
          <button
            style={{ backgroundColor: selectedCategory === "ANDROID_DEVELOPMENT" ? "#6148FF" : "#E8F1FF", color: selectedCategory === "ANDROID_DEVELOPMENT" ? "#fff" : "#000", fontWeight: "600" }}
            className="rounded-5 "
            onClick={() => handleCategoryClick("ANDROID_DEVELOPMENT")}
          >
            Android Development
          </button>
        </div>
        <div className="navPopular" style={{ width: "250px" }}>
          <button
            style={{ backgroundColor: selectedCategory === "WEB_DEVELOPMENT" ? "#6148FF" : "#E8F1FF", color: selectedCategory === "WEB_DEVELOPMENT" ? "#fff" : "#000", fontWeight: "600" }}
            className="rounded-5 "
            onClick={() => handleCategoryClick("WEB_DEVELOPMENT")}
          >
            Web Development
          </button>
        </div>
        <div className="navPopular" style={{ width: "250px" }}>
          <button
            style={{ backgroundColor: selectedCategory === "IOS_DEVELOPMENT" ? "#6148FF" : "#E8F1FF", color: selectedCategory === "IOS_DEVELOPMENT" ? "#fff" : "#000", fontWeight: "600" }}
            className="rounded-5 "
            onClick={() => handleCategoryClick("IOS_DEVELOPMENT")}
          >
            Data Science
          </button>
        </div>
        <div className="navPopular" style={{ width: "280px" }}>
          <button
            style={{ backgroundColor: selectedCategory === "BUSINESS_INTELLIGENCE" ? "#6148FF" : "#E8F1FF", color: selectedCategory === "BUSINESS_INTELLIGENCE" ? "#fff" : "#000", fontWeight: "600" }}
            className="rounded-5 "
            onClick={() => handleCategoryClick("BUSINESS_INTELLIGENCE")}
          >
            Business Intelligence
          </button>
        </div>
      </div>
      <div className="popularList d-flex overflow-auto gap-3">
        {filteredCourses.map((course) => {
          const categoryImage = categoryImageMap[course.category] || classImage;

          return (
            <div key={course.code} className="popularContent d-flex flex-column text-start" style={{ width: "323px" }}>
              <Link to={`/detailclass/${course.code}`} style={{ textDecoration: "none" }}>
                <img src={categoryImage} alt="gambar" className="ks-img" />
                <h6 style={{ fontWeight: "600", color: "#6148FF", marginTop: "20px" }}>{course.category}</h6>
                <h6 style={{ fontWeight: "600" }}>{course.name}</h6>
                <div className="d-flex flex-wrap justify-content-between">
                  <div className="">
                    <p style={{ fontWeight: "500" }}>{course.level}</p>
                  </div>
                </div>
                <button className="rounded-5 text-white" style={{ backgroundColor: "#489CFF", width: "180px", height: "40px", marginBottom: "20px" }}>
                  Beli {course.price}
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
