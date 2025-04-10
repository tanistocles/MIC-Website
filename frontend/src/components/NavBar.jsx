import React from 'react';
import logo from '../assets/logo.jpg'; // Make sure the path to your logo is correct

function NavBar() {
  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="logo">
          <img src={logo} alt="Community Logo" />
        </div>
        <ul className="main-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Volunteers</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#" className="donate-btn">Donate</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
