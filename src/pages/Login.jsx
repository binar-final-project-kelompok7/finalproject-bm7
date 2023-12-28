import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";
import Cookies from "universal-cookie";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        username,
        password,
      });

      let config = {
        method: "POST",
        url: `https://course-in-production.up.railway.app/api/v1/auth/login`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const token = response.headers["authorization"].split(" ")[1];
      const apiUsername = response.data.data.username;

      console.log(apiUsername);

      cookies.set("jwt_authorization", token, {
        expires: new Date(Date.now() + 3600 * 1000),
      });

      cookies.set("api_username", apiUsername, {
        expires: new Date(Date.now() + 3600 * 1000),
      });

      navigate("/");
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.code, error.response.data.message);
      }
    }
  };

  return (
    <section className="container-fluid d-flex justify-content-around align-items-center p-0" style={{ height: "100vh" }}>
      <div className="login d-flex justify-content-center">
        <div className="mainContentLogin d-flex flex-column justify-content-md-center justify-content-end" style={{ height: "100vh" }}>
          <h2 className="mb-4" style={{ color: "#6148FF" }}>
            Masuk
          </h2>
          <form id="form" onSubmit={onSubmit} className="d-flex flex-column justify-content-md-center justify-content-between">
            <div className="d-flex flex-column justify-content-center">
              <label>Username</label>
              <input type="text" placeholder="Contoh: johndoe" value={username} onChange={(e) => setUsername(e.target.value)} className="rounded-4 p-2 mb-3" />
              <div className="pass d-flex justify-content-between">
                <label>Password</label>
                <Link to={"/resetpassword"} className="text-decoration-none fw-medium" style={{ color: "#6148ff" }}>
                  Lupa kata sandi
                </Link>
              </div>
              <input type="password" placeholder="Masukkan password" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-4 p-2 mb-3" />
              <button className="rounded-3 border-0 p-2 text-white mb-4" style={{ backgroundColor: "#6148ff" }} type="submit">
                Masuk
              </button>
            </div>
            <div className="containerOpsiDaftar">
              <div className="opsiDaftar d-flex justify-content-center gap-2">
                <p>Belum punya akun?</p>
                <Link to={"/register"} className="text-decoration-none fw-bold">
                  Daftar di sini
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="desktopIconLogin d-none d-md-flex align-items-center justify-content-center text-white" style={{ height: "100%", backgroundColor: "#6148FF" }}>
        <h1 className="desktopIconText">CourseIn</h1>
      </div>
    </section>
  );
}

export default Login;
