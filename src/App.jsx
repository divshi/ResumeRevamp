// App.jsx
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './styles.css';

const App = () => (
  <div className="App">
    <Header />
    <Banner />
    <Services />
    <AboutUs />
    <Testimonials />
    <ContactUs />
    <Footer />
  </div>
);

export default App;
