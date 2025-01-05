import React, { useState } from 'react'
import './Navbar.css'





const Navbar = () => {
    const [menu,setMenu]=useState("home")
    return (
        <div className='navbar'>
            <div className="nav-logo">
               
                <p>Drive.Com</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={()=>{setMenu("home")}}>Home{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("vehicles")}}>Vehicles{menu==="vehicles"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("news")}}>News{menu==="news"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contacts")}}>Contact{menu==="contacts"?<hr/>:<></>}</li>
            </ul>

        </div>
    )
}
export default Navbar