import React from "react";
import Logo from "../assets/Logo-LoginAdmn.png";
import "./AdminLogin.css";
const AdminLogin = () => {
  return (
    <div className="Adm-Container">
      <div className="AdmL-Logo">
        <img src={Logo} alt="" />
      </div>
      <div className="AdmL-form">
        <h1>Login</h1>
        <form action="#">
          <label htmlFor="ID-Admin">ID Admin</label>
          <input type="text" name="ID-Admin" id="ID-Admin" placeholder="ID Admin" />
          <div>
            <label htmlFor="Adm-Pw">Password</label>
            <a href="#">Lupa Kata Sandi</a>
          </div>
          <input type="password" name="Adm-Pw" id="Adm-Pw" placeholder="Masukkan Password" />
          <button>Masuk</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
