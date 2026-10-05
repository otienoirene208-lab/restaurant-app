
import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span>WELCOME TO URBAN PLATE</span>
          <h1>Our Story</h1>
          <p>
            Great food brings people together, creates memories,
            and makes every moment special.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="about-story">

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=80"
            alt="Delicious restaurant food"
          />

          <div className="experience-badge">
            <strong>10+</strong>
            <span>Years of<br />Passion</span>
          </div>
        </div>

        <div className="about-text">
          <span className="section-label">WHO WE ARE</span>

          <h2>Food Made With Passion</h2>

          <p>
            Urban Plate is more than just a restaurant. It is a place
            where delicious food, warm hospitality and beautiful moments
            come together.
          </p>

          <p>
            We carefully select fresh ingredients and prepare every meal
            with passion. From a quick lunch with friends to a special
            dinner with family, we want every visit to feel memorable.
          </p>

          <div className="about-features">

            <div className="about-feature">
              <span>🥗</span>
              <div>
                <h3>Fresh Ingredients</h3>
                <p>Fresh and carefully selected ingredients.</p>
              </div>
            </div>

            <div className="about-feature">
              <span>👨‍🍳</span>
              <div>
                <h3>Expert Chefs</h3>
                <p>Meals prepared with creativity and passion.</p>
              </div>
            </div>

            <div className="about-feature">
              <span>❤️</span>
              <div>
                <h3>Made With Love</h3>
                <p>Every plate is prepared with care.</p>
              </div>
            </div>

            <div className="about-feature">
              <span>✨</span>
              <div>
                <h3>Great Experience</h3>
                <p>Good food and unforgettable moments.</p>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* VALUES */}
      <section className="about-values">

        <div className="values-heading">
          <span>WHAT WE BELIEVE</span>
          <h2>Our Values</h2>
          <p>
            Everything we do is guided by our passion for food
            and our love for our customers.
          </p>
        </div>

        <div className="values-grid">

          <div className="value-card">
            <div className="value-icon">🍴</div>
            <h3>Quality Food</h3>
            <p>
              We believe great meals start with quality ingredients
              and careful preparation.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">❤️</div>
            <h3>Customer Love</h3>
            <p>
              Our customers are at the heart of everything we do.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">🌿</div>
            <h3>Freshness</h3>
            <p>
              We focus on fresh ingredients and delicious natural flavors.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">⭐</div>
            <h3>Excellence</h3>
            <p>
              We always strive to make every dining experience special.
            </p>
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="about-cta">

        <div className="about-cta-content">
          <span>COME AND EXPERIENCE IT</span>

          <h2>Good Food. Good Mood.</h2>

          <p>
            Come enjoy delicious meals, great service and
            unforgettable moments at Urban Plate.
          </p>

          <button
            onClick={() => window.scrollTo({
              top: 0,
              behavior: "smooth"
            })}
          >
            Explore Urban Plate 🍽️
          </button>
        </div>

      </section>

    </div>
  );
}

export default About;

