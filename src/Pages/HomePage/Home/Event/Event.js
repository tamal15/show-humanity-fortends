import React from 'react';
// import image1 from '../../../../images/developer.jpg'
// import image2 from '../../../../images/mern.png'
// import image3 from '../../../../images/designer.jpg'
import bg from "../../../../images/wave-pink.svg";
import { Box, Container, Grid, Typography } from "@mui/material";
import './Event.css'
const Event = () => {
    return (
        <div className=' mt-5' >
           
            <Box
             id="gallery"
             sx={{
               backgroundImage: `url(${bg})`,
               backgroundSize: "cover",
               backgroundRepeat: "no-repeat",
               display:"block",
               py: 18,
              //  height:"800px"
             }}>
              <h1 data-text="User Reviews" className="text-center my-3 user-reviews mb-2"> Events and Update</h1>
            <hr className='' style={{  width: '15%', height: '5px', backgroundColor: 'blsck', display:"inline-block", border:0}} />
            <div className="container mt-5 mb-3">
                  {/* <h1  className="text-info mb-5 mt-5">Services</h1> */}
            <div data-aos="fade-up" className="row row-cols-1 row-cols-md-3 g-4">

            <div data-aos="fade-up" class="col">
              <div className="card  project" style={{border:"2px solid white"}}>
                
            
                {/* <h1>{id}</h1> */}
                            <img style={{border:"2px solid white"}} className="image-design" src="https://c8.alamy.com/comp/ECHMFW/two-elderly-women-7888-home-for-the-elderly-health-care-nurse-ECHMFW.jpg" class="card-img-top" alt="..." />


                          </div>
            </div>

            {/* 2nd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
            
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src="https://st4.depositphotos.com/1854227/22566/i/600/depositphotos_225669392-stock-photo-a-health-visitor-bringing-breakfast.jpg" class="card-img-top" alt="..." />


                          </div>
            </div>


            {/* 3rd  */}
            <div data-aos="fade-up" class="col">
              <div className="card  project">
                
            
                {/* <h1>{id}</h1> */}
                            <img className="image-design" src="https://www.wvi.org/sites/default/files/styles/large_780x520/public/IMG_0596.png?itok=tho59dDH" class="card-img-top" alt="..." />


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
            </Box>
        </div>
    );
};

export default Event;