import Image from 'next/image';
import './shared-style.css'


function Slider() {
  return (
    <div className="slider-container">
      <div className="slider">
        <div className="slide">
          <Image
            src="/banner.png"
            width={1000}
            height={760}
            alt="Community Event 1"
          />
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
