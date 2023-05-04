import React from 'react'

const CommonNavbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="/"><h2>Secure-Insurane <i className='fab fa-typo3' /></h2></a>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item mx-3">
        <button type="button" class="btn btn-outline-primary mb-2 me-md-2"> 
          <a class="nav-link text-nowrap" href="#">ABOUT US</a>
          </button>
        </li>
        <li class="nav-item">
        <button type="button" class="btn btn-outline-primary me-md-2">
          <a class="nav-link" href="#">SERVICES</a>
          </button>
        </li>
        <li class="nav-item">
        <button type="button" class="btn btn-outline-primary me-md-2">
          <a class="nav-link" href="#">CONTACT</a>
          </button>
        </li>
      </ul>
    </div>
    </nav> 
    </>
  )
}

export default CommonNavbar