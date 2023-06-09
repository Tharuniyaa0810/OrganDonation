import React, { useState } from "react";
import backimg from "./donation.jpg";
import "./login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [showpopup, setPopup] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validate email and password
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/OrganDonation/login",
        { email, password }
      );

      if (response.data === "Login successful") {
        clearUserData();
        sessionStorage.setItem("email", email);
        localStorage.setItem("email", email);
        setPopup(true);
        navigate("/homeuser");
      } else {
        setPopup(false);
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
      console.log(error);
    }

    // Reset email and password fields
    setEmail("");
    setPassword("");
  };
  const clearUserData = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("firstName");
    // Add any other user data you want to clear
  };
  
  const mystyle = {
    backgroundImage: `url('${backimg}')`,
    height: "90vh",
    marginTop: "0px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="bodyy" style={mystyle}>
      <section className="wapper">
        <div>
          <header className="formheader">Log In</header>
          <form className="form" onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <input
              type="email"
              placeholder="Enter Your Mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            ></input>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            ></input>
            
            <button type="submit" className="loginbut">
              Login
            </button>
            <p className="signup-link">
              New User?{" "}
              <Link to="/sign" className="signup">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Login;
