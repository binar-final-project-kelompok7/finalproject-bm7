import React, { useState } from "react";
import { Link } from "react-router-dom";
import StartStudy from "./StartStudy";
import Header from "./Header";
import "../style/PaySuccess.css";

function PaySuccess() {
  const [isPopupVisible, setPopupVisible] = useState(true);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <>
      <Header />
      <div className="success">
        <button className="paywork">Terimakasih atas pembayaran transaksi</button>
        <h1 className="congrats">Selamat!</h1>
        <img src="../img/char.png" alt="Character"></img>
        <h3 className="tfwork">Transaksi pembayaran kelas premium berhasil!</h3>
        <br></br>
        <h4 className="toemail">E-receipt telah dikirimkan ke email.</h4>
        <button className="start" data-bs-toggle="modal" href="#exampleModalToggle2" role="button" onClick={togglePopup}>
          Mulai Belajar
        </button>
        <p style={{ marginTop: "10px", color: "#489CFF", fontWeight: "700", textDecoration: "none" }}>
          <Link to="/">Kembali ke Beranda</Link>
        </p>
      </div>
      <div className="pop">{isPopupVisible && <StartStudy />}</div>
    </>
  );
}

export default PaySuccess;
