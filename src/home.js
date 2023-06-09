import React from "react";
import "./home.css";
import b1img from "./donation1.jpeg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import logo from './care.png';
const Home = () => {
  const sstyle = {
    backgroundImage: `url('${b1img}')`,
    height: "110vh",
    marginTop: "30px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={sstyle}>
      <div> 
        <nav>
          <div className="logo">
            <img src={logo} style={{width:'50px',height:'50px'}}></img>
            <span style={{position:'absolute',marginTop:'0px',marginLeft:'10px'}} className="organlogonear">Organ Connect</span>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login/Signup</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        <div className="center-content">
          <h1>Welcome to Organ Connect !!</h1>
          <p>
           Choose to be an organ donor and leave behind a lasting legacy of generosity and compassion, inspiring others to make a difference. Experience the emotional satisfaction of making a positive impact and potentially saving lives through organ donation.
          </p>
          <Link to="/login"><Button variant="contained" class="donate-button">Donate Now</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
