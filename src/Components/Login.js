import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [store] = useState("");
  const [login] = useState("");
  const history = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //   email,
        //   password,
        //   login,
        //   store,
        // }),
      });
      //   if (!res.ok) {

      //   }
      const data = await res.json();
      const message = data.message;
      if (message) {
        throw new Error(message);
      }
      localStorage.setItem("token", data.token);
      history("/admin-panel");
    } catch (error) {
      window.alert(error.message);
      // console.log(error.message);
    }
  };

  return (
    <div className="app">
      <div className="login-form">
        <div className="logform">
          <div className="title">Sign in</div>
          <form method="POST">
            <div className="input-container">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label htmlFor="Password">Password</label>
              <input
                type="Password"
                name="Password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button-container">
              <button type="submit" onClick={loginUser}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
