import React, { useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const cookies = new Cookies();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Check if username and password match the required values
    if (username === "admin123" && password === "admin123") {
      try {
        const response = await axios.post(
          "https://course-in-production.up.railway.app/api/v1/auth/login",
          {
            username: username,
            password: password,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const token = response.headers["authorization"].split(" ")[1];

        cookies.set("authToken", token, {
          expires: new Date(Date.now() + 3600 * 1000),
        });
        navigate("/dashboard-admin/payment-status");
      } catch (error) {
        console.error("Login failed:", error.message);
        handleShow();
      }
    } else {
      console.error("Invalid username or password");
      handleShow();
    }
  };

  return (
    <div className="Adm-Container">
      <div className="AdmL-Logo">
        <h1 className="text-white">CourseIn</h1>
      </div>
      <div className="AdmL-form">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor="ID-Admin">ID Admin</label>
          <input type="text" name="ID-Admin" id="ID-Admin" placeholder="ID Admin" value={username} onChange={(e) => setUsername(e.target.value)} />
          <div>
            <label htmlFor="Adm-Pw">Password</label>
            <a href="#">Lupa Kata Sandi</a>
          </div>
          <input type="password" name="Adm-Pw" id="Adm-Pw" placeholder="Masukkan Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Masuk</button>
        </form>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Username or password is incorrect. Please try again.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminLogin;
