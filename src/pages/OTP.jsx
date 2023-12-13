import React from "react";
import './OTP.css'
import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

function OTP() {
  const [OTP, setOTP] = useState("");

  const renderButton = (buttonProps, remainingTime) => {    
    return (
      <>
        {buttonProps.remainingTime !== 0 ? (
        <p>Kirim ulang OTP dalam <span style={{color: "#6148FF", fontWeight: "700"}}>{buttonProps.remainingTime}</span> detik</p>
      ) : (
        <button className="text-danger border-0" {...buttonProps}>Kirim Ulang</button>
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
                  maxTime={60}
                  onResendClick={() => console.log("Resend clicked")}
                  renderButton={renderButton}
                  renderTime={renderTime}
                />
              </div>
            </div>
            <button
              className="rounded-3 border-0 p-2 text-white mb-4 w-100"
              style={{ backgroundColor: "#6148ff" }}
              type="button"
              onClick={{}}
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
