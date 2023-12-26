import React, { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import "../style/DetailCLass.css";
import Pup from "./Popup";
import Header from "./Header";
import BottomNav from "./BottomNav";
import { useParams } from "react-router-dom";
import axios from "axios";
import PlayVideoImg from "../assets/img/play-video.png";
import MdiBadgeOutlineImg from "../assets/img/mdi_badge-outline.png";
import ClarityBookLineImg from "../assets/img/clarity_book-line.png";
import RiTimeFillImg from "../assets/img/ri_time-fill.png";
import StartImg from "../assets/img/start.png";

function DetailClass() {
  const [isPopupVisible, setPopupVisible] = useState(true);
  const { courseCode } = useParams();
  const [courseData, setCourseData] = useState(null);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  const Kembali = () => {
    window.history.back();
  };

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
        <div className="dekstop">
          <Header />
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
              <div className="pop">{isPopupVisible && <Pup />}</div>

              <h3
                className="back"
                style={{ fontSize: "17px", fontWeight: "700" }}
              >
                <BsArrowLeft
                  style={{ fontSize: "20px", marginRight: "20px" }}
                  onClick={Kembali}
                />
                Kelas Lainnya
              </h3>
              <div className="items" style={{ paddingRight: "350px" }}>
                <h3 style={{ color: "#6148FF", fontWeight: "700" }}>
                  {courseData.category}
                </h3>
                <h3>{courseData.name}</h3>
                <h6>by {courseData.author}</h6>
              </div>
              <div className="columns">
                <div className="column">
                  <p style={{ color: "#6148FF" }}>
                    <img src={MdiBadgeOutlineImg}></img> {courseData.level}
                  </p>
                </div>
                <div className="column">
                  <p>
                    <img src={ClarityBookLineImg}></img> 5 Modul
                  </p>
                </div>
                <div className="column">
                  <p>
                    <img src={RiTimeFillImg}></img> 45 Menit
                  </p>
                </div>
              </div>
              <div className="btnjoin">
                <button className="join">Join Grup Telegram</button>
              </div>
            </div>
          </div>
          <div
            className="section2"
            style={{ paddingTop: "50px", paddingLeft: "100px" }}
          >
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
              <img
                src={PlayVideoImg}
                style={{ width: "15%", height: "120px", marginTop: "110px" }}
              ></img>
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
          </div>
          <BottomNav />
        </div>
      )}

      <div className="mobile">
        <div className="other">
          <img
            src="./img/fi_arrow-left.png"
            style={{ paddingRight: "20px" }}
          ></img>
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
          <img
            src={PlayVideoImg}
            style={{ paddingTop: "40px", paddingBottom: "40px" }}
            className=""
            data-bs-toggle="modal"
            href="#exampleModalToggle"
            role="button"
            onClick={togglePopup}
          ></img>
        </div>
        <div
          className="title"
          style={{ display: "flex", alignItems: "center" }}
        >
          <h4
            style={{
              color: "#6148FF",
              fontWeight: "700",
              paddingTop: "20px",
              paddingLeft: "20px",
              width: "80%",
            }}
          >
            UI/UX Design
          </h4>
          <div className="rate">
            <img src={StartImg} alt="star"></img>5.0
          </div>
        </div>
        <h6
          style={{
            paddingRight: "20px",
            paddingLeft: "20px",
            fontWeight: "700",
          }}
        >
          Intro to Basic of User Interaction Design
          <p style={{ fontSize: "10px", paddingTop: "10px" }}>by Simon Doe</p>
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
            <img src={MdiBadgeOutlineImg} alt="badge"></img>Beginner Level
          </p>
          <p style={{ fontSize: "12px" }}>
            <img src={ClarityBookLineImg} alt="book"></img>5 Modul
          </p>
          <p style={{ fontSize: "12px" }}>
            <img src={RiTimeFillImg} alt="time"></img>45 Menit
          </p>
        </div>

          <div className="tentang">
            <div className="join2">
              <button>
                Join Grup Telegram
                <img src="./img/gridicons_chat.png" alt="chat"></img>
              </button>
            </div>
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
              <p>
                {" "}
                Design system adalah kumpulan komponen design, code, ataupun
                dokumentasi yang dapat digunakan sebagai panduan utama yang
                memunginkan designer serta developer memiliki lebih banyak
                kontrol atas berbagai platform. Dengan hadirnya design system,
                dapat menjaga konsistensi tampilan user interface dan
                meningkatkan user experience menjadi lebih baik. Disisi bisnis,
                design system sangat berguna dalam menghemat waktu dan biaya
                ketika mengembangkan suatu produk. Bersama mentor XXX, kita akan
                mempelajari design system dari mulai manfaat, alur kerja
                pembuatannya, tools yang digunakan, hingga pada akhirnya, kita
                akan membuat MVP dari design system. Selain itu, mentor juga
                akan menjelaskan berbagai resource yang dibutuhkan untuk mencari
                inspirasi mengenai design system. Kelas ini sesuai untuk Anda
                yang ingin memahami apa itu design system. Tidak hanya ditujukan
                untuk UI/UX Designer ataupun Developer, kelas ini sangat sesuai
                untuk stakeholder lain agar dapat memudahkan tim dalam bekerja
                sama. Yuk segera daftar dan kami tunggu di kelas ya!
              </p>
              <h2 style={{ fontWeight: "700" }}>Kelas Ini Ditujukan Untuk</h2>
              <ul style={{ marginLeft: "-30px", textAlign: "start" }}>
                <li>1. Anda yang ingin memahami poin penting design system</li>
                <li>
                  2. Anda yang ingin membantu perusahaan lebih optimal dalam
                  membuat design produk
                </li>
                <li>3. Anda yang ingin latihan membangun design system</li>
                <li>4. Anda yang ingin latihan membangun design system</li>
              </ul>
            </div>
          </div>
          <div className="pop">{isPopupVisible && <Pup />}</div>
        <hr></hr>
      </div>
    </>
  );
}

export default DetailClass;
