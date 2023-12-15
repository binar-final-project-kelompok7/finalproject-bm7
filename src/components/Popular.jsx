import React from "react";
import classImage from "../assets/classImage.png";
import { useNavigate } from "react-router-dom";

const Popular = () => {
  const navigate = useNavigate();

  const PopularData = [
    { image: classImage, category: "UI/UX Design", className: "Belajar Web Designer dengan Figma by Angela Doe", level: "Intermediate Level", modul: "10 Modul", duration: "120 Menit", price: "Rp 249.000" },
    { image: classImage, category: "UI/UX Design", className: "Belajar Web Designer dengan Figma by Angela Doe", level: "Intermediate Level", modul: "5 Modul", duration: "60 Menit", price: "Rp 300.000" },
    { image: classImage, category: "UI/UX Design", className: "Belajar Web Designer dengan Figma by Angela Doe", level: "Advance Level", modul: "10 Modul", duration: "120 Menit", price: "Rp 240.000" },
    { image: classImage, category: "UI/UX Design", className: "Belajar Web Designer dengan Figma by Angela Doe", level: "Advance Level", modul: "10 Modul", duration: "120 Menit", price: "Rp 240.000" },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h4 className="text-start fw-bold">Kursus Populer</h4>
        </div>
        <div className="col-6 text-end">
          <button className="allButton bg-transparent fw-bolder" style={{ color: "#6148FF" }}>
            Lihat Semua
          </button>
        </div>
      </div>
      <div className="navPopulars overflow-auto d-flex flex-row justify-content-center justify-content-md-start">
        <div className="navPopular" style={{ width: "170px" }}>
          <button className="bg-transparent rounded-5">All</button>
        </div>
        <div className="navPopular" style={{ width: "170px" }}>
          <button className="bg-transparent rounded-5">Data Science</button>
        </div>
        <div className="navPopular" style={{ width: "170px" }}>
          <button style={{ backgroundColor: "#6148FF" }} className="rounded-5 text-black bg-transparent">
            Web Development
          </button>
        </div>
        <div className="navPopular" style={{ width: "170px" }}>
          <button className="bg-transparent rounded-5">Android Development</button>
        </div>
        <div className="navPopular" style={{ width: "170px" }}>
          <button className="bg-transparent rounded-5">IOS Development</button>
        </div>
        <div className="navPopular" style={{ width: "170px" }}>
          <button className="bg-transparent rounded-5">Data Science</button>
        </div>
      </div>
      <div className="popularList d-flex overflow-auto gap-3">
        {PopularData.map((popular, id) => (
          <div key={id} className="popularContent d-flex flex-column text-start" style={{ width: "323px" }} onClick={() => navigate("detailclass")}>
            <img src={popular.image} alt="" />
            <h5>{popular.category}</h5>
            <h5>{popular.className}</h5>
            <div className="d-flex flex-wrap justify-content-between">
              <div className="">
                <p>{popular.level}</p>
              </div>
              <div className="">
                <p>{popular.modul}</p>
              </div>
              <div className="">
                <p>{popular.duration}</p>
              </div>
            </div>
            <button className="rounded-5 text-white" style={{ backgroundColor: "#489CFF", width: "180px", height: "40px" }}>
              Beli {popular.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
