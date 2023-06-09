import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "./ListDonor.css";

const ListDonor = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/OrganDonation/getdonor`);
      setDonors(response.data);
    } catch (error) {
      console.error(error);
      // Handle error scenarios
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8080/OrganDonation/deletedonor/${id}`
      );

      fetchDonors();
    } catch (error) {
      console.error(error);
      // Handle error scenarios
    }
  };

  const handleUpdate = async (id) => {
    try {
      // Perform update logic here
      // ...

      // Navigate to the donor page
      window.location.href = `/updatedonor?id=${id}`;
    } catch (error) {
      console.error(error);
      // Handle error scenarios
    }
  };

  return (
    <div>
      <h1 style={{color:"black",textAlign:"center",width:"100%",height:"50%",fontFamily:"papyrus",fontSize:"45px"}}>Donor Details</h1>
      
      <div>
        <table id="customers">
          <thead>
            <tr>
              <th>Id</th>
              <th>Donor Name</th>
              <th>Phone Number</th>
              <th>Age</th>
              <th>Date Of Birth</th>
              <th>Email</th>
              <th>Address</th>
              <th>City</th>
              <th>Pincode</th>
              <th>Blood Group</th>
              <th>Donating Organ</th>
              <th>Relation Name</th>
              <th>Relation's Phone Number</th>
              <th>Gender</th>
              <th>Medical History</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={donor.id}>
                <td>{index + 1}</td>
                <td>{donor.DonorName}</td>
                <td>{donor.PhoneNumber}</td>
                <td>{donor.Age}</td>
                <td>{donor.DateOfBirth}</td>
                <td>{donor.Email}</td>
                <td>{donor.Address}</td>
                <td>{donor.City}</td>
                <td>{donor.Pincode}</td>
                <td>{donor.BloodGroup}</td>
                <td>{donor.DonatingOrgan}</td>
                <td>{donor.Relation}</td>
                <td>{donor.RelationPhoneNumber}</td>
                <td>{donor.Gender}</td>
                <td>{donor.MedicalHistory}</td>
                <td>
                  <Button variant="contained">View</Button>
                  <Button
                    variant="contained"
                    onClick={() => handleUpdate(donor.id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => handleDelete(donor.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListDonor;
