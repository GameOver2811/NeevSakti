import React from 'react'
import Navbar from '../Components/LandingPage/Navbar'
import Footer from '../Components/LandingPage/Footer'
import '../Pages/ContactUs.css'


export default function ContactUs() {
  return (
    <div>
      <Navbar title="Neev-Shakti" about="Contact Us"/>
      <div className='topContent'>
        We'd Love To Hear From You
      </div>
      <div className='underHeading'>
        Whether you're curious about us or want to reach us out, we're ready to answer any and all your queries.
      </div>
      <div className='form'>
        <p className='formGetInTouch'>Get In Touch</p>
        <input 
          placeholder='Name' 
          className='formDefault' 
          type='text'/>
        <input 
          placeholder='Enter Your Email Address' 
          className='formDefault' 
          type='Email'/>
        <input 
          placeholder='Subject'
          className='formDefault'
          type='text'/>
        <textarea 
          placeholder='message'
          className='formDefault formMessage'/>
        <button className="btn btn-success mx-3 formBtn" type="donate">
          Submit
        </button>
      </div>

    <Footer/>
    </div>
  )
}
