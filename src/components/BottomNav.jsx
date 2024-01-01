import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaPlayCircle, FaList, FaUser } from "react-icons/fa";
import Cookies from "universal-cookie";

const BottomNav = () => {
  const navigate = useNavigate();

  const checkLogin = () => {
    const cookies = new Cookies();
    const token = cookies.get("jwt_authorization");
    if (token) {
      navigate("/account-settings");
    } else {
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="mobileNav d-flex d-block d-sm-none bg-white text-center" style={{ position: "fixed", bottom: "0", left: "0", width: "100%" }}>
        <div onClick={() => navigate("/")} className="w-25">
          <FaHome color="blue" size={25} />
          <p>Beranda</p>
        </div>
        <div onClick={() => navigate("/myclass")} className="w-25">
          <FaPlayCircle color="blue" size={25} />
          <p>Kelas</p>
        </div>
        <div onClick={() => navigate("/course")} className="w-25">
          <FaList color="blue" size={25} />
          <p>Kursus</p>
        </div>
        <div onClick={checkLogin} className="w-25">
          <FaUser color="blue" size={25} />
          <p>Akun</p>
        </div>
      </div>
    </div>
  );
};

export default BottomNav;
