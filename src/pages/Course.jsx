import React, { useState, useEffect } from "react";
import "./KelasSaya.css";
import searchIcon from "../assets/search-icon.png";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import axios from "axios";
import CourseCard from "../components/CourseCard";
import CourseFilter from "../components/CourseFilter";
import CoursePagination from "../components/CoursePagination";

const Course = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [modalVisible, setModalVisible] = useState(true);
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://course-in-production.up.railway.app/api/v1/courses", {
          params: {
            page: currentPage,
            size: 10,
          },
          headers: {
            Accept: "application/json",
            Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWZpIiwiaWF0IjoxNzAyMDQyMzc5LCJleHAiOjE3MDI2NDcxNzl9.6XZFn4He0mJsF1CtIqbo5U8NO_DitNGhO8fRJP0p3Rg",
          },
        });

        setCourses(response.data.data);
        setTotalPages(response.data.paging.totalPage);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
// Inside Course component
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
       <Header setFilterOptions={setFilterOptions} />
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
            <CourseFilter filterOptions={filterOptions} handleCheckboxChange={handleCheckboxChange} />

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
                <CourseCard key={course.code} course={course} />
              ))}
            </div>
            <CoursePagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Course;