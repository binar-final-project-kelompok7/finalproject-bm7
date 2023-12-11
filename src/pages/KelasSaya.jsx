import React, { useState } from "react";
import "./KelasSaya.css";
import searchIcon from "../assets/search-icon.png";
import imageimg from "../assets/img.png";
import star from "../assets/star.png";
import level from "../assets/level.png";
import modul from "../assets/modul.png";
import timeimg from "../assets/time.png";
import progress from "../assets/progress_check.png";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
const KelasSaya = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [modalVisible, setModalVisible] = useState(true);

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    document.querySelectorAll("button").forEach((button) => {
      button.classList.remove("active-ks");
    });
    document.getElementById(`button-${buttonNumber}`).classList.add("active-ks");
  };

  const toggleDropdown = () => {
    if (window.innerWidth <= 426) {
      setModalVisible(!modalVisible);
    }
  };

  return (
    <div className="KelasSaya-background">
      <Header />
      <div className="KelasSaya-Container">
        <div className="KelasSaya-Header">
          <div className="KS-Header">
            <h1>Kelas Berjalan</h1>
            <button
              className="filter-toggle"
              onClick={(e) => {
                e.preventDefault();
                toggleDropdown();
              }}
            >
              Filter
            </button>
          </div>
          <div className="search">
            <input type="text" placeholder="Cari Kelas" />
            <button>
              <img src={searchIcon} alt="" />
            </button>
          </div>
        </div>
        <div className="KelasSaya-Content">
          <div
            className="filter-modal"
            style={{
              display: modalVisible && window.innerWidth <= 426 ? "none" : "flex",
            }}
            onClick={() => setModalVisible(true)}
          >
            <form className="filter" onClick={(e) => e.stopPropagation()}>
              <h1>Filter</h1>
              <div className="isiFilter">
                <div>
                  <input type="checkbox" id="palingbaru" />
                  <label htmlFor="palingbaru">Paling Baru</label>
                </div>
                <div>
                  <input type="checkbox" id="palingpopuler" />
                  <label htmlFor="palingpopuler">Paling Populer</label>
                </div>
                <div>
                  <input type="checkbox" id="promo" />
                  <label htmlFor="promo">Promo</label>
                </div>
              </div>
              <h1>Kategori</h1>
              <div className="isiFilter">
                <div>
                  <input type="checkbox" id="UI/UXDesign" />
                  <label htmlFor="UI/UXDesign">UI/UX Design</label>
                </div>
                <div>
                  <input type="checkbox" id="WebDevelopment" />
                  <label htmlFor="WebDevelopment">Web Development</label>
                </div>
                <div>
                  <input type="checkbox" id="AndroidDevelopment" />
                  <label htmlFor="AndroidDevelopment">Android Development</label>
                </div>
                <div>
                  <input type="checkbox" id="DataScience" />
                  <label htmlFor="DataScience">Data Science</label>
                </div>
                <div>
                  <input type="checkbox" id="BusinessIntelligence" />
                  <label htmlFor="BusinessIntelligence">Business Intelligence</label>
                </div>
              </div>
              <h1>Level Kesulitan</h1>
              <div className="isiFilter">
                <div>
                  <input type="checkbox" id="SemuaLevel" />
                  <label htmlFor="SemuaLevel">Semua Level</label>
                </div>
                <div>
                  <input type="checkbox" id="BeginnerLevel" />
                  <label htmlFor="BeginnerLevel">Beginner Level</label>
                </div>
                <div>
                  <input type="checkbox" id="IntermediateLevel" />
                  <label htmlFor="IntermediateLevel">Intermediate Level</label>
                </div>
                <div>
                  <input type="checkbox" id="AdvancedLevel" />
                  <label htmlFor="AdvancedLevel">Advanced Level</label>
                </div>
              </div>
              <button>Hapus Filter</button>
            </form>
          </div>
          <div className="KelasSaya-isi">
            <div className="button-isi-ks">
              <button id="button-1" onClick={() => handleButtonClick(1)} className={activeButton === 1 ? "active-ks" : ""}>
                All
              </button>
              <button id="button-2" onClick={() => handleButtonClick(2)} className={activeButton === 2 ? "active-ks" : ""}>
                In Progress
              </button>
              <button id="button-3" onClick={() => handleButtonClick(3)} className={activeButton === 3 ? "active-ks" : ""}>
                Selesai
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
                <div className="ks-card-content-3">
                  <img src={progress} alt="" />
                  <div className="card-progress-bar-container">
                    <div className="card-progress-bar" style={{ width: "20px" }}></div>
                    <p className="card-progress-bar-percen">20%</p>
                  </div>
                </div>
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
                <div className="ks-card-content-3">
                  <img src={progress} alt="" />
                  <div className="card-progress-bar-container">
                    <div className="card-progress-bar" style={{ width: "60px" }}></div>
                    <p className="card-progress-bar-percen">40%</p>
                  </div>
                </div>
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
                <div className="ks-card-content-3">
                  <img src={progress} alt="" />
                  <div className="card-progress-bar-container">
                    <div className="card-progress-bar" style={{ width: "100px" }}></div>
                    <p className="card-progress-bar-percen">60%</p>
                  </div>
                </div>
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
                <div className="ks-card-content-3">
                  <img src={progress} alt="" />
                  <div className="card-progress-bar-container">
                    <div className="card-progress-bar" style={{ width: "60px" }}></div>
                    <p className="card-progress-bar-percen">40%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default KelasSaya;
