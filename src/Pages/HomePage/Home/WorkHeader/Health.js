// import { Skeleton } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import useFetch from '../../hooks/useFetch';
import Item from './Item';
import Skeleton from './Skeleton';
import { Carousel } from 'react-bootstrap';

import './Health.css'
import { Link } from 'react-router-dom';
const Health = () => {
    const [menuTab, setMenuTab] = useState('Education','Health')
   
    const [loading, setLoading] = useState(false)
    const [collected, setCollected] = useState([])
    // const [foods] = useFetch();

    //loading 
    useEffect(() => {
        fetch('./picture.json')
        .then(res=>res.json())
        .then(data=>{setCollected(data)
        console.log(data)})
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },1000)
    },[])

    //food menu tab 
    const handleMenuTabs = (type) => {
        setMenuTab(type)
    }

    return (
        <section className="">
            {/* food Menu tab  */}
            <div style={{display:"flex",justifyContent:"center",alignItems:"center", background:"#1289A7", color:"white"}} className="flex items-center justify-center space-x-6">
                <p className='me-5 mt-2 edu'  onClick={() => handleMenuTabs('Education')}>Education</p>
                <p className='me-5 mt-2 edu' onClick={() => handleMenuTabs('Health')}>Health</p>
                <p className='me-5 mt-2 edu' onClick={() => handleMenuTabs('OldPeople')}>OldPeople</p>
               
            </div>

            {/* all foods  */}
            
            <div className="">
            <Carousel className="banners">
                {collected.filter((item) => menuTab === item.type).map(item => (
                    
                     <Carousel.Item className="carousel-design values">
                     <img
                     height="340px" width="200px"
                         className="d-block w-100  slide"
                         src={item.image}
                         alt="First slide"
                       />
                     
                     
                       <Carousel.Caption className="styles">
                         
                      
                        
                       </Carousel.Caption>
                     
                   
                      
                     </Carousel.Item>
                     
                  
                  
                ))}
                  </Carousel> 
            </div>
          
        </section>
    )
}

export default Health;