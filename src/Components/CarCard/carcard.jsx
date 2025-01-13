import React from "react";
import "./carcard.css";

const CarCard = ({ cars }) => {
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
            <button className="enquire-btn">Enquire Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarCard;
