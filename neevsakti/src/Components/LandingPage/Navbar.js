import React from 'react'

export default function Navbar(props) {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-3">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Achievement</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Events</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">{props.about}</a>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-success mx-3 " type="donate">Donate here</button>
              <button className="btn btn-outline-success " type="submit">Contact Us</button>
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