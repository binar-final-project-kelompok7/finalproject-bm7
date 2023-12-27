import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import categoryImage from "../assets/categoryImage.png";

const Category = () => {
  const { courseCode } = useParams();
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://course-in-production.up.railway.app/api/v1/courses", {
          headers: {
            Accept: "application/json",
          },
        });

        setCourseData(response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [courseCode]);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          <h4 className="text-start fw-bold">Kategori Belajar</h4>
        </div>
        <div className="col-6 text-end">
          <button className="allButton bg-transparent fw-bolder" style={{ color: "#6148FF" }}>
            Lihat Semua
          </button>
        </div>
      </div>
      <div className="categories d-flex flex-row justify-content-start overflow-auto gap-3">
        {courseData.map((course) => (
          <div key={course.code} className="category text-center" style={{ width: "285px" }}>
            <img src={course.image || categoryImage} alt={course.name} />
            <p style={{ fontWeight: "600" }}>{course.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
