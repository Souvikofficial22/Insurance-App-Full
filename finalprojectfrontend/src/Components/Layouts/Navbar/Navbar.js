import React, { useEffect, useState } from 'react'
import './Navbar.css'
import CommonNavbar from './CommonNavbar/CommonNavbar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Navbar = ({user}) => {
  console.log("Navbar called");
  const navigate = useNavigate();
  const [insurances,setInsurances] = useState([])

  const getAllPlans = async()=>{
    let resp = await axios.get(`http://localhost:8081/insuranceplan/get-all`,).catch(err=>{
        alert("Something went wrong")
        return
    })
    console.log(resp)
        setInsurances(resp.data)
  }

  useEffect(()=>{
    getAllPlans()
},/*[limit, offset]*/ [])

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  if(user.role=="admin"){

    return (
      <>
      
        <CommonNavbar />
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark shadow-5-strong">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <button type="button" class="btn btn-outline-primary me-md-2">
            <a class="nav-link active" aria-current="page" href={`/admindashboard/${user.username}/${user.role}`}>DASHBOARD</a>
            </button>
          </li>
          
          <li class="nav-item dropdown">
          <button type="button" class="btn btn-outline-primary me-md-2">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              AGENT
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href={`/addagent/${user.username}/${user.role}`}>Add Agent </a></li>
              <li><a class="dropdown-item" href={`/view/agent/${user.username}/${user.role}`}>View Agent</a></li>
              {/* <li><a class="dropdown-item" href="#">View Commission</a></li>
              <li><a class="dropdown-item" href="#">View Commission Withdrawl</a></li> */}
            </ul>
            </button>
          </li>
          
          <li class="nav-item dropdown">
          <button type="button" class="btn btn-outline-primary me-md-2">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              CUSTOMER
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href={`/view/customer/${user.username}/${user.role}`}>View Customer </a></li>
              <li><a class="dropdown-item" href={`/view/accounts/${user.username}/${user.role}`}>Insurance Account</a></li>
              {/* <li><a class="dropdown-item" href="#">View Policy Payment</a></li>
              <li><a class="dropdown-item" href="#">View Policy Claim</a></li> */}
            </ul>
            </button>
          </li>
          
          <li class="nav-item dropdown">
          <button type="button" class="btn btn-outline-primary me-md-2">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              INSURANCE PLANS
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href={`/insuranceplan/${user.username}/${user.role}`}>Add Insurance Plan</a></li>
              <li><a class="dropdown-item" href={`/viewinsuranceplan/${user.username}/${user.role}`}>View Insurance Plan</a></li>
              <li><a class="dropdown-item" href={`/addpolicy/${user.username}/${user.role}`}>Add Insurance Scheme</a></li>
              <li><a class="dropdown-item" href={`/view/policy/${user.username}/${user.role}`}>View Insurance Scheme</a></li>
              {/* {/* <li><a class="dropdown-item" href={`/add/policydetails/${user.username}/${user.role}`}>Add Scheme Details</a></li> */}
              <li><a class="dropdown-item" href={`/view/policydetails/${user.username}/${user.role}`}>View Scheme Details</a></li>
            </ul>
            </button>
          </li>
          
          <li class="nav-item dropdown">
          <button type="button" class="btn btn-outline-primary me-md-2">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              LOCATION SETTINGS
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              {/* <li><a class="dropdown-item" href="#">Tax Settings</a></li>
              <li><a class="dropdown-item" href="#">Commission Settings</a></li> */}
              <li><a class="dropdown-item" href={`/addstate/${user.username}/${user.role}`}>Add State</a></li>
              <li><a class="dropdown-item" href={`/view/state/${user.username}/${user.role}`}>View State</a></li>
              <li><a class="dropdown-item" href={`/addcity/${user.username}/${user.role}`}>Add City</a></li>
              <li><a class="dropdown-item" href={`/view/city/${user.username}/${user.role}`}>View City</a></li>
            </ul>
            </button>
          </li>

          <li class="nav-item dropdown">
          <button type="button" class="btn btn-outline-primary me-md-2">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              EMPLOYEE
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              {/* <li><a class="dropdown-item" href="#">Tax Settings</a></li>
              <li><a class="dropdown-item" href="#">Commission Settings</a></li> */}
              <li><a class="dropdown-item" href={`/addemployee/${user.username}/${user.role}`}>Add Employee</a></li>
              <li><a class="dropdown-item" href={`/view/employee/${user.username}/${user.role}`}>View Employee</a></li>
              {/* <li><a class="dropdown-item" href={`/addcity/${user.username}/${user.role}`}>Add City</a></li>
              <li><a class="dropdown-item" href={`/view/city/${user.username}/${user.role}`}>View City</a></li> */}
            </ul>
            </button>
          </li>

          <li class="nav-item">
          <button type="button" class="btn btn-outline-primary me-md-2" onClick={handleLogout}>
            <a class="nav-link active" aria-current="page" href="#">LOGOUT</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
      
      </>
    )

  }

  if(user.role=="employee"){

    return (
      <>
      
        <CommonNavbar />
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark shadow-5-strong">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <button type="button" class="btn btn-outline-primary me-md-2">
            <a class="nav-link active" aria-current="page" href={`/employeedashboard/${user.username}/${user.role}`}>DASHBOARD</a>
            </button>
          </li>
          
          <li class="nav-item dropdown">
          <button type="button" class="btn btn-outline-primary me-md-2">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              AGENT
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Add Agent </a></li>
              <li><a class="dropdown-item" href="#">View Agent</a></li>
              <li><a class="dropdown-item" href="#">View Commission</a></li>
              <li><a class="dropdown-item" href="/loginpage/admin">View Commission Withdrawl</a></li>
            </ul>
            </button>
          </li>
          
          <li class="nav-item dropdown">
          <button type="button" class="btn btn-outline-primary me-md-2">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              CUSTOMER
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">View Customer </a></li>
              <li><a class="dropdown-item" href="#">Insurance Account</a></li>
              <li><a class="dropdown-item" href="#">View Policy Payment</a></li>
              <li><a class="dropdown-item" href="/loginpage/admin">View Policy Claim</a></li>
            </ul>
            </button>
          </li>
          
          
          <li class="nav-item dropdown">
          <button type="button" class="btn btn-outline-primary me-md-2">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              ACCOUNT
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Change Password</a></li>
              <li><a class="dropdown-item" href="#">Edit Profile</a></li>
            </ul>
            </button>
          </li>

          <li class="nav-item">
          <button type="button" class="btn btn-outline-primary me-md-2">
            <a class="nav-link active" aria-current="page" href="#">LOGOUT</a>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
      
      </>
    )

  }

  if (user.role == "agent") {
    return (
      <>

        <CommonNavbar />
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark shadow-5-strong">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <button type="button" class="btn btn-outline-primary me-md-2">
                    <a class="nav-link " aria-current="page" href={`/agentdashboard/${user.username}/${user.role}`}>DASHBOARD</a>
                  </button>
                </li>

                <li class="nav-item dropdown">
                  <button type="button" class="btn btn-outline-primary me-md-2">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Agent Profile
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li><a class="dropdown-item" href={`/agent-profile/${user.username}/${user.role}`}>Profile</a></li>
                      
                      <li><a class="dropdown-item" href={`/change-password/${user.username}/${user.role}`}>Change Password</a></li>
                      {/* <li><hr class="dropdown-divider" /></li> */}
                    </ul>
                  </button>
                </li>
                <li class="nav-item">
                  <button type="button" class="btn btn-outline-primary me-md-2">
                    <a class="nav-link" href={`/marketing/${user.username}/${user.role}`}>MARKETING</a>
                  </button>
                </li>
                <li class="nav-item dropdown">
                  <button type="button" class="btn btn-outline-primary me-md-2">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      INSURANCE
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href={`/agentcustomer/${user.username}/${user.role}`}>View Customers</a></li>
                    <li><a class="dropdown-item" href={`/agentcustaccounts/${user.username}/${user.role}`}>Insurance Accounts</a></li>
                    <li><a class="dropdown-item" href={`/agentcustpayments/${user.username}/${user.role}`}>View Policy Payments</a></li>
                    {/* <li><a class="dropdown-item" href={`#`}>View Policy Claim</a></li> */}
                    </ul>
                  </button>
                </li>

                {/* <li class="nav-item">
                  <button type="button" class="btn btn-outline-primary me-md-2">
                    <a class="nav-link active" aria-current="page" href={`/customeraccounts/${user.username}/${user.role}`}>Insurance Account</a>
                  </button>
                </li> */}

                <li class="nav-item">
                  <button type="button" class="btn btn-outline-primary me-md-2">
                    <a class="nav-link" aria-current="page" onClick={handleLogout}>Logout</a>
                  </button>
                </li>

              </ul>
            </div>
          </div>
        </nav>


      </>
    )
  }

  if (user.role == "customer") {
    return (
      <>

        <CommonNavbar />
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark shadow-5-strong">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <button type="button" class="btn btn-outline-primary me-md-2">
                    <a class="nav-link active" aria-current="page" href={`/customerdashboard/${user.username}/${user.role}`}>Dashboard</a>
                  </button>
                </li>

                <li class="nav-item dropdown">
                  <button type="button" class="btn btn-outline-primary me-md-2">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Customer Profile
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                      <li><a class="dropdown-item" href={`/customer-profile/${user.username}/${user.role}`}>Profile</a></li>
                      <li><a class="dropdown-item" href={`/change-password/${user.username}/${user.role}`}>Change Password</a></li>
                      {/* <li><hr class="dropdown-divider" /></li> */}
                    </ul>
                  </button>
                </li>

                
               
                <li class="nav-item dropdown">
                  <button type="button" class="btn btn-outline-primary me-md-2">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      INSURANCE PLANS
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark">
                    {insurances.map((insurance, index) => (
              <li key={index}><a class="dropdown-item" href={`/viewpolicies/${insurance.insuranceId}/${user.username}/${user.role}`}>{insurance.insuranceType}</a></li>
            ))}
                    </ul>
                  </button>
                </li>

                

                <li class="nav-item">
                  <button type="button" class="btn btn-outline-primary me-md-2">
                    <a class="nav-link active" aria-current="page" href={`/custpayments/${user.username}/${user.role}`}>View Policy Payments</a>
                  </button>
                </li>

                <li class="nav-item">
                  <button type="button" class="btn btn-outline-primary me-md-2">
                    <a class="nav-link active" aria-current="page" href={`/customeraccounts/${user.username}/${user.role}`}>Insurance Account</a>
                  </button>
                </li>

                <li class="nav-item">
                  <button type="button" class="btn btn-outline-primary me-md-2" onClick={handleLogout}>
                    <a class="nav-link" href="#">Logout</a>
                  </button>
                </li>

              </ul>
            </div>
          </div>
        </nav>


      </>
    )
  }

  return (
    <>
    
      <CommonNavbar />
      <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark shadow-5-strong">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <button type="button" class="btn btn-outline-primary me-md-2">
          <a class="nav-link active" aria-current="page" href={`/`}>HOME</a>
          </button>
        </li>
        
        <li class="nav-item">
        <button type="button" class="btn btn-outline-primary mb-2 me-md-2"> 
          <a class="nav-link text-nowrap" href="#">ABOUT US</a>
          </button>
        </li>

        <li class="nav-item">
        <button type="button" class="btn btn-outline-primary me-md-2">
          <a class="nav-link" href="#">SERVICES</a>
          </button>
        </li>

        <li class="nav-item dropdown">
        <button type="button" class="btn btn-outline-primary me-md-2">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LOGIN
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="/loginpage/customer">Customer Login</a></li>
            <li><a class="dropdown-item" href="/loginpage/agent">Agent Login</a></li>
            {/* <li><hr class="dropdown-divider" /></li> */}
            {/* <li><a class="dropdown-item" href="/loginpage/employee">Employee Login</a></li> */}
            <li><a class="dropdown-item" href="/loginpage/admin">Admin Login</a></li>
          </ul>
          </button>
        </li>
        <li class="nav-item">
        <button type="button" class="btn btn-outline-primary me-md-2">
          <a class="nav-link" href={`/user/registration`}>REGISTER</a>
          </button>
        </li>
        <li class="nav-item dropdown">
        <button type="button" class="btn btn-outline-primary me-md-2">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            INSURANCE PLANS
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
          {insurances.map((insurance, index) => (
              <li key={index}><a class="dropdown-item" href={`/viewpolicies/${insurance.insuranceId}`}>{insurance.insuranceType}</a></li>
            ))}
          </ul>
          </button>
        </li>

        <li class="nav-item">
        <button type="button" class="btn btn-outline-primary me-md-2">
          <a class="nav-link" href={`/contactus`}>CONTACT</a>
          </button>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    
    </>
  )
}

export default Navbar