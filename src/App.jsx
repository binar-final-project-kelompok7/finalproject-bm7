import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import OTP from "./pages/OTP";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/account-settings" element={<AccountSetings />}>
          <Route path="edit-profile" element={<ProfileSaya />} />
          <Route path="change-password" element={<ChangePassword />} />
          <Route path="payment-history" element={<PaymentHistory />} />
        </Route>
        <Route path="/dashboard-admin" element={<Admin />}>
          <Route path="payment-status" element={<PaymentStatus />} /> /* Routing
          untuk Dashboard status pembayaran dan kelola kelas
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
