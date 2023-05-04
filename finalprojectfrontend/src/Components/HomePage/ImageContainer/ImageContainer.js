import React from 'react'
import './ImageContainer.css'


const ImageContainer = () => {
  return (
    <div className='container-fluid image-container'>
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval='3000'>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="./images/test.jpg" class="d-block w-100" alt="image1"/>
      <div class="carousel-caption d-none d-md-block">
        <h4 className='text-dark'>Secure Your Family</h4>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/img2.jpg" class="d-block w-100" alt="image2"/>
      <div class="carousel-caption d-none d-md-block">
        <h4 className='text-dark'>Earn Easily</h4>
      </div>
    </div>
    <div class="carousel-item">
      <img src="./images/img4.jpg" class="d-block w-100" alt="image4"/>
      <div class="carousel-caption d-none d-md-block">
        <h4 className='text-primary'>Invest Today, Enjoy Tomorrow</h4>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default ImageContainer
// E:\finalprojectfrontend\src\Components\Assets\istockphoto-1199060494-612x612.jpg