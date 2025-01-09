
import React from 'react';
import './App.css';
import Navbar from './Components/NavBar/Navbar';
import {Routes } from 'react-router-dom';
import Home from './Pages/Home/home'
import News from './Pages/News/news'
import Contacts from './Pages/Contacts/contact';
import { Route } from 'react-router-dom';






const App= ()=> {
  return (
    
    <div>
      <Navbar/>
      <Routes>
        < Route path='/' element={<Home/>} />
        < Route path='/news' element={<News/>} />
        < Route path='/contacts' element={<Contacts/>} />
      </Routes>
    
    </div>
  );
}

export default App;
