
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ABOUT */}
        <div className="footer-about">

          <div className="footer-logo">
            <span>🍴</span>
            <h2>Urban Plate</h2>
          </div>

          <p>
            Fresh ingredients, unforgettable flavors and
            beautifully prepared meals made for every occasion.
          </p>

          <div className="social-icons">
            <a href="#">f</a>
            <a href="#">◎</a>
            <a href="#">𝕏</a>
            <a href="#">♪</a>
          </div>

        </div>


        {/* LINKS */}
        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/menu">Menu</a>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/order">Order Now</a>

        </div>


        {/* HOURS */}
        <div className="footer-links">

          <h3>Opening Hours</h3>

          <p>Monday - Friday</p>
          <span>8:00 AM - 10:00 PM</span>

          <p>Saturday - Sunday</p>
          <span>9:00 AM - 11:00 PM</span>

        </div>


        {/* CONTACT */}
        <div className="footer-contact">

          <h3>Contact Us</h3>

          <p>📍 Nairobi, Kenya</p>
          <p>📞 +254 700 000 000</p>
          <p>✉️ info@urbanplate.com</p>

        </div>

      </div>


      {/* COPYRIGHT */}
      <div className="footer-bottom">

        <p>
          © 2026 Urban Plate. All Rights Reserved.
        </p>

        <p>
          Made with ❤️ for food lovers.
        </p>

      </div>

    </footer>
  );
}

export default Footer;

