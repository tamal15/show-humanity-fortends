import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Upcoming.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";



// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const UpCommingEvent = () => {
    return (
        <div className="py-5 container">
            <h1 data-text="User Reviews" className="text-center my-3 user-reviews mb-2"> Upcomming Event</h1>
            <hr className='' style={{  width: '15%', height: '5px', backgroundColor: 'blsck', display:"inline-block", border:0}} />
            <>
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    // centeredSlides={true}
                    slidesPerView={3}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        loop: true,
                        speed: 600,

                        slideShadows: true
                    }
                    }
                    autoplay={{
                        delay: 1000
                    }}


                    pagination={true}
                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj697GZblNlDOK20VHyfuI8NN0UxdXUL0CexSem496ounsJAJ1HjzeDRW0oYn7pHCBnqo&usqp=CAU" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7soSsRVd5oxLi4R6ErFoTQpBpL_jRZO3I6rBaNgbfffIDVzplthkY7wB448I4dNBWsCs&usqp=CAU" alt="..." width="250" height="300" />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1j55jRGk5z9kMKWmtAMYLa3l2_bPHAGm9eFySCB1nZRTydK5iGGmgyRtkKnsSvxMeVoI&usqp=CAU" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://st2.depositphotos.com/2801443/5683/i/450/depositphotos_56835989-stock-photo-indian-kids-in-the-jaisalmer.jpg" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://media.istockphoto.com/id/492026053/photo/spectators-cheering-at-outdoor-sports-event.jpg?s=612x612&w=0&k=20&c=0wPr4yTGaKXSktHEBnYYptfxnKn9siRzMk9Ct1noByM=" alt="..." width="250" height="300" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://media.istockphoto.com/id/1372309443/photo/multiracial-group-of-senior-people-friends-holding-hands-and-waving.jpg?b=1&s=170667a&w=0&k=20&c=_7s0A0VW_RVxWQZDluQSZYWcSUnHTxn8fSdr0PJF-BU=" alt="..." width="250" height="300" />
                    </SwiperSlide>

                </Swiper>
            </>
        </div>
    );
};

export default UpCommingEvent;