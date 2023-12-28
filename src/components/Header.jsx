import React, { useEffect, useState } from "react";
import searchHomeNav from "../assets/searchIcon.png";
import masukButton from "../assets/buttonLoginHome.png";
import profile from "../assets/profile.png";
import myClassIcon from "../assets/classNavIcon.png";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import "./Header.css";
import Cookies from "universal-cookie";

const Header = ({ setFilterOptions }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const navigate = useNavigate();
  const cookies = new Cookies();
  const usernameProfile = cookies.get("api_username");
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = cookies.get("jwt_authorization");
      if (token) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    };

    checkLoginStatus();
    const interval = setInterval(checkLoginStatus, 1000);
    return () => clearInterval(interval);
  }, [cookies]);
  // Inside Course component
  const handleSearch = () => {
    // Redirect to course page with search query as a parameter
    navigate(`/course?search=${encodeURIComponent(searchQuery)}`);

    // Set corresponding filters based on the search query
    setFilterBasedOnSearch(searchQuery);
  };

  /// Inside Course component
  const setFilterBasedOnSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filterOptions = {
      UIUXDesign: lowerCaseQuery.includes("ui"),
      AndroidDevelopment: lowerCaseQuery.includes("android"),
      DataScience: lowerCaseQuery.includes("data"),
      WebDevelopment: lowerCaseQuery.includes("web"),
      // Add other filters as needed
    };

    // Set the filter options
    setFilterOptions(filterOptions);
  };

  return (
    <nav className="navbar-expand-lg navbar-background">
      <div className="containerNav container-fluid d-flex justify-content-between px-5 align-items-center py-3">
        <div className="leftHomeNav d-flex gap-5">
          <h1 onClick={() => navigate("/")} className="text-white d-none d-md-block">
            CourseIn
          </h1>
          <div className="searchHomePage d-flex border around-3 rounded-4 bg-white px-4 d-flex align-items-center justify-content-between">
            <input placeholder="Cari kursus terbaik..." type="text" className="bg-transparent border-0 w-75 py-3" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            <img src={searchHomeNav} alt="Search" onClick={handleSearch} style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="rightHomeNav d-none d-md-flex align-items-center gap-3">
          <div onClick={() => navigate("/myclass")} className="navigasiKelasHeader d-flex align-items-center gap-2 py-1 px-3 rounded-3" style={{ backgroundColor: "#489CFF", cursor: "pointer" }}>
            <img src={myClassIcon} alt="My Class" />
            <p className="m-0 text-white">Kelas</p>
          </div>
          {isLogin ? (
            <div className="d-flex align-items-center justify-content-center" onClick={() => navigate("/account-settings")}>
              <img src={profile} alt="Profile" style={{ cursor: "pointer" }} className="me-2" />
              <p className="m-0 p-0 text-light">{usernameProfile} </p>
            </div>
          ) : (
            <Link to="/login">
              <img src={masukButton} alt="Login" style={{ cursor: "pointer" }} />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
