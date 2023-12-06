import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nama, setNama] = useState("");
  const [telepon, setTelepon] = useState("");

  const handleRegister = () => {
    if (email && password && nama && telepon) {
      if (password.length >= 8) {
        toast.success("Registrasi berhasil");
        console.log("User registration data:", {
          email,
          password,
          nama,
          telepon,
        });
      } else {
        toast.error("Password harus lebih dari 8 karakter");
      }
    } else {
      toast.error("Lengkapi semua field untuk registrasi");
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
          <form id="form" className="d-flex flex-column">
            <label>Nama</label>
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <label>Nomor Telepon</label>
            <input
              type="text"
              placeholder="+62"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-4 p-2 mb-3"
            />
            <label>Buat Password</label>
            <input
              type="password"
              placeholder="Buat Password"
              className="rounded-4 p-2 mb-3"
            />

            <button
              className="rounded-3 border-0 p-2 text-white mb-4"
              style={{ backgroundColor: "#6148ff" }}
              type="button"
              onClick={handleRegister}
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
