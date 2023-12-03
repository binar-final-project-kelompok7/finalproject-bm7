import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import AccountSetings from "./pages/AccountSetings";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileSaya from "./components/ProfileSaya";
import ChangePassword from "./components/ChangePassword";
import PaymentHistory from "./components/PaymentHistory";
import Admin from "./pages/Admin";
import PaymentStatus from "./components/PaymentStatus";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account-settings" element={<AccountSetings />}>
          <Route path="edit-profile" element={<ProfileSaya/>}/>
          <Route path="change-password" element={<ChangePassword/>}/>
          <Route path="payment-history" element={<PaymentHistory/>}/>
        </Route>
        <Route path="/dashboard-admin" element={<Admin/>}>
          <Route path="payment-status" element={<PaymentStatus/>}/> /* Routing untuk Dashboard status pembayaran dan kelola kelas
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
