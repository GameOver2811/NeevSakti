import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <div className='footer'>
        <div className='row-primary'>

          <div className='column-logo'>
            <img src='https://www.neevshakti.org/wp-content/uploads/elementor/thumbs/Neev-Shakti-Sanstha-Logo-ptky0vju5oo1n5lruq1pj0mis4ggvjgqty3a46ar6q.png' alt='logo'></img>
          </div>

          <div className='column-about'>
            <h3>Neev Shakti Sanstha</h3>
            <p>Neev Shakti Sanstha is a compassionate NGO dedicated to the holistic development of physically disabled children. Our mission encompasses comprehensive rehabilitation, inclusive education, skill development, and psychosocial support.</p>
            <p><u>Phone No</u> : 0120-7963908, +91-9717395777, +91-9389114739, +91-8076569294</p>
          </div>

          <div className='column-links'>
            <h3>Quick Links</h3>
            <ul>
            <li>
              <a href="#volunteer">Become a Volunteer</a>
            </li>
            <li>
              <a href="#contribute">Contribute</a>
            </li>
            <li>
              <a href="#aboutus">About Us</a>
            </li>
            <li>
              <a href="#contactus">Contact Us</a>
            </li>
            </ul>
          </div>

          <div className='column-contact'>
            <h3>Connect With Us</h3>
            <p><i class="fa fa-map-marker" aria-hidden="true"></i>&nbsp;&nbsp;A-1203 Skytech Merion 2, Crossings Republik, Ghaziabad, Uttar Pradesh, India</p>
            <div className='social-icons'>
              <a href='https://www.youtube.com/@neevshaktisanstha' target='_blank' rel='noreferrer'><i className='fab fa-youtube fa-2x fa-bounce' style={{color:'red'}}></i></a>
              <a href='https://www.facebook.com/NeevShakti.2020/' target='_blank' rel='noreferrer'><i className='fab fa-facebook fa-2x fa-bounce' style={{color:'#2861c3'}}></i></a>
              <a href='https://www.instagram.com/neevshaktisanstha/'target='_blank' rel='noreferrer'><i className='fab fa-instagram fa-2x fa-bounce' style={{color:'#e1306c'}}></i></a>
            </div>
          </div>

        </div>

        <div className='row-copyright'>
          <p>Copyright &copy; 2023 Neev Shakti Sanstha&nbsp;|&nbsp;Created by AuraFusion Labs</p>
        </div>
      </div> 
    </div>
  )
}

export default Footer
