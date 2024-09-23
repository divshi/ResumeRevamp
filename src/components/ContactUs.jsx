// ContactUs.js
import React from 'react';

const ContactUs = () => (
  <section className="contact-us">
    <h2>Contact Us</h2>
    <form>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <label>
        Message:
        <textarea name="message"></textarea>
      </label>
      <button type="submit">Send</button>
    </form>
  </section>
);

export default ContactUs;
