import React from "react";
import './info-style.css'

function Info (){
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-paragraph">
        This platform is built to support migrants and those preparing to migrate. 
        Whether you're newly arrived or still planning your journey, you're not alone here.
      </p>
      <p className="about-paragraph">
        Our mission is to create a welcoming space where people can settle in with confidence, 
        connect with others, collaborate on ideas, and access information that empowers them.
      </p>
      <p className="about-paragraph">
        We provide tools, resources, and community support to help you navigate your new environment, 
        understand your rights, and build a strong foundation for the future.
      </p>
      <p className="about-paragraph">
        We are Migration Information Centre. 
      </p>
    </div>
  );
};

export default Info;
