import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import editProfile from "../assets/editProfileIcon.png";
import changePassIcon from "../assets/changePassIcon.png";
import purchaseIcon from "../assets/purchaseIcon.png";
import logoutIcon from "../assets/logoutIcon.png";
import "./NavigasiAkun.css";

const NavigasiAkun = ({ onTabChange }) => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const usernameProfile = cookies.get("api_username");
  const handleLogout = () => {
    // Remove the token from cookies
    cookies.remove("jwt_authorization", { path: "/" });
    cookies.remove("api_username", { path: "/" });

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="d-flex flex-row flex-md-column w-50 text-start ps-5 pt-4 gap-4">
      <NavLink
        to={`/account-settings/edit-profile/${usernameProfile}`}
        className={({ isActive }) => (!isActive ? "notActive text-decoration-none d-flex align-items-md-center align-items-start text-black" : "active text-decoration-none d-flex align-items-md-center align-items-start")}
      >
        <img className="me-3" src={editProfile} alt="Edit Profile" />
        <p className="d-none d-md-block mb-0" style={{ fontWeight: "400" }}>
          Profil Saya
        </p>
      </NavLink>
      <NavLink
        to="/account-settings/change-password"
        className={({ isActive }) => (!isActive ? "notActive text-decoration-none d-flex align-items-md-center align-items-start text-black" : "active text-decoration-none d-flex align-items-md-center align-items-start")}
      >
        <img className="me-3" src={changePassIcon} alt="Change Password" />
        <p className="d-none d-md-block mb-0" style={{ fontWeight: "400" }}>
          Ubah Password
        </p>
      </NavLink>
      <NavLink
        to="/account-settings/payment-history"
        className={({ isActive }) => (!isActive ? "notActive text-decoration-none d-flex align-items-md-center align-items-start text-black" : "active text-decoration-none d-flex align-items-md-center align-items-start")}
      >
        <img className="me-3" src={purchaseIcon} alt="Payment History" />
        <p className="d-none d-md-block mb-0" style={{ fontWeight: "400" }}>
          Riwayat Pembayaran
        </p>
      </NavLink>
      <button
        onClick={handleLogout}
        className="notActive text-decoration-none d-flex align-items-md-center align-items-start text-black"
        style={{
          border: "none",
          background: "none",
          cursor: "pointer",
          padding: 0,
          outline: "none",
        }}
      >
        <img className="me-3" src={logoutIcon} alt="Logout" />
        <p className="d-none d-md-block mb-0">Keluar</p>
      </button>
    </div>
  );
};

export default NavigasiAkun;
