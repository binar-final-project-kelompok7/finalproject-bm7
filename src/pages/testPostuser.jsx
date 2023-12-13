import React, { useState } from "react";
import axios from "axios";

const YourComponent = () => {
  const [username, setUsername] = useState("rafi");
  const [password, setPassword] = useState("Abcdefg123");

  const handleLogin = () => {
    const apiUrl = "https://course-in-production.up.railway.app/api/v1/auth/login";
    const requestBody = { username, password };
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    axios
      .post(apiUrl, requestBody, { headers })
      .then((response) => {
        console.log("Response:", response.data);
        // Handle the response as needed
      })
      .catch((error) => {
        console.error("Error:", error.message);
        // Handle the error as needed
      });
  };

  return (
    <div className="container mt-5">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" className="form-control" id="username" placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button type="button" className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default YourComponent;
