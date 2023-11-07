import React from 'react'
import { useNavigate } from 'react-router-dom';
import Achievements from '../../Pages/Achievements';
import Gallery from '../../Pages/Gallery';

export default function Navbar(props) {

  const navigate = useNavigate();

  const home = (e)=>{
    e.preventDefault();
    navigate(`/`);
  }

  const aboutUs = (e)=>{
    e.preventDefault();
    navigate(`/aboutus`);
  }

  const gallery = (e)=>{
    e.preventDefault();
    navigate(`/gallery`);
  }

  const events = (e)=>{
    e.preventDefault();
    navigate(`/events`);
  }

  const achievements = (e)=>{
    e.preventDefault();
    navigate(`/achievements`);
  }

  const contactUs = (e)=>{
    e.preventDefault();
    navigate(`/contactus`);
  }

  const donate = (e)=>{
    e.preventDefault();
    navigate(`/donate`);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={home}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={gallery}>Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={achievements}>Achievement</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" onClick={events}>Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#" onClick={aboutUs}>{props.about}</a>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-success mx-3 " type="donate" onClick={donate}>Donate here</button>
              <button className="btn btn-outline-success " type="submit" onClick={contactUs}>Contact Us</button>
            </form>
          </div>
        </div>
    </nav>
    </div>
  )
}

Navbar.propsType = {
    title : String,
    about : String
}

Navbar.defaultProps = {
    title : "TextUtils",
    about : "About Us"
}