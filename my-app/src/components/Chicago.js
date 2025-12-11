import React from 'react';

function Chicago() {
  return (
    <section className="chicago-section">
      <div className="chicago-content">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
          eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
          in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="chicago-images">
        <img 
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=500&fit=crop" 
          alt="Restaurant interior" 
          className="chicago-img-1"
        />
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=500&fit=crop" 
          alt="Chefs cooking" 
          className="chicago-img-2"
        />
      </div>
    </section>
  );
}

export default Chicago;