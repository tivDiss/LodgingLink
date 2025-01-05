
import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import {Routes } from 'react-router-dom';
import Home from './Pages/Home/home'
import { Route } from 'react-router-dom';




const App= ()=> {
  return (
    
    <div>
      <Navbar/>
      <Routes>
        < Route path='/' element={<Home/>} />
      </Routes>
    
    </div>
  );
}

export default App;
