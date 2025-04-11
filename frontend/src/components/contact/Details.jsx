import React from "react";
import './details-style.css'

function Details (){
    return (
        <div className="contact-page">
          <h1>Contact Us</h1>
    
          <div className="contact-columns">
            {/* Left Column: Contact Form */}
            <div className="contact-form">
              <h2>Send Us a Message</h2>
              <form>
                <label>
                  Name:
                  <input type="text" name="name" required />
                </label>
    
                <label>
                  Email:
                  <input type="email" name="email" required />
                </label>
    
                <label>
                  Phone:
                  <input type="tel" name="phone" />
                </label>
    
                <label>
                  Subject:
                  <input type="text" name="subject" />
                </label>
    
                <label>
                  Message:
                  <textarea name="message" rows="6" required />
                </label>
    
                <button type="submit">Send Message</button>
              </form>
            </div>
    
            {/* Right Column: Contact Details */}
            <div className="contact-info">
              <h2>Migration Information Centre</h2>
              <p><strong>Phone:</strong> (+64) 210 827 1234</p>
              <p><strong>Email:</strong> <a href="mailto:Thi.phan.nz@gmail.com">Thi.phan.nz@gmail.com</a></p>
              <p><strong>Address:</strong><br />
                2 Peck Street, Taita, Lower Hutt<br />
                Wellington 5011
              </p>
              <p><strong>Postal Address:</strong><br />
                TBA<br />
                TBA
              </p>
              <p><strong>Opening Hours:</strong><br />
                Monday to Friday<br />
                9.00am – 5.00pm
              </p>
            </div>
          </div>
        </div>
    );
};

export default Details;
