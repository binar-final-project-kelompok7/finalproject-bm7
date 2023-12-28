import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const NavigasiAdmin = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const handleLogout = () => {
    cookies.remove("authToken", { path: "/" });
    navigate("/adminLogin");
  };

  return (
    <div className="containerNavAdmin d-flex flex-column w-25 bg-primary text-center" style={{ height: "100vh" }}>
      <h1 className="bg-primary text-white m-0 py-5">CourseIn</h1>
      <nav className="d-flex flex-column">
        <NavLink className="py-2 bg-primary text-white text-decoration-none" to="/dashboard-admin/payment-status">
          Dashboard
        </NavLink>
        <NavLink className="py-2 bg-primary text-white text-decoration-none" to="/dashboard-admin/manage-class">
          Kelola Kelas
        </NavLink>
        <button className="py-2 bg-primary text-white text-decoration-none" onClick={handleLogout}>
          Keluar
        </button>
      </nav>
    </div>
  );
};

export default NavigasiAdmin;
