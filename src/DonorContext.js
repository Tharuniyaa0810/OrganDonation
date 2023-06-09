import React, { createContext, useState, useEffect } from "react";

export const DonorContext = createContext();

export const DonorProvider = ({ children }) => {
  const [donorDetails, setDonorDetails] = useState([]);

  // Load donor details from local storage on component mount
  useEffect(() => {
    const storedDonorDetails = localStorage.getItem("donorDetails");
    if (storedDonorDetails) {
      setDonorDetails(JSON.parse(storedDonorDetails));
    }
  }, []);

  // Update donor details and store in local storage
  useEffect(() => {
    localStorage.setItem("donorDetails", JSON.stringify(donorDetails));
  }, [donorDetails]);

  return (
    <DonorContext.Provider value={{ donorDetails, setDonorDetails }}>
      {children}
    </DonorContext.Provider>
  );
};
