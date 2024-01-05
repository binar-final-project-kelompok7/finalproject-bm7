import React, { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import "../assets/style/DetailCLass.css";
import Pup from "./Popup";
import Header from "./Header";
import BottomNav from "./BottomNav";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import PlayVideoImg from "../assets/img/play-video.png";
import MdiBadgeOutlineImg from "../assets/img/mdi_badge-outline.png";
import Cookies from "universal-cookie";

function DetailClass() {
  const [isPopupVisible, setPopupVisible] = useState(null);
  const { courseCode } = useParams();
  const [courseData, setCourseData] = useState(null);
  const cookies = new Cookies();
  const navigate = useNavigate();
  const togglePopup = () => {
    const token = cookies.get("jwt_authorization");
    if (token) {
      setPopupVisible(true);
    } else {
      alert("Please log in to make a purchase");
      navigate("/login");
    }
  };

  const Kembali = () => {
    window.history.back();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://coursein7.uc.r.appspot.com/api/v1/courses/${courseCode}`);
        setCourseData(response.data.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchData();
  }, [courseCode]);

  return (
    <>
      {courseData && (
        <>
          <Header />
          <div className="dekstop">
            <div
              className="section"
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#fff",
                justifyContent: "start",
                alignItems: "center",
                display: "flex",
                marginTop: "50px",
              }}
            >
              <div
                className="title"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  marginTop: "-50px",
                  background: "#EBF3FC",
                  width: "100%",
                }}
              >
                <h3 className="back" style={{ fontSize: "17px", fontWeight: "700" }}>
                  <BsArrowLeft style={{ fontSize: "20px", marginRight: "20px" }} onClick={Kembali} />
                  Kelas Lainnya
                </h3>
                <div className="items" style={{ paddingRight: "350px" }}>
                  <h3 style={{ color: "#6148FF", fontWeight: "700" }}>{courseData.category}</h3>
                  <h3>{courseData.name}</h3>
                  <h6>by {courseData.author}</h6>
                </div>
                <div className="columns">
                  <div className="column">
                    <p style={{ color: "#6148FF" }}>
                      <img src={MdiBadgeOutlineImg}></img> {courseData.level}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="section2" style={{ paddingTop: "50px", paddingLeft: "100px" }}>
              <div
                className="video"
                data-bs-toggle="modal"
                href="#exampleModalToggle"
                role="button"
                onClick={togglePopup}
                style={{
                  backgroundColor: "#000000D9",
                  width: "55%",
                  height: "370px",
                  borderRadius: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img src={PlayVideoImg} style={{ width: "15%", height: "120px", marginTop: "110px" }}></img>
              </div>
              <div className="teks" style={{ paddingTop: "40px", width: "50%" }}>
                <h2>Tentang Kelas</h2>
                <p>{courseData.description}</p>
                <h2>Kelas Ini Ditujukan Untuk</h2>
                <ul style={{ marginLeft: "-30px" }}>
                  {courseData.intendeds.map((intended, index) => (
                    <li key={index}>
                      {index + 1}. {intended}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="btnjoin" onClick={togglePopup} data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
                <button className="join">Beli Sekarang</button>
              </div>
            </div>
            <BottomNav />
          </div>
          <div className="pop">{isPopupVisible && <Pup />}</div>
          <div className="mobile">
            <div className="other">
              <BsArrowLeft style={{ fontSize: "20px", marginRight: "20px" }} onClick={Kembali} />
              Kelas Lainnya
            </div>
            <div
              className="video"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={PlayVideoImg} style={{ paddingTop: "40px", paddingBottom: "40px" }} className="" data-bs-toggle="modal" href="#exampleModalToggle" role="button" onClick={togglePopup}></img>
            </div>
            <div className="title" style={{ display: "flex", alignItems: "center" }}>
              <h4
                style={{
                  color: "#6148FF",
                  fontWeight: "700",
                  paddingTop: "20px",
                  paddingLeft: "20px",
                  width: "80%",
                }}
              >
                {courseData.category}
              </h4>
            </div>
            <h6
              style={{
                paddingRight: "20px",
                paddingLeft: "20px",
                fontWeight: "700",
              }}
            >
              {courseData.name}
              <p style={{ fontSize: "10px", paddingTop: "10px" }}>by {courseData.author}</p>
            </h6>
            <div
              className="deets"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "50px",
                justifyContent: "center",
                paddingLeft: "20px",
                paddingRight: "20px",
              }}
            >
              <p style={{ fontSize: "12px", color: "#6148FF" }}>
                <img src={MdiBadgeOutlineImg} alt="badge"></img>
                {courseData.level}
              </p>
            </div>

            <div className="tentang">
              <div
                className="teks"
                style={{
                  paddingTop: "40px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  paddingBottom: "50px",
                  textAlign: "left",
                }}
              >
                <h2 style={{ fontWeight: "700" }}>Tentang Kelas</h2>
                <p>{courseData.description}</p>
                <h2 style={{ fontWeight: "700" }}>Kelas Ini Ditujukan Untuk</h2>
                <ul style={{ marginLeft: "-30px", textAlign: "start" }}>
                  {courseData.intendeds.map((intended, index) => (
                    <li key={index}>
                      {index + 1}. {intended}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="join2" onClick={togglePopup} data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
              <button>Beli Sekarang</button>
            </div>
            <div className="pop">{isPopupVisible && <Pup />}</div>
            <hr></hr>
          </div>
        </>
      )}
    </>
  );
}

export default DetailClass;
