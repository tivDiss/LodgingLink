import React, { useState } from "react";
import axios from "axios";
import "./carcard.css";

const CarCard = ({ cars }) => {
  const [modalData, setModalData] = useState(null); // To store car details for the modal
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    vehicle: "",
  });

  const handleEnquireClick = (car) => {
    setModalData(car); // Set the car details for the modal
    setFormData({ ...formData, vehicle: car.title }); // Pre-fill vehicle name
  };

  const handleCloseModal = () => {
    setModalData(null); // Close the modal
    setFormData({ name: "", contact: "", vehicle: "" }); // Reset form
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Post data to the database
      const response = await axios.post("/api/enquiries", formData);
      console.log(response.data);
      alert("Enquiry submitted successfully!");
      handleCloseModal(); // Close the modal on success
    } catch (error) {
      console.error("Error submitting enquiry:", error);
      alert("Failed to submit enquiry.");
    }
  };

  return (
    <div className="car-container">
      {cars.map((car, index) => (
        <div className="car-card" key={index}>
          <div className="car-image">
            <img src={car.image} alt={car.title} />
          </div>
          <h2 className="r">{car.reserved}</h2>
          <div className="car-details">
            <h3 className="car-title">{car.title}</h3>
            <p className="car-price">Rs. {car.price}</p>
            <p className="car-meta">
              {car.mileage} • {car.year}
            </p>
            <button className="enquire-btn" onClick={() => handleEnquireClick(car)}>
              Enquire Now
            </button>
          </div>
        </div>
      ))}

      {modalData && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Enquire About {modalData.title}</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Your Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Contact Number:
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Vehicle:
                <input
                  type="text"
                  name="vehicle"
                  value={formData.vehicle}
                  readOnly
                />
              </label>
              <button type="submit">Submit</button>
              <button type="button" onClick={handleCloseModal}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarCard;
