import React from "react";
import "./header2.css";
import { assets} from '../../Components/Assets/Assets'

const Header2 = () => {
  return (
    <div className="header-container">
      <img
        src={assets.bgimg3} 
        alt="Find Your Dream Car"
        className="header-image"
      />
      <div className="header-overlay">
        <h1 className="header-title">Unlock Your Dream Ride:< br/>Find Your Perfect Car Today!</h1>
       
      </div>
    </div>
  );
};

export default Header2;