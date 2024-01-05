import React, { useState, useEffect } from "react";
import "../../assets/style/KelasSaya.css";
import searchIcon from "../../assets/img/search-icon.png";
import Header from "../../components/Header";
import BottomNav from "../../components/BottomNav";
import axios from "axios";
import CourseCard from "../../components/CourseCard";
import CourseFilter from "../../components/CourseFilter";
import CoursePagination from "../../components/CoursePagination";
import Cookies from "universal-cookie";

const Course = () => {
  const [activeButton, setActiveButton] = useState(1);
  const [modalVisible, setModalVisible] = useState(true);
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [login, setLogin] = useState(false);
  const cookies = new Cookies();

  const [filterOptions, setFilterOptions] = useState({
    palingbaru: false,
    palingpopuler: false,
    UIUXDesign: false,
    WebDevelopment: false,
    AndroidDevelopment: false,
    DataScience: false,
    BusinessIntelligence: false,
    BeginnerLevel: false,
    IntermediateLevel: false,
    AdvancedLevel: false,
  });
  useEffect(() => {
    const username = cookies.get("api_username");
    const token = cookies.get("jwt_authorization");
    const fetchData = async () => {
      try {
        let params = {
          page: currentPage,
          size: 10,
        };

        if (filterOptions.palingbaru) {
          params.filters = "NEWEST";
        } else if (filterOptions.palingpopuler) {
          params.filters = "POPULAR";
        } else if (filterOptions.UIUXDesign) {
          params.categories = "UIUX_DESIGN";
        } else if (filterOptions.WebDevelopment) {
          params.categories = "WEB_DEVELOPMENT";
        } else if (filterOptions.DataScience) {
          params.categories = "DATA_SCIENCE";
        } else if (filterOptions.BusinessIntelligence) {
          params.categories = "BUSINESS_INTELLIGENCE";
        } else if (filterOptions.AndroidDevelopment) {
          params.categories = "ANDROID_DEVELOPMENT";
        } else if (activeButton === 2) {
          params.type = "PREMIUM";
        } else if (activeButton === 3) {
          params.type = "FREE";
        }

        const response = await axios.get(`https://coursein7.uc.r.appspot.com/api/v1/users/${username}/courses`, {
          params,
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setCourses(response.data.data);
        setTotalPages(response.data.paging.totalPage);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (token) {
      setLogin(true);
    }
    fetchData();
  }, [currentPage, filterOptions]);

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
        setFilterOptions({
          ...filterOptions,
          type: undefined,
        });
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

  const handleClearFilters = () => {
    setFilterOptions({
      palingbaru: false,
      palingpopuler: false,
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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCourses = courses.filter((course) => {
    const isTypeMatch = activeButton === 1 || (activeButton === 2 && course.type === "PREMIUM") || (activeButton === 3 && course.type === "FREE");
    const isFilterMatch =
      (!filterOptions.palingbaru || filterOptions.palingbaru) &&
      (!filterOptions.palingpopuler || filterOptions.palingpopuler) &&
      (!filterOptions.UIUXDesign || course.category === "UIUX_DESIGN") &&
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
    <>
      <div className="KelasSaya-background">
        <Header setFilterOptions={setFilterOptions} />
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
              <CourseFilter filterOptions={filterOptions} handleCheckboxChange={handleCheckboxChange} handleClearFilters={handleClearFilters} />
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
              {login ? (
                <>
                  <div className="ks-card-container">
                    {filteredCourses.map((course) => (
                      <CourseCard key={course.code} course={course} navigateTo={`/playvideo/${course.code}`} />
                    ))}
                  </div>
                  <CoursePagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />{" "}
                </>
              ) : (
                <div>Silahkan Login Terlebih Dahulu</div>
              )}
            </div>
          </div>
        </div>
        <BottomNav />
      </div>
    </>
  );
};

export default Course;
