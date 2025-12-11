import React from 'react';

function Specials() {
  const specialsData = [
    {
      id: 1,
      name: 'Greek salad',
      price: '$12.99',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Bruchetta',
      price: '$5.99',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Lemon Dessert',
      price: '$5.00',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop'
    }
  ];

  return (
    <section className="specials-section">
      <div className="specials-header">
        <h3>This weeks specials!</h3>
        <button className="btn">Online Menu</button>
      </div>
      
      <div className="specials-grid">
        {specialsData.map(special => (
          <article key={special.id} className="card">
            <div className="card-image">
              <img src={special.image} alt={special.name} />
            </div>
            <div className="card-content">
              <div className="card-header">
                <h4>{special.name}</h4>
                <span className="card-price">{special.price}</span>
              </div>
              <p className="card-description">{special.description}</p>
              <div className="card-delivery">
                <span>Order a delivery 🛵</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Specials;