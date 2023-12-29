import React, { useState, useEffect } from "react";
import "../style/Popup.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import BadgeImg from "../assets/img/mdi_badge-outline.png";
import BookImg from "../assets/img/clarity_book-line.png";
import TimeImg from "../assets/img/ri_time-fill.png";
import NextImg from "../assets/img/carbon_next-filled.png";
import ImageImg from "../assets/img/image.png";
import Cookies from "universal-cookie";

function Pup() {
  const { courseCode } = useParams();
  const [courseData, setCourseData] = useState(null);
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://course-in-production.up.railway.app/api/v1/courses/${courseCode}`
        );
        setCourseData(response.data.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchData();
  }, [courseCode]);

  const postOrder = async () => {
    const usernameProfile = cookies.get("api_username");
    const token = cookies.get("jwt_authorization");
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      const response = await axios.post(
        "https://course-in-production.up.railway.app/api/v1/orders",
        {
          username: usernameProfile,
          courseCode: courseCode,
        },
        { headers }
      );

      const orderID = response.data.data.orderCode;

      navigate(`/detail-pay/${orderID}`);
    } catch (error) {
      console.error("Error posting order:", error);
    }
  };
  return (
    <>
      {courseData && (
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabIndex="-1"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <h2
                  className="title"
                  style={{ textAlign: "center", fontWeight: "700" }}
                >
                  Selangkah lagi menuju <br></br>
                  <p className="className" style={{ color: "#6148FF" }}>
                    KELAS {courseData.type}
                  </p>
                </h2>
                <div className="kotak">
                  <img src={ImageImg} alt="image"></img>
                  <h6>{courseData.category}</h6>
                  <h6>{courseData.name}</h6>
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
                  <button className="buy" onClick={postOrder}>
                    Beli Rp {courseData.price}
                  </button>
                </div>
                <button className="buynow" onClick={postOrder}>
                  Beli Sekarang<img src={NextImg} alt="next"></img>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Pup;
