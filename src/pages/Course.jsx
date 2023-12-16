import React, { useState, useEffect } from "react";
import "./KelasSaya.css";
import searchIcon from "../assets/search-icon.png";
import imageimg from "../assets/img.png";
import star from "../assets/star.png";
import level from "../assets/level.png";
import modul from "../assets/modul.png";
import timeimg from "../assets/time.png";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import axios from "axios";

const Course = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [modalVisible, setModalVisible] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://course-in-production.up.railway.app/api/v1/courses?page=0&size=10", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWZpIiwiaWF0IjoxNzAyMDQyMzc5LCJleHAiOjE3MDI2NDcxNzl9.6XZFn4He0mJsF1CtIqbo5U8NO_DitNGhO8fRJP0p3Rg",
          },
        });

        // Set the courses state with the data array
        setCourses(response.data.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    document.querySelectorAll("button").forEach((button) => {
      button.classList.remove("activedBtn");
    });
    document.getElementById(`button-${buttonNumber}`).classList.add("activedBtn");

    switch (buttonNumber) {
      case 1:
        break;
      case 2:
        setFilterOptions({
          ...filterOptions,
          type: "PREMIUM",
        });
        break;
      case 3:
        setFilterOptions({
          ...filterOptions,
          type: "FREE",
        });
        break;
      default:
        break;
    }
  };

  const toggleDropdown = () => {
    if (window.innerWidth <= 426) {
      setModalVisible(!modalVisible);
    }
  };
  const [filterOptions, setFilterOptions] = useState({
    palingbaru: false,
    palingpopuler: false,
    promo: false,
    UIUXDesign: false,
    WebDevelopment: false,
    AndroidDevelopment: false,
    DataScience: false,
    BusinessIntelligence: false,
    BeginnerLevel: false,
    IntermediateLevel: false,
    AdvancedLevel: false,
  });

  const handleClearFilters = () => {
    setFilterOptions({
      palingbaru: false,
      palingpopuler: false,
      promo: false,
      UIUXDesign: false,
      WebDevelopment: false,
      AndroidDevelopment: false,
      DataScience: false,
      BusinessIntelligence: false,
      BeginnerLevel: false,
      IntermediateLevel: false,
      AdvancedLevel: false,
    });
  };
  const [searchQuery, setSearchQuery] = useState(""); // State for the search query

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const filteredCourses = courses.filter((course) => {
    const isTypeMatch = activeButton === 1 || (activeButton === 2 && course.type === "PREMIUM") || (activeButton === 3 && course.type === "FREE");
    const isFilterMatch =
      (!filterOptions.palingbaru || course.isPalingBaru) &&
      (!filterOptions.palingpopuler || course.isPalingPopuler) &&
      (!filterOptions.promo || course.isPromo) &&
      (!filterOptions.UIUXDesign || course.category === "UI/UX_Design") &&
      (!filterOptions.WebDevelopment || course.category === "WEB_DEVELOPMENT") &&
      (!filterOptions.AndroidDevelopment || course.category === "ANDROID_DEVELOPMENT") &&
      (!filterOptions.DataScience || course.category === "DATA_SCIENCE") &&
      (!filterOptions.BusinessIntelligence || course.category === "BUSINESS_INTELLIGENCE") &&
      (!filterOptions.BeginnerLevel || course.level === "BEGINNER") &&
      (!filterOptions.IntermediateLevel || course.level === "INTERMEDIATE") &&
      (!filterOptions.AdvancedLevel || course.level === "ADVANCED");
    const isSearchMatch = course.name.toLowerCase().includes(searchQuery.toLowerCase());

    return isTypeMatch && isFilterMatch && isSearchMatch;
  });
  const handleCheckboxChange = (checkboxName) => {
    setFilterOptions((prev) => ({ ...prev, [checkboxName]: !prev[checkboxName] }));
  };

  return (
    <div className="KelasSaya-background">
      <Header />
      <div className="KelasSaya-Container">
        <div className="KelasSaya-Header">
          <div className="KS-Header">
            <h1>Topik Kelas</h1>
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
            <input type="text" placeholder="Cari Kelas" value={searchQuery} onChange={handleSearchChange} />
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
                  <input type="checkbox" id="palingbaru" checked={filterOptions.palingbaru} onChange={() => handleCheckboxChange("palingbaru")} />
                  <label htmlFor="palingbaru">Paling Baru</label>
                </div>
                <div>
                  <input type="checkbox" id="palingpopuler" checked={filterOptions.palingpopuler} onChange={() => handleCheckboxChange("palingpopuler")} />
                  <label htmlFor="palingpopuler">Paling Populer</label>
                </div>
                <div>
                  <input type="checkbox" id="promo" checked={filterOptions.promo} onChange={() => handleCheckboxChange("promo")} />
                  <label htmlFor="promo">Promo</label>
                </div>
              </div>
              <h1>Kategori</h1>
              <div className="isiFilter">
                <div>
                  <input type="checkbox" id="UI/UXDesign" checked={filterOptions.UIUXDesign} onChange={() => handleCheckboxChange("UIUXDesign")} />
                  <label htmlFor="UI/UXDesign">UI/UX Design</label>
                </div>
                <div>
                  <input type="checkbox" id="WebDevelopment" checked={filterOptions.WebDevelopment} onChange={() => handleCheckboxChange("WebDevelopment")} />
                  <label htmlFor="WebDevelopment">Web Development</label>
                </div>
                <div>
                  <input type="checkbox" id="AndroidDevelopment" checked={filterOptions.AndroidDevelopment} onChange={() => handleCheckboxChange("AndroidDevelopment")} />
                  <label htmlFor="AndroidDevelopment">Android Development</label>
                </div>
                <div>
                  <input type="checkbox" id="DataScience" checked={filterOptions.DataScience} onChange={() => handleCheckboxChange("DataScience")} />
                  <label htmlFor="DataScience">Data Science</label>
                </div>
                <div>
                  <input type="checkbox" id="BusinessIntelligence" checked={filterOptions.BusinessIntelligence} onChange={() => handleCheckboxChange("BusinessIntelligence")} />
                  <label htmlFor="BusinessIntelligence">Business Intelligence</label>
                </div>
              </div>
              <h1>Level Kesulitan</h1>
              <div className="isiFilter">
                <div>
                  <input type="checkbox" id="BeginnerLevel" checked={filterOptions.BeginnerLevel} onChange={() => handleCheckboxChange("BeginnerLevel")} />
                  <label htmlFor="BeginnerLevel">Beginner Level</label>
                </div>
                <div>
                  <input type="checkbox" id="IntermediateLevel" checked={filterOptions.IntermediateLevel} onChange={() => handleCheckboxChange("IntermediateLevel")} />
                  <label htmlFor="IntermediateLevel">Intermediate Level</label>
                </div>
                <div>
                  <input type="checkbox" id="AdvancedLevel" checked={filterOptions.AdvancedLevel} onChange={() => handleCheckboxChange("AdvancedLevel")} />
                  <label htmlFor="AdvancedLevel">Advanced Level</label>
                </div>
              </div>
              <button type="button" onClick={handleClearFilters}>
                Hapus Filter
              </button>
            </form>
          </div>
          <div className="KelasSaya-isi">
            <div className="button-isi-ks">
              <button id="button-1" onClick={() => handleButtonClick(1)} className={activeButton === 1 ? "activedBtn" : ""}>
                All
              </button>
              <button id="button-2" onClick={() => handleButtonClick(2)} className={activeButton === 2 ? "activedBtn" : ""}>
                Premium
              </button>
              <button id="button-3" onClick={() => handleButtonClick(3)} className={activeButton === 3 ? "activedBtn" : ""}>
                FREE
              </button>
            </div>
            <div className="ks-card-container">
              {filteredCourses.map((course) => (
                <div className="ks-card-content" key={course.code}>
                  <img src={imageimg} alt="" />
                  <div className="ks-card-content-1">
                    <p>{course.category}</p>
                    <div>
                      <img src={star} alt="" />
                      4.7
                    </div>
                  </div>
                  <p className="titlecourse">{course.name}</p>
                  <p className="creator">by {course.author} </p>
                  <div className="ks-card-content-2">
                    <div>
                      <img src={level} alt="" />
                      <p>{course.level}</p>
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
                  <div className={`ks-card-content-3 ${course.type.toLowerCase()}`}>{course.type}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Course;
