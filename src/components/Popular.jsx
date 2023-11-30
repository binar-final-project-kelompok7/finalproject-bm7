import React from "react";
import './Popular.css'
import classImage from '../assets/classImage.png'

const Popular = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <h4 className="text-start">Kursus Populer</h4>
        </div>
        <div className="col-6 text-end">
          <button className="allButton bg-transparent">
            Lihat Semua
          </button>
        </div>
      </div>
      <div className="navPopulars overflow-auto d-flex flex-row justify-content-center justify-content-md-start">
        <div className="navPopular">
          <button className="bg-transparent rounded-5">All</button>
        </div>
        <div className="navPopular">
          <button className="bg-transparent rounded-5">Data Science</button>
        </div>
        <div className="navPopular">
          <button
            style={{ backgroundColor: "#6148FF" }}
            className="rounded-5 text-black bg-transparent"
          >
            Web Development
          </button>
        </div>
        <div className="navPopular">
          <button className="bg-transparent rounded-5">Android Development</button>
        </div>
        <div className="navPopular">
          <button className="bg-transparent rounded-5">IOS Development</button>
        </div>
        <div className="navPopular">
          <button className="bg-transparent rounded-5">Data Science</button>
        </div>
      </div>
      <div className="popularList d-flex overflow-auto gap-3">
        <div className="popularContent d-flex flex-column text-start">
          <img src={classImage} alt="" />
          <h5>UI/UX Design</h5>
          <h5>Belajar Web Designer dengan Figma by Angela Doe</h5>
          <div className="d-flex flex-wrap justify-content-between">
            <div className="">
              <p>Intermediate Level</p>
            </div>
            <div className="">
              <p>10 Modul</p>
            </div>
            <div className="">
              <p>120 Menit</p>
            </div>
          </div>
          <button className="rounded-5 text-white">
            Beli Rp 249.000
          </button>
        </div>
        <div className="popularContent d-flex flex-column text-start">
          <img src={classImage} alt="" />
          <h5>UI/UX Design</h5>
          <h5>Belajar Web Designer dengan Figma by Angela Doe</h5>
          <div className="d-flex flex-wrap justify-content-between">
            <div className="">
              <p>Intermediate Level</p>
            </div>
            <div className="">
              <p>5 Modul</p>
            </div>
            <div className="">
              <p>60 Menit</p>
            </div>
          </div>
          <button className="rounded-5 text-white">
            Beli Rp 300.000
          </button>
        </div>
        <div className="popularContent d-flex flex-column text-start">
          <img src={classImage} alt="" />
          <h5>UI/UX Design</h5>
          <h5>Belajar Web Designer dengan Figma by Angela Doe</h5>
          <div className="d-flex flex-wrap justify-content-between">
            <div className="">
              <p>Advance Level</p>
            </div>
            <div className="">
              <p>10 Modul</p>
            </div>
            <div className="">
              <p>120 Menit</p>
            </div>
          </div>
          <button className="rounded-5 text-white">
            Beli Rp 249.000
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popular;
