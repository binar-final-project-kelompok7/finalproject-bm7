import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import App from "./App";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OTP from "./pages/Auth/OTP";
import ResetPassword from "./pages/Auth/resetPassword";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster
      position="bottom-center"
      toastOptions={{
        success: {
          style: {
            color: "white",
            background: "green",
          },
        },
        error: {
          style: {
            color: "white",
            background: "red",
          },
        },
      }}
    />
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/reset" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
