import React, { useState } from "react";
import "../style/Popup.css";
import { Link } from "react-router-dom";

function StartStudy() {
  return (
    <>
      <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content" style={{ borderRadius: "20px" }}>
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h2 className="title" style={{ textAlign: "center", fontWeight: "700", color: "#6148FF" }}>
                Onboarding...<br></br>
              </h2>
              <div className="kotak">
                <img src="./img/boarding.png" alt="image"></img>
                <h7>Persiapkan hal berikut untuk belajar yang maksimal:</h7>
                <p style={{ width: "80%", fontSize: "14px", textAlign: "center", paddingTop: "20px" }}>Mempunyai akun Figma atau Install Adobe XD Menggunakan internet minimal kecepatan 2Mbps Belajar di tempat yang nyaman</p>
              </div>
              <Link to="/PlayVideo">
                <button className="buynow">Ikuti Kelas</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartStudy;
