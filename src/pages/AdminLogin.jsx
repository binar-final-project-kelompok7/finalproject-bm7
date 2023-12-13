import React from "react";
import "./AdminLogin.css";
const AdminLogin = () => {
  return (
    <div className="Adm-Container">
      <div className="AdmL-Logo">
        <h1 className="text-white">CourseIn</h1>
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
