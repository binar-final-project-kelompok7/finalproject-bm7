import React from "react";
import './OTP.css'
import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";

function OTP() {
  const [OTP, setOTP] = useState("");
  const location = useLocation();
  const email = location.state?.emailRegis;
  // const emailOtp = email;
  const cookies = new Cookies();
  const navigate = useNavigate();

  const resendOtp = async (e) => {    

    try {
      let data = JSON.stringify({
        email: email,
      });
      console.log(email);
      let config = {
        method: "POST",
        url: `https://coursein7.uc.r.appspot.com/api/v1/users/resend-otp`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      console.log('Mengirim permintaan resend OTP...');
      const response = await axios.request(config);
      console.log('Respon dari server:', response);
      console.log(response);

      if (response.status === 200) {
        console.log("OTP dikirim ulang. Cek email Anda!");
        // navigate("/otp");
      } else {
        console.error("Respon dengan status:", response.status);
        console.error("Data kesalahan:", response.data);          
      }
            
      // navigate("/otp");
    } catch (error) {
      // if (error.response) {
      //   console.error(error.response.data.code, error.response.data.message);
      // }
      console.error("Error during OTP resend:", error.message);
    }
  };


  const verifyOtp = async (e) => {    

    try {
      let data = JSON.stringify({
        email: email,
        otpCode: OTP,
      });

      let config = {
        method: "POST",
        url: `https://coursein7.uc.r.appspot.com/api/v1/users/verify-otp`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      console.log(response,' ditekan response');
      const token = response.headers["authorization"].split(" ")[1];
      // const apiUsername = response.data.data.username;

      cookies.set("jwt_authorization", token, {
          expires: new Date(Date.now() + 3600 * 1000),
        });
        // cookies.set("api_username", apiUsername, {
        //   expires: new Date(Date.now() + 3600 * 1000),
        // });
      
      navigate("/");
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.code, error.response.data.message);
      }
    }
  };


  const renderButton = (buttonProps, remainingTime) => {    
    return (
      <>
        {buttonProps.remainingTime !== 0 ? (
        <p>Kirim ulang OTP dalam <span style={{color: "#6148FF", fontWeight: "700"}}>{buttonProps.remainingTime}</span> detik</p>
      ) : (
        <button onClick={resendOtp} className="text-danger border-0" {...buttonProps}>Kirim Ulang</button>
      )}
      </>
    );
  };

  const renderTime = () => React.Fragment;

  return (
    <section
      className="container-fluid d-flex justify-content-around align-items-md-center align-items-start p-0"
      style={{ height: "100vh" }}
    >
      <div className="login w-50 d-flex justify-content-center">
        <div>
          <div>
            <Link to={"/login"} className="text-black">
              <IoArrowBack size={30} />
            </Link>
          </div>
          <h2 className="mb-5 mt-3" style={{ color: "#6148FF" }}>
            Masukan OTP
          </h2>
          <form id="form" className="d-flex flex-column">
            <div>
              <span>Ketikan 6 digit kode yang dikirimkan ke Email Anda</span>
            </div>
            <div className="frame mb-5 d-flex flex-column align-items-center">
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
                className="mb-3 mt-4"
              />
              <div className="d-flex">
                <ResendOTP
                  className="text-otp d-flex"
                  maxTime={5}
                  onResendClick={resendOtp}
                  renderButton={renderButton}
                  renderTime={renderTime}
                  onClick={resendOtp}
                />
              </div>
            </div>
            <button
              className="rounded-3 border-0 p-2 text-white mb-4 w-100"
              style={{ backgroundColor: "#6148ff" }}
              type="button"
              onClick={verifyOtp}
            >
              Simpan
            </button>
          </form>
        </div>
      </div>
      <div
        className="desktopIconOtp d-none d-md-flex align-items-center justify-content-center text-white"
        style={{ backgroundColor: "#6148FF", height: "100%" }}
      >
        <h1>CourseIn</h1>
      </div>
    </section>
  );
}

export default OTP;