import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section">
          <h3>Little Lemon</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>123 Citrus Lane</p>
          <p>Chicago, IL 60601</p>
          <p>Phone: (312) 555-0100</p>
        </div>
        <div className="footer-section">
          <h3>Hours</h3>
          <p>Mon-Fri: 11am - 10pm</p>
          <p>Sat-Sun: 10am - 11pm</p>
        </div>
      </div>
      <p className="copyright">&copy; 2024 Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;