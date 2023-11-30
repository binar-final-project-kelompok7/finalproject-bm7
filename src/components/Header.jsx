import React, { useState } from "react";
import searchHomeNav from "../assets/searchIcon.png";
import masukButton from "../assets/buttonLoginHome.png";
import profile from "../assets/profile.png";
import '../App.css';
import './Header.css'

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <nav className="navbar-expand-lg navbar-background">
      <div
        className="containerNav container-fluid d-flex justify-content-between px-5 align-items-center py-3"
      >
        <div className="leftHomeNav d-flex gap-5">
          <h1 onClick={() => window.location.href ='/'} className="text-white d-none d-md-block">CourseIn</h1>
          <div
            className="searchHomePage d-flex border around-3 rounded-4 bg-white px-4 d-flex align-items-center justify-content-between"
            
          >
            <input
              placeholder="Cari kursus terbaik..."
              type="text"
              className="bg-transparent border-0 w-75"
            />
            <img
              src={searchHomeNav}
            />
          </div>
        </div>
        <div className="rightHomeNav d-none d-md-block">
          {isLogin ? (
            <img onClick={() => window.location.href = "/account-settings"} src={profile}/>
          ) : (
            <img onClick={() => setIsLogin(true)} src={masukButton} />
          )}
        </div>

      </div>
    </nav>
  );
};

export default Header;
