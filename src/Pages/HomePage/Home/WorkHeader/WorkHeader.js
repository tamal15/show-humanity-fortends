import React from 'react';
import { Carousel } from 'react-bootstrap';

import './WorkHeader.css'
import { Link } from 'react-router-dom';

const WorkHeader = () => {
    return (
        <div>
           <section>
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand ms-5" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active ms-5 me-5 text-black" aria-current="page" href="#education">Education</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-5 me-5 text-black" aria-current="page" href="/health">Health</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-5 me-5 text-black" aria-current="page" href="#health">LeveliHood</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-5 me-5 text-black" aria-current="page" href="#health">Old People</a>
        </li>
       
        
      
       
      </ul>
    </div>
  </div>
</nav>
            
           </section>



           {/* education  */}



           <section id="education">
           <div className='mb-5 mt-4'>

<Carousel className="banners">
  <Carousel.Item className="carousel-design values">
  <img
      className="d-block w-100  slide"
      src="https://storage.googleapis.com/monarchmart-storage/uploads/all/Q3Bkoc7GUP4sxm4DxxziSiXARk32BVBrKcl2tbn2.png"
      alt="First slide"
    />
  
  
    <Carousel.Caption className="styles">
      
    <Link to='/piece'>
    <button className="banner  text-white">More Products</button>
    </Link>
     
    </Carousel.Caption>
  

   
  </Carousel.Item>
  
  <Carousel.Item className="carousel-design values">
    <img
      className="d-block w-100  slide"
      src="https://storage.googleapis.com/monarchmart-storage/uploads/all/nsEAS0QkcfIPtnZtHJ9CeEWROcUZ9uMtwmkaqQI3.png"
      alt="Second slide"
    />

    <Carousel.Caption>
 
    <Link to='/more'>
    <button className="banner  text-white">More Products</button>
    </Link>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carousel-design values">
    <img
      className="d-block w-100  slide"
      src="https://storage.googleapis.com/monarchmart-storage/uploads/all/QedHD7eq48aIcnBtB5GkkmbxL89Je4jfUHS5Aynj.png"
      alt="Third slide"
    />

    <Carousel.Caption>
  
    <Link to='/more'>
    <button className="banner  text-white">More Products</button>
    </Link>
    
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            
        </div>
           </section>



           {/* health  */}


        
        </div>
    );
};

export default WorkHeader;