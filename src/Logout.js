import React from "react";
import "./App.css";

function Logout() {
  const handleLogout = () => {
    alert("You have been logged out!");
    // You can also redirect:
    // window.location.href = "/login";
  };

  return (
    <div className="logout-page">
      <div className="logout-ambient"></div>
      <div className="logout-spotlight"></div>

      <div className="logout-box">
        <h2>Logged Out</h2>
        <p>Thank you for using DK Bank</p>
        <button onClick={handleLogout}>Go to Login</button>
      </div>
    </div>
  );
}

export default Logout;
