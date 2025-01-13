import React, { useState } from "react";
import axios from "axios";
import "./sellingcard.css";

const SellingCard = () => {
  const [newCar, setNewCar] = useState({
    title: "",
    price: "",
    mileage: "",
    year: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCar({ ...newCar, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (file && file.size > maxSize) {
      alert("File size exceeds 5MB. Please upload a smaller file.");
      return;
    }

    setImageFile(file);
  };

  const addCar = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("title", newCar.title);
      formData.append("price", newCar.price);
      formData.append("mileage", newCar.mileage);
      formData.append("location", newCar.year);

      const response = await axios.post("http://localhost:5001/add-car", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.success) {
        alert("Car added successfully to the database.");
        setNewCar({ title: "", price: "", mileage: "", year: "" });
        setImageFile(null);
        setIsModalOpen(false); // Close the modal
      } else {
        alert("Failed to add car");
      }
    } catch (error) {
      console.error("Error adding car:", error);
      alert("An error occurred while adding the car");
    }
  };


  return (
    <div className="selling-card-container" >
     
      <div className="selling-card-content">
        <h2>Thinking about selling your car?</h2>
        <p>
          Get a fast and free quote from Drive’s dealer network today.
        </p>
        <button className="selling-card-button"onClick={() => setIsModalOpen(true)}>Get offers now</button>
        {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <form onSubmit={addCar}>
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              <input
                type="text"
                name="title"
                placeholder="Title"
                value={newCar.title}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="price"
                placeholder="Price"
                value={newCar.price}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="mileage"
                placeholder="Mileage"
                value={newCar.mileage}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="year"
                placeholder="Year"
                value={newCar.location}
                onChange={handleInputChange}
              />
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default SellingCard;
