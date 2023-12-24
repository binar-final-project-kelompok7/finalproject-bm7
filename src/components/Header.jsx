import React, { useEffect, useState } from "react";
import searchHomeNav from "../assets/searchIcon.png";
import masukButton from "../assets/buttonLoginHome.png";
import profile from "../assets/profile.png";
import myClassIcon from "../assets/classNavIcon.png";
import "../App.css";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies();

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

  return (
    <nav className="navbar-expand-lg navbar-background">
      <div className="containerNav container-fluid d-flex justify-content-between px-5 align-items-center py-3">
        <div className="leftHomeNav d-flex gap-5">
          <h1
            onClick={() => navigate("/")}
            className="text-white d-none d-md-block"
          >
            CourseIn
          </h1>
          <div className="searchHomePage d-flex border around-3 rounded-4 bg-white px-4 d-flex align-items-center justify-content-between">
            <input
              placeholder="Cari kursus terbaik..."
              type="text"
              className="bg-transparent border-0 w-75 py-3"
            />
            <img
              src={searchHomeNav} //KETIKA DITEKAN AKAN PERGI KE COURSE DAN MELAKUKAN PENCARIAN
            />
          </div>
        </div>
        <div className="rightHomeNav d-none d-md-flex align-items-center gap-3">
          <div
            onClick={() => navigate("/myclass")}
            className="navigasiKelasHeader d-flex align-items-center gap-2 py-1 px-3 rounded-3"
            style={{ backgroundColor: "#489CFF", cursor: "pointer" }}
          >
            <img src={myClassIcon} alt="" />
            <p className="m-0 text-white">Kelas</p>
          </div>
          {isLogin ? (
            <img onClick={() => navigate("/account-settings")} src={profile} />
          ) : (
            <img
              onClick={() => (window.location.href = "/login")}
              src={masukButton}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
