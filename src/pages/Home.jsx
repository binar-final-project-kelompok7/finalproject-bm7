import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Popular from "../components/Popular";
import BottomNav from "../components/BottomNav";
import axios from "axios";

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://course-in-production.up.railway.app/api/v1/users/rafi", {
          method: "GET",
          headers: {
            Accept: "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJyYWZpIiwiaWF0IjoxNzAyMDQyMzc5LCJleHAiOjE3MDI2NDcxNzl9.6XZFn4He0mJsF1CtIqbo5U8NO_DitNGhO8fRJP0p3Rg",
          },
        });

        // Pastikan respons sukses sebelum mengakses data
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }

        // Dapatkan data dari respons
        const data = await response.json();
        console.log("Data Pengguna:", data);

        setUserData(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container-fluid p-0 home mb-md-0 mb-5 pb-5">
      <Header />
      <Hero />
      <Category />
      <Popular />
      <BottomNav />
    </div>
  );
};

export default Home;
