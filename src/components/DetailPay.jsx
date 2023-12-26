import React, { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import "../style/DetailPay.css";
import ImageImg from "../assets/img/image.png";
function DetailPay() {
  const { courseCode } = useParams();
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://course-in-production.up.railway.app/api/v1/courses/${courseCode}`
        );
        setCourseData(response.data.data);
        setLoading(false);
        console.log("Course Data:", response.data.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [courseCode]);

  return (
    <>
      <Header />
      <div className="top-content">
        <Link
          to="/"
          className="back"
          style={{
            fontSize: "17px",
            fontWeight: "700",
            textDecoration: "none",
            color: "#000",
            marginTop: "-25px",
          }}
        >
          <BsArrowLeft style={{ marginRight: "15px", fontSize: "20px" }} />
          <p className="kembali" style={{ marginLeft: "50px", marginTop: "-25px" }}>
            Kembali
          </p>
        </Link>
        <button className="warning-pay">Selesaikan Pembayaran sampai 10 Maret 2023 12:00</button>
      </div>
      {loading && <p>Loading...</p>}
      {!loading && courseData ? (
      <div className="mid-content">
        <div className="columns-container">
          <div className="col">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" style={{ backgroundColor: "#3C3C3C", color: "#fff" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Bank Transfer
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <h1>Kosong</h1>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" style={{ backgroundColor: "#6148FF", color: "#fff" }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Credit Card
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <img className="img-pay" src="../img/Payment options.png"></img>
                    <div className="textpayment">
                      <h5>Card number</h5>
                      <input style={{ border: "none", width: "50%" }} type="text" placeholder="Enter Number" />
                      <hr />
                      <h5>Card holder name</h5>
                      <input style={{ border: "none", width: "50%" }} type="text" placeholder="Enter Name" />
                      <hr />
                      <div className="CE" style={{ display: "flex", flexDirection: "column" }}>
                        <h5 className="cvv">CVV</h5>
                        <div className="input-wrapper">
                          <input style={{ border: "none", width: "50%" }} type="text" placeholder="Enter CVV" /> <hr />
                        </div>
                        <hr />
                        <h5 className="date">Expiry date</h5>
                        <div className="input-wrapper">
                          <input style={{ border: "none", width: "50%" }} type="text" placeholder="MM/YY" /> <hr />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card class-payment">
              <h2 className="h2payclass" style={{ fontSize: "22px", fontWeight: "700", paddingLeft: "20px", paddingTop: "20px", paddingBottom: "10px" }}>
                Pembayaran Kelas
              </h2>
              <div className="card card-deskripsi" style={{ width: "90%" }}>
                <img src={ImageImg} alt="image"></img>
                  <p style={{ color: "#6148FF", fontWeight: "700" }}>{courseData.category}</p>
                  <p style={{ fontSize: "13px", fontWeight: "700", marginTop: "-10px" }}>{courseData.name}</p>
                  <p style={{ fontSize: "10px", fontWeight: "500", marginTop: "-10px" }}>by {courseData.author}</p>
                </div>
                <div className="price-details">
                <div className="column">
                    <p style={{ fontSize: "14px", fontWeight: "700" }}>Harga</p>
                    <p style={{ marginTop: "-15px", fontSize: "14px" }}>Rp {courseData.price}</p>
                  </div>
                  <div className="column">
                    <p style={{ fontSize: "14px", fontWeight: "700" }}>Harga</p>
                    <p style={{ marginTop: "-15px", fontSize: "14px" }}>Rp {courseData.price}</p>
                  </div>
                  <div className="column">
                    <p style={{ fontSize: "14px", fontWeight: "700" }}>Harga</p>
                    <p style={{ marginTop: "-15px", fontSize: "14px" }}>Rp {courseData.price}</p>
                  </div>
              </div>

              <button className="payclass">
              <Link to={`/paySuccess/${courseCode}`} style={{ textDecoration: "none", color: "#FFF" }}>
                    Bayar dan Ikuti Kelas Selamanya
                    <img src="../img/Vector.png" alt="Next Icon" style={{ paddingLeft: "10px" }} />
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Failed to load course data. Please try again later.</p>
      )}
    </>
  );
}

export default DetailPay;
