import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password) {
      // Misalnya, Anda dapat memeriksa email dan password
      if (email === "rxbow@gmail.com" && password === "Aneh123") {
        // Autentikasi berhasil
        toast.success("Login berhasil");
      } else {
        // Autentikasi gagal, tampilkan notifikasi error
        toast.error("Email atau password salah. Silakan coba lagi.");
      }
    } else {
      console.error("Email atau password tidak boleh kosong");
    }
  };

  return (
    <section
      className="container-fluid d-flex justify-content-around align-items-center p-0"
      style={{ height: "100vh" }}
    >
      <div className="login d-flex justify-content-center">
        <div
          className="mainContentLogin d-flex flex-column justify-content-md-center justify-content-end"
          style={{ height: "100vh" }}
        >
          <h2 className="mb-4" style={{ color: "#6148FF" }}>
            Masuk
          </h2>
          <form
            id="form"
            className="d-flex flex-column justify-content-md-center justify-content-between"
          >
            <div className="d-flex flex-column justify-content-center">
              <label>Email</label>
              <input
                type="text"
                placeholder="Contoh: johndoe@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-4 p-2 mb-3"
              />
              <div className="pass d-flex justify-content-between">
                <label>Password</label>
                <Link
                  to={"/resetpassword"}
                  className="text-decoration-none fw-medium"
                  style={{ color: "#6148ff" }}
                >
                  Lupa kata sandi
                </Link>
              </div>
              <input
                type="password"
                placeholder="Masukkan password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="rounded-4 p-2 mb-3"
              />
              <button
                className="rounded-3 border-0 p-2 text-white mb-4"
                style={{ backgroundColor: "#6148ff" }}
                type="button"
                onClick={handleLogin}
              >
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
      <div
        className="desktopIconLogin d-none d-md-flex align-items-center justify-content-center text-white"
        style={{ height: "100%", backgroundColor: "#6148FF" }}
      >
        <h1 className="desktopIconText">CourseIn</h1>
      </div>
    </section>
  );
}

export default Login;
