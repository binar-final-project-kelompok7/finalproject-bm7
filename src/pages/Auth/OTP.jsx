import React from "react";
import "./style.css";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

function OTP() {
  const [OTP, setOTP] = useState("");

  return (
    <section>
      <div className="login">
        <div className="col-1">
          <div>
            <Link to={"/login"}>
              <IoArrowBack size={30} />
            </Link>
          </div>
          <h2 className="padding">Masukan OTP</h2>
          <form id="form" className="flex flex-col">
            <div>
              <span>Ketikan 6 digit kode yang dikirimkan ke Email Anda</span>
            </div>
            <div className="frame">
              <OTPInput
                value={OTP}
                onChange={setOTP}
                autoFocus
                OTPLength={6}
                otpType="number"
                disabled={false}
              />
              <div className="padding">
                <ResendOTP
                  className="text-otp"
                  maxTime={60}
                  onResendClick={() => console.log("Resend clicked")}
                />
              </div>
            </div>
            <button className="btn" type="button" onClick={{}}>
              Masuk
            </button>
          </form>
        </div>
        <div className="col-2">
          <img
            className="belajar-white"
            src="/asset/Belajar_white 2.png"
            alt="Belajar"
          />
        </div>
      </div>
    </section>
  );
}

export default OTP;
