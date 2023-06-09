
import React, { useState, useEffect, useContext } from "react";
import "./donor.css";
import bimg from "./charity.jpeg";
import FormControl from "@mui/material/FormControl";
import axios from "axios";

import {
Checkbox,
FormControlLabel,
FormGroup,
FormLabel,
Radio,
RadioGroup,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { DonorContext } from "./DonorContext";

const Donor = () => {
  const { id } = useParams();
  const { setDonorDetails } = useContext(DonorContext);
  const [formData, setFormData] = useState({
    DonorName: "",
    PhoneNumber: "",
    Age: "",
    DateOfBirth: "",
    Email: "",
    Address: "",
    City: "",
    Pincode: "",
    BloodGroup: "",
    DonatingOrgan: "",
    Relation: "",
    RelationPhoneNumber: "",
    Gender: "",
    MedicalHistory: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetchDonor();
    }
  }, [id]);

  const fetchDonor = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/OrganDonation/getdonor/${id}`
      );
      const donorData = response.data;
      setFormData(donorData);
    } catch (error) {
      console.error(error);
      // Handle error scenarios
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      if (id) {
        await axios.put(
          `http://localhost:8080/OrganDonation/updatedonor/${id}`,
          formData
        );
      } else {
        await axios.post(
          "http://localhost:8080/OrganDonation/createdonor",
          formData
        );
      }
      
      // Clear form data
      setFormData({
        DonorName: "",
        PhoneNumber: "",
        Age: "",
        DateOfBirth: "",
        Email: "",
        Address: "",
        City: "",
        Pincode: "",
        BloodGroup: "",
        DonatingOrgan: "",
        Relation: "",
        RelationPhoneNumber: "",
        Gender: "",
        MedicalHistory: "",
      });
      
      // Redirect to the donor list page
      navigate("/list");
    } catch (error) {
      console.error(error);
      // Handle error scenarios
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const ystyle = {
backgroundImage: `url('${bimg}')`,
height: "10vh",
marginTop: "0px",
backgroundSize: "100%",
backgroundRepeat: "no-repeat",
};

return (
<div className="body" style={ystyle}>
<div class="container">
<div class="title">Registration</div>
<div class="content">
<form action="#" onSubmit={handleSubmit}>
<div class="user-details">
<div class="input-box">
                <span class="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="DonorName"
                  value={formData.DonorName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your Phone number"
                  name="PhoneNumber"
                  value={formData.PhoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Age</span>
                <input
                  type="number"
                  placeholder="Enter your Age"
                  name="Age"
                  value={formData.Age}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Date of Birth</span>
                <input
                  type="date"
                  placeholder="Enter your Date of birth"
                  name="DateOfBirth"
                  value={formData.DateOfBirth}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">E-Mail</span>
                <input
                  type="email"
                  placeholder="Enter your mail id"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Address</span>
                <input
                  type="text"
                  placeholder="Enter your Address"
                  name="Address"
                  value={formData.Address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">City</span>
                <input
                  type="text"
                  placeholder="Enter your City"
                  name="City"
                  value={formData.City}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Pincode</span>
                <input
                  type="text"
                  placeholder="Enter your Pincode"
                  name="Pincode"
                  value={formData.Pincode}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Blood Group</span>
                <input
                  type="text"
                  placeholder="Enter your Blood Group"
                  name="BloodGroup"
                  value={formData.BloodGroup}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div class="input-box">
                <span class="details">Relation Name</span>
                <input
                  type="text"
                  placeholder="Enter your Relation name"
                  name="Relation"
                  value={formData.Relation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Relation's Phone Number</span>
                <input
                  type="text"
                  placeholder="Enter your Relation's contact"
                  name="RelationPhoneNumber"
                  value={formData.RelationPhoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Donating Organ</span>
                <select>
            <option value="">-- Select Organ --</option>
            <option value="Heart">Heart</option>
            <option value="Kidney">Kidney</option>
            <option value="Liver">Liver</option>
            <option value="Lung">Lung</option>
            <option value="Pancreas">Pancreas</option>
          </select>
              </div>
            </div>
           
            <div className="input-box">
              <FormControl>
                <FormLabel class="details">Gender</FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="Gender"
                  value={formData.Gender}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div className="input-box">
              <FormControl>
                <FormLabel
                  id="demo-row-radio-buttons-group-label"
                  class="details"
                >
                  Medical History
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="MedicalHistory"
                  value={formData.MedicalHistory}
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="no"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            <div>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Agree to Donate the organ specified"
                />
              </FormGroup>
            </div>
            <div >
              <button type="submit" className="regbut">Register</button>
            </div>

</form>
</div>
</div>
</div>
);
};

export default Donor;