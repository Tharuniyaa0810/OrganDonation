import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import backimg from './donation.jpg';
import './App.css'

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit.");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:8080/OrganDonation/signup/${email}`
      );

      if (response.data.emailRegistered===true) {
        setError("Email is already registered. Please log in.");
      } else {
        await axios.post("http://localhost:8080/OrganDonation/createsign", {
          firstName,
          lastName,
          email,
          phoneNum,
          password,
        });

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNum("");
        setPassword("");
        setConfirmPassword("");
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("firstName", firstName);
        navigate("/login");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
  };
  const mystyle = {
    backgroundImage: `url('${backimg}')`,
    height: "100vh",
    marginTop: "0px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="body" style={mystyle}>
      <section className="wrapper">
        <div>
          <header className="headerform">Sign Up</header>
          <form className="form1" onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <input
              type="text"
              placeholder="Enter Your First Name"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            ></input>
            <input
              type="text"
              placeholder="Enter Your Last Name"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            ></input>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            ></input>
            <input
              type="tel"
              placeholder="Enter Your Phone Number"
              pattern="[0-9]{10}"
              value={phoneNum}
              onChange={(event) => setPhoneNum(event.target.value)}
              required
            ></input>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            ></input>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            ></input>
            <button type="submit" className="signupbut">
              Sign Up
            </button>
          </form>
          <p style={{fontSize:"23px"}}>
            Already have an account? <Link to="/login" style={{color:"yellow"}}>Log In</Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
