import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";
import Cookies from "universal-cookie";

function Register() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      let data = JSON.stringify({
        email,
        name,
        password,
        username,
      });

      let config = {
        method: "POST",
        url: `https://course-in-production.up.railway.app/api/v1/users/register`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      console.log(response);
      const token = response.headers["authorization"].split(" ")[1];
      const apiUsername = username;

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

  const passwordValidationMessage =
    password.length > 0 && password.length < 8
      ? "Password harus lebih dari 8 karakter"
      : "";

  return (
    <section
      className="container-fluid d-flex align-items-md-center align-items-end p-0"
      style={{ height: "100vh" }}
    >
      <div className="register d-flex justify-content-center">
        <div className="mainContentRegister d-flex flex-column">
          <h2 className="mb-4" style={{ color: "#6148FF" }}>
            Daftar
          </h2>
          <form id="form" onSubmit={onSubmit} className="d-flex flex-column">
            <label>Nama</label>
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-4 p-2 mb-3"
            />
            <label>Email</label>
            <input
              type="text"
              placeholder="Contoh: johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-4 p-2 mb-3"
            />
            <label>Username</label>
            <input
              type="text"
              placeholder="johndoe"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="rounded-4 p-2 mb-3"
            />
            <label>Buat Password</label>
            <input
              type="password"
              placeholder="Buat Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-4 p-2 mb-3"
            />

            <button
              className="rounded-3 border-0 p-2 text-white mb-4"
              style={{ backgroundColor: "#6148ff" }}
              type="submit"
            >
              Daftar
            </button>
            <div className="opsiLogin d-flex justify-content-center gap-2">
              <p>Sudah punya akun?</p>
              <Link to={"/login"} className="text-decoration-none fw-bold">
                Masuk di sini
              </Link>
            </div>
          </form>
        </div>
      </div>
      <div
        className="desktopIconRegister d-none d-md-flex align-items-center justify-content-center text-white"
        style={{ backgroundColor: "#6148FF", height: "100%" }}
      >
        <h1>CourseIn</h1>
      </div>
    </section>
  );
}

export default Register;
