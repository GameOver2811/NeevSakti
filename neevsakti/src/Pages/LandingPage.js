import React from 'react'
import LandingPageContent from '../Components/LandingPage/LandingPageContent'
import Navbar from '../Components/LandingPage/Navbar'
import Footer from '../Components/LandingPage/Footer'


export default function LandingPage() {
  return (
    <div>
      
        <Navbar title="Neev-Sakti" about="About Us"/>
        <LandingPageContent/>
        <Footer/>
        
    </div>
  )
}
