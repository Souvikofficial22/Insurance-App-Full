import { Grid } from '@mui/material'
import React from 'react'

const CardList = () => {
  function handleViewEmployee(){

  }
  return (
    <>
      <div className="app__grid">
          <Grid
            container
            justifyContent="flex-start"
            alignItems="center"
            spacing={4}
            style={{ marginLeft: "4rem" }}
          >
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="mycard" onClick={handleViewEmployee}>
              
                <img className="image" src="./images/about-us.png" />
              
              <h3>About Us</h3>
              
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="mycard" onClick={handleViewEmployee}>
              
                <img className="image" src="./images/services.png" />
              
              <h3>Service</h3>
              
            </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
            <div className="mycard" onClick={handleViewEmployee}>
              
                <img className="image" src="./images/contact-us.png" />
              
              <h3>Contact Us</h3>
              
            </div>
            </Grid>
            </Grid>
        </div>
    </>
  )
}

export default CardList