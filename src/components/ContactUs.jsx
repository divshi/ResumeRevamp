// ContactUs.js
import React from 'react';

const ContactUs = () => (
  <section id="contact-us" className="contact-us">
    <h2>Contact Us</h2>
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
        Message:
        <textarea name="message" required></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  </section>
);

export default ContactUs;
