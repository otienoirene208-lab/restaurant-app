import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for contacting Urban Plate! 💗");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <div className="contact-hero-content">
          <span>GET IN TOUCH</span>

          <h1>Contact Us 💗</h1>

          <p>
            We'd love to hear from you. Have a question,
            suggestion, or special request? Talk to us.
          </p>
        </div>
      </section>


      <section className="contact-section">

        <div className="contact-info">

          <h2>Let's Talk</h2>

          <p className="contact-description">
            Our friendly Urban Plate team is always ready
            to help you with your questions and requests.
          </p>

          <div className="contact-box">
            <div className="contact-icon">📍</div>
            <div>
              <h3>Location</h3>
              <p>Nairobi, Kenya</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-icon">📞</div>
            <div>
              <h3>Phone</h3>
              <p>+254 700 000 000</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-icon">✉️</div>
            <div>
              <h3>Email</h3>
              <p>info@urbanplate.com</p>
            </div>
          </div>

          <div className="contact-box">
            <div className="contact-icon">🕐</div>
            <div>
              <h3>Opening Hours</h3>
              <p>Every day: 8:00 AM - 10:00 PM</p>
            </div>
          </div>

        </div>


        <div className="contact-form">

          <div className="form-title">
            <span>SEND A MESSAGE</span>
            <h2>We'd Love To Hear From You</h2>
          </div>

          <form onSubmit={handleSubmit}>

            <label>Your Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />


            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />


            <label>Your Message</label>

            <textarea
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />


            <button type="submit">
              Send Message 💗
            </button>

          </form>

        </div>

      </section>


      <section className="contact-bottom">

        <div className="contact-bottom-content">

          <div className="location-symbol">
            📍
          </div>

          <h2>Come Visit Urban Plate</h2>

          <p>
            Good food, beautiful moments and unforgettable
            flavors are waiting for you.
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Nairobi%2C%20Kenya"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Location on Map
          </a>

        </div>

      </section>

    </div>
  );
}

export default Contact;