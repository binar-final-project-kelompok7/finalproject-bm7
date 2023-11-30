import React, { useState } from "react";
import toast from "react-hot-toast";
import "./style.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Misalnya, Anda dapat memeriksa email dan password
    if (email === "rxbow@gmail.com" && password === "Aneh123") {
      // Autentikasi berhasil
      toast.success("Login berhasil");
    } else {
      // Autentikasi gagal, tampilkan notifikasi error
      toast.error("Email atau password salah. Silakan coba lagi.");
    }
  };

  return (
    <section>
      <div className="login">
        <div className="col-1">
          <h2 className="padding">Masuk</h2>
          <form id="form" className="flex flex-col">
            <span>Email / No. Telepon</span>
            <input
              type="text"
              placeholder="Contoh: johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="pass">
              <span>Password</span>
              <Link to={"/reset"}>
                <span className="forgot-pass" style={{ color: "#6148ff" }}>
                  Lupa kata sandi
                </span>
              </Link>
            </div>
            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="btn" type="button" onClick={handleLogin}>
              Masuk
            </button>
            <div className="centerfont">
              <span>Belum punya akun?</span>
              <Link to={"/register"}>
                <span className="daftar-span" style={{ color: "#6148ff" }}>
                  Daftar disini
                </span>
              </Link>
            </div>
          </form>
        </div>
        <div className="col-2">
          <img
            className="belajar-white"
            src="/asset/Belajar_white 2.png"
            alt="Belajar"
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
