import React, { useEffect, useState } from "react";
import "./ChangePassword.css";
import axios from "axios";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

const ChangePassword = () => {
  const cookies = new Cookies();
  const usernameProfile = cookies.get("api_username");
  const token = cookies.get("jwt_authorization");
  const [oldPassword, setOldPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangePassword = async (e) => {
    e.preventDefault();
    if (confirmNewPassword !== newPassword) {
      toast.error("Kolom password baru dan konfirmasi password harus sama!", { theme: "colored" });
      return;
    } else if (!confirmNewPassword.trim() || !newPassword.trim() || !oldPassword.trim()) {
      toast.error("Semua kolom harus terisi ya", { theme: "colored" });
      return;
    } else {
      try {
        const updatedPass = {
          oldPassword: oldPassword,
          confirmNewPassword: confirmNewPassword,
          newPassword: newPassword,
        };

        const patchResponse = await axios.put(`https://course-in-production.up.railway.app/api/v1/users/update-password/${usernameProfile}`, updatedPass, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setOldPassword("");
        setNewPassword("");
        setConfirmNewPassword("");
        toast.success("Password changed successfully", { theme: "colored" });
      } catch (error) {
        console.error("Failed to change password:", error.message);
        toast.error("Error change password. Please try again.", {
          theme: "colored",
        });
      }
    }
  };

  return (
    <div className="containerChangePass d-flex flex-column mx-auto pt-4">
      <p></p>
      <h2 className="text-center">Ubah Password</h2>
      <form onSubmit={handleChangePassword} action="" className="d-flex flex-column text-start">
        <label className="mt-3" htmlFor="" style={{ fontSize: "12px" }}>
          Masukkan Password Lama
        </label>
        <input onChange={(e) => setOldPassword(e.target.value)} value={oldPassword} className="bg-transparent text-black rounded-3 border-1" type="password" />
        <label className="mt-3" htmlFor="" style={{ fontSize: "12px" }}>
          Masukkan Password Baru
        </label>
        <input onChange={(e) => setNewPassword(e.target.value)} value={newPassword} className="bg-transparent text-black rounded-3 border-1" type="password" />
        <label className="mt-3" htmlFor="" style={{ fontSize: "12px" }}>
          Ulangi Password Baru
        </label>
        <input onChange={(e) => setConfirmNewPassword(e.target.value)} value={confirmNewPassword} className="bg-transparent text-black rounded-3 border-1" type="password" />
        <button type="submit" className="changePassButton rounded-5 my-4 text-white">
          Ubah Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
