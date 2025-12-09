import React from 'react';

function Main() {
  return (
    <main>
      {/* Hero Section */}
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

      {/* Specials Section */}
      <section className="specials-section">
        <div className="specials-header">
          <h3>This weeks specials!</h3>
          <button className="btn">Online Menu</button>
        </div>
        
        <div className="specials-grid">
          {/* Greek Salad Card */}
          <article className="card">
            <div className="card-image">
              <img 
                src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop" 
                alt="Greek salad" 
              />
            </div>
            <div className="card-content">
              <div className="card-header">
                <h4>Greek salad</h4>
                <span className="card-price">$12.99</span>
              </div>
              <p className="card-description">
                The famous greek salad of crispy lettuce, peppers, olives and our 
                Chicago style feta cheese, garnished with crunchy garlic and rosemary 
                croutons.
              </p>
              <div className="card-delivery">
                <span>Order a delivery 🛵</span>
              </div>
            </div>
          </article>

          {/* Bruchetta Card */}
          <article className="card">
            <div className="card-image">
              <img 
                src="https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop" 
                alt="Bruchetta" 
              />
            </div>
            <div className="card-content">
              <div className="card-header">
                <h4>Bruchetta</h4>
                <span className="card-price">$5.99</span>
              </div>
              <p className="card-description">
                Our Bruschetta is made from grilled bread that has been smeared with 
                garlic and seasoned with salt and olive oil.
              </p>
              <div className="card-delivery">
                <span>Order a delivery 🛵</span>
              </div>
            </div>
          </article>

          {/* Lemon Dessert Card */}
          <article className="card">
            <div className="card-image">
              <img 
                src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop" 
                alt="Lemon Dessert" 
              />
            </div>
            <div className="card-content">
              <div className="card-header">
                <h4>Lemon Dessert</h4>
                <span className="card-price">$5.00</span>
              </div>
              <p className="card-description">
                This comes straight from grandma's recipe book, every last ingredient 
                has been sourced and is as authentic as can be imagined.
              </p>
              <div className="card-delivery">
                <span>Order a delivery 🛵</span>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Main;