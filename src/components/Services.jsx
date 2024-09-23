// Services.js
import React from 'react';

const services = [
  { title: 'Create Resume', description: 'Craft a professional resume tailored to your needs.' },
  { title: 'Mistakes', description: 'Identify and correct common resume mistakes.' },
  { title: 'Score Checker', description: 'Evaluate your resume score with our tool.' }
];

const Services = () => (
  <section className="services">
    {services.map((service, index) => (
      <div key={index} className="service-box">
        <h2>{service.title}</h2>
        <p>{service.description}</p>
      </div>
    ))}
  </section>
);

export default Services;
