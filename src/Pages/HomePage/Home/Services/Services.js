import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css'
import bg from "../../../../images/gray_wave.svg";
import { Box } from "@mui/material";
const Services = () => {
    return (
        <div className='py-5 service-area'>
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
         <Container>
                <Row>
                    <Col>
                        <div className="section-title text-center mb-5">
                            {/* <h3>Our Services</h3> */}
                            <h1 data-text="User Reviews" className="text-center my-3 user-reviews mb-2"> Our Services</h1>
            {/* <hr className='' style={{  width: '15%', height: '5px', backgroundColor: 'blsck', display:"inline-block", border:0}} /> */}
                            <span></span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className="single-service shadow">
                            <h3>Street Child</h3>
                            <p>Street children are minors who live and survive on the streets. They often grow up in public landfills, train stations, our under the bridges of the world's major cities.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-service shadow">
                            <h3>Virdha Ashram </h3>
                            <p>It works towards the aim of providing a safe stable 'heaven' for the elderly. This “home away from home” would enable the aged persons to lead a self reliant. aim of providing a safe stable.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-service shadow">
                            <h3>Police Verify</h3>
                            <p>A police officer checks the application form's details, including the applicant's name, age, and address. The officer pays a personal visit to the applicant's residence</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-service shadow">
                            <h3>User Street Collected</h3>
                            <p>street collection means a collection or sale to which regulations made under section 5 of the Police, Factories, etc. (Miscellaneous Provisions) Act 1916,apply.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-service shadow">
                            <h3>Etim Khana Service</h3>
                            <p>It works towards the aim of providing a safe stable 'heaven' for the elderly. This “home away from home” would enable the aged persons to lead a self reliant.This “home away from home”.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-service shadow">
                            <h3>Virdha Ashram Service</h3>
                            <p>It works towards the aim of providing a safe stable 'heaven' for the elderly. This “home away from home” would enable the aged persons to lead a self reliant.This “home away from home”.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
         </Box>
        </div>
    );
};

export default Services;