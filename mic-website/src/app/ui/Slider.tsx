'use client'
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import './Shared.css'


function Slider() {
  // Array of slide objects with source and alt text
  const slides = [
    { src: '/banner1.jpg', alt: 'Community Event 1' },
    { src: '/banner2.jpg', alt: 'Community Event 2' },
    { src: '/banner3.jpg', alt: 'Community Event 3' }
  ];

  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef<NodeJS.Timeout | null>(null);

  // Function to switch to the next slide
  const nextSlide = () => {
    setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Start automatic slide transition when component mounts and clear on unmount
  useEffect(() => {
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, []);

  return (
    <div className="slider-container">
      {/* Use inline style on slider to animate using translateX */}
      <div 
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <div className="image-wrapper">
              <Image
                src={slide.src}
                alt={slide.alt}
                layout="fill"              // Fills the container
                objectFit="cover"          // Ensures the image covers the container, cropping if needed
                objectPosition="center"    // Focuses on the center portion
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
