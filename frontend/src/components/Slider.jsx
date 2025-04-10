import React from 'react';
import banner from '../assets/banner.png'; // Make sure this path is correct

function Slider() {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide">
          <img src={banner} alt="Community Event 1" />
        </div>
        <div className="slide">
          <img src="https://via.placeholder.com/1200x400" alt="Community Event 2" />
        </div>
        <div className="slide">
          <img src="https://via.placeholder.com/1200x400" alt="Community Event 3" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
