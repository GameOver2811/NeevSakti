import React from 'react'
import Navbar from '../Components/LandingPage/Navbar'
import Footer from '../Components/LandingPage/Footer'
import './Achievements.css'

const Achievements = () => {
  return (
    <div>
        <Navbar title="Neev Shakti" about="About Us"/>
        <div className='container-top'>
          <img src='/images/Ach-cover.jpg' alt='cover'></img>
          <div className='container-top-text'>
            <h3>Our Achievements</h3>
          </div> 
          <div className='container-cards'>
            <div className='card-1'>
              <div className='card-1-inner'>
                <div className='card-1-img-front'>
                  <i class="fa-solid fa-newspaper fa-5x fa-beat" style={{color:'#eceeec'}}></i>
                  <h3>FEATURED</h3>
                </div>
                <div className='card-1-text-back'>
                  <p>Featured on platforms like NEWS 18, DAINIK JAGRAN, AMAR UJALA and other local publications.</p>
                </div>
              </div>
            </div>
            <div className='card-2'>
              <div className='card-2-inner'>
                <div className='card-2-img-front'>
                  <i class="fa-solid fa-hospital-user fa-5x fa-beat" style={{color:'#eceeec'}}></i>
                  <h3>ADOPTED</h3>
                </div>
                <div className='card-2-text-back'>
                  <p>Adopted numerous TB patients who are unable to take care of themselves.</p>
                </div>
              </div>
            </div>
            <div className='card-3'>
              <div className='card-3-inner'>
                <div className='card-3-img-front'>
                  <i class="fa-solid fa-id-card fa-5x fa-beat" style={{color:'#eceeec'}}></i>
                  <h3>ASSISTED</h3>
                </div>
                <div className='card-3-text-back'>
                  <p>Assisted many Divyangjana in getting their Disability certificate, UDID card, etc.</p>
                </div>
              </div>
            </div>
            <div className='card-4'>
              <div className='card-4-inner'>
                <div className='card-4-img-front'>
                  <i class="fa-solid fa-handshake-angle fa-5x fa-beat" style={{color:'#eceeec'}}></i>
                  <h3>VOLUNTEERS</h3>
                </div>
                <div className='card-4-text-back'>
                  <p>80+ young volunteers from various reputated schools and colleges, like ABES, Hansraj College, etc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-mid-1'>
          <div className='container-mid-1-img'>
            <img src='./images/card3-image.jpg' alt='card'></img>
          </div>
          <div className='container-mid-1-text'>
            <p>Neev Shakti Sanstha have successfully completed 10+ major events and drives such as vaccination drive, fundraising campaign, wheelchair cricket tournament and many more...</p>
          </div>
        </div>
        <div className='container-mid-2'>
          <div className='container-mid-2-text'>
            <p>Neev Shakti Sanstha have assisted 600+ divyangjana in getting their disability certificate, UDID cards, licenses and other essential documents...</p>
          </div>
          <div className='container-mid-2-img'>
            <img src='./images/card3-image.jpg' alt='card'></img>
          </div>
        </div>
        <div className='container-mid-3'>
          <div className='container-mid-3-img'>
            <img src='./images/card3-image.jpg' alt='card'></img>
          </div>
          <div className='container-mid-3-text'>
            <p>Adopted 300+ TB patients under 'Project 300 Lives', which includes taking care of their regular checkups, medication and supporting them mentally and emotionally...</p>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Achievements