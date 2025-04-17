import './Details.css'
import { fetchContactId } from "../db-utils";

export default async function Details (){

  const phoneJson = await fetchContactId(1);
  const emailJson = await fetchContactId(2);
  const addressJson = await fetchContactId(3);
  const phone = phoneJson.description;
  const email = emailJson.description;
  const address = addressJson.description;
  
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
                  <textarea name="message" rows={6} required />
                </label>
    
                <button type="submit">Send Message</button>
              </form>
            </div>
    
            {/* Right Column: Contact Details */}
            <div className="contact-info">
              <h2>Migration Information Centre</h2>
              <p><strong>Phone:</strong> {phone}</p>
              <p><strong>Email:</strong> <a href="mailto:Thi.phan.nz@gmail.com">{email}</a></p>
              <p><strong>Address:</strong><br />
                {address}<br />
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
