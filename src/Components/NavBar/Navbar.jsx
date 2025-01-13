import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";




const Navbar = () => {
    const [menu,setMenu]=useState("home")
    return (
        <div className='navbar'>
            <div className="nav-logo">
               
                <p>Drive.Com</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("home")}}><Link to='/'className="nav-link">Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("vehicles")}}><Link to='/vehicles'className="nav-link">Vehicles</Link>{menu==="vehicles"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("news")}}><Link to='/news' className="nav-link">News</Link>{menu==="news"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contacts")}}><Link to='/contacts' className="nav-link">Contact</Link>{menu==="contacts"?<hr/>:<></>}</li>
            </ul>

        </div>
    )
}
export default Navbar