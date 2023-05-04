import React, { useState } from 'react'
import './Navbar.css'
import CommonNavbar from './CommonNavbar/CommonNavbar'
const Navbar = ({role}) => {
  console.log("Navbar called");
  if(role=="admin"){

    return (
      <>
      
        <CommonNavbar />
          <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark shadow-5-strong ">
    <div class="container-fluid">
      
      <button class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <button type="button" class="btn btn-outline-primary me-md-2">
            <a class="nav-link active" aria-current="page" href="#">DASHBOARD</a>
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
              INSURANCE PLANS
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Add Insurance Plan</a></li>
              <li><a class="dropdown-item" href="#">View Insurance Plan</a></li>
              <li><a class="dropdown-item" href="#">Add Insurance Scheme</a></li>
              <li><a class="dropdown-item" href="#">View Insurance Scheme</a></li>
              <li><a class="dropdown-item" href="#">Add Scheme Details</a></li>
              <li><a class="dropdown-item" href="#">View Scheme Details</a></li>
            </ul>
            </button>
          </li>
          
          <li class="nav-item dropdown">
          <button type="button" class="btn btn-outline-primary me-md-2">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              SETTINGS
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="#">Tax Settings</a></li>
              <li><a class="dropdown-item" href="#">Commission Settings</a></li>
              <li><a class="dropdown-item" href="#">Add State</a></li>
              <li><a class="dropdown-item" href="#">View State</a></li>
              <li><a class="dropdown-item" href="#">Add City</a></li>
              <li><a class="dropdown-item" href="#">View City</a></li>
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

  if(role=="employee"){

    return (
      <>
      
        <CommonNavbar />
          <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark shadow-5-strong ">
    <div class="container-fluid">
      
      <button class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li class="nav-item">
          <button type="button" class="btn btn-outline-primary me-md-2">
            <a class="nav-link active" aria-current="page" href="#">DASHBOARD</a>
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

  return (
    <>
    
      <CommonNavbar />
        <nav class="navbar sticky-top navbar-expand-lg navbar-dark bg-dark shadow-5-strong ">
  <div class="container-fluid">
    
    <button class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse d-flex" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <button type="button" class="btn btn-outline-primary me-md-2">
          <a class="nav-link active" aria-current="page" href="#">HOME</a>
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
            <li><a class="dropdown-item" href="#">CUSTOMER LOGIN </a></li>
            <li><a class="dropdown-item" href="#">AGENT LOGIN</a></li>
            {/* <li><hr class="dropdown-divider" /></li> */}
            <li><a class="dropdown-item" href="/loginpage/employee">EMPLOYEE LOGIN</a></li>
            <li><a class="dropdown-item" href="/loginpage/admin">ADMIN LOGIN</a></li>
          </ul>
          </button>
        </li>
        <li class="nav-item">
        <button type="button" class="btn btn-outline-primary me-md-2">
          <a class="nav-link" href="#">REGISTER</a>
          </button>
        </li>
        <li class="nav-item dropdown">
        <button type="button" class="btn btn-outline-primary me-md-2">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            INSURANCE PLANS
          </a>
          <ul class="dropdown-menu">
            {/* {listitems} */}
          </ul>
          </button>
        </li>

        <li class="nav-item">
        <button type="button" class="btn btn-outline-primary me-md-2">
          <a class="nav-link" href="#">CONTACT</a>
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