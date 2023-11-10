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
      Thank you for visiting Neev-Shakti and for being a part of our journey towards a more inclusive world.
      </div>

      <div className='outer-div'>

        <div className='inner-form'>

          <div class="form__group field">

            <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
            <label for="name" class="form__label">Name</label>
          </div>

          <div class="form__group field">
            <input type="input" class="form__field" placeholder="Email" name="Email" id='email' required />
            <label for="email" class="form__label">Email</label>
          </div>

          <div class="form__group field">
            <input type="input" class="form__field" placeholder="Subject" name="Subject" id='Subject' required />
            <label for="Subject" class="form__label">Subject</label>
          </div>

          <div class="form__group field">
            <input type="input" class="form__field" placeholder="Message" name="Message" id='Message' required />
            <label for="Message" class="form__label">Message</label>
          </div>
          <div className='btn1'>
          <button className="btn btn-success mx-3 formBtn" type="donate">
            Submit
          </button>
          </div>
        </div>
      </div>

    <Footer/>
    </div>
  )
}
