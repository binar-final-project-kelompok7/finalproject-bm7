import React, { useState, useEffect } from "react";
import axios from "axios";
import classImage from "../assets/classImage.png";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const PaymentHistory = () => {
  const [paymentData, setPaymentData] = useState([]);
  const [loading, setLoading] = useState(true);
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

        const response = await axios.get(`https://course-in-production.up.railway.app/api/v1/users/${username}/orders?page=0&size=10`, { headers });

        setPaymentData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching payment history:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="d-flex flex-column gap-4 mx-auto pt-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        paymentData.map((payment) => (
          <div key={payment.orderCode} className="payment d-flex flex-column text-start bg-primary rounded-5 text-light" onClick={() => navigate(`/detail-pay/${payment.orderCode}`)}>
            <img src={classImage} alt="" />
            <h5 className="ms-2">{payment.courseName}</h5>
            <div className="d-flex flex-wrap gap-3 ms-2">
              <div className="">
                <p>harga : {payment.totalPrice}</p>
              </div>
              <div className="">
                <p>ppn : {payment.ppn}</p>
              </div>
              <div className="">
                <p>total bayar : {payment.totalTransfer} </p>
              </div>
            </div>
            <button className={`rounded-5 text-white ${payment.status === "COMPLETED" ? "bg-success" : "bg-danger"}`}>{payment.status}</button>
          </div>
        ))
      )}
    </div>
  );
};

export default PaymentHistory;
