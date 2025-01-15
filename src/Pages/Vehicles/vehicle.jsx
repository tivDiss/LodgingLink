
import React, { useState } from "react";
import CarCard from "../../Components/CarCard/carcard";
import Footer from "../../Components/Footer/footer";

const Vehicles = () => {
  const [carData] = useState([
    {
      image: "https://th.bing.com/th/id/OIP.FjYYyLGd5KLkqHoRmfEXngHaFj?rs=1&pid=ImgDetMain",
      title: "Nissan March AK12 Beetle Edition",
      price: "3,225,000",
      mileage: "3.225M",
      year: "2014",
    },
    {
      image: "https://autostore.nyc3.cdn.digitaloceanspaces.com/11861_0.jpg",
      reserved: "Reserved",
      title: "Honda Fit GP5",
      price: "7,000,000",
      mileage: "7M",
      year: "2018",
    },
    {
      image: "https://www.houseofcars.co.ke/hoc-images/2023/12/WhatsApp-Image-2023-12-14-at-04.52.41.jpeg",
      title: "Toyota Axio Company Maintained",
      price: "13,500,000",
      mileage: "13.5M",
      year: "2017",
    },
    {
      image: "https://th.bing.com/th/id/OIP.PVSy4qzvPL23UrizrdT-GwHaE7?rs=1&pid=ImgDetMain",
      title: "Suzuki Cultus",
      price: "2,500,000",
      mileage: "2.5M",
      year: "2019",
    },

    {
      image: "https://riyasewana.com/uploads/suzuki-wagon-r-2015-158332612611.jpg",
      title: "Suzuki Wagon R Stingray J Style",
      price: "6,000,000",
      mileage: "99000 KM",
      year: "	2015",
    },

    {
      image: "https://riyasewana.com/uploads/toyota-aqua-g-15819524671.jpg",
      title: "Toyota Aqua G Grade",
      price: "7,325,000",
      mileage: "85000KM",
      year: "	2013",
    },
    {
      image: "https://riyasewana.com/uploads/suzuki-swift-rs-2019-158123912172.jpg",
      title: "Suzuki Swift Rs Turbo",
      price: " 9,275,000 ",
      mileage: "84000KM",
      year: "	2019",
    },
    {
      image: "https://riyasewana.com/uploads/toyota-premio-nzt260-15817424253.jpg",
      title: "Toyota PREMIO NZT260 G SUPERIOR",
      price: " 18,750,000 ",
      mileage: "	38500KM",
      year: "	2019",
    },
    
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCars = carData.filter((car) =>
    car.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

 

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Featured Car Deals</h1>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search by car name..."
          value={searchTerm}
          onChange={handleSearch}
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "50%",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <CarCard cars={filteredCars} />
      
   
      <Footer />
    </div>
  );
};

export default Vehicles;
