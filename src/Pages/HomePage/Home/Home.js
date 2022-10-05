import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Shared/Header/Header';
import ViewData from '../ViewData/ViewData';
import Event from './Event/Event';
import Footer from './Footer/Footer';
import Services from './Services/Services';
import Health from './WorkHeader/Health';
import WorkHeader from './WorkHeader/WorkHeader';
// import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <ViewData></ViewData>
            <div className='mt-4'>
            <Health></Health>
            </div>
            <Event></Event>
            <Footer></Footer>
           
            {/* <h2>sghjssk</h2> */}
        </div>
    );
};

export default Home;