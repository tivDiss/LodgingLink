
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
  ]);

 

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "20px 0" }}>Featured Car Deals</h1>
      <CarCard cars={carData} />
   
      <Footer />
    </div>
  );
};

export default Vehicles;
