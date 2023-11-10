import React from 'react'
import Navbar from '../Components/LandingPage/Navbar'
import Footer from '../Components/LandingPage/Footer'
import '../Pages/AboutUs.css'

export default function AboutUs() {
  return (
    <div className='whole'>
      <Navbar title="Neev-Shakti" about="About Us"/>
      <h1 className='topHeading'>About Neev-Shakti</h1>
      <h2 className='quote'>
      "Strengthening the underprivileged sections of our Society."
      </h2>
      <div className='subHeading'>
        <div className='subHeading-content'>
          <p>
          Welcome to Neev-Shakti, a compassionate NGO dedicated to serving the needs of individuals with disabilities. Our organization was founded with a deep sense of purpose and a commitment to making a positive impact in the lives of those who face unique challenges due to physical, intellectual, or developmental disabilities.
          </p>
        </div>
        <div className='subHeading-image'>
          <img src='/images/top-image-aboutus.jpg' alt='image' className='topImage'/>
        </div>
      </div>
      <div className='highlights'>
        <p>
          Some of our Highlights
        </p>
      </div>
      <div className='cards-container custom-card flex'>
        <div className='container'>
          <div className='cards'>
            <div className='image'>
            <img src='/images/card1-image.png' alt='image'/>
            </div>
            <div className='content'>
              <h3>Event 1</h3>
              <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.
              </p>
            </div>
          </div>    
        </div>
        <div className='container'>
          <div className='cards'>
            <div className='image'>
              <img src='/images/card2-image.jpg' alt='image'/>
            </div>
            <div className='content'>
              <h3>Event 2</h3>
              <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
            </div>
          </div>    
        </div>
        <div className='container'>
          <div className='cards'>
            <div className='image'>
              <img src='/images/card3-image.jpg' alt='image'/>
            </div>
            <div className='content'>
              <h3>Event 3</h3>
              <p>DIn publishing and graphic design,           Lorem ipsum is a placeholder text               commonly used to demonstrate the visual         form of a document or a typeface without         relying on meaningful content.</p>
            </div>
          </div>    
        </div>
      </div>
      <div>

      </div>
      <Footer/>
    </div>
  )
}
