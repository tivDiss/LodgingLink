import React from "react";
import "./header1.css";
import { assets} from '../../Components/Assets/Assets'

const Header1 = () => {
  return (
    <div className="header-container">
      <img
        src={assets.bgimg2} // Replace with actual image URL
        alt="Find Your Dream Car"
        className="header-image"
      />
      <div className="header-overlay">
        <h1 className="header-title">Thinking about the end right from the start</h1>
        <p className="h">
          Welcome to Drive.Com!<br /> 
          We streamline the car buying and selling process with<br /> comprehensive tools and expert guidance.
        <br /> Our goal is to ensure you make the best <br />decisions and get maximum value for your vehicle.
        <br />At Drive.Com, we prioritize your future, <br />offering a seamless experience that <br />guarantees maximum value for your vehicle. <br />Embrace a forward-thinking approach to car sales with us.
        <br /> Let's navigate the road to success together.
        </p>
      </div>
    </div>
  );
};

export default Header1;