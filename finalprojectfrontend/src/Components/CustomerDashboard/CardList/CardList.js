import { Grid } from '@mui/material'
import React from 'react'
import './CardList.css'
import { useNavigate } from 'react-router-dom'
import AgentImage from '../../../images/agent.png';
import CustomerImage from '../../../images/customer.png';
// import InsuranceTypeImage from '../../../images/insurance_type.png';
import InsurancePlansImage from '../../../images/insuranceplan.png';
import PolicyImage from '../../../images/policies.png';
// import PolicyClaimImage from '../../../images/policy_claim.png';
import StateImage from '../../../images/state.png';
import CityImage from '../../../images/city.png';
import Profile from '../../../images/profile.png'

const CardList = ({user}) => {

        const role = user.role
        const username = user.username
        const navigate = new useNavigate()

    const handleViewProfile=()=>{
      navigate(`/customer-profile/${user.username}/${user.role}`)
    }

    const handleViewAccount=()=>{
      navigate(`/customeraccounts/${user.username}/${user.role}`)
    }
    
  return (
    <>
        <div className="app__grid">
          <h1>Welcome {username} </h1>
          <Grid
            container
            justifyContent="flex-start"
            alignItems="center"
            spacing={3}
            style={{ marginLeft: "6rem" }}
          >
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="mycard" onClick={handleViewProfile}>
                <img className="image" src={Profile}/>
                <h3>Profile</h3>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="mycard" onClick={handleViewAccount}>
              <img className="image" src={CustomerImage} />
                <h3>View Accounts</h3>
              </div>
              </Grid>

          </Grid>
        </div>
    </>
  )
}

export default CardList