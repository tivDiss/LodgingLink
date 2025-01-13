import React from 'react'

import './home.css'
import Header2 from '../../Components/Header2/header2'
import Benefits from '../../Components/Benefits/benefits'
import Slideshow from '../../Components/SlideShow/slideshow'
import Footer from '../../Components/Footer/footer'

import image1 from '../../Components/Assets/image_1.jpg';
import image2 from '../../Components/Assets/image2.jpg';
import image3 from '../../Components/Assets/image3.jpg';
import image4 from '../../Components/Assets/image4.jpg';
import image5 from '../../Components/Assets/image5.jpg';

const images = [image1, image2,image3,image4,image5]
    
    



const home =()=> {
    return (
        <div>
            <Header2/>
            <Benefits/>
            <Slideshow images={images} />
            <Footer/>
            


        </div>
    )
}

export default home

