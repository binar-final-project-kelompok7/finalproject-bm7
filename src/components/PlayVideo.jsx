import React, { useState, useEffect, useRef } from "react";
import { BsArrowLeft } from "react-icons/bs";
import "../assets/style/DetailCLass.css";
import "../assets/style/video.css";
import Header from "./Header";
import BottomNav from "./BottomNav";
import { useParams } from "react-router-dom";
import MdiBadgeOutlineImg from "../assets/img/mdi_badge-outline.png";
import ClarityBookLineImg from "../assets/img/clarity_book-line.png";
import RiTimeFillImg from "../assets/img/ri_time-fill.png";
import StartImg from "../assets/img/start.png";

function PlayVideo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [courseData, setCourseData] = useState({});
  const videoRef = useRef(null);
  const { courseCode } = useParams();
  useEffect(() => {
    // Fetch data from your API
    fetch(`https://coursein7.uc.r.appspot.com/api/v1/courses/${courseCode}`)
      .then((response) => response.json())
      .then((data) => setCourseData(data.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Empty dependency array ensures the effect runs only once
  const handlePlayPause = () => {
    const video = videoRef.current;
    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleFullScreen = () => {
    const video = videoRef.current;
    if (isFullScreen) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
    setIsFullScreen(!isFullScreen);
  };

  const Kembali = () => {
    window.history.back();
  };
  return (
    <>
      {courseData && (
        <>
          <Header />
          <div className="dekstop">
            <div className="section" style={{ width: "100%", height: "100%", backgroundColor: "#fff", justifyContent: "start", alignItems: "center", display: "flex", marginTop: "50px" }}>
              <div className="title" style={{ display: "flex", flexDirection: "column", justifyContent: "start", marginTop: "-50px", background: "#EBF3FC", width: "100%" }}>
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
                  <a href="https://t.me/+i1HubHbn_cIyZDQ1" target="_blank" rel="noopener noreferrer">
                    <button className="join">Join Telegram</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="section2" style={{ paddingTop: "50px", paddingLeft: "100px" }}>
              <div className="video-container">
                <div
                  className="video"
                  style={{
                    backgroundColor: "#000000D9",
                    width: "50%",
                    height: "370px",
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <iframe
                    ref={videoRef}
                    src={courseData.link}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onClick={handlePlayPause}
                  ></iframe>
                  <div className="overlay">
                    <div className="buttons" style={{ marginTop: "85%" }}>
                      <button className="left-button">Kelas Lainnya</button>
                      <button className="right-button" onClick={handleFullScreen}>
                        {isFullScreen ? "Minimize" : "Fullscreen"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="teks" style={{ paddingTop: "40px", width: "50%" }}>
                <h2>Tentang Kelas</h2>
                <p>{courseData.description}</p>
                <h2>Kelas Ini Ditujukan Untuk</h2>
                {courseData.intendeds && (
                  <ul style={{ marginLeft: "-30px", textAlign: "start" }}>
                    {courseData.intendeds.map((intended, index) => (
                      <li key={index}>
                        {index + 1}. {intended}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="mobile">
            <div className="other">
              <BsArrowLeft style={{ fontSize: "20px", marginRight: "20px" }} onClick={Kembali} />
              Kelas Lainnya
            </div>
            <div className="video-container">
              <div className="video" style={{ backgroundColor: "#000000D9", width: "100%", height: "170px", display: "flex", justifyContent: "center" }}>
                <iframe ref={videoRef} src={courseData.link} autoPlay loop muted style={{ width: "100%", height: "100%", objectFit: "cover" }}></iframe>
                <div className="overlay">
                  <div className="buttons"></div>
                </div>
              </div>
            </div>
            <div className="title" style={{ display: "flex", alignItems: "center" }}>
              <h4 style={{ color: "#6148FF", fontWeight: "700", paddingTop: "20px", paddingLeft: "20px", width: "80%" }}> {courseData.category}</h4>
              <div className="rate">
                <img src={StartImg} alt="star"></img>5.0
              </div>
            </div>
            <h6 style={{ paddingRight: "20px", paddingLeft: "20px", fontWeight: "700" }}>
              {courseData.name}
              <p style={{ fontSize: "10px", paddingTop: "10px" }}>{courseData.author}</p>
            </h6>
            <div className="deets" style={{ display: "flex", alignItems: "center", gap: "50px", justifyContent: "center", paddingLeft: "20px", paddingRight: "20px" }}>
              <p style={{ fontSize: "12px", color: "#6148FF" }}>
                <img src={MdiBadgeOutlineImg} alt="badge"></img>
                {courseData.level}
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
                <button className="pt-1">
                  <a href="https://t.me/your_telegram_group" target="_blank" rel="noopener noreferrer" className="text-light d-flex align-items-center justify-content-center pt-0">
                    <p>Join Telegram</p>
                  </a>
                </button>
              </div>
              <div className="teks" style={{ paddingTop: "40px", paddingLeft: "20px", paddingRight: "20px", paddingBottom: "50px", textAlign: "left" }}>
                <h2 style={{ fontWeight: "700" }}>Tentang Kelas</h2>
                <p>{courseData.description}</p>
                <h2 style={{ fontWeight: "700" }}>Kelas Ini Ditujukan Untuk</h2>
                {courseData.intendeds && (
                  <ul style={{ marginLeft: "-30px", textAlign: "start" }}>
                    {courseData.intendeds.map((intended, index) => (
                      <li key={index}>
                        {index + 1}. {intended}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <hr></hr>
          </div>
          <BottomNav />
        </>
      )}
    </>
  );
}

export default PlayVideo;
