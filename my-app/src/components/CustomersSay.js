import React from 'react';

function CustomersSay() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      id: 2,
      name: 'Michael Chen',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      rating: 4,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    {
      id: 4,
      name: 'David Thompson',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      text: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  const renderStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-heading">
      <h3 id="testimonials-heading">Testimonials</h3>
      <div className="testimonials-grid" role="list">
        {testimonials.map(testimonial => (
          <article 
            key={testimonial.id} 
            className="testimonial-card"
            role="listitem"
          >
            <div 
              className="rating" 
              aria-label={`Rating: ${testimonial.rating} out of 5 stars`}
              role="img"
            >
              {renderStars(testimonial.rating)}
            </div>
            <div className="testimonial-header">
              <img 
                src={testimonial.image} 
                alt={`${testimonial.name} profile`}
                className="testimonial-image"
                loading="lazy"
              />
              <h4>{testimonial.name}</h4>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;