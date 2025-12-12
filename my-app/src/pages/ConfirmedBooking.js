import React from 'react';

function ConfirmedBooking() {
  return (
    <div className="booking-page">
      <div className="booking-header" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
        <h1>Booking Confirmed!</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
          Your reservation has been successfully confirmed.
        </p>
        <p style={{ fontSize: '1rem', color: '#495E57', marginTop: '1rem' }}>
          We look forward to serving you at Little Lemon!
        </p>
        <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '2rem' }}>
          You will receive a confirmation email shortly with all the details.
        </p>
        <a href="/" className="btn" style={{ marginTop: '2rem', textDecoration: 'none' }}>
          Return to Homepage
        </a>
      </div>
    </div>
  );
}

export default ConfirmedBooking;