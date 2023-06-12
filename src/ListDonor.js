import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./ListDonor.css";

const ListDonor = () => {
  const [donors, setDonors] = useState([]);
  const [selectedDonor, setSelectedDonor] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchDonors();
  }, []);

  const fetchDonors = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/OrganDonation/getdonor"
      );
      setDonors(response.data);
    } catch (error) {
      console.error(error);
      // Handle error scenarios
    }
  };

  const handleUpdate = (id) => {
    navigate(`/edit/${id}`);
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

  const handleViewDetails = (donor) => {
    setSelectedDonor(donor);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1
        style={{
          color: "black",
          textAlign: "center",
          width: "100%",
          height: "50%",
          fontFamily: "papyrus",
          fontSize: "45px",
        }}
      >
        Donor Details
      </h1>

      <div>
        <table id="customers">
          <thead>
            <tr>
              <th>Id</th>
              <th>Donor Name</th>
             
              <th>Age</th>
             
              <th>Email</th>
             
              <th>Blood Group</th>
              <th>Donating Organ</th>
             
              <th>Gender</th>
              <th>Actions</th>
             
            </tr>
          </thead>
          <tbody>
            {donors.map((donor, index) => (
              <tr key={donor.id}>
                <td>{index + 1}</td>
                <td>{donor.DonorName}</td>
               
                <td>{donor.Age}</td>
               
                <td>{donor.Email}</td>
            
                <td>{donor.BloodGroup}</td>
                <td>{donor.DonatingOrgan}</td>
                <td>{donor.Gender}</td>
               
                <td style={{ display: "flex", gap: "40px",Left:"10px",marginRight: "-80px" }}>
                  <Button variant="contained" onClick={() => handleViewDetails(donor)}>View</Button>
                  <Button variant="contained" onClick={() => handleUpdate(donor.id)}>
                    Update
                  </Button>
                  <Button variant="contained" onClick={() => handleDelete(donor.id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <div className="modal-content">
          {selectedDonor && (
            <>
              <h2>Donor Details</h2>
              <p>Donor Name: {selectedDonor.DonorName}</p>
              <p>Phone Number: {selectedDonor.PhoneNumber}</p>
              <p>Age: {selectedDonor.Age}</p>
              <p>Date of Birth: {selectedDonor.DateOfBirth}</p>
              <p>Email: {selectedDonor.Email}</p>
              <p>Address: {selectedDonor.Address}</p>
              <p>City: {selectedDonor.City}</p>
              <p>Pincode: {selectedDonor.Pincode}</p>
              <p>Blood Group: {selectedDonor.BloodGroup}</p>
              <p>Donating Organ: {selectedDonor.DonatingOrgan}</p>
              <p>Relation Name: {selectedDonor.Relation}</p>
              <p>Relation's Phone Number: {selectedDonor.RelationPhoneNumber}</p>
              <p>Gender: {selectedDonor.Gender}</p>
              <p>Medical History: {selectedDonor.MedicalHistory}</p>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default ListDonor;
