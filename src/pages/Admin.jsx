import React from "react";
import searchIcon from "../assets/searchIcon.png";
import usersIcon from "../assets/usersIcon.png";
import NavigasiAdmin from "../components/NavigasiAdmin";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <div className="d-flex">
      <NavigasiAdmin />

      <div className="w-75 pt-3">
        <header className="container-fluid d-flex justify-content-between align-items-center px-0 mb-5">
          <div className="leftHeader d-flex justify-content-around align-items-center gap-5 w-100">
            <h2>Hi, Admin!</h2>
            <div className="search border around-3 rounded-4 bg-white">
              <input type="text" placeholder="cari" className="border-0 p-3" />
              <img
                src={searchIcon}
                style={{ width: "38px", height: "38px", cursor: "pointer" }}
                className="mx-3"
              />
            </div>
          </div>
        </header>
        <main className="d-flex flex-column">
          
            <div className="info d-flex gap-4 justify-content-center">
              <div className="card d-flex flex-row align-items-center px-4 py-2 bg-primary gap-3 text-white">
                <img src={usersIcon} />
                <div className="d-flex flex-column align-items-center">
                  <p className="m-0">450</p>
                  <b>Active Users</b>
                </div>
              </div>
              <div className="card d-flex flex-row align-items-center px-4 py-2 bg-success gap-3 text-white">
                <img src={usersIcon} />
                <div className="d-flex flex-column align-items-center">
                  <p className="m-0">25</p>
                  <b>Active Class</b>
                </div>
              </div>
              <div className="card d-flex flex-row align-items-center px-4 py-2 bg-primary gap-3 text-white">
                <img src={usersIcon} />
                <div className="d-flex flex-column align-items-center">
                  <p className="m-0">20</p>
                  <b>Premium Class</b>
                </div>
              </div>
            </div>
          
          <Outlet/> {/* Ini nanti buat pindah ke dashboard atau kelola kelas*/}
        </main>
      </div>
    </div>
  );
};

export default Admin;
