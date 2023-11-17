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


const CardList = ({user}) => {

        const role = user.role
        const username = user.username
        const navigate = new useNavigate()

    const handleViewEmployee=()=>{
      navigate(`/view/employee/${user.username}/${user.role}`)
    }

    const handleViewAgent=()=>{
      navigate(`/view/agent/${user.username}/${user.role}`)
    }
    const handleViewCustomer=()=>{
      navigate(`/view/customer/${user.username}/${user.role}`)
    }

    const handleViewPlan=()=>{
      navigate(`/viewinsuranceplan/${user.username}/${user.role}`)
    }

    const handleViewPolicies=()=>{
      navigate(`/view/policy/${user.username}/${user.role}`)
    }

    const handleViewState=()=>{
      navigate(`/view/state/${user.username}/${user.role}`)
    }

    const handleViewCity=()=>{
      navigate(`/view/city/${user.username}/${user.role}`)
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
              <div className="mycard" onClick={handleViewEmployee}>
                <img className="image" src={AgentImage}/>
                <h3>View Employees</h3>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="mycard" onClick={handleViewCustomer}>
              <img className="image" src={CustomerImage} />
                <h3>View Customer</h3>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="mycard" onClick={handleViewAgent}>
              <img className="image" src={AgentImage} />
                <h3>View Agents</h3>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="mycard" onClick={handleViewPlan}>
                <img className="image" src={InsurancePlansImage} />
                <h3>Insurance Type</h3>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="mycard" onClick={handleViewPolicies}>
              <img className="image" src={PolicyImage} />
                <h3>Insurance Policies</h3>
              </div>
            </Grid>
            {/* <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="mycard" onClick={handleViewPayment}>
              <img className="image" src="{images.PolicyPayment}" />
                <h3>Policy Payment</h3>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="mycard" onClick={handleViewclaim}>
              <img className="image" src="{images.PolicyClaim}" />
                <h3>Policy Claim</h3>
              </div>
            </Grid> */}
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="mycard" onClick={handleViewState}>
              <img className="image" src={StateImage} />
                <h3>State</h3>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3}>
              <div className="mycard" onClick={handleViewCity}>
              <img className="image" src={CityImage} />
                    <h3>City</h3>
              </div>
            </Grid>

          </Grid>
        </div>
    </>
  )
}

export default CardList