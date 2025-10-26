import React from "react";
import '../Styles/Contact.css';
import NavbarComponent from '../Components/NavbarComponent';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div style={{backgroundColor: '#222'}}>
        <NavbarComponent />
    <div className="contact-section">
      {/* Left column - Contact info */}
      <div className="contact-info">
        <h2>Let's Connect</h2>
        <div className="contact-item">
          <FaEnvelope className="icon"/>
          <span>velnambivisuals@gmail.com</span>
        </div>

        {/* Erode */}
        <div className="contact-item">
          <FaMapMarkerAlt className="icon"/>
          <div>
            <b>Anthiyur ADDRESS:</b>
            <p>1st Floor,Street-2,Opp to VASU & Co,Thavittupalayam,Anthiyur, Tamilnadu 638501 </p>
          </div>
        </div>
        <div className="contact-item">
          <FaPhone className="icon"/>
          <span>+91 93634 77697</span>
        </div>

      </div>

      {/* Right column - Contact form */}
      <div className="contact-form">
        <h2>Get a Enquiry</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="tel" placeholder="Your Mobile number" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
    </div>

  );
};

export default Contact;
