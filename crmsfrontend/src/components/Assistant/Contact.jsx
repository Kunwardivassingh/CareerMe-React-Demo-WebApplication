import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>If you'd like to get in touch, please fill out the form below or reach us via email or phone.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-info">
        <p>Email: support@CareerMe.com</p>
        <p>Phone: +91 98765 43210</p>
        <p>Location: Mumbai, India</p>
      </div>
    </div>
  );
};

export default Contact;
