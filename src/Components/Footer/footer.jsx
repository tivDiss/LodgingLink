import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h2>Drive.Com</h2>
          <p>Powered by <a href="https://www.Atd.lk" target="_blank" rel="noopener noreferrer">www.Atd.lk</a></p>
        </div>
        <div className="footer-links">
          <div>
            <h3>AutoMe</h3>
            <ul>
              <li><a href="https://www.forloop.lk">About us</a></li>
              <li><a href="https://www.forloop.lk">Contact us</a></li>
              <li><a href="https://www.forloop.lk">Be a partner</a></li>
            </ul>
          </div>
          <div>
            <h3>Find my car</h3>
            <ul>
              <li><a href="https://www.forloop.lk">Search cars</a></li>
              <li><a href="https://www.forloop.lk">Buying advice</a></li>
              <li><a href="https://www.forloop.lk">Account login</a></li>
            </ul>
          </div>
          <div>
            <h3>Sell my car</h3>
            <ul>
              <li><a href="https://www.forloop.lk">Advertise for free</a></li>
              <li><a href="https://www.forloop.lk">Advert promotions</a></li>
              <li><a href="https://www.forloop.lk">Car valuation</a></li>
            </ul>
          </div>
          <div>
            <h3>Articles</h3>
            <ul>
              <li><a href="https://www.forloop.lk">Selling tips</a></li>
              <li><a href="https://www.forloop.lk">Latest news</a></li>
              <li><a href="https://www.forloop.lk">Car reviews</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        
        <div className="footer-links-bottom">
          <a href="https://www.forloop.lk">Terms of use</a>
          <a href="https://www.forloop.lk">Privacy policy</a>
          <a href="https://www.forloop.lk">Cookie policy</a>
          <a href="https://www.forloop.lk">Seller advertising terms</a>
        </div>
        <div className="footer-copyright">
          <p>© 2025 powered by <a href="https://www.forloop.lk">www.Atd.lk</a></p>
          <p>Registered company: ATD LTD / Company Id: PV00224291</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
