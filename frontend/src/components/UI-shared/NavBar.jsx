import React from 'react';
import logo from '../../assets/logo.jpg'; // Make sure the path to your logo is correct
import { Link } from "react-router-dom";
import './shared-style.css'


function NavBar() {
  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="Community Logo" />
        </div>
        <ul className="main-menu">
          {/* <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Volunteers</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#" className="donate-btn">Donate</a></li> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/volunteers">Volunteers</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/donate" className="donate-btn">Donate</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
