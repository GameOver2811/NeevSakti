import React from 'react'
import './LandingPageContent.css';
import Cards from './Cards';

export default function LandingPage() {
  return (
   <div className='main-wrap'>

      {/* Main-Image */}

      <div className='main-img flex'>
          <img src='./images/Car-pic-02.jpeg' alt='Main-img'/>
      </div>

      {/* Seprator division */}

      <div className='seprate'></div>
      <div className='seprate'></div>

      {/* Logo and slogan just after image */}

      <div className='logo-slogan flex my-5'>
          <img src='./images/Car-pic-01.jpeg' alt='logo'/>
          <div className='slogan-container flex'>
              <div className='name-logo-slogan'>Neev-Sakti</div>
              <div className='slogan-logo-slogan'>Ati h ky</div>
          </div>
      </div>

      {/* Seprator division */}

      <div className='seprate'></div>

      {/* What to do para just after slogan and image */}

      <div className='what-we-do flex '>
          <div className='what-we-do-text'>What we do?</div>
          <p className='my-3'> Our organization is dedicated to providing support and opportunities for these remarkable individuals, ensuring that they can lead fulfilling and inclusive lives. Her</p>
      </div>

      {/* Seprator division */}

      <div className='seprate'></div>

      <div className='img-text flex my-5'>
          <div className='img-text-img'>
             <img src='./images/Car-pic-03.jpeg' alt='Group-pic'/>
          </div>
          <div className='img-text-text flex'>
              <div className='img-text-text-head'>Meet Our Team</div>
              <div className='img-text-text-content my-3'>Every member of our team understands the challenges faced by differently-abled children and their families. They approach their work with empathy, recognizing the importance of truly understanding the experiences and needs of the children we serve.</div>
          </div>
      </div>

      {/* Seprator division */}

      <div className='seprate'></div>
      <div className='seprate'></div>

      <div className='img-text flex my-5 img-text-rev'>
          <div className='img-text-text flex'>
              <div className='img-text-text-head'>Our Mission</div>
              <div className='img-text-text-content my-3'>Our mission is to provide unwavering support and empowerment to disabled children, fostering their physical, emotional, and intellectual growth. We firmly believe that every child, regardless of their abilities or disabilities, has the potential to thrive and make a positive impact on the world. Our core mission is to ensure that no child is left behind and that every child's unique abilities are recognized, celebrated, and nurtured.</div>
          </div>
          <div className='img-text-img'>
             <img src='./images/Car-pic-01.jpeg' alt='Group-pic'/>
          </div>
          
      </div>

      {/* Seprator division */}

      <div className='seprate'></div>

      {/* Become a member */}
      <div className='what-we-do flex '>
          <div className='what-we-do-text'>Become Volunteer</div>
          <p className='my-3'> Your time and efforts as a volunteer can have a significant impact on the lives of others and contribute to positive change in your community or the world.</p>
      </div>

      {/* Seprator division */}

      <div className='seprate'></div>

      {/* Seprator division */}

      <div className='seprate'></div>

      <div className='black-wrap'>
          
          {/* Seprator division */}

          <div className='seprate'></div>
          <div className='seprate'></div>

          <div className='img-text flex my-5'>

            <div className='img-text-img'>
              <img src='./images/Car-pic-01.jpeg' alt='Group-pic'/>
            </div>
            <div className='img-text-text flex'>
                <div className='img-text-text-head black-head'>Our Vision</div>
                <div className='img-text-text-content my-3 black-text'>At Neev-Sakti, our vision serves as our guiding star, illuminating the path we passionately tread. Our vision is one of a world where every individual, regardless of their background, abilities, or circumstances, has access to equal opportunities and experiences a life filled with inclusivity, dignity, and hope.</div>
             </div>
          
          
          </div>
          
      </div>

      {/* Seprator division */}

      <div className='seprate'></div>


      {/* card and its heading */}

      <Cards/>

   </div>
  );
}
