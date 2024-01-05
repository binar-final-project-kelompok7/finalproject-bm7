import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ConfirmResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const currentURL = window.location.href;
  const tokenIndex = currentURL.lastIndexOf("/resetpassword-confirm/") + "/resetpassword-confirm/".length;
  const resetToken = currentURL.slice(tokenIndex);

  const navigate = useNavigate();

  const handleSaveClick = async (e) => {
    e.preventDefault();

      // Now you can use email and token in your API call or any other logic
      try {
        const response = await axios.put(
          "https://coursein7.uc.r.appspot.com/api/v1/auth/confirm-forgot-password",
          {
            confirmNewPassword: confirmPassword,
            newPassword: password,
            token: resetToken,
          }
        );

        toast.success("Password Berhasil Diubah!", {
          theme: "colored",
        });

        navigate("/login");
      } catch (error) {
        toast.error("Gagal mengubah password. Coba lagi nanti.", {
          theme: "colored",
        });
        console.error("Error resetting password:", error);
      }
  };

  return (
    <section className="container-fluid d-flex justify-content-around align-items-center p-0" style={{ height: "100vh" }}>
      <div className="login d-flex justify-content-center">
        <div className="mainContentLogin d-flex flex-column justify-content-md-center justify-content-end" style={{ height: "100vh" }}>
          <h2 className="mb-4" style={{ color: "#6148FF" }}>
            Lupa Kata Sandi
          </h2>
          <form id="form" onSubmit={handleSaveClick} className="d-flex flex-column justify-content-md-center justify-content-between">
            <div className="d-flex flex-column justify-content-center">
              <label>Masukkan Password Baru</label>
              <input type="password" placeholder="Masukkan Password" value={password} onChange={(e) => setPassword(e.target.value)} className="rounded-4 p-2 mb-3" />
              <label>Ulangi Password Baru</label>
              <input type="password" placeholder="Masukkan password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="rounded-4 p-2 mb-3" />
              <button className="rounded-3 border-0 p-2 text-white mb-4" style={{ backgroundColor: "#6148ff" }} type="submit">
                Simpan
              </button>
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

export default ConfirmResetPassword;
