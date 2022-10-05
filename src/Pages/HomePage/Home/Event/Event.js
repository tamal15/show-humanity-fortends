import React from 'react';
// import image1 from '../../../../images/developer.jpg'
// import image2 from '../../../../images/mern.png'
// import image3 from '../../../../images/designer.jpg'
import './Event.css'
const Event = () => {
    return (
        <div>
            <h1 className='mt-5'> Events and Updates</h1>
            <div className="container mb-5 p-3 mt-5">
                  {/* <h1  className="text-info mb-5 mt-5">Services</h1> */}
            <div data-aos="fade-up" className="row row-cols-1 row-cols-md-3 g-4">

            <div data-aos="fade-up" class="col">
              <div className="card  project" style={{border:"2px solid white"}}>
                
            
                {/* <h1>{id}</h1> */}
                            <img style={{border:"2px solid white"}} className="image-design" src="https://www.smilefoundationindia.org/images/home/event-img/2.jpg" class="card-img-top" alt="..." />


                          </div>
            </div>

            {/* 2nd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
            
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src="https://www.smilefoundationindia.org/images/home/event-img/3.jpg" class="card-img-top" alt="..." />


                          </div>
            </div>


            {/* 3rd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
            
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src="https://www.smilefoundationindia.org/images/home/event-img/1.jpg" class="card-img-top" alt="..." />


                          </div>
            </div>



            {/* 4rd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
            
                {/* <h1>{id}</h1> */}
                            <img height="240" className="image-design" src="https://a.storyblok.com/f/138292/1500x1126/938b5acfcf/street-child-careers.jpeg" class="card-img-top" alt="..." />


                          </div>
            </div>



            {/* 5th  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
            
                {/* <h1>{id}</h1> */}
                            <img height="240" className="image-design" src="https://thelogicalindian.com/wp-content/uploads/2018/12/RAM_1026-750x500.jpg" class="card-img-top" alt="..." />


                          </div>
            </div>



            {/* 6th  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
            
                {/* <h1>{id}</h1> */}
                            <img height="240" className="image-design" src="https://blog.letsendorse.com/wp-content/uploads/2018/09/Teachers-Day-Banner-1.jpg" class="card-img-top" alt="..." />


                          </div>
            </div>
            </div>
                
            </div>
        </div>
    );
};

export default Event;