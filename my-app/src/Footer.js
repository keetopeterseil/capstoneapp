import React from 'react';

function Footer() {
  return (
    <footer role="contentinfo" aria-label="Site footer">
      <div className="footer-content">
        <section className="footer-section" aria-labelledby="footer-about">
          <h3 id="footer-about">Little Lemon</h3>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        </section>
        <section className="footer-section" aria-labelledby="footer-contact">
          <h3 id="footer-contact">Contact</h3>
          <address>
            <p>123 Citrus Lane</p>
            <p>Chicago, IL 60601</p>
            <p>Phone: <a href="tel:+13125550100" aria-label="Call us at 312-555-0100">(312) 555-0100</a></p>
          </address>
        </section>
        <section className="footer-section" aria-labelledby="footer-hours">
          <h3 id="footer-hours">Hours</h3>
          <p>Mon-Fri: 11am - 10pm</p>
          <p>Sat-Sun: 10am - 11pm</p>
        </section>
      </div>
      <p className="copyright">&copy; 2024 Little Lemon. All rights reserved.</p>
    </footer>
  );
}

export default Footer;