import React, { useState } from "react";
import "./App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login Successful!");
  };

  return (
    <div className="login-page">
      <div className="login-ambient"></div>
      <div className="login-spotlight"></div>

      <div className="login-box">
        <h2>DK Bank Login</h2>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <button type="submit">Login</button>

          <p className="signup-text">
            New user? <span>Create account</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;

