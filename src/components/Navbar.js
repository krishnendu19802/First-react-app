import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function Navbar(prop) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${prop.mode} `}>
      <div className="container-fluid " >
        {/* {console.log(prop.mode)} */}
        <Link className={`navbar-brand text-${prop.mode === 'light' ? 'dark' : 'light'}`} to="/">{prop.title}</Link>

        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>

        </button>
       
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
        </ul>
       </div>



      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"
          onClick={prop.cgmode} />
        <label className={`form-check-label text-${prop.mode === 'light' ? 'dark' : 'light'}`} htmlhtmlFor="flexSwitchCheckDefault">{prop.mode === 'light' ? 'Dark' : 'Light'}</label>
      </div>
    </div>
    </nav >
  )
}

Navbar.propTypes = {
  title: PropTypes.string
};


