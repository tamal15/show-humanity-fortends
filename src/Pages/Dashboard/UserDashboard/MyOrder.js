import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
// import useAuth from '../../../../hooks/useAuth';
import {
    Box,
    Button,
    CardMedia,
    Container,
    Grid,
    Pagination,
    Paper,
    Rating,
    Stack,
    Typography,
  } from "@mui/material";
const MyOrder = () => {
    const [service,setService]=useState([])
    const{user}=useAuth()
    const[control,setControl]=useState(false)
// const email=user?.email

    useEffect(()=>{
        fetch(`https://show-humanity-front-production.up.railway.app/getuserCollected/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setService(data)
        })
    },[user?.userEmail])

    const handleDelete=(id)=>{
        const proceed=window.confirm('are you sure, you want to delete');
        fetch(`https://show-humanity-front-production.up.railway.app/deleteOrder/${id}`,{
            method:'DELETE'
        }).then(res=>res.json())
        .then(data=>{
            if(data.deletedCount>0){
                alert('Delete')
                const remaining=service.filter(service=>service._id !== id)
                setService(remaining)
            }
        });
        console.log(id)
    }

    const designShow = {
        width: '18rem'
    }
    return (
        <div>
            <h1>My order</h1>
            <Container>
       
        <Grid
          container
          spacing={2}
          sx={{ mt: 6 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {service?.map((single) => (
            <Grid sx={{ py: 3 }} key={single._id} item xs={4} sm={4} md={4}>
              <Paper
                sx={{
                  p: 1,
                  margin: "auto",
                  maxWidth: 400,
                  flexGrow: 1,
                  boxShadow: "0px 10px 22px rgb(42 135 158 / 50%)"
                }}
              >
                <Grid  container spacing={2} columns={{ xs: 4, sm: 8, md: 4 }}>
                  <Grid item xs={12} sm={12} md={12}>
                   <div className='photo'>
                    <div className='photoShops'>
                      <img height="230" width="250" style={{borderRadius:"15px"}} src={single?.img}></img>
                   
                    </div>
                   </div>
                   
                   
                  </Grid>

                  <Grid item xs={2} sm={4} md={8} pl={2} my={3}>
                    <Box style={{textAlign:"left"}}>
                      <h5 style={{fontWeight:"700"}}>Name : {single?.userName}</h5>

                     

                      {/* <ThumbUpIcon></ThumbUpIcon> */}
                       {/* <br></br> */}
                       {/* <h4>{single?.length}</h4> */}
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> userEmail : {single?.email}</h5>
                        
                      </Typography>
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> UaerAddress : {single?.address}</h5>
                        
                      </Typography>
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> UserOcupation : {single?.ocupation}</h5>
                        
                      </Typography>
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> UserCity : {single?.city}</h5>
                        
                      </Typography>
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> UserZip : {single?.zip}</h5>
                        
                      </Typography>
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> UserCountry : {single?.country}</h5>
                        
                      </Typography>
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> ChildName : {single?.childname}</h5>
                        
                      </Typography>
                      <Typography variant="body">
                        <h5 style={{ fontWeight: 700 }}> ChildName : {single?.status}</h5>
                        
                      </Typography>

                     
                     

                      <br></br>

                       {/* like handler ================== */}
                      {/* <Box style={{display:"flex"}}>
                      <Typography  style={{color:"#D0425C",fontWeight:"700"}}>
                       <ThumbUpIcon className='likedesign' onClick={() => handleLike(single?._id)}></ThumbUpIcon>{single?.likes?.length}
                       </Typography>
                     
                      <Typography> <ThumbDownIcon  className='ms-3 likedesign' onClick={() => handleUnLike(single?._id)}></ThumbDownIcon></Typography>
                      </Box> */}
                   


                    {/* <Typography>LikeCount: {single?.likes?.length}</Typography> */}
                    {/* Unlike handler ================== */}
                    </Box>
                  </Grid>
                </Grid>
              
              </Paper>
            </Grid>
          ))}
        </Grid>
        <Stack spacing={2}>

          
        </Stack>

        

        {/* <Box>
        {
  work.map(booking=> <OrderReviewPage
    key={booking.id}
    booking={booking}>

  </OrderReviewPage>)
}
        </Box> */}
      </Container>
        </div>
    );
};

export default MyOrder;