import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import OTP from "./pages/OTP";
import ResetPassword from "./pages/ResetPassword";
import KelasSaya from "./pages/KelasSaya";
import Course from "./pages/Course";
import AdminLogin from "./pages/AdminLogin";
import AccountSetings from "./pages/AccountSetings";
import ProfileSaya from "./components/ProfileSaya";
import ChangePassword from "./components/ChangePassword";
import PaymentHistory from "./components/PaymentHistory";
import Admin from "./pages/Admin";
import PaymentStatus from "./components/PaymentStatus";
import PaySuccess from "./components/PaySuccess.jsx";
import DetailCLass from "./components/DetailCLass.jsx";
import DetailPay from "./components/DetailPay.jsx";
import PlayVideo from "./components/PlayVideo.jsx";
import ManageClass from "./pages/Admin/ManageClass.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmResetPassword from "./pages/ConfirmResetPassword.jsx";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp" element={<OTP />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route
            path="/resetpassword-confirm/:token"
            element={<ConfirmResetPassword />}
          />
          <Route path="/account-settings" element={<AccountSetings />}>
            <Route path="edit-profile/:username" element={<ProfileSaya />} />
            <Route path="change-password" element={<ChangePassword />} />
            <Route path="payment-history" element={<PaymentHistory />} />
          </Route>

          <Route path="/dashboard-admin" element={<Admin />}>
            <Route path="payment-status" element={<PaymentStatus />} />
            <Route path="manage-class" element={<ManageClass />} />
          </Route>

          <Route path="/myclass" element={<KelasSaya />} />
          <Route path="/course" element={<Course />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/detailclass/:courseCode" element={<DetailCLass />} />
          <Route path="/detail-pay/:orderId" element={<DetailPay />} />
          <Route path="/PaySuccess" element={<PaySuccess />} />
          <Route path="/PlayVideo/:courseCode" element={<PlayVideo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
