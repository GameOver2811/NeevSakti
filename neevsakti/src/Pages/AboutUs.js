import React from 'react'
import {useEffect} from 'react';
import Navbar from '../Components/LandingPage/Navbar'
import Footer from '../Components/LandingPage/Footer'
import '../Pages/AboutUs.css'

export default function AboutUs() {
  return (
    <div className='whole'>
      <Navbar title="Neev-Shakti" about="About Us"/>
      <h1 className='topHeading'>About Neev Shakti</h1>
      <h2 className='quote'>
      "Strengthening the underprivileged sections of our Society."
      </h2>
      <div className='subHeading'>
        <div className='subHeading-content'>
          <p>
            Neev Shakti Sanstha aims to help those individuals whose existence has been forgotten by the world. 
            <br/>
            With small but definite steps we provide them avenues for growth and co-existing in the world with a sense of pride and accomplishment.
            <br/>
              <div className='info'>
                <p className='info1'>
                  REGISTRATION NO<br/>
                  FOUNDED IN<br/>
                  CEO, FOUNDER<br/>
                  CO- FOUNDER<br/>
                  VICE PRESIDENT<br/>
                  GENEREAL SECRETARY<br/>
                  SECRETARY<br/>
                </p>
                <p className='info2'>
                : GHZ/08072 and GHA/08072/2020-2021(NITI AAYOG)<br/>
                : 2020<br/>
                : RICHA BALLABH KHULBAI<br/>
                : DIVYA DUBEY<br/>
                : SUCCHI SRHRIVASTAV<br/>
                : REEMA CHOUDHARY<br/>
                : CHITRA CHAUHAN<br/>
                </p>
              </div>
          </p>
        </div>
        <div className='subHeading-image'>
          <img src='/images/top-image-aboutus.jpg' alt='image' className='topImage'/>
        </div>
      </div>

      <div className='highlights'>
        <p>
          Our Working Domains
        </p>
      </div>

      <div className='cards-container custom-card flex1'>
        <div className='container'
        style={{
          height: "500px",
          position: "inherit",
          width: "1100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "warp",
          padding: "30px"
        }}>
          <div className='cards'>
            <div className='image'>
            <img src='/images/card1-image.png' alt='image'/>
            </div>
            <div className='content'>
              <h3>Child Education</h3>
              <p>
                Neev Shakti prioritizes basic education, especially for children without access to online learning during the Covid pandemic. Starting with 20 children, they now hold weekly education drives driven by children's enthusiasm for learning.
              </p>
            </div>
          </div>    
        </div>
        <div className='container'
        style={{
          height: "500px",
          position: "inherit",
          width: "1100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "warp",
          padding: "30px"
        }}>
          <div className='cards'>
            <div className='image'>
              <img src='/images/card2-image.jpg' alt='image'/>
            </div>
            <div className='content'>
              <h3>Special Unit's Holistic Growth</h3>
              <p>Neev Shakti empowers special children by educating, developing, and advocating for their rights and opportunities, fostering hope and inclusivity in society.</p>
            </div>
          </div>    
        </div>
        <div className='container'
        style={{
          height: "500px",
          position: "inherit",
          width: "1100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "warp",
          padding: "30px"
        }}>
          <div className='cards'>
            <div className='image'>
              <img src='/images/card3-image.jpg' alt='image'/>
            </div>
            <div className='content'>
              <h3>Conducting Events</h3>
              <p>
              Neev Shakti organises various events to encourage the specially abeld to perform and show case themselves.
              </p>
            </div>
          </div>    
        </div>
      </div>


      <div className='highlights' style={{marginTop: "0px"}}>
        <p>
          Message From The Founders
        </p>
      </div>
      <div className='outerBorder-founders-container'>
        <div className='inner-founders-container1'>
          <div className='inner1a'>
            <img src='/images/Richa-Ballabh-Khulbai.png' className='img-thumbnail richa'/>
          </div>
          <div className='inner1b'>
            "THERE IS A VERY POPULAR SAYING THAT TIME ALWAYS CHANGES. BUT FOR SOME UNFORTUNATE PEOPLES-TIME NEVER CHANGES OR FOR MANY VERY HUMANS NOT FOR THE GOOD. WITH AN AIM TO CHANGE TIME FOR THEM, WITH A VISION THAT THEY ARE NEVER DEPENDENT ON TIME AGAIN, I THOUGHT OF GIVING THEM THE POWER OF NEEV SHAKTI."<br/><br/>
            -RICHA BALLABH KHULBAI
            <br/><br/>
            (CEO AND FOUNDER OF NEEV SHAKTI FOUNDATION)
          </div>
        </div>
        <div className='inner-founders-container2'>
          <div className='inner2a'>
            <img src='/images/Divya-Dubey.png' className='img-thumbnail divya'/>
          </div>
          <div className='inner2b'>
            "I BELIEVE THAT SUCCESS IS OF NO MEANS IF WE ARE NOT DOING SOMETHING FOR SOCIETY AND I WAS ALWAYS PASSIONATE ABOUT WORKING FOR THE DEVELOPMENT OF SOCIETY SINCE CHILDHOOD. I AM SURE WE WOULD BE INSPIRING MANY OUT THEIR AND WOULD MAKE A GREAT CHANGE FOR THE UNDERPRIVILEGED SECTION OF OUR SOCIETY."<br/><br/>
            -DIVYA DUBEY<br/><br/>
            (CO-FOUNDER OF NEEV SHAKTI FOUNDATION)
          </div>
        </div>
      </div>

  
      <div>
        {/* 👇️ scroll to top on button click */}
        <button
          onClick={() => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
          }}
          style={{
            position: 'fixed',
            fontSize: '20px',
            bottom: '40px',
            right: '40px',
            backgroundColor: '#14a44d',
            color: '#fff',
            textAlign: 'center',
            height: '50px',
            width: '50px',
            borderRadius: '100%',
            fontWeight: 'bold',
            display: 'inline-block',
          }}>^</button>
      </div>


      <Footer/>
    </div>
    
  )
}
