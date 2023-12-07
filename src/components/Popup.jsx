import React, { useState } from "react";
import "../style/Popup.css";
import { Link } from "react-router-dom";
function Pup() {
  return (
    <>
      <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <h2 className="title" style={{ textAlign: "center", fontWeight: "700" }}>
                Selangkah lagi menuju <br></br>
                <h2 className="class" style={{ color: "#6148FF" }}>
                  Kelas Premium
                </h2>
              </h2>
              <div className="kotak">
                <img src="./img/image.png" alt="image"></img>
                <h6>UI/UX Design</h6>
                <h7>Intro to Basic of User Interaction Design</h7>
                <p>by Simon Doe</p>
                <div
                  className="deets"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "40px",
                    justifyContent: "center",
                    paddingRight: "20px",
                  }}
                >
                  <p style={{ fontSize: "12px", color: "#6148FF" }}>
                    <img src="./img/mdi_badge-outline.png" alt="badge"></img>Beginner Level
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    <img src="./img/clarity_book-line.png" alt="book"></img>5 Modul
                  </p>
                  <p style={{ fontSize: "12px" }}>
                    <img src="./img/ri_time-fill.png" alt="time"></img>45 Menit
                  </p>
                </div>
                <button className="buy">Beli Rp 349.000</button>
              </div>
              <Link to="/detail-pay">
                <button className="buynow">
                  Beli Sekarang<img src="./img/carbon_next-filled.png" alt="next"></img>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pup;
