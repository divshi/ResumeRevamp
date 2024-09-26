// Banner.js
import React from 'react';
import bg from '../assets/banner.jpg'; 

const Banner = () => (
  <section
    id="home"
    className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-5 mt-[60px] transition-colors duration-300"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-40 dark:bg-opacity-60 transition-opacity duration-300" />
    <div className="relative z-10 text-center text-white">
      <h1 className="text-4xl md:text-6xl mb-5">Welcome to ResumeRevamp</h1>
      <p className="text-lg md:text-2xl">Your gateway to professional resume services.</p>
    </div>
  </section>
);

export default Banner;
