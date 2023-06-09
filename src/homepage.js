import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import user from './user (3).png';
import b1img from "./donation1.jpeg";
import "./home.css";
import logo from './care.png'
const Home = () => {
  const sstyle = {
    backgroundImage: `url('${b1img}')`,
    height: "110vh",
    marginTop: "30px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
 

  const handleLogout = () => {
    // Clear user data from session storage
    sessionStorage.clear();
  };

  return (
    <div style={sstyle}>
      <nav>
      <div className="logo">
            <img src={logo} style={{width:'50px',height:'50px'}}></img>
            <span style={{position:'absolute',marginTop:'0px',marginLeft:'10px'}} className="organlogonear">Organ Connect</span>
          </div>
        <ul className="nav-links">
          <li>
           Home
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li style={{marginRight:'100px'}}>
            <Link to="/" onClick={handleLogout}>
              Log Out
            </Link>
          </li>
              <img src={user} style={{ width: "30px", height: "30px", position:'absolute',marginRight: "180px" }} alt="User Icon" />
        </ul>
      </nav>

      <div className="center-content">
        <h1>Welcome to Organ Connect!!</h1>
        <p>
          Choose to be an organ donor and leave behind a lasting legacy of generosity and compassion, inspiring others to make a difference. Experience the emotional satisfaction of making a positive impact and potentially saving lives through organ donation.
        </p>
        <Link to="/donor">
          <Button variant="contained" style={{backgroundColor:'#8e1010c6',padding:'13px 20px',fontSize:'20px',borderRadius:'0px'}}className="donate-button1">Donate Now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
