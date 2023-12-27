import React, { useEffect, useState } from "react";
import Axios from "axios";
import Cookies from "universal-cookie";
import profile from "../assets/profileIcon.png";
import "./ProfileSaya.css";
import { toast } from "react-toastify";

const ProfileSaya = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // Add loading state
  const cookies = new Cookies();
  const usernameProfile = cookies.get("api_username");
  const token = cookies.get("jwt_authorization");
  const [userResponse, setUserResponse] = useState({
    data: { username: "", name: "", email: "" },
  });

  const getdetailUser = async () => {
    try {
      setLoading(true);
      const response = await Axios.get(`https://course-in-production.up.railway.app/api/v1/users/${usernameProfile}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      setUserResponse(response.data.data);
    } catch (error) {
      console.error("Error getting profile:", error.message);
      toast.error("Error getting profile. Please try again.", {
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveProfile = async (e) => {
    e.preventDefault();
    if (!username.trim() || !name.trim() || !email.trim()) {
      toast.error("Semua kolom harus terisi ya", { theme: "colored" });
      return;
    }

    try {
      setLoading(true);
      const updatedData = {
        username: username || userResponse.username,
        name: name || userResponse.name,
        email: email || userResponse.email,
      };

      const patchResponse = await Axios.patch(`https://course-in-production.up.railway.app/api/v1/users/${usernameProfile}`, updatedData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (updatedData.username) {
        cookies.set("api_username", updatedData.username, {
          expires: new Date(Date.now() + 3600 * 1000),
        });
      }

      setUsername(updatedData.username);
      setName(updatedData.name);
      setEmail(updatedData.email);
      toast.success("Profile saved successfully", { theme: "colored" });
    } catch (error) {
      console.error("Error saving profile:", error.message);
      toast.error("Error saving profile. Please try again.", {
        theme: "colored",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getdetailUser();
  }, [usernameProfile, token]);
  return (
    <div className="containerMyProfile d-flex flex-column w-md-50 mx-auto pt-4">
      <div className="rounded"></div>
      <img className="rounded-circle mx-auto" src={profile} alt="" />
      <form className="d-flex flex-column text-start">
        <label className="mt-3" htmlFor="" style={{ fontSize: "12px" }}>
          Username
        </label>
        <input type="text" className="bg-transparent text-black rounded-3 border-1" placeholder={userResponse.username} value={username} onChange={(e) => setUsername(e.target.value)} />
        <label className="mt-3" htmlFor="" style={{ fontSize: "12px" }}>
          Name
        </label>
        <input type="text" className="bg-transparent text-black rounded-3 border-1" placeholder={userResponse.name} value={name} onChange={(e) => setName(e.target.value)} />
        <label className="mt-3" htmlFor="" style={{ fontSize: "12px" }}>
          Email
        </label>
        <input type="text" className="bg-transparent text-black rounded-3 border-1" placeholder={userResponse.email} value={email} onChange={(e) => setEmail(e.target.value)} />
        <button
          className="buttonSave rounded-5 text-white mt-3"
          onClick={handleSaveProfile}
          disabled={loading} // Disable the button when loading
        >
          {loading ? "Saving..." : "Simpan Profil Saya"}
        </button>
      </form>
    </div>
  );
};

export default ProfileSaya;
