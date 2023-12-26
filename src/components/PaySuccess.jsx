import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import StartStudy from "./StartStudy";
import Header from "./Header";
import axios from "axios";
import "../style/PaySuccess.css";

function PaySuccess() {
  const [isPopupVisible, setPopupVisible] = useState(true);
  const [courseData, setCourseData] = useState(null);
  const { courseCode } = useParams();

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://course-in-production.up.railway.app/api/v1/courses/${courseCode}`
        );
        setCourseData(response.data.data);
        console.log("Course Data:", response.data.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchData();
  }, [courseCode]);

  return (
    <>
      <Header />
      {courseData && (
        <div className="success">
          <button className="paywork">Terimakasih atas pembayaran transaksi</button>
          <h1 className="congrats">Selamat!</h1>
          <img src="../img/char.png" alt="Character"></img>
          <h3 className="tfwork">Transaksi pembayaran kelas premium berhasil!</h3>
          <br></br>
          <h4 className="toemail">E-receipt telah dikirimkan ke email.</h4>
          <button
            className="start"
            data-bs-toggle="modal"
            href="#exampleModalToggle2"
            role="button"
            onClick={togglePopup}
          >
            Mulai Belajar
          </button>
          <p style={{ marginTop: "10px", color: "#489CFF", fontWeight: "700", textDecoration:'none' }}>
            <Link to="/">Kembali ke Beranda</Link>
          </p>
        </div>
      )}
      <div className="pop">{isPopupVisible && <StartStudy />}</div>
    </>
  );
}

export default PaySuccess;
