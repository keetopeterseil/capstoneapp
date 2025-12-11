import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional 
          recipes served with a modern twist.
        </p>
        <button className="btn">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img 
          src="https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=400&fit=crop" 
          alt="Mediterranean food platter" 
        />
      </div>
    </section>
  );
}

export default Hero;