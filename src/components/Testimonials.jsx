// Testimonials.js
import React from 'react';

const testimonials = [
  { image: '/path-to-image.jpg', content: 'Great service! My resume looks amazing now.' },
  { image: '/path-to-image.jpg', content: 'The resume score checker was very helpful.' },
];

const Testimonials = () => (
  <section className="testimonials">
    {testimonials.map((testimonial, index) => (
      <div key={index} className="testimonial-box">
        <img src={testimonial.image} alt="Testimonial" />
        <p>{testimonial.content}</p>
      </div>
    ))}
  </section>
);

export default Testimonials;
