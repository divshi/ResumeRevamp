// Services.js
import React from 'react';

const services = [
  { title: 'Create Resume', description: 'Craft a professional resume tailored to your needs.' },
  { title: 'Mistakes', description: 'Identify and correct common resume mistakes.' },
  { title: 'Score Checker', description: 'Evaluate your resume score with our tool.' }
];

const Services = () => (
  <section id="services" className="services">
    {services.map((service, index) => (
      <div key={index} className="service-card">
        <div className="card-inner">
          <div className="card-front">
            <h2>{service.title}</h2>
          </div>
          <div className="card-back">
            <p>{service.description}</p>
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default Services;
