import React, { useState } from "react";
import toast from "react-hot-toast";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSaveClick = () => {
    if (password === "" || confirmPassword === "") {
      toast.error("Semua Field Harus Diisi!");
    } else if (password === confirmPassword) {
      toast.error("Password Berhasil Diubah!");
    } else {
      toast.error("Password Tidak Sesuai!");
    }
  };

  return (
    <section>
      <div className="login">
        <div className="col-1">
          <h2 className="padding">Reset Password</h2>
          <form id="form" className="flex flex-col">
            <span>Masukkan Password Baru</span>
            <input
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="pass">
              <span>Ulangi Password Baru</span>
            </div>
            <input
              type="password"
              placeholder="Masukkan password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button className="btn" type="button" onClick={handleSaveClick}>
              Simpan
            </button>
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

export default ResetPassword;
