import React, { useState, useEffect } from "react";
import "../style/Popup.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import BadgeImg from "../assets/img/mdi_badge-outline.png";
import BookImg from "../assets/img/clarity_book-line.png";
import TimeImg from "../assets/img/ri_time-fill.png";
import NextImg from "../assets/img/carbon_next-filled.png";
import ImageImg from "../assets/img/image.png";

function Pup() {
  const { courseCode } = useParams();
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://course-in-production.up.railway.app/api/v1/courses/${courseCode}`
        );
        setCourseData(response.data.data);
        console.log("Course Data:", response.data.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchData();
  }, [courseCode]);
  return (
    <>
      {courseData && (
        <div
          class="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <h2
                  className="title"
                  style={{ textAlign: "center", fontWeight: "700" }}
                >
                  Selangkah lagi menuju <br></br>
                  <h2 className="class" style={{ color: "#6148FF" }}>
                    KELAS {courseData.type}
                  </h2>
                </h2>
                <div className="kotak">
                  <img src={ImageImg} alt="image"></img>
                  <h6>{courseData.category}</h6>
                  <h7>{courseData.name}</h7>
                  <p>by {courseData.author}</p>
                  <div
                    className="deets"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "40px",
                      justifyContent: "center",
                      paddingRight: "20px",
                    }}
                  >
                    <p style={{ fontSize: "12px", color: "#6148FF" }}>
                      <img src={BadgeImg} alt="badge"></img>
                      {courseData.level} LEVEL
                    </p>
                    <p style={{ fontSize: "12px" }}>
                      <img src={BookImg} alt="book"></img>5 Modul
                    </p>
                    <p style={{ fontSize: "12px" }}>
                      <img src={TimeImg} alt="time"></img>45 Menit
                    </p>
                  </div>
                  <button className="buy">Beli Rp {courseData.price}</button>
                </div>
                <Link to="/detail-pay">
                  <button className="buynow">
                    Beli Sekarang<img src={NextImg} alt="next"></img>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Pup;
