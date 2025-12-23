import React from 'react';
import Hero from '../components/Hero';
import Showcase from '../components/Showcase';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Showcase />
      <Services />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
