import React, { useState } from "react";
import toast from "react-hot-toast";
import "./style.css";
import { Link } from "react-router-dom";

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
    <section>
      <div className="login">
        <div className="col-1">
          <h2 className="padding">Daftar</h2>
          <form id="form" className="flex flex-col">
            <div>
              <span>Nama</span>
            </div>
            <input
              type="text"
              placeholder="Nama Lengkap"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
            />
            <div>
              <span>Nomor Telepon</span>
            </div>
            <input
              type="number"
              placeholder="+62"
              value={telepon}
              onChange={(e) => setTelepon(e.target.value)}
            />
            <div>
              <span>Email</span>
            </div>
            <input
              type="text"
              placeholder="Contoh: johndoe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div>
              <span>Password</span>
            </div>
            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordValidationMessage && (
              <div
                style={{ color: "red", fontSize: "0.8rem", marginTop: "5px" }}
              >
                {passwordValidationMessage}
              </div>
            )}
            <button className="btn" type="button" onClick={handleRegister}>
              Daftar
            </button>
            <div className="centerfont">
              <span>Sudah punya akun?</span>
              <Link to={"/login"}>
                <span className="daftar-span" style={{ color: "#6148ff" }}>
                  Masuk disini
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

export default Register;
