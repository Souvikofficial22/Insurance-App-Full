import React, { useState } from 'react'
import './Navbar.css'
import CommonNavbar from './CommonNavbar/CommonNavbar'
const Navbar = () => {
    const [click,setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
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
        
        <li class="nav-item dropdown">
        <button type="button" class="btn btn-outline-primary me-md-2">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LOGIN
          </a>
          <ul class="dropdown-menu dropdown-menu-dark">
            <li><a class="dropdown-item" href="#">CUSTOMER LOGIN </a></li>
            <li><a class="dropdown-item" href="#">AGENT LOGIN</a></li>
            {/* <li><hr class="dropdown-divider" /></li> */}
            <li><a class="dropdown-item" href="#">EMPLOYEE LOGIN</a></li>
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
        
      </ul>
    </div>
  </div>
</nav>

    
    </>
  )
}

export default Navbar