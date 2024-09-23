// Testimonials.js
import React from 'react';

const testimonials = [
  { image: 'https://via.placeholder.com/100', content: 'Great service! My resume looks amazing now.' },
  { image: 'https://via.placeholder.com/100', content: 'The resume score checker was really very helpful.' },
  { image: 'https://via.placeholder.com/100', content: 'Highly recommend ResumeRevamp for job hunting.' },
];

const Testimonials = () => (
  <section id="testimonials" className="testimonials">
    <div className="testimonials-heading">
      <h2 className="testimonials-headline">What Our Clients Say</h2>
    </div>
    
    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-box">
          <img src={testimonial.image} alt="Testimonial" />
          <p>{testimonial.content}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
