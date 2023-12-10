import React, { useState } from "react";
import searchHomeNav from "../assets/searchIcon.png";
import masukButton from "../assets/buttonLoginHome.png";
import profile from "../assets/profile.png";
import myClassIcon from "../assets/classNavIcon.png"
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
              className="bg-transparent border-0 w-75 py-3"
            />
            <img
              src={searchHomeNav} //KETIKA DITEKAN AKAN PERGI KE COURSE DAN MELAKUKAN PENCARIAN
            />
          </div>
        </div>
        <div className="rightHomeNav d-none d-md-flex align-items-center gap-3">
          <div onClick={() => window.location = '/myclass'} className="navigasiKelasHeader d-flex align-items-center gap-2 py-1 px-3 rounded-3" style={{backgroundColor: '#489CFF', cursor: 'pointer'}}>
            <img src={myClassIcon} alt="" />
            <p className="m-0 text-white">Kelas</p>
          </div>
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
