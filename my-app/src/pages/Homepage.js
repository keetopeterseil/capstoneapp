import React from 'react';
import Hero from '../components/Hero';
import Specials from '../components/Specials';
import CustomersSay from '../components/CustomersSay';
import Chicago from '../components/Chicago';

function Homepage() {
  return (
    <>
      <Hero />
      <Specials />
      <CustomersSay />
      <Chicago />
    </>
  );
}

export default Homepage;