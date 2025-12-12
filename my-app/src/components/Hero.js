import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional 
          recipes served with a modern twist.
        </p>
        <Link 
          to="/reservations" 
          className="btn"
          aria-label="Reserve a table at Little Lemon"
        >
          Reserve a Table
        </Link>
      </div>
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop" 
          alt="Mediterranean food platter with fresh ingredients" 
        />
      </div>
    </section>
  );
}

export default Hero;