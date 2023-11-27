import React, { useState } from "react";
import Filter from "../components/Filter";
import "./KelasSaya.css";
import searchIcon from "../assets/search-icon.png";
import imageimg from "../assets/img.png";
import star from "../assets/star.png";
import level from "../assets/level.png";
import modul from "../assets/modul.png";
import timeimg from "../assets/time.png";
import progress from "../assets/progress_check.png";
const Course = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    document.querySelectorAll("button").forEach((button) => {
      button.classList.remove("active");
    });
    document.getElementById(`button-${buttonNumber}`).classList.add("active");
  };
  return (
    <div className="KelasSaya-background">
      <div className="KelasSaya-Container">
        <div className="KelasSaya-Header">
          <h1>Topik Kelas</h1>
          <div>
            <input type="text" placeholder="Cari Kelas" />
            <button>
              <img src={searchIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="KelasSaya-Content">
          <Filter />
          <div className="KelasSaya-isi">
            <div className="button-isi-ks">
              <button id="button-1" onClick={() => handleButtonClick(1)} className={activeButton === 1 ? "active" : ""}>
                All
              </button>
              <button id="button-2" onClick={() => handleButtonClick(2)} className={activeButton === 2 ? "active" : ""}>
                Kelas Premium
              </button>
              <button id="button-3" onClick={() => handleButtonClick(3)} className={activeButton === 3 ? "active" : ""}>
                Kelas Gratis
              </button>
            </div>
            <div className="ks-card-container">
              <div className="ks-card-content">
                <img src={imageimg} alt="" />
                <div className="ks-card-content-1">
                  <p>UI/UX Design</p>
                  <div>
                    <img src={star} alt="" />
                    4.7
                  </div>
                </div>
                <p className="titlecourse">Belajar Web Designer dengan Figma</p>
                <p className="creator">by Angela Doe </p>
                <div className="ks-card-content-2">
                  <div>
                    <img src={level} alt="" />
                    <p>Intermediate Level</p>
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
                <div className="ks-card-content-3">Premium</div>
              </div>
              <div className="ks-card-content">
                <img src={imageimg} alt="" />
                <div className="ks-card-content-1">
                  <p>UI/UX Design</p>
                  <div>
                    <img src={star} alt="" />
                    4.7
                  </div>
                </div>
                <p className="titlecourse">Belajar Web Designer dengan Figma</p>
                <p className="creator">by Angela Doe </p>
                <div className="ks-card-content-2">
                  <div>
                    <img src={level} alt="" />
                    <p>Intermediate Level</p>
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
                <div className="ks-card-content-3">Premium</div>
              </div>
              <div className="ks-card-content">
                <img src={imageimg} alt="" />
                <div className="ks-card-content-1">
                  <p>UI/UX Design</p>
                  <div>
                    <img src={star} alt="" />
                    4.7
                  </div>
                </div>
                <p className="titlecourse">Belajar Web Designer dengan Figma</p>
                <p className="creator">by Angela Doe </p>
                <div className="ks-card-content-2">
                  <div>
                    <img src={level} alt="" />
                    <p>Intermediate Level</p>
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
                <div className="ks-card-content-3">Premium</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
