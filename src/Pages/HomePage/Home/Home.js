import React from 'react';
import Banner from '../Banner/Banner';
import Header from '../Shared/Header/Header';
import ViewData from '../ViewData/ViewData';
import Blogs from './Blog/Blog';
import Counter from './Counter/Counter';
import Event from './Event/Event';
import Footer from './Footer/Footer';
import Gallery from './PhotoGallery/PhotoGallery';
import ServiceEvent from './ServiceEvent/ServiceEvent';
import Services from './Services/Services';
import UpCommingEvent from './UpCommingEvent/UpCommingEvent';
import Health from './WorkHeader/Health';
import WorkHeader from './WorkHeader/WorkHeader';
// import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <ServiceEvent></ServiceEvent>
            <Services></Services>
            <ViewData></ViewData>
            <Blogs></Blogs>
            <Counter></Counter>
           <div className='mt-5 mb-5'> 
           <UpCommingEvent></UpCommingEvent>
           </div>
            <div className='mt-5 mb-5'>
            <Health></Health>
            </div>
            <Event></Event>
            <Gallery></Gallery>
            <Footer></Footer>
           
            {/* <h2>sghjssk</h2> */}
        </div>
    );
};

export default Home;