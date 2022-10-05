import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

// import './WorkHeader.css'
import { Link } from 'react-router-dom';
const Item = ({ image, title, description, price, foodType}) => {
  
    
    return (
        <div className='mb-5 mt-4'>

        <Carousel className="banners">
          <Carousel.Item className="carousel-design values">
          <img
              className="d-block w-100  slide"
              src={image}
              alt="First slide"
            />
          
          
            <Carousel.Caption className="styles">
              
           
             
            </Carousel.Caption>
          
        
           
          </Carousel.Item>
          
       
        </Carousel>
                    
                </div>
    )
}

export default Item
