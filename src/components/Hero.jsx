import React from "react";
import heroImage from "../assets/heroImage.png";
import "./Hero.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="container-fluid p-0 d-none d-md-block">
      <div className="row m-0">
        <div className="hero col-7 p-0">
          <img src={heroImage} />
        </div>
        <div className="heroText col-5 d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-white">Belajar dari Praktisi Terbaik!</h2>
          <button className="bg-white fw-bold rounded-4" onClick={() => navigate("/course")}>
            IKUTI KELAS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
