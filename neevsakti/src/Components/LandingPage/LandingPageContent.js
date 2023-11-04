import React from 'react'


export default function LandingPage() {
  return (
    <div>
<div id="carouselDarkVariant" class="carousel slide carousel-fade carousel-dark" data-mdb-ride="carousel">
  
  <div class="carousel-indicators">
    <button
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-mdb-target="#carouselDarkVariant"
      data-mdb-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>


  <div class="carousel-inner">

    <div class="carousel-item active">
      <img src={process.env.PUBLIC_URL + './images/Car-pic-01.jpeg'} class="d-block w-100 h-80" alt="Motorbike Smoke" style={{ height: '680px' }}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </div>
    </div>

    <div class="carousel-item">
      <img src={process.env.PUBLIC_URL + './images/Car-pic-02.jpeg'} class="d-block w-100" alt="Mountaintop" style={{ height: '680px' }}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>


    <div class="carousel-item">
      <img src={process.env.PUBLIC_URL + './images/Car-pic-03.jpeg'} class="d-block w-100" alt="Woman Reading a Book" style={{ height: '680px' }}/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Glimpse from 2 anniversary celebration</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>


  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselDarkVariant" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                      
      
      
    </div>
  )
}
