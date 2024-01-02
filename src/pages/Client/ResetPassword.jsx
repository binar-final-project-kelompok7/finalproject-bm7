import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const [emailreset, setEmailReset] = useState("");

  const navigate = useNavigate();

  const handleSaveClick = async (e) => {
    e.preventDefault();
    if (emailreset === "") {
      toast.error("Semua Field Harus Diisi!", {
        theme: "colored",
      });
    } else {
      try {
        const response = await axios.put("https://coursein7.uc.r.appspot.com/api/v1/auth/forgot-password", {
          email: emailreset,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        console.log(response);

        if (response.data.code === 200 && response.data.data.token) {
          const resetToken = response.data.data.token;

          // Navigates to the reset password confirmation page with the token in the URL
          navigate(`/resetpassword-confirm/${resetToken}`, {
            state: { email: emailreset, token: resetToken },
          });
        } else {
          toast.error("Email tidak ditemukan!", {
            theme: "colored",
          });
        }
      } catch (error) {
        console.error("Error resetting password:", error);
        toast.error("Email tidak ditemukan!.", {
          theme: "colored",
        });
      }
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
              <label>Masukkan email anda</label>
              <input type="text" value={emailreset} onChange={(e) => setEmailReset(e.target.value)} className="rounded-4 p-2 mb-3" />

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

export default ResetPassword;
