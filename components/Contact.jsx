import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us 📞</h1>
        <p>We would love to hear from you!</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;