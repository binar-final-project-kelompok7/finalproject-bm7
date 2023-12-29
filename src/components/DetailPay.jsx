import React, { useState, useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import "../style/DetailPay.css";
import ImageImg from "../assets/img/image.png";
import Cookies from "universal-cookie";
function DetailPay() {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formattedUpdatedDate, setFormattedUpdatedDate] = useState(null);
  const { orderId } = useParams();
  const cookies = new Cookies();
  const username = cookies.get("api_username");
  const token = cookies.get("jwt_authorization");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        };

        const response = await axios.get(`https://course-in-production.up.railway.app/api/v1/users/${username}/orders/${orderId}`, { headers });
        setCourseData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [orderId]);
  useEffect(() => {
    if (courseData && courseData.createdAt) {
      const createdAtDate = new Date(courseData.createdAt);
      createdAtDate.setHours(createdAtDate.getHours() + 48);

      const updatedDate = createdAtDate.toLocaleString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
      });

      setFormattedUpdatedDate(updatedDate);
    }
  }, [courseData]);

  const handlePayment = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      };

      const body = {
        paymentMethod: "BANK_TRANSFER",
      };
      await axios.patch(`https://course-in-production.up.railway.app/api/v1/users/${username}/orders/${orderId}/pay`, body, { headers });

      navigate(`/paySuccess`);
    } catch (error) {
      console.error("Error processing payment:", error);
    }
  };
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
        <button className="warning-pay">Selesaikan Pembayaran sampai {formattedUpdatedDate}</button>
      </div>
      {loading && <p>Loading...</p>}
      {!loading && courseData ? (
        <div className="mid-content">
          <div className="columns-container">
            <div className="col">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      style={{ backgroundColor: "#3C3C3C", color: "#fff" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
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
                    <button
                      className="accordion-button collapsed"
                      style={{ backgroundColor: "#6148FF", color: "#fff" }}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
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
                  <h3 style={{ fontSize: "20px", fontWeight: "700", marginTop: "10px" }}>{courseData.courseName}</h3>
                </div>
                <div className="price-details">
                  <div className="column">
                    <p style={{ fontSize: "14px", fontWeight: "700" }}>Harga</p>
                    <p style={{ marginTop: "-15px", fontSize: "14px" }}>Rp {courseData.totalPrice}</p>
                  </div>
                  <div className="column">
                    <p style={{ fontSize: "14px", fontWeight: "700" }}>ppn</p>
                    <p style={{ marginTop: "-15px", fontSize: "14px" }}>Rp {courseData.ppn}</p>
                  </div>
                  <div className="column">
                    <p style={{ fontSize: "14px", fontWeight: "700" }}>Total</p>
                    <p style={{ marginTop: "-15px", fontSize: "14px" }}>Rp {courseData.totalTransfer}</p>
                  </div>
                </div>

                <button className="payclass" onClick={handlePayment}>
                  Bayar dan Ikuti Kelas Selamanya
                  <img src="../img/Vector.png" alt="Next Icon" style={{ paddingLeft: "10px" }} />
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
